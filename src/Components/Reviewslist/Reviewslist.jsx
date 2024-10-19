import React from 'react';
import './Reviewslist.css';
import StarRating from '../../Components/Starrating/Starrating';
const Reviewslist = ({item}) => {
  return (
    <>
        <section id="testimonials mx-2 shadow">
            {/* <!--testimonials-box-container------> */}
            <div className="testimonial-box-container">
                {/* <!--BOX-1--------------> */}
                <div className="testimonial-box">
                    {/* <!--top-------------------------> */}
                    <div className="box-top">
                        {/* <!--profile-----> */}
                        <div className="profile">
                            {/* <!--img----> */}
                            <div className="profile-img">
                                <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" />
                            </div>
                            {/* <!--name-and-username--> */}
                            <div className="name-user">
                                <strong>Liam mendes</strong>
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
                    <div className="client-comment mx-2" style={{textAlign: 'left'}}>
                        <p>{item.review}</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Reviewslist
