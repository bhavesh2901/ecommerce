import React, { useState, useEffect } from 'react';
import './Products.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Product from '../../Components/Product/Product';
import Categoryfilter from '../../Components/Categoryfilter/Categoryfilter';
import nodatafound from '../../Components/Assests/nodatafound.png';
import { useNavigate } from 'react-router-dom';

const Products = ({  setChekditems }) => {
  const { categories } = useParams();  // Get the categories from the URL
  const categoryArray = categories ? categories.split(',') : [];
  const [CategoarysData, setCategoarysData] = useState([]);
  const [checkedItems, setCheckedItems] = useState([categories]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Make API request based on selected categories
        const response = await axios.get(`http://localhost:3000/api/productscatMulti/${categoryArray}`);
        setCategoarysData(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [categories]);
  useEffect(() => {
    if (checkedItems.length !== 0) {
      const selectedCategories = checkedItems.join(',');  // Create a comma-separated string
      setChekditems(selectedCategories);
      navigate(`/Products/${selectedCategories}`);  // Navigate to the dynamic route
    }
  }, [checkedItems, setChekditems, navigate]);
  return (
    <div className="accordion container-fluid container-xl mt-5" style={{ height: '711px' }}>
      <div className="row">
        <div className="">{categories}</div>
      </div>
      <div className="row">
        <div className="col-lg-3 Categoary">
          <Categoryfilter categoarys={categories} checkedItems={checkedItems} setCheckedItems={setCheckedItems} />
        </div>
        <div className="col-lg-9" style={{ overflowX: 'hidden', padding: '0 5px', height: '783px' }}>
          <div id="columns" className="columns_5">
            {CategoarysData.length !== 0 ? (
              CategoarysData.map((item, index) => <Product item={item} key={index} />)
            ) : (
              <img src={nodatafound} alt="No data found" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
