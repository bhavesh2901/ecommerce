import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './RelatedProducts.css'
import axios from 'axios';
import Wishlist from '../Wishlist/Wishlist';
import StarRating from '../../Components/Starrating/Starrating';
import Product from '../Product/Product';

const RelatedProducts = ({categoryArray}) => {
    let [productbycategory , setProductbycategory] = useState([]);
     const sliderRef = useRef(null); // Create a reference for the slider
  const settings2 = {
    dots: false, // Disable dots for navigation
    infinite: false, // Disable infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 5, // Show 4 slides at once (customize as per your need)
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: false, // Hide default next/prev buttons
    autoplay: false // Disable autoplay
  };
  
    useEffect(() => {
    const fetchdataBycategory = async () => {
      try {
       // Make API request based on selected categories
       const response = await axios.get(`http://localhost:3000/api/productscatMulti/${categoryArray}`);
       setProductbycategory(response.data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchdataBycategory();
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
     <div className="RelatedProducts product-slider mx-5 mt-3 slider-wrapper" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
       {/* Slider buttons */}
        <button onClick={goPrev} className="slider-button prev prev-button btn"><i className="fa-solid fa-angle-left fs-4"></i></button>
       
        <Slider {...settings2} ref={sliderRef}>
         {productbycategory.map((dataValue ,index) => (
          <Product item={dataValue}/>
            //   <div className="card mb-3" key={index} style={{maxWidth: '540px'}}>     
            //     <div className="row g-0">
            //       <div className="col-md-4">
            //         <img src={dataValue.Url_slug} className="img-fluid rounded-start" alt="..."/>
            //      </div>
            //      <div className="col-md-8">
            //         <div className="card-body">
            //         <h5 className="card-title" style={{fontSize: '10px'}}> <Link  target="_blank" to={`/Detail/`+dataValue.id}  >{dataValue.Product_name}</Link> <div className='float-end' style={{position: 'absolute', top: '6px' ,left: '303px'}}><Wishlist Product_id={dataValue.id}/></div></h5>
            //          <p className="card-text"> <div className="stars d-flex">  <StarRating rating={dataValue.average_rating} fontsize={'16px'} /> </div></p>
            //           <p className="card-text"><small className="text-muted">{dataValue.Price+" ₹"}</small></p>
            //         </div>
            //       </div>
            //     </div>
            //    <div className='col-lg-12'><button className='btn btn-primary mt-2 w-100 bg-dark bg-gradient'><i className="fa-solid fa-cart-shopping"></i>  Buy Now</button></div>
            //  </div>
          ))}
        </Slider>
       <button onClick={goNext} className="slider-button next next-button btn"><i className="fa-solid fa-chevron-right fs-4"></i></button>
      </div>
    </>
  );
}

export default RelatedProducts;
