import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Mentor from "./page/mentor/Mentor";
import Webmonk from "./page/programs-detail/webmonk/Webmonk";
import Cart from "./page/Cart/Cart";
import PaymentSuccess from "./page/PaymentSuccess/PaymentSuccess";
import LandingPage from "./page/LandingPage/LandingPage";
import Blogging from "./page/blogging-page/Blogging";
import BlogDetail from "./components/BlogDetail/BlogDetail";
import Login from "./components/main/login/Login";
import Footer from "./components/footer/Footer";
import CampusAssociate from "./page/campus-associate/CampusAssociate";
import EventsDetail from "./page/events-detail/Events";
import EventsManagerPage from "./page/events-detail/EventsManagerPage";
import CodeSlayer from "./page/programs-detail/codeslayers/CodeSlayer";
import MlProgram from "./page/programs-detail/mlprogram/MlProgram";
import IotProgram from "./page/programs-detail/iot/IotProgram";
import Signup from "./components/main/Sign/Signup";
import About from "./page/about/about";
import { Toaster } from "react-hot-toast";
import HackathonPage from "./page/hackathon/HackathonPage";
import Hire from "./page/hirewithus/Hire";
import Programs from "./page/Program-page/Program";
import { EventsAPI } from "./apis/EventsAPI/EventsAPI";
import Test from "./components/Test";
import { UserAPI } from "./apis/UserAPIs";
import OperationSignIn from "./page/operations/OperationSignIn";
import NotFound from "./page/NotFound/NotFound";
import { CartProvider } from "./CartContext";
import SalesOperations from "./page/operations/SalesOperations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UpdateUserDetail from "./page/Profile/UpdateUserDetails";
import UserProfile from "./page/Profile/UserProfile";
import Refer from "./page/refer&earn/Refer&Earn";
import userImage from "./assets/useImage.jpg";
import TryListings from "./try/Try_listing";
import Unsucessfull from "./page/paymentUnsuccessfull/Unsucessfull";
function App() {
    const [headerHeight, setHeaderHeight] = useState(0);
    const [activeEventData, setActiveEventData] = useState();
    const [pastEventData, setPastEventData] = useState();
    const [loggedInUserEmail, setLoggedInUserEmail] = useState("");
    const [coupon, setCoupon] = useState();
    const [cartDetailsData, setCartDetailsData] = useState("");
    const [cartValue, setCartValueData] = useState();
    useEffect(() => {
        const fetchActiveEvents = async () => {
            try {
                const res = await EventsAPI.activeEvents();
                setActiveEventData(res.data);
            }
            catch (e) {
                console.error(e);
            }
        };
        const fetchPastEvents = async () => {
            try {
                const res = await EventsAPI.pastEvents();
                setPastEventData(res.data);
            }
            catch (e) {
                console.error(e);
            }
        };
        fetchActiveEvents();
        fetchPastEvents();
    }, []);
    const updateHeaderHeight = (height) => {
        setHeaderHeight(height);
    };
    const loginContainer = useRef(null);
    const signupContainer = useRef(null);
    const handleLogin = () => {
        if (loginContainer.current) {
            loginContainer.current.style.display =
                loginContainer.current.style.display === "block" ? "none" : "block";
        }
    };
    const handleSignup = () => {
        if (signupContainer.current) {
            signupContainer.current.style.display =
                signupContainer.current.style.display === "block" ? "none" : "block";
        }
    };
    // AUTHENTICATED STATE
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkTokenValidity = async () => {
            try {
                const res = await UserAPI.check_access_token_validity();
                if (res.status === 200) {
                    setIsLoggedIn(true);
                }
            }
            catch (error) {
                if (error.response?.status === 400) {
                    setIsLoggedIn(false);
                }
            }
        };
        checkTokenValidity();
    }, []);
    return (_jsxs(BrowserRouter, { children: [_jsx(ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true }), _jsx(CartProvider, { children: _jsxs("div", { className: "main", children: [_jsx(Toaster, { toastOptions: {
                                style: {
                                    padding: "10px",
                                    fontSize: "20px",
                                    backgroundColor: "#2E436A",
                                    color: "white",
                                    fontWeight: "bolder",
                                },
                            } }), _jsx(Header, { updateHeaderHeight: updateHeaderHeight, handle_login: handleLogin, handle_signup: handleSignup, loginContainer: loginContainer, signupContainer: signupContainer, setIsLoggedIn: setIsLoggedIn, isLoggedIn: isLoggedIn, useImage: userImage }), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LandingPage, { headerHeight: headerHeight, handle_login: handleLogin, activedata: activeEventData, pastdata: pastEventData }) }), _jsx(Route, { path: "/login", element: _jsx(Login, { setloggedInUserEmail: setLoggedInUserEmail }) }), _jsx(Route, { path: "/signup", element: _jsx(Signup, {}) }), _jsx(Route, { path: "/refer", element: _jsx(Refer, {}) }), _jsx(Route, { path: "/blog", element: _jsx(Blogging, { headerHeight: headerHeight }) }), _jsx(Route, { path: "/blog/:id", element: _jsx(BlogDetail, { headerHeight: headerHeight }) }), _jsx(Route, { path: "/campus-associate", element: _jsx(CampusAssociate, {}) }), _jsx(Route, { path: "/mentor", element: _jsx(Mentor, {}) }), _jsx(Route, { path: "/About-us", element: _jsx(About, {}) }), _jsx(Route, { path: "/unsuccess", element: _jsx(Unsucessfull, {}) }), _jsx(Route, { path: "/cart-summary", element: _jsx(UpdateUserDetail, { cartDetailsData: cartDetailsData, cartValue: cartValue }) }), _jsx(Route, { path: "/user-profile", element: _jsx(UserProfile, {}) }), _jsx(Route, { path: "/updated-css", element: _jsx(TryListings, {}) }), _jsx(Route, { path: "/operations", element: _jsx(OperationSignIn, { handle_login: handleLogin, setIsLoggedIn: setIsLoggedIn }) }), _jsx(Route, { path: "/operations/manage-events", element: _jsx(EventsManagerPage, { headerHeight: headerHeight }) }), _jsx(Route, { path: "/hire-with-us", element: _jsx(Hire, {}) }), _jsx(Route, { path: "/event-listing", element: _jsx(HackathonPage, { Activedata: activeEventData, Pastdata: pastEventData }) }), _jsx(Route, { path: "/course/webmonk", element: _jsx(Webmonk, {}) }), _jsx(Route, { path: "/programs", element: _jsx(Programs, {}) }), _jsx(Route, { path: "/course/codeslayer", element: _jsx(CodeSlayer, {}) }), _jsx(Route, { path: "/events/:id", element: _jsx(EventsDetail, {}) }), _jsx(Route, { path: "/*", element: _jsx(NotFound, {}) }), _jsx(Route, { path: "/course/machinester", element: _jsx(MlProgram, {}) }), _jsx(Route, { path: "/course/IOT", element: _jsx(IotProgram, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, { headerHeight: headerHeight, setCartDetailsData: setCartDetailsData, setCartValueData: setCartValueData }) }), _jsx(Route, { path: "/test", element: _jsx(Test, {}) }), _jsx(Route, { path: "/operations/sales", element: _jsx(SalesOperations, {}) }), _jsx(Route, { path: "/payment-success", element: _jsx(PaymentSuccess, { headerHeight: headerHeight }) })] }), _jsx(Footer, {})] }) })] }));
}
export default App;
