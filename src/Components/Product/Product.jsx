import React from 'react';
import './Product.css';
const Product = ({item}) => {
  return (
    <>
      <div className='cols'>
        <figure>
              <img src={item.Url_slug}/>
              <figcaption>{item.Product_name}</figcaption>
              <span class="price">{item.Price}</span>
              <a class="button" href="#">Buy Now</a>
          </figure>
      </div>
    </>
  )
}

export default Product
