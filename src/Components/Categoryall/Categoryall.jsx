import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Categoryall = () => {
  let [allcategory , setAllcategory] = useState([]);
  const settings = {
    dots: false, // Disable dots for navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 3 slides at once (customize as per your need)
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show next/prev buttons
    autoplay: false // Disable autoplay
  };
  
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
    <>
    <h5 className='mx-5 mt-5'>Category</h5>
     <div className="product-slider mx-5 mt-3" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
      <Slider {...settings}>
        {allcategory.map(product => (
          <Link to={'/'+product.category_name}>
            <div key={product.id} className="productImage" style={{ padding: '4px' ,  width: '175px !important' }}>
              <img className='rounded-circle' width='200' height='200' src={product.url_slug} alt={product.category_name}  />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
    </>
  )
}

export default Categoryall
