import React, { useEffect, useRef, useState } from 'react';
import Footer from "./Components/Footer/Footer";
import Landpage from "./Components/Landpage/Landpage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter ,Route , Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Product from "./Components/Product/Product";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Profile from "./Components/Profile/Profile";

function App() {
  let [allcategory , setAllcategory] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Allcategory');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAllcategory(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchCategory();
  }, []);
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
              <Route path="/" element={<Landpage/>}/>
              {allcategory.map(product => (
                (
                  <Route path={'/'+product.category_name} element={<Products category={product.category_name}/>}/>
                )
              ))}
              {/* <Route path="/mens" element={<Products category="mens"/>}/>
              <Route path="/womens" element={<Products category="womens"/>}/>
              <Route path="/kids" element={<Products category="kids"/>}/> */}
              <Route path="/LoginSignup" element={<LoginSignup/>}/>
              <Route path="/product" element={<Product/>}>
                <Route path=":productID" element={<Product/>} />
              </Route>
              <Route path="/profile" element={<Profile/>}>
                <Route path=":profileID" element={<Profile/>} />
              </Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
