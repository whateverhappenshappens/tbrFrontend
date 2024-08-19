import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Signup.css";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { useState, useEffect } from "react";
import { UserAPI } from "../../../apis/UserAPIs";
import { UserRole } from "../../../types/User";
import ReviewSlider from "./ReviewSlider1";
import Login from "../login/Login"; // Import the Login component
import logo1 from "../../../assets/techbairn logo white-01.png";
import { useNavigate } from "react-router-dom"; // Import useHistory
function Signup({ setIsLoggedIn }) {
    const Navigate = useNavigate(); // Initialize useHistory
    const [userDetails, setUserDetails] = useState({
        password: "",
        email: "",
        name: "",
        role: UserRole.USER,
    });
    const [formError, setFormError] = useState({
        email: "",
        password: "",
    });
    const [isLoginPopupVisible, setIsLoginPopupVisible] = useState(false); // State to manage login popup visibility
    const [isChecked, setIsChecked] = useState(false); // State to track the checkbox
    const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };
    const validatePassword = (password) => {
        return password.length >= 8;
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserDetails({ ...userDetails, [name]: value });
        if (name === "email") {
            if (!validateEmail(value))
                setFormError({ ...formError, email: "Invalid Email Format!" });
            else
                setFormError({ ...formError, email: "" });
        }
        if (name === "password") {
            if (value.length < 8)
                setFormError({
                    ...formError,
                    password: "Password must be 8 characters long!",
                });
            else
                setFormError({ ...formError, password: "" });
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
            }
            catch (error) {
                console.error("Signup failed:", error);
                alert("Signup failed: " + error.message); // Show alert with error message
            }
        }
        else {
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
        return (validateEmail(userDetails.email) &&
            validatePassword(userDetails.password) &&
            isChecked);
    };
    const handleLogin = () => {
        window.location.href = 'http://3.7.45.90:8080/oauth2/authorization/google';
    };
    return (_jsxs("div", { className: "main_box", children: [_jsxs("aside", { className: "left", children: [_jsx("img", { src: logo1, alt: "TechBairn Logo", className: "logo121" // Add a custom class for styling
                     }), _jsxs("h2", { children: ["Start Your ", _jsx("br", {}), "Journey with us"] }), _jsx("p", { className: "para", children: "Discover India's best EdTech platform for upskilling yourself with community-based learning." }), _jsx(ReviewSlider, {})] }), _jsxs("div", { className: "right", children: [_jsx("h1", { children: "Sign Up" }), _jsxs("h3", { children: ["Have an account?", " ", _jsx("button", { onClick: toggleLoginPopup, className: "login-link", children: "Log In" })] }), _jsxs("div", { className: "wow", children: [_jsx("label", { children: "Full Name" }), _jsx("br", {}), _jsx("input", { className: "lng", type: "text", placeholder: "John Doe", value: userDetails.name, onChange: (event) => setUserDetails({ ...userDetails, name: event.target.value }) }), _jsx("br", {}), _jsx("label", { children: "Email" }), _jsx("br", {}), _jsx("input", { className: `lng ${formError.email ? "error-input" : ""}`, type: "email", placeholder: "JohnDoe@abc.com", name: "email", value: userDetails.email, onChange: handleInputChange }), _jsx("label", { children: "Password" }), _jsx("br", {}), _jsxs("div", { className: "password-container", children: [_jsx("input", { className: `lng ${formError.password ? "error-input" : ""}`, type: showPassword ? "text" : "password", placeholder: "Minimum 8 characters", name: "password", value: userDetails.password, onChange: handleInputChange }), _jsx("button", { type: "button", className: "eye-icon", onClick: togglePasswordVisibility, children: showPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) })] }), _jsx("input", { className: "check", type: "checkbox", checked: isChecked, onChange: () => setIsChecked(!isChecked) }), _jsxs("span", { className: "ex1", children: ["I accept all ", _jsx("span", { className: "ex", children: "Terms & conditions" })] }), _jsx("br", {}), _jsx("button", { className: "btn", onClick: handle_signup, disabled: !isFormValid(), children: "Create an account" }), _jsx("p", { className: "cont", children: "-----or continue with Google------" }), _jsxs("div", { className: "google", children: [_jsx(FaGoogle, { className: "icon12" }), _jsx("button", { onClick: handleLogin, children: "Google" })] })] })] }), isLoginPopupVisible && (_jsx("div", { className: "login absolute w-[100%] ml-[114px] h-full overflow-y-hidden bg-white border", children: _jsx(Login, {}) }))] }));
}
export default Signup;
