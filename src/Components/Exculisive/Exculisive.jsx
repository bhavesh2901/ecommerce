import React from 'react'
import './Exclulisive.css';
import StarRating from '../Starrating/Starrating';
import Wishlist from '../../Components/Wishlist/Wishlist';
import { Link } from 'react-router-dom';
import Addcart from '../Addcart/Addcart';
const Exculisive = ({ product }) => {
  return (
    <>
    <div className="Exculisivewrapper">
      <div className="box">
        <div className="main-container">
          <div className="left-cl">
            <div className="button-back" href="#carouselExampleIndicators" role="button" data-bs-slide="prev"><span><svg width="26px" height="26px" viewBox="63 67 26 26" version="1.1" >
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(64.400240, 68.400000)" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11.4176,0 C5.1104,0 0,5.1152 0,11.4216 C0,17.7304 5.1104,22.8392 11.4176,22.8392 C17.724,22.8392 22.8384,17.7304 22.8384,11.4216 C22.8384,5.1152 17.724,0 11.4176,0 L11.4176,0 Z" id="Stroke-1" stroke="#FFFFFF"></path>
                    <polyline id="Stroke-3" stroke="#FFFFFF" points="10.46576 16.58848 5.67376 11.79648 10.46576 7.00448"></polyline>
                    <path d="M17.26984,11.79656 L5.67384,11.79656" id="Stroke-5" stroke="#FFFFFF"></path>
                </g>
            </svg></span></div>
            <div className="diagonal"></div>
            <img src={product.Url_slug}/>
          </div>
          <div className="right-cl">
          <div className='float-end'><Wishlist Product_id={product.id}/></div>
            <h1>  <Link to={`/Detail/`+product.id}><div className='text-secondary'>{product.Product_name}</div></Link></h1>
            <h3>{product.Price+" ₹"}</h3>
            <div className="color-pick">
              <StarRating rating={product.average_rating} fontsize={'25px'}  />
            </div>
            <h4>Description</h4>
            <p>{product.Description}</p>
            <button className="basket d-flex" style={{ alignItems :'center'}}><div style={{marginLeft:'-40px'}}><Addcart Product_id={product.id} Quantity={1} fonts={'20px'}/></div><div className='mx-2'>Add to Basket</div></button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Exculisive
