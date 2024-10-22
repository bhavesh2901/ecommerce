import React from 'react';
import './Reviewslist.css';
import StarRating from '../../Components/Starrating/Starrating';
const Reviewslist = ({item}) => {
    const nameArray = item.Fullname?.split(' ');
    var initials = '';
    var UserName = '';
    if (nameArray && nameArray.length > 1) {
        initials = nameArray[0]?.charAt(0) + nameArray[1]?.charAt(0);
        UserName= nameArray[0];
    }
  return (
    <>
        <section id="testimonials mx-2 shadow " className=''>
            {/* <!--testimonials-box-container------> */}
            <div className="testimonial-box-container">
                {/* <!--BOX-1--------------> */}
                <div className="testimonial-box">
                    {/* <!--top-------------------------> */}
                    <div className="box-top">
                        {/* <!--profile-----> */}
                        <div className="profile">
                            {/* <!--img----> */}
                            <div className="mx-2">
                                 {
                                    item.profile_image && item.profile_image.length !== 0 ? (
                                        <img src={item.profile_image} className='rounded-circle header-profile-user' style={{height: "40px", width: "40px"}} />
                                    ) : (
                                            <div className='roundedProfile mt-2'>{initials.toUpperCase()}</div>
                                    )
                                }
                            </div>
                            {/* <!--name-and-username--> */}
                            <div className="name-user">
                                <strong className='text-start' style={{fontSize:'15px'}}>{UserName}</strong>
                                <small style={{fontSize:'12px'}}>{item.Email}</small>
                                {/* <span>@liammendes</span> */}
                            </div>
                        </div>
                        {/* <!--reviews------> */}
                        <div className="reviews">
                         <StarRating rating={item.rating} fontsize={'20px'} />
                            {/* <!--Empty star--> */}
                        </div>
                    </div>
                    {/* <!--Comments----------------------------------------> */}
                    <div className="client-comment mx-2 mt-2" style={{textAlign: 'left'}}>
                        <p>{item.review}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviewslist
