import React, { useState , useEffect} from 'react';
import './Products.css';
import axios from 'axios';
import Product from '../../Components/Product/Product';
import Categoryfilter from '../../Components/Categoryfilter/Categoryfilter';

const Products = ({category}) => {
  let categoarys = category;
  const [CategoarysData, setCategoarysData] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/productscat/${categoarys}`);
      setCategoarysData(response.data);  // Set your state with response data here
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  fetchProducts();
}, [categoarys]);

  
  return (
    <>
    <div className='container'> 
      <h6>Categoary Name : <b>{categoarys}</b></h6>
    </div>
    <div className="accordion container-fluid container-xl mt-3" style={{height: '711px'}}>
        <div className='row'>
            <div className='col-lg-3 Categoary'>
                <Categoryfilter/>
            </div>
            <div className='col-lg-9' style={{ overflowX: 'hidden'  , padding: '0 5px'  , height: '783px'}}>
              <div id="columns" className="columns_5" >
                {CategoarysData.map((item, index) => (
                  (
                    
                    <Product item={item} key={index}/>
                  )
                ))}
              </div>
            </div>
        </div>
    </div>
    </>
  );
};
 
export default Products;
