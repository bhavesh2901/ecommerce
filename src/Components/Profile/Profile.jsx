import React, { useCallback, useState ,useEffect } from 'react';
import  './Profile.css';
import { UserProvider  ,useUser} from '../../UserContext';
import { useNavigate } from 'react-router-dom';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import Wishlist from '../Wishlist/Wishlist';
import { Link } from 'react-router-dom';
import nodatafound from '../../Components/Assests/emptywishlist.jpg';
import Cartproduct from '../Cartproduct/Cartproduct';
import Loader from '../Loader/Loader';
const Profile = () => {
    const [cartproduct , setCartproduct ] = useState([]);
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0]; // Get the first selected file
        const reader = new FileReader();
        
        reader.onloadend = () => {
          setSelectedImage(reader.result); // Set the image data to state
        };
        
        if (file) {
          reader.readAsDataURL(file); // Read the file as a data URL
        }
      }, []);
    
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*', // Accept only image files
        onDragEnter: (event) => event.preventDefault(), // Prevent default Edge behavior
        onDragOver: (event) => event.preventDefault(),  // Prevent default Edge behavior
        onDropAccepted: (files) => console.log('Accepted files:', files), // Log accepted files
      });
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
            UserName= user['Fullname'];
            
        }
    }
    const [watchListProfle  , setWatchListProfle ] = useState([]);
    const fetchwatchlist = async () => {
        try {
          // Make API request based on selected categories
          const response = await axios.get(`http://localhost:3000/api/watchListProduct/${UserID}`);
          setWatchListProfle(response.data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    
      // Fetch data when the component mounts
      useEffect(() => {
        fetchwatchlist();
      }, [UserID]);
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
  return (
    <>
   
        <div className="container">
            <div className="row profile ">
                <div className="col-md-3 shadow ">
                    <div className="profile-sidebar ">
                        <div className="">
                                 {
                                    userPhoto && userPhoto.length !== 0 ? (
                                       <center><img src={userPhoto} className='rounded-circle header-profile-user text-center' style={{height: "102px", width: "109px"}} /></center> 
                                    ) : 
                                    (
                                        <div className='profile-userpic mt-2'>{initials.toUpperCase()}</div>
                                    )
                                }
                            
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                {UserName}
                            </div>
                            <div className="profile-usertitle-job">
                                {userEmail}
                            </div>
                        </div>
                        {/* <div className="profile-userbuttons">
                            <button type="button" className="btn btn-success btn-sm">W</button>
                        </div> */}
                        <div className="profile-usermenu">
                            <ul className='nav flex-column'>
                                 <li className=''>
                                    <a class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="glyphicon glyphicon-user"></i>
                                    overview</a>
                                </li>
                                <li className=''>
                                    <a class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="glyphicon glyphicon-user"></i>
                                     Wishlist </a>
                                </li>
                                <li className=''>
                                    <a class="nav-link" onClick={fetchsetCartproduct} id="v-pills-Cart-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Cart" type="button" role="tab" aria-controls="v-pills-Cart" aria-selected="false">
                                    <i className="glyphicon glyphicon-user"></i>
                                     Cart </a>
                                </li>
                            </ul>
                        </div>
                        <div className="portlet light bordered">
                            <div className="row list-separated profile-stat">
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title">{watchListProfle.length}</div>
                                    <div className="uppercase profile-stat-text"> wishlist</div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title"> 51 </div>
                                    <div className="uppercase profile-stat-text"> cart </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title"> 61 </div>
                                    <div className="uppercase profile-stat-text"> Buy </div>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                        <div class="tab-content" id="v-pills-tabContent">
                            <div class="tab-pane fade show active" style={{columnCount: '4'}} id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                    <div class="card text-bg-primary mb-3 d-flex shadow" style={{maxWidth : "18rem"}}>
                                    <div class="card-header">UserName</div>
                                    <div class="card-body">
                                        <p class="card-text">{UserName}.</p>
                                    </div>
                                    </div>
                                    <div class="card text-bg-secondary mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">Email</div>
                                    <div class="card-body">
                                        <p class="card-text">{userEmail}</p>
                                        <i class="fa-solid fa-envelope mt-5 mx-1" style={{fontSize:'122px'}}></i>
                                    </div>
                                    </div>
                                    <div class="card text-bg-primary mb-3 d-flex shadow " style={{maxWidth : "18rem , height: '300px'" }}>
                                    <div class="card-header">City</div>
                                    <div class="card-body">
                                        <p class="card-text"><i class="fa-solid fa-city mx-2" style={{fontSize:'40px'}}></i> {City}.</p>
                                    </div>
                                    </div>
                                    <div class="card text-bg-warning mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">Address</div>
                                    <div class="card-body">
                                        <p class="card-text"><i class="fa-solid fa-location-dot mt-3" style={{fontSize:'60px'}}></i> {Full_address}</p>
                                        
                                    </div>
                                    </div>
                                    <div class="card text-bg-info mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">State</div>
                                    <div class="card-body">
                                        <p class="card-text text-white"><i class="fa-solid fa-building mx-1" style={{fontSize:'40px'}}></i><b>{State}</b></p>
                                    </div>
                                    </div>
                                    <div class="card text-bg-danger mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">user Photo </div>
                                    <div class="card-body">
                                        <div
                                            {...getRootProps()}
                                            style={{
                                            border: '2px dashed #ccc',
                                            padding: '4px',
                                            textAlign: 'center',
                                            cursor: 'pointer',
                                            borderRadius : '7%',
                                            height:'50px',
                                            width:'170px',
                                            alignItems:'center',
                                            borderBottomLeftRadius:'32px',
                                            borderBottomRightRadius:'32px'
                                            }}
                                        >
                                            <input {...getInputProps()} />
                                            <p className='mt-2 align-item-center'><i class="fa-solid fa-camera-retro mx-2"  style={{fontSize:'25px'}} ></i>edit profile</p>
                                        </div>
                                        {selectedImage && (
                                            <img src={selectedImage} alt="Selected" className='mt-2 mx-3' style={{ width: '150px', height: '150px' , borderRadius:'50%' }} />
                                        )}
                                    </div>
                                    </div>
                                    <div class="card text-bg-warning mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">zip code</div>
                                    <div class="card-body">
                                        <p class="card-text">{zip_code}</p>
                                        <i class="fa-solid fa-shop mt-5 mx-5"  style={{fontSize:'70px'}}  ></i>
                                    </div>
                                    </div>
                                    <div class="card text-bg-dark mb-3 shadow " style={{maxWidth: "18rem" , height: '300px'} }>
                                    <div class="card-header">Phone</div>
                                    <div class="card-body">
                                        <p class="card-text">{Phone_number}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '165px' , width: '115px' , stroke: 'black' , fill: 'white'}} viewBox="0 0 320 512"><path d="M0 64C0 28.7 28.7 0 64 0L256 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm64 96l0 64c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L96 128c-17.7 0-32 14.3-32 32zM80 352a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm56-56a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm24 56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM128 48c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0z"/></svg>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
                                <div style={{height: '512px', overflowX:'hidden'}} >
                                {watchListProfle.length !== 0 ? (
                                    watchListProfle.map((item, index) => (
                                        <div className="card shadow  product mb-3 mx-2" key={index}>
                                            <div className="card-body p-0">
                                                <div className="row gy-3">
                                                    <div className="col-sm-auto">
                                                        <div className="avatar-lg bg-light rounded p-1 position-relative">
                                                            <div className='position-absolute topbar-badge fs-10 translate-middle'  onClick={fetchwatchlist}   style={{top: '22px' , left: '19px'}}>  <Wishlist Product_id={item.id} /></div>
                                                            <img src={item.Url_slug}  alt="" style={{height: '143px', borderRadius:'10px'}} className="img-fluid d-block" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm p-2">
                                                        <h6 className="fs-10 text-truncate">
                                                            <div href="ecommerce-product-detail.html" className="text-dark text-decoration-none pointer"><Link to={`/Detail/`+item.id}>{item.Product_name}</Link></div>
                                                        </h6>
                                                        <div>
                                                            {item.Description}
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-auto p-2  mx-3">
                                                        <div className="text-lg-end">
                                                            <p className="text-muted mb-1">Item Price:</p>
                                                            <h5 className="fs-14">₹ <span id="ticket_price" className="product-price">{item.Price}</span></h5>
                                                            <button className='btn btn-success  btn-sm mt-5'><i class="fa-solid fa-cart-shopping"></i> Add</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    
                                    <center><img src={nodatafound} alt="No data found" /></center>
                                )}
                                </div>
                                
                            </div>
                            <div class="tab-pane fade" id="v-pills-Cart" role="tabpanel" aria-labelledby="v-pills-Cart-tab" tabindex="0">
                                {loading ? (
                                        <Loader type="dna" height="150" width="150" color="blue" loaderHeight="300px"  /> // Show loader while loading
                                    ) : (cartproduct.length !== 0 ? (
                                        cartproduct.map((item, index) => (
                                            <Cartproduct itme={item} key={index}  />
                                        ))
                                    ) : (
                                        <center>
                                            <img src={nodatafound} alt="No data found" />
                                        </center>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
