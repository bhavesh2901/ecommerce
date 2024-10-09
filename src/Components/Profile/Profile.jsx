import React from 'react'
import  './Profile.css';

const Profile = () => {
  return (
    <>
        <div className="container">
            <div className="row profile">
                <div className="col-md-3">
                    <div className="profile-sidebar">
                        <div className="profile-userpic">
                            <img src="https://gravatar.com/avatar/31b64e4876d603ce78e04102c67d6144?s=80&d=https://codepen.io/assets/avatars/user-avatar-80x80-bdcd44a3bfb9a5fd01eb8b86f9e033fa1a9897c3a15b33adfc2649a002dab1b6.png" className="img-responsive" alt=""/>
                        </div>
                        <div className="profile-usertitle">
                            <div className="profile-usertitle-name">
                                Jason Davis
                            </div>
                            <div className="profile-usertitle-job">
                                Developer
                            </div>
                        </div>
                        <div className="profile-userbuttons">
                            <button type="button" className="btn btn-success btn-sm">Follow</button>
                            <button type="button" className="btn btn-danger btn-sm">Message</button>
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
