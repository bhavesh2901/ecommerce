import React, { useState } from 'react'
import './LoginSignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const LoginSignup = () => {
    const [activeClass, setActiveClass] = useState();
    let signupEvent=()=>{
        setActiveClass('right-panel-active');
    }
    let signinEvent=()=>{
        setActiveClass('');
    }
    const navigate = useNavigate()
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    let HandleSubmitAction =async (event)=>
    {
        event.preventDefault();
        try 
        {
            const response = await axios.post('http://localhost:3000/api/login', {
              email,
              password
            });
            // const userData = response.data.user;  // Log the response data
            if(response.data.message=="Login successful")
            {
                 navigate('/', { state: { user: response.data.user } });
            }
        } 
        catch (error) 
        {
            console.error('Error during login:', error);
            // Handle login error
        }
    }
  return (
    <>
        <div className={"container2 "+activeClass} id="container2" style={{margin: '26px auto auto'}}>
            <div className="form-container2 sign-up-container">
                <form >
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Sign Up</button>
                </form>
            </div>
            <div className="container2 sign-in-container">
                <form onSubmit={HandleSubmitAction}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input onChange={e=>setEmail(e.target.value)} type="LoginEmail" placeholder="Email" />
                    <input onChange={e=>setPassword(e.target.value)} type="LoginPassword" placeholder="Password" />
                    <a href="#">Forgot your password?</a> 
                    <button>Sign In</button>
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={() => signinEvent()} id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={() => signupEvent()} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LoginSignup
