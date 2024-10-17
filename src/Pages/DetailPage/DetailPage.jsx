import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './DetailPage.css';
import RelatedProducts from '../../Components/RelatedProducts/RelatedProducts';
import Wishlist from '../../Components/Wishlist/Wishlist';
const DetailPage = () => {
  const { detailId } = useParams();
  const [product , setProduct] = useState();
    const fetchProducts = async (id) => {
      try {
        // Make API request based on selected categories
        const response = await axios.get(`http://localhost:3000/api/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    useEffect(() => {
        // Fetch data based on the product ID when the component mounts or ID changes
        fetchProducts(detailId);
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
                            <div className="theme-text mr-2">Product Ratings: </div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div>&#9733;</div>
                            <div className="ml-2">(4.5) 50 Reviews</div>
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
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" data-bs-toggle="tab" href="#menu2">Specifications</a>
                    </li>
                </ul>
                <div className="tab-content mt-4 mb-3">
                    <div className="tab-pane container active" id="home">
                        <div className="description">
                        { product[0].Description}
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu1">
                        <div className="review">
                            <p>PUT REVIEWS DESIGN HERE</p>
                        </div>
                    </div>
                    <div className="tab-pane container fade" id="menu2">
                        <div className="specification">
                            <p>PUT SPECIFICATIONS HERE</p>
                        </div>
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
