import React, { useState , useEffect} from 'react';
import './Products.css';
import axios from 'axios';
import Product from '../../Components/Product/Product';
import Categoryfilter from '../../Components/Categoryfilter/Categoryfilter';
import nodatafound from '../../Components/Assests/nodatafound.png'

const Products = ({category}) => {
  var categoarys = category;
  const [CategoarysData, setCategoarysData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  if(checkedItems.length!='')
  {
    categoarys =checkedItems;
  }
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
    <div className="accordion container-fluid container-xl mt-5" style={{height: '711px'}}>
        <div className='row'>
            <div className='col-lg-2 Categoary'>
                <Categoryfilter categoarys={categoarys} checkedItems={checkedItems} setCheckedItems={setCheckedItems}/>
            </div>
            <div className='col-lg-10' style={{ overflowX : 'hidden'  , padding: '0 5px'  , height: '783px'}}>
              <div id="columns" className="columns_5" >
                {CategoarysData.length !=0 ? CategoarysData.map((item, index) => (
                  (
                    <Product item={item} key={index}/>
                  )
                )):<img src={nodatafound}></img>}
              </div>
            </div>
        </div>
    </div>
    </>
  );
};
 
export default Products;
