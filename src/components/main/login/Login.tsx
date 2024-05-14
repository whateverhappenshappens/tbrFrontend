import { useState } from "react";
import logo from "../../../assets/Logo.png";
import { NavLink } from "react-router-dom";
import ReviewBox, { ReviewProps } from "./ReviewBox";
import googleLogo from "../../../assets/google1.png";
import linkedInLogo from "../../../assets/linkedin.png";
import fbLogo from "../../../assets/facebook1.png";

import "../../../styles/components/Login.css";

import { UserRole, User } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";

const review: ReviewProps = {
  content:
    "I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.",
  name: "Ankit Sinha",
  college: "IIT Guwahati",
  id: "1",
  img: "https://www.mecgale.com/wp-content/uploads/2017/08/dummy-profile.png",
};

const Login = ({ handle_login, setIsLoggedIn }: any) => {
  const [userDetails, setUserDetails] = useState<User>({
    password: "",
    email: "",
    name: "",
    role: UserRole.USER,
  });

  const handle_login_btn = async () => {
    console.log(userDetails);
    // api call
    await UserAPI.login(userDetails , handle_login, setIsLoggedIn);
    setUserDetails({
      password: "",
      email: "",
      name: "",
      role: UserRole.USER,
    });
  };

  return (
    <div className="login-container">
      <div className="left-body">
        <img className="logo" src={logo} alt="Techbairn logo" />
        <h2 className="welcome-text">We are glad you are back !</h2>
        <p className="info">
          Discover the India's best EdTech platform for upskilling yourself with
          community based learning.
        </p>
        <ReviewBox {...review} />
        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
      <div className="right-body">
        <h2 className="login-text">Log In</h2>
        <div className="sign-up-button-box">
          <p className="dont-have-account">Don't have an account ?</p>
          <NavLink className="sign-up-btn" to="/sign-up">
            Sign Up
          </NavLink>
        </div>
        <div className="social-logins">
          <div className="social-login google">
            <img src={googleLogo} alt="google logo" className="google-logo" />
            <span className="company-name">Google</span>
          </div>
          <div className="social-login linked-in">
            <img
              src={linkedInLogo}
              alt="linkedIn logo"
              className="linkedin-logo"
            />
            <span className="company-name">Linkedin</span>
          </div>
          <div className="social-login facebook">
            <img src={fbLogo} alt="fb-logo" className="fb-logo" />
            <span className="company-name">Facebook</span>
          </div>
        </div>
        <p className="or-text">Or</p>
        <p className="input-label email-text">Email</p>
        <input
          className="input"
          type="text"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <p className="input-label">Password</p>
        <input
          className="input"
          type="text"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <div className="forgot-pass-box">
          <div className="remember-me-box">
            {/* <label>
              <input
                className="check-box"
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            </label> */}
            <span className="remember-text">Remember me</span>
          </div>
          <NavLink className="forgot-password-btn" to="/reset-password">
            Forgot Password
          </NavLink>
        </div>
        <div className="log-in-btn" onClick={() => handle_login_btn()}>
          Log In
        </div>
      </div>
    </div>
  );
};

export default Login;

/*

import React from 'react';
import './App.css';
import { FaGoogle } from "react-icons/fa";

function App() {
  return (
    <div className="Main">
      <div className="main_box">
        <aside className="left">
          <h1>TechBairn</h1>
          <h2>Start Your <br />Journey with us</h2>
          <p className='para'>Discover India's best EdTech platform for upskilling yourself with community-based learning.</p>
          <div className="cards">
            <p className='try'>I have done multiple courses with TechBairn, and they have helped me land my first internship with Google. I recommend everyone to at least try their programs once.</p>
            <div className='card_info'>
              <div className='image'></div>
              <p className='info'>John Doe<br />VIT Vellore</p>
            </div>
          </div>
        </aside>
        <div className='right'>
          <NavLink className="sign-up-btn" to="/sign-up">
            Sign Up
          </NavLink>
          <h4>Have an account? <a href="#">Log in</a></h4>
          <label >Fullname</label><br />
          <input className='lng' type="text" placeholder='John Doe' /><br />
          <label >Email</label><br />
          <input className='lng' type="email" placeholder='JohnDoe@abc.com' /><br />
          <label >Password</label><br />
          <input className='lng' type="password" placeholder='Minimum 8 characters' /><br />
          <button className='btn'>Create an account</button>
          <input className='check' type='checkbox' />
          <label >I accept all <span className='extra'><a href='#'>Terms & conditions</a></span></label>
          <p className='cont'>-----or continue with Google----</p>
          <div className="google" >
          <FaGoogle className='icon'/>
            Google</div>
        </div>
      </div>
    </div>
  );
}

export default App;

*/
