import React, { useEffect, useRef, useState } from 'react';
import { UserProvider , useUser} from '../../UserContext';
import axios from 'axios';
import PaymentComponent from '../../Components/PaymentComponent/PaymentComponent';
const Checkout = () => {
  
        const { user } = useUser();
        const [fristname, setFristname] = useState();
        const [lastname, setLastname] = useState();
        const [userID, setUserID] = useState();
        const [userEmail, setUserEmail] = useState();
        const [userPhone, setUserPhone] = useState();
        const [userPhoto, setUserPhoto] = useState();
        const [full_address, setFull_address] = useState();
        const [state, setState] = useState();
        const [city, setCity] = useState();
        const [zip_code, setZip_code] = useState();
        const [phone_number, setPhone_number] = useState();
        const [initials, setInitials] = useState();
      


        const [countries, setCountries] = useState([]);
        const [states, setStates] = useState([]);
        const [cities, setCities] = useState([]);
        const [selectedCountry, setSelectedCountry] = useState('');
        const [selectedState, setSelectedState] = useState('');
      
        // Function to fetch access token
        const fetchAccessToken = async () => {
          const response = await axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
            headers: {
              'Accept': 'application/json',
              'api-token': 'j3BITieaWSW9jW0Qrp3pMMvgtZDgZ117UErAYlKkNnib4fSqvoLEDhXANa7xnYliNk8', // Replace with your actual token
              'user-email': 'sarkari2901@gmail.com', // Replace with your actual email
            },
          });
          return response.data.auth_token;
        };
      
        // Fetch countries
        const fetchCountries = async () => {
          const token = await fetchAccessToken();
          const response = await axios.get("https://www.universal-tutorial.com/api/countries", {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          setCountries(response.data);
        };
      
        // Fetch states based on selected country
        const fetchStates = async (country) => {
          const token = await fetchAccessToken();
          const response = await axios.get(`https://www.universal-tutorial.com/api/states/${country}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          setStates(response.data);
        };
      
        // Fetch cities based on selected state
        const fetchCities = async (state) => {
          const token = await fetchAccessToken();
          const response = await axios.get(`https://www.universal-tutorial.com/api/cities/${state}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          setCities(response.data);
        };
      
        useEffect(() => {
          fetchCountries();
        }, []);
      
        const handleCountryChange = (e) => {
          setSelectedCountry(e.target.value);
          fetchStates(e.target.value);
          setSelectedState('');
          setCities([]);
        };
      
        const handleStateChange = (e) => {
          setSelectedState(e.target.value);
          fetchCities(e.target.value);
        };
        useEffect(() => {
            if (user) {
                const nameArray = user['Fullname']?.split(' ');
                setUserID(user['id']);
                setUserEmail(user['Email']);
                setUserPhone(user['Phone_number']);
                setUserPhoto(user['profile_image']);
                setFull_address(user['Full_address']);
                setPhone_number(user['Phone_number']);
                setCity(user['City']);
                setState(user['State']);
                setZip_code(user['zip_code']);
    
                if (nameArray && nameArray.length > 1) {
                    setFristname(nameArray[0]);
                    setLastname(nameArray[1]);
                    setInitials(nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0));
                }
            }
        }, [user]); // This effect runs only
  return (
    <>
<div className="container">

<div className="row mt-5">
    <div className="col-xl-8">
        <div className="card p-2">
            <div className="card-body checkout-tab">
                <form className='' action="#">
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">

                        <ul className="nav nav-pills nav-justified custom-nav" role="tablist">
                            <li className="nav-item mx-1" role="presentation">
                                <button className="nav-link bg-pink-200 text-dark bg-gradient rounded-pill fs-15 p-3 active" id="pills-bill-info-tab" data-bs-toggle="pill" data-bs-target="#pills-bill-info" type="button" role="tab" aria-controls="pills-bill-info" aria-selected="true" data-position="0">
                                <i class="fa-solid fa-user fs-16 p-2 bg-soft-primary text-primary  rounded-circle align-middle me-2"></i>   Personal Info
                                </button>
                            </li>
                            <li className="nav-item mx-1" role="presentation">
                                <button className="nav-link bg-yellow-200 text-dark bg-gradient  rounded-pill fs-15 p-3" id="pills-bill-address-tab" data-bs-toggle="pill" data-bs-target="#pills-bill-address" type="button" role="tab" aria-controls="pills-bill-address" aria-selected="false" data-position="1">
                                <i class="fa-solid fa-truck-fast fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>   Shipping Info
                                </button>
                            </li>
                            <li className="nav-item mx-1" role="presentation">
                                <button className="nav-link bg-orange-200 text-dark bg-gradient rounded-pill fs-15 p-3" id="pills-payment-tab" data-bs-toggle="pill" data-bs-target="#pills-payment" type="button" role="tab" aria-controls="pills-payment" aria-selected="false" data-position="2">
                                <i class="fa-solid fa-credit-card  fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i> Payment Info
                                </button>
                            </li>
                            <li className="nav-item mx-1" role="presentation">
                                <button className="nav-link bg-green-200 text-dark bg-gradient rounded-pill fs-15 p-3" id="pills-finish-tab" data-bs-toggle="pill" data-bs-target="#pills-finish" type="button" role="tab" aria-controls="pills-finish" aria-selected="false" data-position="3">
                                <i class="fa-solid fa-clipboard-check fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i> Finish
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content p-2">
                        <div className="tab-pane fade show active" id="pills-bill-info" role="tabpanel" aria-labelledby="pills-bill-info-tab">
                            <div>
                                <h5 className="mb-1">Billing Information</h5>
                                <p className="text-muted mb-4">Please fill all information below</p>
                            </div>

                            <div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label for="billinginfo-firstName" className="form-label">*First Name</label>
                                            <input type="text" className="form-control" onChange={e=>setFristname(e.target.value)} value={fristname} id="billinginfo-firstName" placeholder="Enter first name" ></input>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label for="billinginfo-lastName" className="form-label">*Surname</label>
                                            <input type="text" className="form-control" onChange={e=>setLastname(e.target.value)} value={lastname} id="billinginfo-lastName" placeholder="Enter Surname" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label for="billinginfo-email" className="form-label">*Email <span className="text-muted">(Optional)</span></label>
                                            <input type="email" className="form-control" onChange={e=>setUserEmail(e.target.value)} value={userEmail} id="billinginfo-email" placeholder="Enter email"/>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <label for="billinginfo-phone" className="form-label">*Phone</label>
                                            <input type="text" className="form-control" onChange={e=>setUserPhone(e.target.value)} value={userPhone} id="billinginfo-phone" placeholder="Enter phone no."/>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label for="billinginfo-address" className="form-label">*Address</label>
                                    <textarea className="form-control" onChange={e=>setFull_address(e.target.value)} value={full_address} id="billinginfo-address" placeholder="Enter address" rows="3"></textarea>
                                </div>

                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                        <label for="country" class="form-label">Country</label>
                                        <select id="Country" class="form-select" aria-label="Select Country" onChange={handleCountryChange} value={selectedCountry}>
                                            <option value="">Select Country</option>
                                            {countries.map((country) => (
                                            <option key={country.country_id} value={country.country_name}>
                                                {country.country_name}
                                            </option>
                                            ))}
                                        </select>

                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="mb-3">
                                        <label for="state" class="form-label">State</label>
                                        <select id="state" class="form-select" aria-label="Select state" onChange={handleStateChange} value={selectedState} disabled={!selectedCountry}>
                                            <option value="">Select State</option>
                                            {states.map((state) => (
                                            <option key={state.state_id} value={state.state_name}>
                                                {state.state_name}
                                            </option>
                                            ))}
                                        </select>

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                        <label  for="country" class="form-label">City</label>
                                        <select id="City" class="form-select" aria-label="Select City" disabled={!selectedState}>
                                            <option value="">Select City</option>
                                            {cities.map((city) => (
                                            <option key={city.city_id} value={city.city_name}>
                                                {city.city_name}
                                            </option>
                                            ))}
                                        </select>

                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="row">
                                   
                                    <div className="col-md-4">
                                        <div className="mb-3">
                                            <label for="zip" className="form-label">Zip Code</label>
                                            <input type="text" onChange={e=>setZip_code(e.target.value)} value={zip_code} className="form-control" id="zip" placeholder="Enter zip code"/>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                      
                                    </div>

                                    <div className="col-md-4">
                                      
                                    </div>
                                </div>

                                <div className="d-flex align-items-start gap-3 mt-3">
                                    <button type="button" className="btn btn-primary btn-label right ms-auto nexttab" data-nexttab="pills-bill-address-tab">
                                        <i className="ri-truck-line label-icon align-middle fs-16 ms-2"></i>Proceed to Shipping
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- end tab pane --> */}

                        <div className="tab-pane fade" id="pills-bill-address" role="tabpanel" aria-labelledby="pills-bill-address-tab">
                            <div>
                                <h5 className="mb-1">Shipping Information</h5>
                                <p className="text-muted mb-4">Please fill all information below</p>
                            </div>

                            <div className="mt-4">
                                <div className="d-flex align-items-center mb-2">
                                    <div className="flex-grow-1">
                                        <h5 className="fs-14 mb-0">Saved Address</h5>
                                    </div>
                                    <div className="flex-shrink-0">
                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="btn btn-sm btn-success mb-3" data-bs-toggle="modal" data-bs-target="#addAddressModal">
                                            Add Address
                                        </button>
                                    </div>
                                </div>
                                <div className="row gy-3">
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="form-check card-radio">
                                            <input id="shippingAddress01" name="shippingAddress" type="radio" className="form-check-input" checked=""/>
                                            <label className="form-check-label" for="shippingAddress01">
                                                <span className="mb-4 fw-semibold d-block text-muted text-uppercase">Home Address</span>

                                                <span className="fs-14 mb-2 d-block">Marcus Alfaro</span>
                                                <span className="text-muted fw-normal text-wrap mb-1 d-block">4739 Bubby Drive Austin, TX 78729</span>
                                                <span className="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                            </label>
                                        </div>
                                        <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                                            <div>
                                                <a href="#" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#addAddressModal"><i className="ri-pencil-fill text-muted align-bottom me-1"></i> Edit</a>
                                            </div>
                                            <div>
                                                <a href="#" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="form-check card-radio">
                                            <input id="shippingAddress02" name="shippingAddress" type="radio" className="form-check-input"/>
                                            <label className="form-check-label" for="shippingAddress02">
                                                <span className="mb-4 fw-semibold d-block text-muted text-uppercase">Office Address</span>

                                                <span className="fs-14 mb-2 d-block">James Honda</span>
                                                <span className="text-muted fw-normal text-wrap mb-1 d-block">1246 Virgil Street Pensacola, FL 32501</span>
                                                <span className="text-muted fw-normal d-block">Mo. 012-345-6789</span>
                                            </label>
                                        </div>
                                        <div className="d-flex flex-wrap p-2 py-1 bg-light rounded-bottom border mt-n1">
                                            <div>
                                                <a href="#" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#addAddressModal"><i className="ri-pencil-fill text-muted align-bottom me-1"></i> Edit</a>
                                            </div>
                                            <div>
                                                <a href="#" className="d-block text-body p-1 px-2" data-bs-toggle="modal" data-bs-target="#removeItemModal"><i className="ri-delete-bin-fill text-muted align-bottom me-1"></i> Remove</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h5 className="fs-14 mb-3">Shipping Method</h5>

                                    <div className="row g-4">
                                        <div className="col-lg-6">
                                            <div className="form-check card-radio">
                                                <input id="shippingMethod01" name="shippingMethod" type="radio" className="form-check-input" checked=""/>
                                                <label className="form-check-label" for="shippingMethod01">
                                                    <span className="fs-20 float-end mt-2 text-wrap d-block fw-semibold">Free</span>
                                                    <span className="fs-14 mb-1 text-wrap d-block">Free Delivery</span>
                                                    <span className="text-muted fw-normal text-wrap d-block">Expected Delivery 3 to 5 Days</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-check card-radio">
                                                <input id="shippingMethod02" name="shippingMethod" type="radio" className="form-check-input" checked=""/>
                                                <label className="form-check-label" for="shippingMethod02">
                                                    <span className="fs-20 float-end mt-2 text-wrap d-block fw-semibold">$24.99</span>
                                                    <span className="fs-14 mb-1 text-wrap d-block">Express Delivery</span>
                                                    <span className="text-muted fw-normal text-wrap d-block">Delivery within 24hrs.</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-3 mt-4">
                                <button type="button" className="btn btn-light btn-label previestab" data-previous="pills-bill-info-tab"><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back to Personal Info</button>
                                <button type="button" className="btn btn-primary btn-label right ms-auto nexttab" data-nexttab="pills-payment-tab"><i className="ri-bank-card-line label-icon align-middle fs-16 ms-2"></i>Continue to Payment</button>
                            </div>
                        </div>
                        {/* <!-- end tab pane --> */}

                        <div className="tab-pane fade" id="pills-payment" role="tabpanel" aria-labelledby="pills-payment-tab">
                            <div>
                                <h5 className="mb-1">Payment Selection</h5>
                                <p className="text-muted mb-4">Please select and enter your billing information</p>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-4 col-sm-6">
                                    <div data-bs-toggle="collapse" data-bs-target="#paymentmethodCollapse.show" aria-expanded="false" aria-controls="paymentmethodCollapse">
                                        <div className="form-check card-radio">
                                            <input id="paymentMethod01" name="paymentMethod" type="radio" className="form-check-input"/>
                                            <label className="form-check-label" for="paymentMethod01">
                                                <span className="fs-16 text-muted me-2"><i className="ri-paypal-fill align-bottom"></i></span>
                                                <span className="fs-14 text-wrap">Paypal</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div data-bs-toggle="collapse" data-bs-target="#paymentmethodCollapse" aria-expanded="true" aria-controls="paymentmethodCollapse">
                                        <div className="form-check card-radio">
                                            <input id="paymentMethod02" name="paymentMethod" type="radio" className="form-check-input" checked=""/>
                                            <label className="form-check-label" for="paymentMethod02">
                                                <span className="fs-16 text-muted me-2"><i className="ri-bank-card-fill align-bottom"></i></span>
                                                <span className="fs-14 text-wrap">Credit / Debit Card</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-sm-6">
                                    <div data-bs-toggle="collapse" data-bs-target="#paymentmethodCollapse.show" aria-expanded="false" aria-controls="paymentmethodCollapse">
                                        <div className="form-check card-radio">
                                            <input id="paymentMethod03" name="paymentMethod" type="radio" className="form-check-input"/>
                                            <label className="form-check-label" for="paymentMethod03">
                                                <span className="fs-16 text-muted me-2"><i className="ri-money-dollar-box-fill align-bottom"></i></span>
                                                <span className="fs-14 text-wrap">Cash on Delivery</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="collapse show" id="paymentmethodCollapse">
                                <div className="card p-4 border shadow-none mb-0 mt-4">
                                    <div className="row gy-3">
                                        <div className="col-md-12">
                                            <label for="cc-name" className="form-label">Name on card</label>
                                            <input type="text" className="form-control" id="cc-name" placeholder="Enter name"/>
                                            <small className="text-muted">Full name as displayed on card</small>
                                        </div>

                                        <div className="col-md-6">
                                        <label for="cc-number" className="form-label">Credit card number</label>
                                            <input type="text" className="form-control" id="cc-number" placeholder="xxxx xxxx xxxx xxxx"/>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="cc-expiration" className="form-label">Expiration</label>
                                            <input type="text" className="form-control" id="cc-expiration" placeholder="MM/YY"/>
                                        </div>

                                        <div className="col-md-3">
                                            <label for="cc-cvv" className="form-label">CVV</label>
                                            <input type="text" className="form-control" id="cc-cvv" placeholder="xxx"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-muted mt-2 fst-italic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-lock text-muted icon-xs"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Your transaction is secured with SSL encryption
                                </div>
                            </div>

                            <div className="d-flex align-items-start gap-3 mt-4">
                                <button type="button" className="btn btn-light btn-label previestab" data-previous="pills-bill-address-tab"><i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>Back to Shipping</button>
                                <PaymentComponent/>
                                <button type="button" className="btn btn-primary btn-label right ms-auto nexttab" data-nexttab="pills-finish-tab"><i className="ri-shopping-basket-line label-icon align-middle fs-16 ms-2"></i>Complete Order</button>
                            </div>
                        </div>
                        {/* <!-- end tab pane --> */}

                        <div className="tab-pane fade" id="pills-finish" role="tabpanel" aria-labelledby="pills-finish-tab">
                            <div className="text-center py-5">

                                <div className="mb-4">
                                    <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style={{width:'120px',height:'120px'}}></lord-icon>
                                </div>
                                <h5>Thank you ! Your Order is Completed !</h5>
                                <p className="text-muted">You will receive an order confirmation email with details of your order.</p>

                                <h3 className="fw-semibold">Order ID: <a href="apps-ecommerce-order-details.html" className="text-decoration-underline">VZ2451</a></h3>
                            </div>
                        </div>
                        {/* <!-- end tab pane --> */}
                    </div>
                    {/* <!-- end tab content --> */}
                </form>
            </div>
            {/* <!-- end card body --> */}
        </div>
        {/* <!-- end card --> */}
    </div>
    {/* <!-- end col --> */}

    <div className="col-xl-4">
        <div className="card">
            <div className="card-header bg-yellow-100">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <h5 className="card-title mb-0">Order Summary</h5>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="table-responsive table-card ">
                    <table className="table table-borderless align-middle mb-0 ">
                        <thead className="table-light text-muted">
                            <tr>
                                <th style={{width: "90px"}} scope="col">Product</th>
                                <th scope="col">Product Info</th>
                                <th scope="col" className="text-end">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div className="avatar-md bg-light rounded p-1">
                                        <img src="assets/images/products/img-8.png" alt="" className="img-fluid d-block"/>
                                    </div>
                                </td>
                                <td>
                                    <h5 className="fs-14"><a href="apps-ecommerce-product-details.html" className="text-dark">Sweatshirt for Men (Pink)</a></h5>
                                    <p className="text-muted mb-0">$ 119.99 x 2</p>
                                </td>
                                <td className="text-end">$ 239.98</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar-md bg-light rounded p-1">
                                        <img src="assets/images/products/img-7.png" alt="" className="img-fluid d-block"/>
                                    </div>
                                </td>
                                <td>
                                    <h5 className="fs-14"><a href="apps-ecommerce-product-details.html" className="text-dark">Noise Evolve Smartwatch</a></h5>
                                    <p className="text-muted mb-0">$ 94.99 x 1</p>
                                </td>
                                <td className="text-end">$ 94.99</td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="avatar-md bg-light rounded p-1">
                                        <img src="assets/images/products/img-3.png" alt="" className="img-fluid d-block"/>
                                    </div>
                                </td>
                                <td>
                                    <h5 className="fs-14"><a href="apps-ecommerce-product-details.html" className="text-dark">350 ml Glass Grocery Container</a></h5>
                                    <p className="text-muted mb-0">$ 24.99 x 1</p>
                                </td>
                                <td className="text-end">$ 24.99</td>
                            </tr>
                            <tr>
                                <td className="fw-semibold" colspan="2">Sub Total :</td>
                                <td className="fw-semibold text-end">$ 359.96</td>
                            </tr>
                            <tr>
                                <td colspan="2">Discount <span className="text-muted">(VELZON15)</span> : </td>
                                <td className="text-end">- $ 50.00</td>
                            </tr>
                            <tr className='bg-red-200'>
                                <td colspan="2">Shipping Charge :</td>
                                <td className="text-end">$ 24.99</td>
                            </tr>
                            <tr>
                                <td colspan="2">Estimated Tax (12%): </td>
                                <td className="text-end">$ 18.20</td>
                            </tr>
                            <tr className="table-active">
                                <th colspan="2">Total (USD) :</th>
                                <td className="text-end">
                                    <span className="fw-semibold">
                                        $353.15
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
            {/* <!-- end card body --> */}
        </div>
        {/* <!-- end card --> */}
    </div>
    {/* <!-- end col --> */}
</div>
{/* <!-- end row --> */}

</div>
    </>
  )
}

export default Checkout
