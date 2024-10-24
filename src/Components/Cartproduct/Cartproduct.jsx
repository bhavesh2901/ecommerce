import React, { useState } from 'react'
import Addcart from '../Addcart/Addcart'

const Cartproduct = ({itme }) => {
    const [quantity , setQuantity] = useState(itme.Quantity);
  
  return (
    <>
       <div className="border rounded mt-3 d-flex p-3 justify-content-between align-items-center flex-wrap">
            <img src={itme.Url_slug} height={100} width={100} className="w-12" alt="product"/>
            <div className="w-75">
                <h3 className="h6 font-weight-medium">{itme.Product_name}</h3>
                <p className="text-muted text-xs">Sold by <b>Aashir Khan</b></p>
                <h4 className="text-danger small font-weight-bold mt-1">Only 2 left in stock</h4>
            </div>
            <div className='float-end'>
                <h4 className="h3 font-weight-medium"><sup className="text-muted">₹</sup> {itme.Price}</h4>
                <h5 className="h6 font-weight-bold text-muted ">60% OFF</h5>
                <div className='d-flex gap-2' style={{alignItems : 'center'}}>
                    <label className="d-flex text-muted">
                        QTY
                    </label>
                    <select  onChange={(e) => setQuantity(e.target.value)} value={quantity} className="form-select bg-teal-500 bg-gradient text-white rounded-pill" aria-label="Default select example">
                        <option className='rounded-pill' value="1">1</option>
                        <option className='rounded-pill' value="2">2</option>
                        <option className='rounded-pill' value="3">3</option>
                    </select>
                </div>
            </div>
            <div className="w-100 d-flex justify-content-between mt-3">
                <div className='mt-3  bg-orange-200 rounded-pill p-2  d-flex bg-gradient text-white' ><Addcart  Product_id={itme.id} Quantity={quantity}/></div>
                <button className='mt-2 btn bg-orange-200 rounded-pill  btn-sm'>CHECKOUT</button>
               
            </div>
        </div>
    </>
  )
}

export default Cartproduct
