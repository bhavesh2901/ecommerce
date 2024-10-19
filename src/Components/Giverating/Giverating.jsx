import React, { useState } from 'react';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
const Giverating = ({ productId, userId ,fetchProducts ,fetchreviews }) => {
  const [rating, setRating] = useState(0);
  const [reviewtext , setReviewtext] = useState('');
  const handleStarClick = async (star) => {
    setRating(star);
  };
  const sendReview = async () => {
    if(rating!='' && reviewtext!=''){
      try {
        await axios.post('http://localhost:3000/api/rate-product', {
          product_id: productId,
          user_id: userId,
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
      <section id="testimonials mx-2 shadow">
            {/* <!--testimonials-box-container------> */}
            <div className="testimonial-box-container">
                {/* <!--BOX-1--------------> */}
                <div className="testimonial-box p-3">
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
