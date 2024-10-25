import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Wishlist from '../Wishlist/Wishlist';
import StarRating from '../../Components/Starrating/Starrating';
import Addcart from '../Addcart/Addcart';
const Product = ({item}) => {
  return (
    <>
      <div className='col' id="ProductsArea">
          <figure className='position-relative shadow '>
          <div className='position-absolute translate-middle WhishlistDiv' ><Wishlist Product_id={item.id} /></div>
                <Link to={`/Detail/`+item.id}>
                    <img src={item.Url_slug}/>
                    <figcaption className="mb-4" style={{height: '42px'}}>{item.Product_name}</figcaption>
                </Link>
                <span className="mb-1 d-flex"><StarRating rating={item.average_rating} fontsize={'19px'} /> <div className='align-items-center d-flex' style={{fontSize : '12px'}}>({item.average_rating ? item.average_rating :0 })</div></span>
                <span className="price mt-5">₹ {item.Price} <div className='float-end'><Addcart Product_id ={item.id} Quantity={1} fonts={'20px'}/></div></span>
          </figure>
      </div>
    </>
  )
}

export default Product
