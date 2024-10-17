const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3000;

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


app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ? AND password = ? AND Status ="active"';
    db.query(query, [email, password], (err, results) => {
      if (err) {
        console.error('Error during login:', err);
        res.status(500).json({ error: 'Server error' });
        return;
      }
      if (results.length > 0) {
        // User found, return success response
        res.json({ message: 'Login successful', user: results });
      } else {
        // No user found, return failure response
        res.status(401).json({ error: 'Invalid credentials' });
      }
    });
});

app.get('/api/AllProducts', (req, res) => {
  const query = 'SELECT * FROM products';
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
      p.*, c.category_name
  FROM 
      products p
  JOIN 
      categories c ON c.id = p.category_id
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
      c.*, p.*  
    FROM 
      categories c
    JOIN 
      products p ON c.id = p.category_id
    WHERE 
      c.category_name IN (?);
  `;

  db.query(query, [categorynames], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});


app.get('/api/wishlist/status/:Product_id', (req, res) => {
  const categorynames = req.params.Product_id;// Split the string into an array

  console.log('Category Names:', categorynames); // Log the category names
  
  const query = `
    SELECT 
      Status
    FROM 
      wishlist 
    WHERE 
      Product_id = ?;
  `;

  db.query(query, [categorynames], (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Server error'); // Properly handle the error response
    }
    res.json(results); // Send the results as JSON
  });
});



app.post('/api/wishlist/add', (req, res) => {
  const { Product_id, Status } = req.body;
  const query = 'INSERT INTO wishlist (Product_id, Status) VALUES (?, ?) ON DUPLICATE KEY UPDATE Status = ?';
  db.query(query, [Product_id, Status, Status], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product added to wishlist' });
  });
});

// Remove product from wishlist
app.post('/api/wishlist/remove', (req, res) => {
  const { Product_id } = req.body;
  const query = 'DELETE FROM wishlist WHERE Product_id = ?';
  db.query(query, [Product_id], (err, result) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Product removed from wishlist' });
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
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
