import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Login from "../main/login/Login";
import Signup from "../main/Sign/Signup";
import { UserAPI } from "../../apis/UserAPIs";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/techbairn logo black-01.png";
import hamburger from "../../assets/hamburger.png";
import "../../styles/components/Header.css";
import userImage from "../../assets/useImage.jpg";
function Header({ updateHeaderHeight, handle_login, handle_signup, loginContainer, isLoggedIn, setIsLoggedIn, }) {
    const [navOpen, setNavOpen] = useState(false);
    const [showLogin, setShowLogin] = useState(false); // State to manage login popup visibility
    const [showSignup, setShowSignup] = useState(false); // State to manage signup popup visibility
    const transRef = useRef(null);
    const closeNavRef = useRef(null);
    const mainNav = useRef(null);
    const headerContainer = useRef(null);
    useEffect(() => {
        if (navOpen) {
            transRef.current?.classList.add("open");
            closeNavRef.current?.classList.add("open");
            mainNav.current?.classList.add("open");
        }
        else {
            transRef.current?.classList.remove("open");
            closeNavRef.current?.classList.remove("open");
            mainNav.current?.classList.remove("open");
        }
        updateHeaderHeight(Math.ceil(headerContainer.current.offsetHeight));
    }, [navOpen]);
    const handleLogout = () => {
        UserAPI.logout(setIsLoggedIn);
    };
    return (_jsxs("header", { className: "header", ref: headerContainer, children: [showLogin && (_jsxs("div", { className: "login-pop absolute w-3/4 bg-white top-[24%] rounded-lg border", children: [_jsx("div", { className: "text-9xl right-[5%] z-10 cursor-pointer absolute overflow-hidden", onClick: () => setShowLogin(false), children: "\u00D7" }), _jsx(Login, { handle_login: handle_login, setIsLoggedIn: setIsLoggedIn })] })), showSignup && (_jsxs("div", { className: "signup absolute w-[78%] bg-white top-[24%] border rounded-lg", children: [_jsx("div", { className: "text-9xl cursor-pointer z-10 right-[5%] absolute overflow-hidden", onClick: () => setShowSignup(false), children: "\u00D7" }), _jsx(Signup, { setIsLoggedIn: setIsLoggedIn }), " "] })), _jsx(NavLink, { to: "/", children: _jsx("img", { className: "logo h-[5rem]", src: logo, alt: "Techbairn logo" }) }), _jsx("div", { className: "open-nav", onClick: () => setNavOpen(true), children: _jsx("img", { src: hamburger, alt: "hamburger" }) }), _jsx("div", { className: "trans-box", ref: transRef }), _jsxs("nav", { className: "main-nav open", ref: mainNav, children: [_jsx("div", { className: "close-nav open", onClick: () => setNavOpen(false), ref: closeNavRef, children: "\u00D7" }), _jsxs("ul", { className: "nav-list", children: [_jsx("li", { children: _jsx(NavLink, { className: "nav-list-item", to: "/programs", children: "programs" }) }), _jsx("li", { children: _jsx(NavLink, { className: "nav-list-item", to: "/campus-associate", children: "campus associate" }) }), _jsx("li", { children: _jsx(NavLink, { className: "nav-list-item", to: "/event-listing", children: "events" }) }), _jsx("li", { className: "more-btn-display", children: _jsxs("div", { className: "more-btn", children: ["more\u2193", _jsxs("ul", { className: "dropdown-menu", children: [_jsx("li", { children: _jsx(NavLink, { to: "/hire-with-us", children: _jsx("button", { className: "more-option", children: "Hire with us" }) }) }), _jsx("li", { children: _jsx(NavLink, { to: "/blog", children: _jsx("button", { className: "more-option", children: "Blog" }) }) }), _jsx("li", { children: _jsx(NavLink, { to: "/About-us", children: _jsx("button", { className: "more-option", children: "About Us" }) }) })] })] }) }), _jsx("li", { children: _jsx(NavLink, { className: "nav-list-item", to: "/cart", children: _jsx(FaCartShopping, {}) }) }), _jsx("li", { children: _jsx(NavLink, { to: "/blog", children: _jsx("button", { className: "more-option1", children: "Blog" }) }) }), _jsx("li", { children: _jsx(NavLink, { to: "/about-us", children: _jsx("button", { className: "more-option1", children: "About Us" }) }) })] }), !isLoggedIn ? (_jsxs("div", { className: "authenticate", children: [_jsx("div", { className: "sign-up", onClick: () => setShowSignup(true), children: "Sign Up" }), _jsx("div", { className: "log-in", onClick: () => setShowLogin(true), children: "Log In" })] })) : (_jsxs("div", { className: "h-48 flex justify-evenly items-center md:h-fit", children: [_jsx(NavLink, { to: "/user-profile", children: _jsx("img", { src: userImage, alt: "User Profile", className: "w-[50px] h-[50px] rounded-full" }) }), _jsx("div", { className: "ml-5", children: _jsx("button", { onClick: handleLogout, className: "bg-[#6d87f5] text-[2.3rem] p-2 rounded-[1rem] text-white", children: "Log Out" }) })] }))] })] }));
}
export default Header;
