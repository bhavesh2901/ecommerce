import Cartproduct from '../../Components/Cartproduct/Cartproduct'
import React, { useEffect, useRef, useState } from 'react';
import nodatafound from '../../Components/Assests/emptycart.webp';
import axios from 'axios';
import { UserProvider , useUser} from '../../UserContext';
import Loader from '../../Components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Cart = () => {
    const [cartproduct , setCartproduct ] = useState([]);
    const [loading, setLoading] = useState(false); 
    let UserName = '';
    let initials = '';
    let UserID = '';
    let userEmail = '';
    let userPhone = '';
    let userPhoto = '';
    let Full_address = '';
    let State = '';
    let City = '';
    let zip_code = '';
    let Phone_number = '';
    const { user } = useUser();
    if (user) {
        const nameArray = user['Fullname']?.split(' ');
         UserID = user['id'];
         userEmail = user['Email'];
         userPhone = user['Phone_number'];
         userPhoto = user['profile_image'];
         Full_address = user['Full_address'];
         Phone_number = user['Phone_number'];
         City = user['City'];
         State = user['State'];
         zip_code = user['zip_code'];
        if (nameArray && nameArray.length > 1) {
            initials = nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0);
            UserName=  nameArray[0];
            
        }
    }
    const fetchsetCartproduct = async () => {
        setLoading(true); // Start loading
        setTimeout(async () => { // Wrap the API call in an async function
            try {
                // Make API request based on selected categories
                const response = await axios.get(`http://localhost:3000/api/CartProduct/${UserID}`);
                setCartproduct(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false); // End loading
            }
        }, 2000); // Delay the API call by 3 seconds
    };
    
      // Fetch data when the component mounts
      useEffect(() => {
        fetchsetCartproduct();
      }, [UserID]);
      var [totalProductPrice, setTotalProductPrice] = useState(0);

      useEffect(() => {
        // Calculate total product price, ensuring the prices are treated as numbers
        const total = cartproduct.reduce((acc, item) => acc + Number(item.Price), 0);
        setTotalProductPrice(total);
    }, [cartproduct]);
  return (
    <>
    
     <div className="min-vh-100 bg-light">
    <div className="container p-4">
        <div className='row'>
            <div className='col-lg-9'>
                <div className="bg-white rounded shadow p-4">
                    <div className="bg-warning bg-opacity-25 text-dark px-3 py-2 d-flex align-items-center">
                        <img src="https://svgsilh.com/svg/151889.svg" style={{height:'36px' , width:'36px'}} className="w-10 pr-2 mx-2" alt="icon"/>
                        <div className="text-sm">Congrats you're eligible for a <b>Coupon Code</b> in this order</div>
                    </div>
                    <div>
                        <h3 className="h4 mt-4 font-weight-bold">Order Summary</h3>
                        {loading ? (
                                <Loader type="dna" height="150" width="150" color="blue" loaderHeight="300px"  /> // Show loader while loading
                            ) : (cartproduct.length !== 0 ? (
                                cartproduct.map((item, index) => { return(
                                    <Cartproduct itme={item} key={index}  />
                                )})
                            ) : (
                                <center>
                                    <img src={nodatafound} alt="No data found" />
                                </center>
                            )
                        )}

                    </div>
                    {cartproduct.length !== 0 ? (
                    <button className="btn bg-orange-200 bg-gradient btn-lg w-100 mt-3 rounded-pill">PROCEED TO CHECKOUT</button>):
                    (<div></div>)
                    }
                </div>
            </div>
            <div className='col-lg-3'>
                <div className="d-flex justify-content-between mt-4 flex-wrap">
                    <div className="bg-white rounded shadow p-3 w-100 mb-3 col-lg-6">
                        <div className="bg-danger bg-opacity-25 px-4 py-3">
                            <h3 className="h4 font-weight-bold">Price Breakdown</h3>

                            {loading ? (
                                <Loader type="threeDots" height="50" width="50" color="red" loaderHeight="100px"  /> // Show loader while loading
                                ) : (cartproduct.length !== 0 ? (
                                    cartproduct.map((item, index) => { return(
                                        <>
                                         <div className="d-flex justify-content-between mt-3">
                                            <div className="text-dark font-weight-bold" style={{fontSize:'15px'}}>Amount</div>
                                            <div className="text-right font-weight-bold" style={{fontSize:'15px'}}>$ {item.Price}</div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="text-dark font-weight-bold" style={{fontSize:'15px'}}>VAT (15%)</div>
                                            <div className="text-right font-weight-bold" style={{fontSize:'15px'}}>$12</div>
                                        </div>
                                        </>
                                    )})
                                ) : (
                                    <>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className=" text-dark font-weight-bold" style={{fontSize:'10px'}}>Amount</div>
                                            <div className="text-right font-weight-bold" style={{fontSize:'10px'}}>0</div>
                                        </div>
                                        <div className="d-flex justify-content-between mt-3">
                                            <div className="text-dark font-weight-bold" style={{fontSize:'10px'}}>VAT (0%)</div>
                                            <div className="text-right font-weight-bold" style={{fontSize:'10px'}}>$0</div>
                                        </div>
                                  </>
                                )
                            )}
                           
                            <hr className="bg-warning my-3"/>
                            <div className="d-flex justify-content-between mt-3">
                                <div className="h5 text-danger font-weight-bold">Total Amount</div>
                                <div className="h4 text-danger font-weight-bold">{totalProductPrice}</div>
                            </div>
                            <button className="btn btn-danger bg-gradient btn-lg rounded-pill w-100 mt-3">CHECKOUT</button>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow p-3 w-100 col-lg-6 d-flex align-items-center justify-content-center">
                        <div className="pr-4">
                            <h3 className="h4 font-weight-bold text-primary">Thank You, { UserName}</h3>
                            <h4 className="text-muted font-weight-bold">ORDER #5624</h4>
                        </div>
                        <img src="https://image.flaticon.com/icons/svg/1611/1611768.svg" alt="" className="w-24"/>
                    </div>
                </div>
            </div>
        </div>
       

        
    </div>
</div>

    </>
  )
}

export default Cart
