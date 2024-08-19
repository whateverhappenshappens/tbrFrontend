import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReviewSlider from "./ReviewSlider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../../../styles/components/Login.css";
import { UserRole } from "../../../types/User";
import { UserAPI } from "../../../apis/UserAPIs";
import Signup from "../Sign/Signup"; // Import the Signup component
import logo2 from "../../../assets/techbairn logo white-01.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
const Login = ({ handle_login, setIsLoggedIn, setloggedInUserEmail }) => {
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
    const validateForm = () => {
        let valid = true;
        let emailError = "";
        let passwordError = "";
        if (!userDetails.email) {
            emailError = "Email is required.";
            valid = false;
        }
        else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
            emailError = "Invalid email format.";
            valid = false;
        }
        if (!userDetails.password) {
            passwordError = "Password is required.";
            valid = false;
        }
        else if (userDetails.password.length < 8) {
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
                const res = await UserAPI.login(userDetails, handle_login, setIsLoggedIn);
                console.log("Login Response: ", res.data); // Debugging log
                if (res.data && res.data.email) {
                    setloggedInUserEmail(res.data.email); // Ensure this line is executed
                    console.log("Setting loggedInUserEmail to: ", res.data.email); // Debugging log
                }
                else {
                    console.log("Email not found in response"); // Debugging log
                }
                setUserDetails({
                    password: "",
                    email: "",
                    name: "",
                    role: UserRole.USER,
                });
                setIsVisible(false);
                setTimeout(() => navigate("/"), 100); // Add a small delay before navigating
            }
            catch (e) {
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
    // const handleGoogleSuccess = (response: any) => {
    //   console.log(response);
    //   setIsVisible(false);
    //   window.location.href = 'http://3.7.45.90:8080/oauth2/authorization/google';
    // };
    const handleLogin = () => {
        window.location.href = 'http://3.7.45.90:8080/oauth2/authorization/google';
    };
    if (!isVisible) {
        return null;
    }
    return (_jsx(GoogleOAuthProvider, { clientId: "", children: _jsxs("div", { className: "main_box", children: [_jsxs("aside", { className: "left", children: [_jsx("img", { src: logo2, alt: "TechBairn Logo", className: "logo121" }), _jsxs("h2", { children: ["We are glad ", _jsx("br", {}), "you are back!"] }), _jsx("p", { className: "para", children: "Discover India's best EdTech platform for upskilling yourself with community-based learning." }), _jsx(ReviewSlider, {})] }), _jsxs("div", { className: "right", children: [_jsx("h1", { children: "Log In" }), _jsxs("h3", { children: ["Don't have an account?", " ", _jsx("button", { onClick: toggleSignupPopup, className: "signup-link", children: "Sign Up" })] }), _jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("input", { className: "lng", type: "email", placeholder: "JohnDoe@abc.com", value: userDetails.email, onChange: (e) => setUserDetails({ ...userDetails, email: e.target.value }) }), errors.email && _jsx("div", { className: "error", children: errors.email }), _jsx("label", { children: "Password" }), _jsx("br", {}), _jsxs("div", { className: "password-container", children: [_jsx("input", { className: "lng", type: showPassword ? "text" : "password", placeholder: "Minimum 8 characters", value: userDetails.password, onChange: (e) => setUserDetails({ ...userDetails, password: e.target.value }) }), _jsx("button", { type: "button", className: "eye-icon", onClick: togglePasswordVisibility, children: showPassword ? (_jsx(FaEyeSlash, { className: "icon" })) : (_jsx(FaEye, { className: "icon" })) })] }), errors.password && _jsx("div", { className: "error", children: errors.password }), _jsx("div", { className: "new", children: _jsx("div", { className: "pass", children: "Forget Password?" }) }), _jsx("button", { className: "btn1", onClick: handle_login_btn, children: "Log In" }), _jsx("p", { className: "cont", children: "-------or continue login with--------" }), _jsx("div", { className: "google", children: _jsx("button", { onClick: handleLogin, children: "Google" }) })] }), isSignupPopupVisible && (_jsx("div", { className: "signup absolute w-[100%] ml-[114px] overflow-y-hidden h-full bg-white top-[0%] border", children: _jsx(Signup, {}) }))] }) }));
};
export default Login;
