import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './Giverating.css';
import { UserProvider , useUser } from '../../UserContext';
const Giverating = ({ productId, userId ,fetchProducts ,fetchreviews }) => {
  const [rating, setRating] = useState(0);
  const [reviewtext , setReviewtext] = useState('');
  const handleStarClick = async (star) => {
    setRating(star);
  };
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
  const sendReview = async () => {
    if(rating!='' && reviewtext!=''){
      try {
        await axios.post('http://localhost:3000/api/rate-product', {
          product_id: productId,
          user_id: UserID,
          reviewtext : reviewtext,
          rating: rating,
        });
        toast('⭐ Thank You For Review', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setRating(0);
        setReviewtext('');
        fetchProducts();
        fetchreviews();
      } catch (error) {
        console.error('Error submitting rating:', error);
        toast('❌ SOMETHING WRONG', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    else
    {
      toast('✍️ Enter Review or Select ⭐ ', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
 

  return (
    <div>
      <section id="" className='mx-2 giverrate'>
            {/* <!--testimonials-box-container------> */}
            <div className="testimonial-box-container">
                {/* <!--BOX-1--------------> */}
                <div className="w-100 p-3" style={{backgroundColor: 'none'}}>
                    {/* <!--top-------------------------> */}
                    <div className="box-top">
                        {/* <!--profile-----> */}
                        <div className="profile">
                            {/* <!--img----> */}
                            <div className="mx-2">
                                {
                                    userPhoto && userPhoto.length !== 0 ? (
                                        <img src={userPhoto} className='rounded-circle header-profile-user' style={{height: "50px", width: "50px"}} />
                                    ) : (
                                        <Link to='/profile'>
                                            <div className='roundedProfile mt-2'>{initials.toUpperCase()}</div>
                                        </Link>
                                    )
                                }
                            </div>
                            {/* <!--name-and-username--> */}
                            <div className="name-user">
                                <strong>{UserName}</strong>
                                {/* <span>@liammendes</span> */}
                            </div>
                        </div>
                        {/* <!--reviews------> */}
                        <div className="reviews">
                            {/* <!--Empty star--> */}
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                  key={star}
                                  onClick={() => handleStarClick(star)}
                                  style={{
                                    cursor: 'pointer',
                                    color: star <= rating ? 'gold' : 'gray',
                                    fontSize: '2em',
                                  }}
                                >
                                  ★
                                </span>
                              ))}
                        </div>
                    </div>
                    {/* <!--Comments----------------------------------------> */}
                    <div className="client-comment" style={{textAlign: 'left'}}>
                        <div className='row mb-2'>
                            <div className='col-lg-11'><input onChange={e=>setReviewtext(e.target.value)} value={reviewtext} className='form-control shadow reviewinput' placeholder='Write reviews..'/></div>
                            <div className='col-lg-1'><button onClick={sendReview}  className='btn btn-primary float-end'>send</button></div>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    </div>
  );
};

export default Giverating;
