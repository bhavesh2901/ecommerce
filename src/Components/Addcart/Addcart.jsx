import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { UserProvider , useUser } from '../../UserContext';
const Addcart = ({Product_id , Quantity}) => {
    const [isIncart, setIsIncart] = useState('No');
    const { user } = useUser();
    const UserID = user ? user['id'] : null;
    // Function to fetch wishlist status for the product
      const fetchCartStatus = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/api/Cart/status/${UserID}/${Product_id}`);
          setIsIncart(response.data[0].Status); // Assuming the API returns { isInWishlist: true/false }
        } catch (error) {
          console.error('Error fetching Cart status:', error);
        }
      };
  
      // Fetch the wishlist status on component mount
    
      useEffect(() => {
        fetchCartStatus();
      }, [Product_id]);
     // Run the effect when the Product_id changes
  
    const toggleCart = async () => {
      if(user)
      {
        try {
          if (isIncart == 'Yes') {
            // API call to remove product from wishlist
            const response = await axios.post('http://localhost:3000/api/cart/remove', {
              UserID,Product_id , Status :'No' // Send the product ID to remove from wishlist
            });
            fetchCartStatus();
            if (response.status === 200) {
                setIsIncart(false); // Successfully removed, update state
            } else {
              console.error('Failed to remove product from Cart');
            }
          } else {
            // API call to add product to wishlist
            const response = await axios.post('http://localhost:3000/api/cart/add', {
              UserID , Product_id , Status :'Yes' ,Quantity 
            });
            fetchCartStatus();
            if (response.status === 200) {
                setIsIncart(true); // Successfully added, update state
            } else {
              console.error('Failed to add product to Cart');
            }
          }
        } catch (error) {
          console.error('Error while updating Cart:', error);
        }
      }
     
     
    };
  return (
    <>
    {
     user?
     (
       <i
          className={isIncart =='Yes' ? 'fa-solid fa-cart-shopping fs-5 text-success' : 'fa-solid fa-cart-shopping fs-5'}
          onClick={toggleCart}
          style={{ cursor: 'pointer' , display: 'flex', alignItems: 'center' }}
        ></i>
     )
     :
     (<div></div>)
     }
    </>
  )
}

export default Addcart
