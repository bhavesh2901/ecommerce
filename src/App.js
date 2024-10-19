import React, { useEffect, useRef, useState } from 'react';
import Footer from "./Components/Footer/Footer";
import Landpage from "./Components/Landpage/Landpage";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter ,Route , Routes } from "react-router-dom";
import Products from "./Pages/Products/Products";
import Product from "./Components/Product/Product";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Profile from "./Components/Profile/Profile";
import DetailPage from './Pages/DetailPage/DetailPage';
import Whishlistpage from './Pages/Whishlistpage/Whishlistpage';
import Checkout from './Pages/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';

function App() {
  let [chekditmes,setChekditems] = useState();
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
      <div className='main-content'>
          <BrowserRouter>
              <Navbar/>
              <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light"  />
                <Routes>
                    <Route exact path="/" element={<Landpage/>}/>
                    <Route exact path="/Products/:categories" element={<Products setChekditems={setChekditems} />} />
                    {/* {
                      allcategory.map(product => (
                        (
                          <Route path={'/Products/'+product.category_name} element={<Products category={product.category_name} setChekditems={setChekditems}/>}/>
                        )
                      ))
                    }
                    */}
                    {/* <Route path="/mens" element={<Products category="mens"/>}/>
                    <Route path="/womens" element={<Products category="womens"/>}/>
                    <Route path="/kids" element={<Products category="kids"/>}/> */}
                    <Route exact path="/LoginSignup" element={<LoginSignup/>}/>
                    <Route exact path="/checkout" element={<Checkout/>}/>
                    <Route exact path="/Detail/:detailId" element={<DetailPage/>}/>
                    <Route exact path="/profile" element={<Profile/>}>
                      <Route exact path=":profileID" element={<Profile/>} />
                    </Route>
                    <Route exact path="/wishlist/:userid" element={<Whishlistpage/>}/>
                </Routes>
              <Footer/>
          </BrowserRouter>
      </div>
    
    </div>
  );
}

export default App;
