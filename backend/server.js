
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const crypto = require('crypto');  // Import crypto module to generate random tokens

const app = express();
const port = 3000;
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const dir = path.resolve(__dirname, '..', 'public', 'Assets', 'userProfile');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Configure multer for storage and filename handling
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, dir); // Use the absolute path for the destination
  },
  filename: (req, file, cb) => {
    const newFilename = `${req.params.userid}.jpg`; // Save as JPG format
    cb(null, newFilename); // Save the file with the new filename
  },
});

const upload = multer({ storage }); 
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ecommerce'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Function to generate a random token
const generateRandomToken = () => {
  return crypto.randomBytes(32).toString('hex');  // Generate 32-byte random token
};

// Login endpoint with token generation
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  
  // SQL query to select the user
  const query = 'SELECT * FROM users WHERE email = ? AND password = ? AND Status = "active"';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Error during login:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length > 0) {
      const user = results[0]; // Get user data

      // Generate a random token
      const token = generateRandomToken();

      // Save the token in the database for the user
      const updateTokenQuery = 'UPDATE users SET token = ? WHERE id = ?';
      db.query(updateTokenQuery, [token, user.id], (err, updateResult) => {
        if (err) {
          console.error('Error updating token in database:', err);
          return res.status(500).json({ error: 'Error updating token' });
        }

        // Send token and user information back to the client
        return res.json({
          message: 'Login successful',
          user,
          token
        });
      });
    } else {
      // No user found, return failure response
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  });
});


app.get('/api/AllProducts', (req, res) => {
  const query = 'SELECT p.*, AVG(r.rating) AS average_rating, COUNT(r.rating) AS review_count FROM products p LEFT JOIN product_ratings r ON r.product_id = p.id GROUP BY p.id';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});
  
app.get('/api/Allcategory', (req, res) => {
  const query = 'SELECT * FROM categories where status="active"';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});

app.get('/api/countWithCategory',(req,res)=>{
  const query ="SELECT c.*, COUNT(p.category_id) AS TotalProduct FROM categories c JOIN products p ON c.id = p.category_id GROUP BY c.id;";
  db.query(query, (err,results)=>{
    if(err)
    {
      console.error('error fetching data:',err);
      res.status(500).send('server error');
      return
    }
    res.json(results);
  });
})

app.get('/api/productscat', (req, res) => {
  const query = ' SELECT c.*, p.* FROM categories c JOIN products p ON c.id = p.category_id';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      res.status(500).send('Server error');
      return;
    }
    res.json(results);
  });
});
app.get('/api/product/:detailId', (req, res) => {
  const categorynames = req.params.detailId; // Split the string into an array

  console.log('Category Names:', categorynames); // Log the category names
  
  const query = `
    SELECT 
      p.*, c.category_name ,AVG(r.rating) AS average_rating , COUNT(r.rating) AS review_count
  FROM 
      products p
  JOIN 
      categories c ON c.id = p.category_id
  JOIN 
      product_ratings r ON r.product_id = p.id
  WHERE 
      p.id = ?;
  `;

  db.query(query, [categorynames], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});

app.get('/api/productscatMulti/:categoarys', (req, res) => {
  const categorynames = req.params.categoarys.split(','); // Split the string into an array

  console.log('Category Names:', categorynames); // Log the category names
  
  const query = `
    SELECT 
    c.*, 
    p.*, 
    AVG(r.rating) AS average_rating,
    COUNT(r.rating) AS review_count
FROM 
    categories c
JOIN 
    products p ON c.id = p.category_id
LEFT JOIN 
    product_ratings r ON r.product_id = p.id
WHERE 
    c.category_name IN (?)
GROUP BY 
    c.id, p.id;

  `;

  db.query(query, [categorynames], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});


app.get('/api/wishlist/status/:userID/:Product_id', (req, res) => {
  const categorynames = req.params.Product_id;
  const userID = req.params.userID;
  
  const query = `
    SELECT 
      Status
    FROM 
      wishlist 
    WHERE 
      Product_id = ? AND User_id = ?;
  `;

  db.query(query, [categorynames , userID], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});


app.get('/api/Cart/status/:userID/:Product_id', (req, res) => {
  const categorynames = req.params.Product_id;
  const userID = req.params.userID;
  
  const query = `
    SELECT 
      Status
    FROM 
      carts 
    WHERE 
      Product_id = ? AND User_id = ?;
  `;

  db.query(query, [categorynames , userID], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});


app.post('/api/wishlist/add', (req, res) => {
  const { UserID, Product_id, Status } = req.body;
  const query = 'INSERT INTO wishlist (User_id, Product_id, Status) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE Status = ?';
  db.query(query, [UserID, Product_id, Status, Status], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product added to wishlist' });
  });
});

app.post('/api/cart/add', (req, res) => {
  const { UserID, Product_id, Quantity ,Status } = req.body;
  const query = 'INSERT INTO carts (User_id, Product_id, Quantity ,Status) VALUES (?, ?, ? ,?) ON DUPLICATE KEY UPDATE Status = ?';
  db.query(query, [UserID, Product_id, Quantity ,Status , Status], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product added to Cart' });
  });
});


// Remove product from wishlist
app.post('/api/wishlist/remove', (req, res) => {
  const { Product_id , UserID } = req.body;
  const query = 'DELETE FROM wishlist WHERE Product_id = ? AND User_id = ?';
  db.query(query, [Product_id , UserID], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product removed from wishlist' });
  });
});

// Remove product from cart
app.post('/api/cart/remove', (req, res) => {
  const { Product_id , UserID } = req.body;
  const query = 'DELETE FROM carts WHERE Product_id = ? AND User_id = ?';
  db.query(query, [Product_id , UserID], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product removed from Cart' });
  });
});


app.get('/api/watchListProduct/:userid', (req, res) => {
  const userid = req.params.userid;// Split the string into an array
  const query = `
    SELECT 
      p.*
  FROM 
       wishlist w
  JOIN 
      products p ON  p.id =  w.Product_id
  WHERE 
      w.User_id = ?;
  `;

  db.query(query, [userid], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});


app.get('/api/CartProduct/:userid', (req, res) => {
  const userid = req.params.userid;// Split the string into an array
  const query = `
    SELECT 
      p.* , c.Quantity
  FROM 
       carts c
  JOIN 
      products p ON  p.id =  c.Product_id
  WHERE 
      c.User_id = ?;
  `;

  db.query(query, [userid], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});

app.post('/api/rate-product', async (req, res) => {
  const { product_id, user_id, rating , reviewtext } = req.body;
  const createdAt = new Date();

  try {
    // Check if the user has already rated this product
    const existingRating = await db.query('SELECT * FROM product_ratings WHERE product_id = ? AND user_id = ?', [product_id, user_id]);

    if (existingRating.length > 0) {
      // Update existing rating
      await db.query('UPDATE product_ratings SET rating = ?, created_at = ? WHERE product_id = ? AND user_id = ?', [rating, createdAt, product_id, user_id , reviewtext]);
    } else {
      // Insert new rating
      await db.query('INSERT INTO product_ratings (product_id, user_id, rating, created_at ,review) VALUES (?, ?, ?, ? ,?)', [product_id, user_id, rating, createdAt , reviewtext]);
    }

    res.status(200).json({ message: 'Rating saved successfully!' });
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).json({ message: 'Failed to save rating' });
  }
});

app.get('/api/reviews/:Product_id', (req, res) => {
  const categorynames = req.params.Product_id;// Split the string into an array
  const query = `
 SELECT 
    r.*, 
    u.Fullname, 
    u.Email, 
    u.profile_image 
FROM 
    product_ratings r
JOIN 
    users u ON  r.user_id   = u.id
WHERE 
    r.product_id = ?;
  `;

  db.query(query, [categorynames], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});

app.post('/api/signup/add', (req, res) => {
  const { Role_id, phone, name, signupemail, signuppassword, Status } = req.body;

  // First, check if the email or phone number already exists in the database
  const checkQuery = 'SELECT * FROM users WHERE Email = ? OR Phone_number = ?';
  db.query(checkQuery, [signupemail, phone], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (result.length > 0) {
      // If a user is found with the same email or phone number
      return res.status(409).json({ message: 'User already exists' });
    } else {
      // If no user is found, proceed with the insertion
      const insertQuery = 'INSERT INTO users (Role_id, Phone_number, Fullname, Email, Password, Status) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(insertQuery, [Role_id, phone, name, signupemail, signuppassword, Status], (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ message: 'You are now registered' });
      });
    }
  });
});


app.get('/api/protected-route', (req, res) => {
  // Get the token from the Authorization header
  const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
  
  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  // Query the database to find a user with the matching token
  const query = 'SELECT * FROM users WHERE token = ?';
  db.query(query, [token], (err, results) => {
    if (err) {
      console.error('Error fetching user with token:', err);
      return res.status(500).json({ error: 'Server error' });
    }

    if (results.length > 0) {
      // Token is valid, return user info
      const user = results[0];
      return res.json({
        message: 'Access granted',
        user
      });
    } else {
      // Invalid token
      return res.status(403).json({ error: 'Access denied: Invalid token' });
    }
  });
});

app.post('/api/upload/:userid', upload.single('image'), (req, res) => {
  const { userid } = req.params; // Extract userid from params
  const image = req.file;

  if (!image) {
    return res.status(400).json({ message: 'No image uploaded' });
  }

  const imagePath = path.join('Assets/userProfile', `${userid}.jpg`); // Path to be stored in the database

  // Save the image path in the database
  const query = 'UPDATE users SET profile_image = ? WHERE id = ?';
  db.query(query, [imagePath, userid], (err, result) => {
    if (err) {
      console.error('Error updating image path:', err);
      return res.status(500).json({ message: 'Database update failed' });
    }
    res.json({ message: 'Image uploaded successfully', imagePath });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
