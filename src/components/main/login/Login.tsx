// import { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import ReviewSlider from "./ReviewSlider";
// import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// import "../../../styles/components/Login.css";
// import { UserRole, User } from "../../../types/User";
// import { UserAPI } from "../../../apis/UserAPIs";
// import Signup from "../Sign/Signup"; // Import the Signup component
// import logo2 from "./Tlogo.svg";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

// const Login = ({ handle_login, setIsLoggedIn, setloggedInUserEmail }: any) => {
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState<User>({
//     password: "",
//     email: "",
//     name: "",
//     role: UserRole.USER,
//   });

//   const [errors, setErrors] = useState<{ email: string; password: string }>({
//     email: "",
//     password: "",
//   });

//   const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);

//   const validateForm = () => {
//     let valid = true;
//     let emailError = "";
//     let passwordError = "";

//     if (!userDetails.email) {
//       emailError = "Email is required.";
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
//       emailError = "Invalid email format.";
//       valid = false;
//     }

//     if (!userDetails.password) {
//       passwordError = "Password is required.";
//       valid = false;
//     } else if (userDetails.password.length < 8) {
//       passwordError = "Password must be at least 8 characters.";
//       valid = false;
//     }

//     setErrors({ email: emailError, password: passwordError });
//     return valid;
//   };

//   const handle_login_btn = async () => {
//     if (validateForm()) {
//       console.log("User Details: ", userDetails);
//       try {
//         const res = await UserAPI.login(
//           userDetails,
//           handle_login,
//           setIsLoggedIn
//         );
//         console.log("Login Response: ", res.data); // Debugging log
//         if (res.data && res.data.email) {
//           setloggedInUserEmail(res.data.email); // Ensure this line is executed
//           console.log("Setting loggedInUserEmail to: ", res.data.email); // Debugging log
//         } else {
//           console.log("Email not found in response"); // Debugging log
//         }
//         setUserDetails({
//           password: "",
//           email: "",
//           name: "",
//           role: UserRole.USER,
//         });
//         setIsVisible(false);
//         navigate("/");
//       } catch (e) {
//         console.error("Login Error: ", e);
//       }
//     }
//   };

//   const toggleSignupPopup = () => {
//     setIsSignupPopupVisible(!isSignupPopupVisible);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleGoogleSuccess = (response: any) => {
//     console.log(response);
//     setIsVisible(false);
//   };

//   const handleGoogleFailure = (response: any) => {
//     console.error(response);
//   };

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <GoogleOAuthProvider clientId="">
//       <div className="main_box">
//         <aside className="left">
//           <img src={logo2} alt="TechBairn Logo" className="logo" />
//           <h2>
//             We are glad <br />
//             you are back!
//           </h2>
//           <p className="para">
//             Discover India's best EdTech platform for upskilling yourself with
//             community-based learning.
//           </p>
//           <ReviewSlider />
//         </aside>
//         <div className="right">
//           <h1>Log In</h1>
//           <h3>
//             Don't have an account?{" "}
//             <button onClick={toggleSignupPopup} className="signup-link">
//               Sign Up
//             </button>
//           </h3>

//           <label>Email</label>
//           <br />
//           <input
//             className="lng"
//             type="email"
//             placeholder="JohnDoe@abc.com"
//             value={userDetails.email}
//             onChange={(e) =>
//               setUserDetails({ ...userDetails, email: e.target.value })
//             }
//           />
//           {errors.email && <div className="error">{errors.email}</div>}

//           <label>Password</label>
//           <br />
//           <div className="password-container">
//             <input
//               className="lng"
//               type={showPassword ? "text" : "password"}
//               placeholder="Minimum 8 characters"
//               value={userDetails.password}
//               onChange={(e) =>
//                 setUserDetails({ ...userDetails, password: e.target.value })
//               }
//             />
//             <button
//               type="button"
//               className="eye-icon"
//               onClick={togglePasswordVisibility}
//             >
//               {showPassword ? (
//                 <FaEyeSlash className="icon" />
//               ) : (
//                 <FaEye className="icon" />
//               )}
//             </button>
//           </div>
//           {errors.password && <div className="error">{errors.password}</div>}

//           <div className="new">
//             <div>
//               <input type="checkbox" className="rem" />
//               <span className="add">Remember me</span>
//             </div>
//             <div className="pass">Forget Password?</div>
//           </div>
//           <button className="btn1" onClick={handle_login_btn}>
//             Log In
//           </button>
//           <p className="cont">-------or continue login with--------</p>

//           <div className="google1">
//             <GoogleLogin
//               onSuccess={handleGoogleSuccess}
//               onFailure={handleGoogleFailure}
//               cookiePolicy={"single_host_origin"}
//               render={(renderProps) => (
//                 <button
//                   onClick={renderProps.onClick}
//                   disabled={renderProps.disabled}
//                 >
//                   Google
//                 </button>
//               )}
//             />
//           </div>
//         </div>
//         {isSignupPopupVisible && (
//           <div className="signup absolute w-[100%] ml-[114px] overflow-y-hidden h-full bg-white top-[0%] border">
//             <Signup />
//           </div>
//         )}
//       </div>
//     </GoogleOAuthProvider>
//   );
// };

// export default Login;

import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../styles/components/Login.css";
import { UserRole, User } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";
import Signup from "../Sign/Signup"; // Import the Signup component
import logo2 from "../../../assets/techbairn logo black-01.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const Login = ({ handle_login, setIsLoggedIn, setloggedInUserEmail }: any) => {
  const navigate = useNavigate();
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

  const [isSignupPopupVisible, setIsSignupPopupVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
      console.log("User Details: ", userDetails);
      try {
        const res = await UserAPI.login(
          userDetails,
          handle_login,
          setIsLoggedIn
        );
        console.log("Login Response: ", res.data); // Debugging log
        if (res.data && res.data.email) {
          setloggedInUserEmail(res.data.email); // Ensure this line is executed
          console.log("Setting loggedInUserEmail to: ", res.data.email); // Debugging log
        } else {
          console.log("Email not found in response"); // Debugging log
        }
        setUserDetails({
          password: "",
          email: "",
          name: "",
          role: UserRole.USER,
        });
        setIsVisible(false);
        navigate("/");
      } catch (e) {
        console.error("Login Error: ", e);
      }
    }
  };

  const toggleSignupPopup = () => {
    setIsSignupPopupVisible(!isSignupPopupVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSuccess = (response: any) => {
    console.log(response);
    setIsVisible(false);
  };

  const handleGoogleFailure = (response: any) => {
    console.error(response);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <GoogleOAuthProvider clientId="">
      <div className="main_box">
        <aside className="left">
          <img
            src={logo2} // Replace with the path to your logo image
            alt="TechBairn Logo"
            className="logo121" // Add a custom class for styling
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
            style={{ fontSize: "16px" }}
            type="email"
            placeholder="JohnDoe@abc.com"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
          />
          {errors.email && <div className="error">{errors.email}</div>}

          <label>Password</label>
          <br />
          <div className="password-container">
            <input
              className="lng"
              style={{ fontSize: "20px" }}
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              value={userDetails.password}
              onChange={(e) =>
                setUserDetails({ ...userDetails, password: e.target.value })
              }
            />
            <button
              type="button"
              className="eye-icon"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <FaEyeSlash className="icon" />
              ) : (
                <FaEye className="icon" />
              )}
            </button>
          </div>
          {errors.password && <div className="error">{errors.password}</div>}

          <div className="new">
            {/* <div>
              <input type="checkbox" className="rem" />
              <span className="add">Remember me</span>
            </div> */}
            <div className="pass">Forget Password?</div>
          </div>
          <button className="btn1" onClick={handle_login_btn}>
            Log In
          </button>
          <p className="cont">-------or continue login with--------</p>

          <div className="google1">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              cookiePolicy={"single_host_origin"}
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Google
                </button>
              )}
            />
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
