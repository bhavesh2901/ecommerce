import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from "./Components/Footer/Footer";
import Landpage from "./Components/Landpage/Landpage";
import Navbar from "./Components/Navbar/Navbar";
import axios from 'axios';
import Products from "./Pages/Products/Products";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import Profile from "./Components/Profile/Profile";
import DetailPage from './Pages/DetailPage/DetailPage';
import Whishlistpage from './Pages/Whishlistpage/Whishlistpage';
import Checkout from './Pages/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import { UserProvider , useUser} from './UserContext';
import Loader from './Components/Loader/Loader';
import Cart from './Pages/Cart/Cart';
import Helppage from './Pages/Helppage/Helppage';

function App() {
  const [chekditmes, setChekditems] = useState();
  const [allcategory, setAllcategory] = useState([]);

  return (
    <div>
      <div className='main-content'>
        <UserProvider>
          <UserConsumer setChekditems={setChekditems} setAllcategory={setAllcategory} />
        </UserProvider>
      </div>
    </div>
  );
}

// Component that uses the context
const UserConsumer = ({ setChekditems, setAllcategory }) => {
  const { setUser } = useUser();

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
  }, [setAllcategory]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          console.log('No token found');
          return; 
        }

        const response = await axios.get('http://localhost:3000/api/protected-route', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data.user);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchUserData();
  }, [setUser]);

  return (
    <BrowserRouter>

      <ConditionalNavbar />
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Routes>
        <Route exact path="/" element={<Landpage />} />
        <Route exact path="/Products/:categories" element={<Products setChekditems={setChekditems} />} />
        <Route exact path="/LoginSignup" element={<LoginSignup />} />
        <Route exact path="/checkout/:userID" element={<Checkout />} />
        <Route exact path="/Cart/:Userid" element={<Cart/>} />
        <Route exact path="/help" element={<Helppage/>} />
        <Route exact path="/Detail/:detailId" element={<DetailPage />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/wishlist/:userid" element={<Whishlistpage />} />
      </Routes>
      <ConditionalFooter />
    </BrowserRouter>
  );
};

// Conditional components for Navbar and Footer
const ConditionalNavbar = () => {
  const location = useLocation();
  if (location.pathname === '/LoginSignup' || location.pathname === '/checkout/:userID' ) {
    return null; // Do not render Navbar
  }
  return <Navbar />; // Render Navbar for all other paths
};

const ConditionalFooter = () => {
  const location = useLocation();
  if (location.pathname === '/LoginSignup' ||  location.pathname === '/checkout/:userID') {
    return null; // Do not render Footer
  }
  return <Footer />; // Render Footer for all other paths
};

export default App;
