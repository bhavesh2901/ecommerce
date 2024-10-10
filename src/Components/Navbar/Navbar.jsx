import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import imagelogo from '../Assests/logo3.jpg';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const user = location.state?.user; // Get user from location state safely

    let initials = '';
    let UserName = '';
    if (user) {
        const nameArray = user[0]['Fullname']?.split(' ');
        if (nameArray && nameArray.length > 1) {
            initials = nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0);
            UserName= "hii "+nameArray[0];
        }
    }

    let [menus, setMenus] = useState('shop');
    
    return (
        <div className=''>
            <nav className="navbar navbar-expand-custom navbar-mainbg">
                <a className="navbar-brand navbar-logo" href="#"></a>
                <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars text-white"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end mt-3" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mx-5">
                        <li className='nav-item'>
                            <div className="hori-selector mx-3 d-flex">
                                <img className='' src={imagelogo} alt="logo"></img>
                                <div class="d-flex">
                                    <input class="form-control mr-sm-2 rounded-lg mx-2 mt-1 rounded-pill" style={{fontSize:'13px'}} type="search" placeholder="Search" size="50" aria-label="Search"/>
                                    <button class="btn mt-1" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                                </div>
                            </div>
                        </li>
                        <li className={menus === "shop" ? "nav-item active rounded-pill" : "nav-item rounded-pill"}>
                            <Link to='/' className="nav-link" onClick={() => setMenus('shop')}><i className="fas fa-tachometer-alt"></i><b>SHOP</b></Link>
                        </li>
                        <li className={menus === "mens" ? "nav-item active rounded-pill" : "nav-item rounded-pill"}>
                            <Link to='/mens' className="nav-link" onClick={() => setMenus('mens')}><i className="fa-solid fa-person"></i><b>MAN</b></Link>
                        </li>
                        <li className={menus === "women" ? "nav-item active rounded-pill" : "nav-item rounded-pill"}>
                            <Link to='/womens' className="nav-link" onClick={() => setMenus('women')}><i className="fa-solid fa-person-dress"></i><b>WOMEN</b></Link>
                        </li>
                        <li className={menus === "kids" ? "nav-item active rounded-pill" : "nav-item rounded-pill"}>
                            <Link to='/kids' className="nav-link" onClick={() => setMenus('kids')}><i className="fa-sharp fa-solid fa-baby"></i><b>KIDS</b></Link>
                        </li>
                    </ul>
                </div>
               {/* Show initials and full username if user exists, otherwise show login button */}
                    {user ? (
                        <div className='d-flex mx-2 mt-2' style={{lineHeight: '37px'}}>
                             <Link to='/profile' ><div className='roundedProfile'>{initials.toUpperCase()}</div> </Link>
                            <div className='userName mx-1'>{UserName}</div> {/* Display the username */}
                        </div>
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
