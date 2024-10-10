import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './Categoryall.css'

const Categoryall = () => {
  let [allcategory , setAllcategory] = useState([]);
  const sliderRef = useRef(null); // Create a reference for the slider

  const settings = {
    dots: false, // Disable dots for navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 slides at once (customize as per your need)
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide default next/prev buttons
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

  // Handlers for moving the slider
  const goNext = () => {
    sliderRef.current.slickNext(); // Slide to the next item
  };

  const goPrev = () => {
    sliderRef.current.slickPrev(); // Slide to the previous item
  };

  return (
    <>
      <h5 className='mx-5 mt-5'>FEATURED CATEGORIES</h5>
      <div className="product-slider mx-5 mt-3 slider-wrapper" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
        {/* Slider buttons */}
        <button onClick={goPrev} className="slider-button prev prev-button btn"><i class="fa-solid fa-angle-left fs-4"></i></button>
        <Slider {...settings} ref={sliderRef}>
          {allcategory.map((product) => (
            <Link to={'/' + product.category_name} key={product.id}>
              <div className="productImage slide zoom-effect active" style={{ padding: '4px', width: '175px !important' }}>
                <img className='rounded-circle' width='200' height='200' src={product.url_slug} alt={product.category_name} />
              </div>
            </Link>
          ))}
        </Slider>
        <button onClick={goNext} className="slider-button next next-button btn"><i class="fa-solid fa-chevron-right fs-4"></i></button>
      </div>
    </>
  );
}

export default Categoryall;
