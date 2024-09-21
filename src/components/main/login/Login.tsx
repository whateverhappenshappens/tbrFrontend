import {useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../styles/components/Login.css";
import { UserRole } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";
import Signup from "../Sign/Signup";
import logo2 from "../../../assets/techbairn logo white-01.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Circles } from "react-loader-spinner";

interface LoginProps {
  handle_login: () => void;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setloggedInUserEmail: (email: string) => void;
}

const Login: React.FC<LoginProps> = ({ handle_login, setIsLoggedIn, setloggedInUserEmail }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    password: "",
    email: "",
    name: "",
    role: UserRole.USER,
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);


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
      setIsLoading(true);
      try {
        const res = await UserAPI.login(userDetails, handle_login, setIsLoggedIn);
        if (res.data && res.data.email) {
          setloggedInUserEmail(res.data.email);
        }
        setUserDetails({
          password: "",
          email: "",
          name: "",
          role: UserRole.USER,
        });
        setIsVisible(false);
        setTimeout(() => navigate("/"), 100);
      } catch (e) {
        console.error("Login Error: ", e);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const toggleSignupPopup = () => {
    setIsSignupPopupVisible(!isSignupPopupVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    window.location.href = 'http://3.7.45.90:8080/oauth2/authorization/google';
  };

  if (!isVisible) {
    return null;
  }


  return (
    <GoogleOAuthProvider clientId="">
      <div className="main_box">
        <aside className="left">
          <img src={logo2} alt="TechBairn Logo" className="logo121" />
          <h2>
            We are glad <br />
            you are back!
          </h2>
          <p className="para">
            Discover India's best EdTech platform for upskilling yourself with community-based learning.
          </p>
          <ReviewSlider />
        </aside>
        <div className="right">
          <h1>Log In</h1>
          <h3>
            Don't have an account?{" "}
            <button onClick={toggleSignupPopup} className="signup-link">
              Sign Up
            </button>
          </h3>
          <label>Email</label>
          <br />
          <input
            className="lng"
            type="email"
            placeholder="JohnDoe@abc.com"
            value={userDetails.email}
            onChange={(e) => {
              validateForm()
              setUserDetails({ ...userDetails, email: e.target.value })
            } }
          />
          {errors.email && <div className={`error text-lg capitalize text-red-600 ${userDetails.email.length == 0 ? 'hidden' : 'block'}`}>{errors.email}</div>}
          <label>Password</label>
          <br />
          <div className="password-container">
            <input
              className="lng"
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              value={userDetails.password}
              onChange={(e) => {
                validateForm()
                setUserDetails({ ...userDetails, password: e.target.value })
              }}
            />
            <button type="button" className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash className="icon" /> : <FaEye className="icon" />}
            </button>
          </div>
          {errors.password && <div className={`error text-lg capitalize text-red-600 ${userDetails.password.length == 0 ? 'hidden' : 'block'}`}>{errors.password}</div>}
          <br />
          <button className="btn1" onClick={handle_login_btn} disabled={isLoading}>
            {isLoading ? (
              <Circles
                height="40"
                width="40"
                color="#000"
                ariaLabel="circles-loading"
                wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                visible={true}
              />
            ) : (
              "Log In"
            )}
          </button>
          <p className="cont">-------or continue login with--------</p>
          <div className="google">
          <FaGoogle className="icon12" />
            <button onClick={handleLogin}>Google</button>
          </div>
        </div>
        {isSignupPopupVisible && (
          <div className="signup absolute w-[100%] ml-[114px] overflow-y-hidden h-full bg-white top-[0%] border">
            <Signup />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
