import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
// import imagelogo from '../Assests/logo3.jpg';
import imagelogo from '../Assests/Shopify.svg';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserProvider ,useUser  } from '../../UserContext';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const user = location.state?.user; // Get user from location state safely
    let initials = '';
    let UserName = '';
    let UserID = '';
    let userEmail = '';
    let userPhone = '';
    let userPhoto  = '';
    const { user } = useUser();
  
    if (user) {
        const nameArray = user['Fullname']?.split(' ');
         UserID = user['id'];
         userEmail = user['Email'];
         userPhone = user['Phone_number'];
         userPhoto = user['profile_image'];
        if (nameArray && nameArray.length > 1) {
            initials = nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0);
            UserName= nameArray[0];
            
        }
    }
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.removeItem('authToken');
        window.location.reload();
      };

    let [menus, setMenus] = useState('shop');
    
    return (
        <div className=''>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#"><img className='' style={{ height: '40px' , width: '40px'}} src={imagelogo} alt="logo"></img></a>
                <div className="d-flex">
                    <input className="form-control mr-sm-2 rounded-lg mx-2 mt-1 rounded-pill" style={{fontSize:'13px'}} type="search" placeholder="Search" size="50" aria-label="Search"/>
                    <button className="btn mt-1" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mx-5 gap-5">
                        <li className={menus === "shop" ? "nav-item active" : "nav-item rounded-pill"}>
                            <Link to='/' className="nav-link" onClick={() => setMenus('shop')}><b>SHOP</b></Link>
                        </li>
                        <li className={menus === "mens" ? "nav-item active " : "nav-item rounded-pill"}>
                            <Link to='/Products/mens' className="nav-link" onClick={() => setMenus('mens')}><b>MAN</b></Link>
                        </li>
                        <li className={menus === "womens" ? "nav-item active" : "nav-item rounded-pill"}>
                            <Link to='/Products/womens' className="nav-link" onClick={() => setMenus('womens')}><b>WOMEN</b></Link>
                        </li>
                        <li className={menus === "kids" ? "nav-item active" : "nav-item rounded-pill"}>
                            <Link to='/Products/kids' className="nav-link" onClick={() => setMenus('kids')}><b>KIDS</b></Link>
                        </li>
                        {
                            user? 
                            (
                                <>
                                    <li className={menus === "watchlist" ? "nav-item active" : "nav-item rounded-pill"}>
                                        <Link to={`/wishlist/${UserID}`} className="nav-link" onClick={() => setMenus('watchlist')}><b>WISHLIST</b></Link>
                                    </li>
                                    <li className={menus === "checkout" ? "nav-item active" : "nav-item rounded-pill"}>
                                    <Link to={`/cart/${UserID}`} className="nav-link" onClick={() => setMenus('checkout')}><b>Cart</b></Link>
                                    </li>
                                </>
                            ):
                            (
                                <div></div>
                            )
                        }
                         <li className={menus === "Help" ? "nav-item active" : "nav-item rounded-pill"}>
                            <Link to='/help' className="nav-link" onClick={() => setMenus('Help')}><b>Help</b></Link>
                        </li>
                      
                    </ul>
                </div>
               {/* Show initials and full username if user exists, otherwise show login button */}
                    {user ? (
                        <div className="dropdown ms-sm-3 header-item topbar-user">
                            <button type="button" className="btn show border border-1" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                <span className="d-flex align-items-center">
                                {
                                    userPhoto && userPhoto.length !== 0 ? (
                                        <img src={userPhoto} className='rounded-circle header-profile-user' style={{height: "50px", width: "50px"}} />
                                    ) : (
                                        <Link to='/profile'>
                                            <div className='roundedProfile mt-2'>{initials.toUpperCase()}</div>
                                        </Link>
                                    )
                                }
                                   
                                    <span className="text-start ms-xl-2">
                                        <span className="d-none d-xl-inline-block ms-1 fw-medium user-name-text" style={{fontSize: '13px'}}>{UserName}</span>
                                        <span className="d-none d-xl-block ms-1 fs-12 text-muted user-name-sub-text" style={{fontSize : '11px'}}>{userEmail}</span>
                                    </span>
                                </span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-end  w-100 border border-1" data-popper-placement="bottom-end">
                                <h6 className="dropdown-header">Welcome {UserName}</h6>
                                <a className="dropdown-item" href="/profile"><i className="fa-solid fa-user text-muted fs-16 align-middle me-1"></i> <span className="align-middle">Profile</span></a>
                                <div className="dropdown-item" href="apps-chat.html"><i className="fa-solid fa-cart-shopping text-muted fs-16 align-middle me-1"></i> <span className="align-middle"><Link className='text-dark' to={`/cart/${UserID}`} >Cart</Link></span></div>
                                <a className="dropdown-item" href="pages-faqs.html"><i className="fa-solid fa-circle-question text-muted fs-16 align-middle me-1"></i> <span className="align-middle"><Link className='text-dark' to={`/help`} >Help</Link></span></a>
                                <div className="dropdown-divider"></div>
                                <div className="dropdown-item" href="auth-logout-basic.html"><i className="fa-solid fa-heart text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout"><Link className='text-dark' to={`/wishlist/${UserID}`}>wishlist</Link></span></div>
                                <div className="dropdown-item"  onClick={handleLogout} ><i className="fa-solid fa-right-from-bracket text-muted fs-16 align-middle me-1"></i> <span className="align-middle" data-key="t-logout">Logout</span></div>
                            </div>
                        </div>
                        // <div className='d-flex mx-2 mt-2' style={{lineHeight: '37px'}}>
                        //    
                        //     <div className='userName mx-1'>{UserName}</div> 
                        // </div>
                    ) : (
                        <Link to='/LoginSignup' className="btn bg-white mx-2 text-black border border-2 border-black mt-2 rounded-pill">
                            <i className="fa-solid fa-user-shield"></i> login
                        </Link>
                    )
                }
            </nav>
        </div>
    );
}

export default Navbar;
