import { useState } from "react";
import { NavLink } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
import { FaGoogle } from "react-icons/fa";
import "../../../styles/components/Login.css";
import { UserRole, User } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";
import Signup from "../Sign/Signup"; // Import the Signup component
import logo2 from "./Tlogo.svg";

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

  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false); // State to manage signup popup visibility

  const validateForm = () => {
    let valid = true;
    let emailError = "";
    let passwordError = "";

    if (!userDetails.email) {
      emailError = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
      emailError = "Invalid email format.";
      valid = false;
    }

    if (!userDetails.password) {
      passwordError = "Password is required.";
      valid = false;
    } else if (userDetails.password.length < 8) {
      passwordError = "Password must be at least 8 characters.";
      valid = false;
    }

    setErrors({ email: emailError, password: passwordError });
    return valid;
  };

  const handle_login_btn = async () => {
    if (validateForm()) {
      console.log(userDetails);
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
    }
  };

  const toggleSignupPopup = () => {
    setIsSignupPopupVisible(!isSignupPopupVisible);
  };

  return (
    <div className="main_box">
      <aside className="left">
      <img
          src={logo2} // Replace with the path to your logo image
          alt="TechBairn Logo"
          className="logo" // Add a custom class for styling
        />
        <h2>
          We are glad <br />
          you are back!
        </h2>
        <p className="para">
          Discover India's best EdTech platform for upskilling yourself with
          community-based learning.
        </p>
        <ReviewSlider />
      </aside>
      <div className="right">
        <h1>Log in</h1>
        <h3>
          Don't have an account? <button onClick={toggleSignupPopup} className="signup-link">Sign up</button>
        </h3>

        <label>Email</label>
        <br />
        <input
          className="lng"
          type="email"
          placeholder="JohnDoe@abc.com"
          value={userDetails.email}
          onChange={(e) =>
            setUserDetails({ ...userDetails, email: e.target.value })
          }
        />
        <br />
        {errors.email && <div className="error">{errors.email}</div>}

        <label>Password</label>
        <br />
        <input
          className="lng"
          type="password"
          placeholder="Minimum 8 characters"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <br />
        {errors.password && <div className="error">{errors.password}</div>}

        <div className="new">
          <div>
            <input type="checkbox" className="rem" />
            <span className="add">Remember me</span>
          </div>
          <div className="pass">Forget Password?</div>
        </div>
        <button className="btn1" onClick={handle_login_btn}>
          Log in
        </button>
        <p className="cont">-------or continue login with--------</p>
        <a href="/oauth2/authorization/google">
          <div className="google">
            <FaGoogle className="icon" />
            Google
          </div>
        </a>
      </div>
      {isSignupPopupVisible && (
        <div className="login-pop absolute w-[100%] ml-[102px] overflow-y-hidden h-full bg-white top-[0%] border">
          <Signup />
        </div>
      )}
    </div>
  );
};

export default Login;
