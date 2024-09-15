import "./Signup.css";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { UserAPI } from "../../../apis/UserAPIs";
import { User, UserRole } from "../../../types/User";
import { FormError } from "../../../types/FormError";
import ReviewSlider from "./ReviewSlider1";
import Login from "../login/Login"; // Import the Login component
import logo1 from "../../../assets/techbairn logo white-01.png";
import { Navigate, useNavigate } from "react-router-dom"; // Import useHistory
import { Circles } from "react-loader-spinner";
function Signup({ setIsLoggedIn }: any) {
  const Navigate = useNavigate(); // Initialize useHistory

  const [userDetails, setUserDetails] = useState<User>({
    password: "",
    email: "",
    name: "",
    role: UserRole.USER,
  });
  const [formError, setFormError] = useState<FormError>({
    email: "",
    password: "",
  });

  const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false); // State to manage login popup visibility
  const [isChecked, setIsChecked] = useState(false); // State to track the checkbox
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [isLoading, setIsLoading] = useState(false);
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleInputChange = (event: any) => {
    const { name, value }: any = event.target;

    setUserDetails({ ...userDetails, [name]: value });

    if (name === "email") {
      if (!validateEmail(value))
        setFormError({ ...formError, email: "Invalid Email Format!" });
      else setFormError({ ...formError, email: "" });
    }

    if (name === "password") {
      if (value.length < 8)
        setFormError({
          ...formError,
          password: "Password must be 8 characters long!",
        });
      else setFormError({ ...formError, password: "" });
    }
  };

  const handle_signup = async () => {
    console.log(userDetails);
    setIsLoggedIn(true);
    if (!isChecked) {
      alert("Please accept the Terms & Conditions to create an account.");
      return;
    }

    if (!formError.email && !formError.password) {
      try {
        await UserAPI.create(userDetails);
        setUserDetails({
          password: "",
          email: "",
          name: "",
          role: UserRole.USER,
        });
        setFormError({ email: "", password: "" });
        setIsChecked(false);
        
      } catch (error) {
        console.error("Signup failed:", error);
        alert("Signup failed: " + error.message); // Show alert with error message
      }
    } else {
      alert("Cannot create your account! Please correct the errors."); // Show alert if form validation fails
    }
  };

  useEffect(() => {
    console.log(formError);
  }, [formError]);

  const toggleLoginPopup = () => {
    setIsLoginPopupVisible(!isLoginPopupVisible);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const isFormValid = () => {
    return (
      validateEmail(userDetails.email) &&
      validatePassword(userDetails.password) &&
      isChecked
    );
  };

  const handleLogin = () => {
    window.location.href = 'http://3.7.45.90:8080/oauth2/authorization/google';
  };

  return (
    <div className="main_box">
      <aside className="left">
        <img
          src={logo1} // Replace with the path to your logo image
          alt="TechBairn Logo"
          className="logo121" // Add a custom class for styling
        />
        <h2>
          Start Your <br />
          Journey with us
        </h2>
        <p className="para">
          Discover India's best EdTech platform for upskilling yourself with
          community-based learning.
        </p>
        <ReviewSlider />
      </aside>
      <div className="right">
        <h1>Sign Up</h1>
        <h3>
          Have an account?{" "}
          <button onClick={toggleLoginPopup} className="login-link">
            Log In
          </button>
        </h3>
        <div className="wow">
          <label>Full Name</label>
          <br />
          <input
            className="lng"
            type="text"
            placeholder="John Doe"
            value={userDetails.name}
            onChange={(event) =>
              setUserDetails({ ...userDetails, name: event.target.value })
            }
          />
          <br />
          <label>Email</label>
          <br />
          <input
            className={`lng ${formError.email ? "error-input" : ""}`}
            type="email"
            placeholder="JohnDoe@abc.com"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
          />
          <label>Password</label>
          <br />
          <div className="password-container">
            <input
              className={`lng ${formError.password ? "error-input" : ""}`}
              type={showPassword ? "text" : "password"}
              placeholder="Minimum 8 characters"
              name="password"
              value={userDetails.password}
              onChange={handleInputChange}
            />
            <button
              type="button"
              className="eye-icon"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <input
            className="check"
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <span className="ex1">
            I accept all <span className="ex">Terms & conditions</span>
          </span>
          <br />
          <button
  className="btn"
  onClick={handle_signup}
  disabled={!isFormValid() || isLoading} // Disable the button when the form is invalid or loading
>
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
    "Create an account"
  )}
</button>

          <p className="cont">-----or continue with Google------</p>
          <div className="google">
            <FaGoogle className="icon12" />
            <button onClick={handleLogin}>Google</button>
          </div>
        </div>
      </div>
      {isLoginPopupVisible && (
        <div className="login absolute w-[100%] ml-[114px] h-full overflow-y-hidden bg-white border">
          <Login />
        </div>
      )}
    </div>
  );
}

export default Signup;
