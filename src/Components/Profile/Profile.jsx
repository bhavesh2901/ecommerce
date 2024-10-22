import React from 'react'
import  './Profile.css';
import { UserProvider  ,useUser} from '../../UserContext';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    let UserName = '';
    let initials = '';
    let UserID = '';
    let userEmail = '';
    let userPhone = '';
    const { user } = useUser();
    if (user) {
        const nameArray = user['Fullname']?.split(' ');
         UserID = user['id'];
         userEmail = user['Email'];
         userPhone = user['Phone_number'];
        if (nameArray && nameArray.length > 1) {
            initials = nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0);
            UserName= user['Fullname'];
            
        }
    }
    else
    {
        navigate('/LoginSignup');
    }

    
  return (
    <>
   
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            {initials.toUpperCase()}
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                {UserName}
                            </div>
                            <div className="profile-usertitle-job">
                                {userEmail}
                            </div>
                        </div>
                        <div className="profile-userbuttons">
                            <button type="button" className="btn btn-success btn-sm">Wish List</button>
                            <button type="button" className="btn btn-danger btn-sm">$100000</button>
                        </div>
                        <div className="profile-usermenu">
                            <ul className="nav">
                                <li className="active">
                                    <a href="#">
                                    <i className="glyphicon glyphicon-home"></i>
                                    Overview </a>
                                </li>
                                <li>
                                    <a href="https://codepen.io/jasondavis/pen/jVRwaG?editors=1000">
                                    <i className="glyphicon glyphicon-user"></i>
                                    Account Settings </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                    <i className="glyphicon glyphicon-ok"></i>
                                    Tasks </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="glyphicon glyphicon-flag"></i>
                                    Help </a>
                                </li>
                            </ul>
                        </div>
                        <div className="portlet light bordered">
                            <div className="row list-separated profile-stat">
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title"> 37 </div>
                                    <div className="uppercase profile-stat-text"> Projects </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title"> 51 </div>
                                    <div className="uppercase profile-stat-text"> Tasks </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-6">
                                    <div className="uppercase profile-stat-title"> 61 </div>
                                    <div className="uppercase profile-stat-text"> Uploads </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="profile-desc-title">About Jason Davis</h4>
                                <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore. </span>
                                <div className="margin-top-20 profile-desc-link">
                                    <i className="fa fa-globe"></i>
                                    <a href="https://www.apollowebstudio.com">apollowebstudio.com</a>
                                </div>
                                <div className="margin-top-20 profile-desc-link">
                                    <i className="fa fa-twitter"></i>
                                    <a href="https://www.twitter.com/jasondavisfl/">@jasondavisfl</a>
                                </div>
                                <div className="margin-top-20 profile-desc-link">
                                    <i className="fa fa-facebook"></i>
                                    <a href="https://www.facebook.com/">JasonDavisFL</a>
                                </div>
                            </div>
                        </div>                   
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="profile-content">
                    Some user related content goes here...
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile
