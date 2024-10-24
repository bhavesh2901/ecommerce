import React from 'react'
import  './Productloader.css';
const Productloader = () => {
    const items = Array.from({ length: 12 });
  return (
    <>
        <ul className='productLoader'>
        {items.map((_, index) => (
            <li className="productLi" key={index}>
            <span className='proimg'></span>
            <span className="proimg"></span>
            <span className="proimg"></span>
            <span className="proimg"></span>
            </li>
        ))}
        </ul>
    </>
  )
}

export default Productloader
