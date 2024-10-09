import React, { useEffect, useRef, useState } from 'react';
import './Landpage.css';
import Landingimag from '../Assests/landing2.png';
import Exculisive from '../Exculisive/Exculisive';
import Categoryall from '../Categoryall/Categoryall';

const Landpage = () => {
  const carouselRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (carouselRef.current) {
      const carousel = new window.bootstrap.Carousel(carouselRef.current, {
        interval: 2000, // Customize interval here
      });
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/AllProducts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="row mt-5">
        <div className='col-8'>
          <div id="columns" className="columns_5">
            <div className='row row-grid'>
              <div className='col-6'>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" ref={carouselRef}>
                  <ol className="carousel-indicators d-none">
                    {
                      products.map((_, index) => (
                        <li
                          key={index}
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to={index}
                          className={index === 0 ? "active" : ""}
                        ></li>
                      ))
                    }
                  </ol>
                  <div className="carousel-inner mt-2" style={{borderRadius :'10px'}}>
                    {
                      products.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                          <Exculisive product={item} /> {/* Pass product data to Exculisive */}
                        </div>
                      ))
                    }
                  </div>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
                    <Categoryall/>
            </div>
        </div>
        <div className='col-4'>
          <div className="home_img float-end">
            <img src={Landingimag} style={{ height: '835px' }} className="LandingpageImg" alt="Landing" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landpage;
