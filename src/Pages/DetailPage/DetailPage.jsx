import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import Wishlist from '../../Components/Wishlist/Wishlist';
import StarRating from '../../Components/Starrating/Starrating';
import reviews from '../../Components/Assests/reviews.avif';
import Reviewslist from '../../Components/Reviewslist/Reviewslist';
import Giverating from '../../Components/Giverating/Giverating';

const DetailPage = () => {
  const { detailId } = useParams();
  const [product , setProduct] = useState([]);
  const [Reviews , setReviews] = useState([]);

    const fetchProducts = async () => {
      try {
        // Make API request based on selected categories
        const response = await axios.get(`http://localhost:3000/api/product/${detailId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

  
    const fetchreviews = async () => {
        try {
        // Make API request based on selected categories
        const response = await axios.get(`http://localhost:3000/api/reviews/${detailId}`);
        setReviews(response.data);
        console.log(response);
        } catch (error) {
        console.error('Error fetching products:', error);
        }
    };
        
    useEffect(() => {
        fetchreviews();
    }, [detailId]);

    useEffect(() => {
        // Fetch data based on the product ID when the component mounts or ID changes
        fetchProducts();
    }, [detailId]);

  return (
    <>
    {
         product && product.length > 0 && (
        <div className="container my-5">
            <div className="row details-snippet1">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-2 mini-preview">
                            {/* <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/40/model-858754_960_720.jpg" alt="Preview"/>
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/38/model-858749_960_720.jpg" alt="Preview"/>
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/39/model-858751_960_720.jpg" alt="Preview"/>
                            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2015/07/24/18/37/model-858748_960_720.jpg" alt="Preview"/> */}
                        </div>
                        <div className="col-md-10">
                            <div className="product-image">
                                <img className="img-fluid" src={product[0].Url_slug} alt="Main Image"/>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="col-md-5">
                    <div className="category"><span className="theme-text">Category: </span>{ product[0].category_name.toUpperCase()}   <div className='float-end'><Wishlist Product_id={product[0].id}/></div></div>
                    <div className="title">{product[0].Product_name}</div>
                    <div className="ratings my-2">
                        <div className="stars d-flex">
                            <div className="theme-text mr-2 mx-2">Product Ratings: </div>
                            <StarRating rating={product[0].average_rating} fontsize={'17px'}  />
                            <div className="ml-2 mx-2"> ({product[0].average_rating ? product[0].average_rating :0 })  ({product[0].review_count}) Reviews</div>
                        </div>
                    </div>
                    <div className="price my-2">{ product[0].Price+"₹ "} <strike className="original-price">  120.00₹ </strike></div>
                    <div className="theme-text subtitle">Brief Description:</div>
                    <div className="brief-description">
                    { product[0].Description}
                    </div>
                    <div>
                        <div className="subtitle my-3 theme-text">Colors:</div>
                        <div className="select-colors d-flex">
                            <div className="color red"></div>
                            <div className="color silver"></div>
                            <div className="color black"></div>
                        </div>
                    </div>

                    <hr/>
                    <div className="row">
                        <div className="col-md-3">
                            <input type="number" className="form-control" value="1"/>
                        </div>
                        <div className="col-md-9"><button className="btn addBtn btn-block">Add to basket</button></div>
                    </div>

                </div>
            </div>

            <div className="additional-details my-5 text-center">
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-tabs">
                        <a className="nav-link active" data-toggle="tab" data-bs-toggle="tab" href="#home">Description</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#menu1">Reviews</a>
                    </li>
                </ul>
                <div className="tab-content mt-4 mb-3">
                    <div className="tab-pane container active" id="home">
                        <div className="description">
                        { product[0].Description}
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu1">
                    <div onClick={() => { fetchProducts(); fetchreviews(); } } > <Giverating productId={detailId}  userId={1} fetchProducts={fetchProducts}  fetchreviews={fetchreviews} /></div>
                        {/* <section id="testimonials mx-2 shadow">
                            <div className="testimonial-box-container">
                                <div className="testimonial-box p-3">
                                    <div className="box-top">
                                        <div className="profile">
                                            <div className="profile-img">
                                                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                                            </div>
                                            <div className="name-user">
                                                <strong>Liam mendes</strong>
                                            </div>
                                        </div>
                                        <div className="reviews">
                                            <div onClick={() => { fetchProducts(); fetchreviews(); } } > <Giverating productId={detailId}  userId={1} reviewtext={reviewtext} /></div>
                                        </div>
                                    </div>
                                    <div className="client-comment" style={{textAlign: 'left'}}>
                                        <div className='row mb-2'>
                                            <div className='col-lg-11'><input onChange={e=>setReviewtext(e.target.value)} className='form-control shadow reviewinput' placeholder='Write reviews..'/></div>
                                            <div className='col-lg-1'><button  className='btn btn-primary float-end'>send</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section> */}
                      
                        {Reviews.length !== 0 ? (
                                <div className="review overflow-auto" style={{ height: '337px' }}>
                                    {Reviews.map((item, index) => (
                                        <Reviewslist key={index} item={item} />
                                    ))}
                                </div>
                            ) : (
                                <div className="row border border-2">
                                    {/* <div className="col-3">
                                        <img src={reviews} height="200" width="271" alt="No reviews" />
                                    </div>
                                    <div className="col-9 align-items-center text-start fs-4 bg-light bg-gradient text-dark bold mt-5 typewriter">
                                        WRITE YOUR REVIEW - NO REVIEW YET
                                    </div> */}
                                </div>
                            )}

                     
                    </div>
                </div>
            </div>
            <div className="related-products details-snippet1">
                <div className="related-heading theme-text">Related Products</div>
                <div className="row">
                    <RelatedProducts categoryArray={product[0].category_name}/>
                        {/* <div className="col-md-3">
                            <div className="related-product">
                                <img className="img-fluid" src="https://source.unsplash.com/gsKdPcIyeGg" alt="Related Product"/>
                            </div>
                            <div className="related-title">Lovely Black Dress</div>
                            <div className="d-flex">
                                <div className="related-price mr-auto">$100.00</div>
                                <div className="stars d-flex">
                                    <div>&#9733;</div>
                                    <div>&#9733;</div>
                                    <div>&#9733;</div>
                                    <div>&#9733;</div>
                                    <div>&#9733;</div>
                                </div>
                            </div>
                        </div> */}
                </div>
            </div>
        </div>
    )
}
    </>
  )
}

export default DetailPage
