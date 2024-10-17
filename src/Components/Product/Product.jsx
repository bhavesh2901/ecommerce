import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import Wishlist from '../Wishlist/Wishlist';
const Product = ({item}) => {
  return (
    <>
      <div className='col' id="ProductsArea">
          <figure className='position-relative shadow '>
          <div className='position-absolute translate-middle WhishlistDiv' ><Wishlist Product_id={item.id} /></div>
            <Link to={`/Detail/`+item.id}>
                <img src={item.Url_slug}/>
                <figcaption className="mb-4">{item.Product_name}</figcaption>
                <span className="price mt-5">₹ {item.Price}</span>
            </Link>
          </figure>
      </div>
    </>
  )
}

export default Product
