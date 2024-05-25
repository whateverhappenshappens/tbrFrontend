import { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewBox, { ReviewProps } from "./ReviewBox";
import { FaGoogle } from "react-icons/fa";
import "../../../styles/components/Login.css";

import { UserRole, User } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";

const review: ReviewProps = {
  content:
    "I have done multiple courses with TechBairn and they have helped me land my first internship with Google.I recommend everyone to at least try their programs once.",
  name: "Ankit Sinha",
  college: "KIIT University",
  id: "1",
  img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
};

const Login = ({ handle_login, setIsLoggedIn }: any) => {
  const [userDetails, setUserDetails] = useState<User>({
    password: "",
    email: "",
    name: "",
    role: UserRole.USER,
  });

  const [errors, setErrors] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    if (!userDetails.email) {
      emailError="Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      emailError="Email is required.";
      valid = false;
    }

    if (!userDetails.password) {
      passwordError="Password is required.";
      valid = false;
    } else if (userDetails.password.length < 8) {
      passwordError="Password must be at least 8 characters.";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handle_login_btn = async () => {

    if (validateForm()) {
      console.log(userDetails);
      // api call

    console.log(userDetails);
    // api call
    try {
      await UserAPI.login(userDetails, handle_login, setIsLoggedIn);
      setUserDetails({
        password: "",
        email: "",
        name: "",
        role: UserRole.USER,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="main_box">
      <aside className="left">
        <h1>TechBairn</h1>
        <h2>We are glad <br />you are back!</h2>
        <p className='para'>Discover the India's best EdTech platform for upskilling yourself with community based learning.</p>
        <ReviewBox {...review} />
      </aside>
      <div className='right'>
        <h1>Log in</h1>
        <h3>Don't have an account? <a href="#">Sign up</a></h3>
        
        <label>Email</label><br />
        <input className='lng' type="email" placeholder='JohnDoe@abc.com' value={userDetails.email}
          onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} /><br />
        {errors.email && <div className="error">{errors.email}</div>}
        
        <label>Password</label><br />
        <input className='lng' type="password" placeholder='Minimum 8 characters' value={userDetails.password}
          onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} /><br />
        {errors.password && <div className="error">{errors.password}</div>}
        
        <div className="new">
          <div>
            <input type="checkbox" className="rem" /><span className="add">Remember me</span>
          </div>
          <div className="pass">Forget Password?</div>
        </div>
        <button className='btn1' onClick={handle_login_btn}>Log in</button>
        <p className='cont'>-------or continue login with--------</p>
        <a href="#"><div className="google">
          <FaGoogle className='icon' />
          Google
        </div></a>
      </div>
    </div>
  );
};

export default Login;
