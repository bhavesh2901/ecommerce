import React, { useEffect, useRef, useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import OfferBanner from '../Assests/banner/img5.webp'
import OfferBanner2 from '../Assests/banner/img1.webp'
// import './Offers.css';
const Offers = () => {
    const settingsOffer = {
        dots: false, // Disable dots for navigation
        infinite: false, // Disable infinite scrolling
        speed: 500, // Transition speed
        slidesToShow: 1, // Show 3 slides at once (customize as per your need)
        slidesToScroll: 1, // Scroll one slide at a time
        arrows: true, // Show next/prev buttons
        autoplay: false // Disable autoplay
      };
  return (
    <>
        <h5 className='mx-5 mt-5'>OFFERS</h5>
        <div className="product-slider  mt-3" style={{ width: '100%', height: '100%', margin: '0 auto' }}>
            <Slider {...settingsOffer}>
                <div className="productImage" style={{ padding: '1px' ,  width: '175px !important' }}>
                     <img className=''   src={OfferBanner} style={{ width: '113rem'}} />
                </div>
                <div className="productImage" style={{ padding: '1px' ,  width: '175px !important' }}>
                     <img className=''   src={OfferBanner2}  style={{ width: '113rem'}} />
                </div>
            </Slider>
        </div>
    </>
  )
}

export default Offers
