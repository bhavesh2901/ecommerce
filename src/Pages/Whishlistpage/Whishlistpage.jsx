import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Wishlist from '../../Components/Wishlist/Wishlist';
import nodatafound from '../../Components/Assests/emptywishlist.jpg';
import { Link } from 'react-router-dom';
const Whishlistpage = () => {
    const [watchListPro , setWatchListPro ] = useState([]);
    const { userid } = useParams();
    const fetchWatchListProducts = async () => {
        try {
          // Make API request based on selected categories
          const response = await axios.get(`http://localhost:3000/api/watchListProduct/${userid}`);
          setWatchListPro(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
      // Fetch data when the component mounts
      useEffect(() => {
        fetchWatchListProducts();
      }, [userid]);
  return (
    <>
      <div className='page-content'>
        <div className='container'>
            <div className="row mb-3 mt-5">
                <div className="col-xl-12">
                    <div className="row align-items-center gy-3 mb-3">
                        <div className="col-sm">
                            <div>
                                <h5 className="fs-14 mb-0">Whishlist ({watchListPro.length} items)</h5>
                            </div>
                        </div>
                        <div className="col-sm-auto">
                            {/* <a href="apps-ecommerce-products.html" className="link-primary text-decoration-underline">Continue Shopping</a> */}
                        </div>
                    </div>

                    <div className='' >
                        {watchListPro.length !== 0 ? (
                            watchListPro.map((item, index) => (
                                <div className="card shadow  product mb-3 mx-2" key={index}>
                                    <div className="card-body p-0">
                                        <div className="row gy-3">
                                            <div className="col-sm-auto">
                                                <div className="avatar-lg bg-light rounded p-1 position-relative">
                                                    <div className='position-absolute topbar-badge fs-10 translate-middle'  onClick={fetchWatchListProducts}   style={{top: '22px' , left: '19px'}}>  <Wishlist Product_id={item.id} /></div>
                                                    <img src={item.Url_slug}  alt="" style={{height: '143px', borderRadius:'10px'}} className="img-fluid d-block" />
                                                </div>
                                            </div>
                                            <div className="col-sm p-2">
                                                <h6 className="fs-10 text-truncate">
                                                    <div href="ecommerce-product-detail.html" className="text-dark text-decoration-none pointer"><Link to={`/Detail/`+item.id}>{item.Product_name}</Link></div>
                                                </h6>
                                                <div>
                                                     {item.Description}
                                                </div>
                                                {/* <ul className="list-inline text-muted">
                                                    <li className="list-inline-item">Color : <span className="fw-medium">Pink</span></li>
                                                    <li className="list-inline-item">Size : <span className="fw-medium">M</span></li>
                                                </ul>
                                                <div className="input-step">
                                                    <button type="button" className="minus">–</button>
                                                    <input type="number" className="product-quantity" value="2" min="0" max="100" />
                                                    <button type="button" className="plus">+</button>
                                                </div> */}
                                            </div>
                                            <div className="col-sm-auto p-2  mx-3">
                                                <div className="text-lg-end">
                                                    <p className="text-muted mb-1">Item Price:</p>
                                                    <h5 className="fs-14">₹ <span id="ticket_price" className="product-price">{item.Price}</span></h5>
                                                    <button className='btn btn-success  btn-sm mt-5'><i className="fa-solid fa-cart-shopping"></i> Add</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- card body --> */}
                                    {/* <div className="p-2">
                                        <div className="row align-items-center gy-3">
                                            <div className="col-sm">
                                                <div className="d-flex flex-wrap my-n1">
                                                    <div><Wishlist  Product_id={item.id} /></div>
                                                </div>
                                            </div>
                                            <div className="col-sm-auto">
                                                <div className="d-flex align-items-center gap-2 text-muted">
                                                    <button className='btn btn-primary btn-sm '>Add Cart</button>
                                                    <div>Total :</div>
                                                    <h5 className="fs-14 mb-0">₹ <span className="product-line-price">{item.Price}</span></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <!-- end card footer --> */}
                                </div>
                            ))
                        ) : (
                            
                            <center><img src={nodatafound} alt="No data found" /></center>
                        )}
                    </div>
                 
                    {/* <!-- end card --> */}

                    {/* <div className="text-end mb-4">
                        <a href="apps-ecommerce-checkout.html" className="btn btn-success btn-label right ms-auto mt-2"><i className="ri-arrow-right-line label-icon align-bottom fs-16 ms-2"></i> Checkout</a>
                    </div> */}
                </div>
                {/* <!-- end col --> */}

            </div>
        </div>
      </div>
       
     
    </>
  )
}

export default Whishlistpage
