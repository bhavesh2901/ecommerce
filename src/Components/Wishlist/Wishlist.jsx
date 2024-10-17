import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
const Wishlist = ({Product_id}) => {
  const [isInWishlist, setIsInWishlist] = useState('No');

  // Function to fetch wishlist status for the product
    const fetchWishlistStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/wishlist/status/${Product_id}`);
        setIsInWishlist(response.data[0].Status); // Assuming the API returns { isInWishlist: true/false }
      } catch (error) {
        console.error('Error fetching wishlist status:', error);
      }
    };

    // Fetch the wishlist status on component mount
  
    useEffect(() => {
      fetchWishlistStatus();
    }, [Product_id]);
   // Run the effect when the Product_id changes

  const toggleWishlist = async () => {
    try {
      if (isInWishlist == 'Yes') {
        // API call to remove product from wishlist
        const response = await axios.post('http://localhost:3000/api/wishlist/remove', {
           Product_id , Status :'No' // Send the product ID to remove from wishlist
        });
        fetchWishlistStatus();
        if (response.status === 200) {
          setIsInWishlist(false); // Successfully removed, update state
        } else {
          console.error('Failed to remove product from wishlist');
        }
      } else {
        // API call to add product to wishlist
        const response = await axios.post('http://localhost:3000/api/wishlist/add', {
          Product_id , Status :'Yes'
        });
        fetchWishlistStatus();
        if (response.status === 200) {
          setIsInWishlist(true); // Successfully added, update state
        } else {
          console.error('Failed to add product to wishlist');
        }
      }
    } catch (error) {
      console.error('Error while updating wishlist:', error);
    }
  };
  return (
    <>
      <i
        className={isInWishlist =='Yes' ? 'fa-solid fa-heart fs-5 text-danger' : 'fa-regular fa-heart fs-5'}
        onClick={toggleWishlist}
        style={{ cursor: 'pointer' }}
      ></i>
    </>
  );
};

export default Wishlist;