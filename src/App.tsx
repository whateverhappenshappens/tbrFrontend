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
import EnrollStudent from "./page/enroll/EnrollStudent";
import { CartProvider } from "./CartContext";
import SalesOperations from "./page/operations/SalesOperations";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UpdateUserDetail from "./page/Profile/UpdateUserDetails";
import UserProfile from "./page/Profile/UserProfile";
import Refer from "./page/refer&earn/Refer&Earn";

import TryListings from "./try/Try_listing";


function App() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [activeEventData, setActiveEventData] = useState<any>();
  const [pastEventData, setPastEventData] = useState<any>();
  const [loggedInUserEmail, setLoggedInUserEmail] = useState<string>("");
  const [coupon, setCoupon] = useState<any>();
  const [cartDetailsData, setCartDetailsData] = useState<any>("");
  const [cartValue, setCartValueData] = useState<number>();

  useEffect(() => {
    const fetchActiveEvents = async () => {
      try {
        const res = await EventsAPI.activeEvents();
        setActiveEventData(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchPastEvents = async () => {
      try {
        const res = await EventsAPI.pastEvents();
        setPastEventData(res.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchActiveEvents();
    fetchPastEvents();
  }, []);

  const updateHeaderHeight = (height: number) => {
    setHeaderHeight(height);
  };

  const loginContainer = useRef<HTMLDivElement>(null);
  const signupContainer = useRef<HTMLDivElement>(null);
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
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      try {
        const res = await UserAPI.check_access_token_validity();
        if (res.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        if (error.response?.status === 400) {
          setIsLoggedIn(false);
        }
      }
    };
    checkTokenValidity();
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <CartProvider>
        <div className="main">
          <Toaster
            toastOptions={{
              style: {
                padding: "10px",
                fontSize: "20px",
                backgroundColor: "#2E436A",
                color: "white",
                fontWeight: "bolder",
              },
            }}
          />
          <Header
            updateHeaderHeight={updateHeaderHeight}
            handle_login={handleLogin}
            handle_signup={handleSignup}
            loginContainer={loginContainer}
            signupContainer={signupContainer}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <LandingPage
                  headerHeight={headerHeight}
                  handle_login={handleLogin}
                  activedata={activeEventData}
                  pastdata={pastEventData}
                />
              }
            />
            <Route
              path="/login"
              element={<Login setloggedInUserEmail={setLoggedInUserEmail} />} // Ensure the prop is passed correctly
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/refer" element={<Refer />} />
            <Route
              path="/blog"
              element={<Blogging headerHeight={headerHeight} />}
            />
            <Route
              path="/blog/:id"
              element={<BlogDetail headerHeight={headerHeight} />}
            />
            <Route path="/campus-associate" element={<CampusAssociate />} />
            <Route path="/mentor" element={<Mentor />} />
            <Route path="/About-us" element={<About />} />
            {/* <Route path="/update-details" element={<Profile />} /> */}

            <Route path="/update-details" element={<Profile />} />
            <Route path="/profile" element={<Profile1 />} />
            <Route path="/updated-css" element={<TryListings />} />
            <Route
              path="/operations"
              element={
                <OperationSignIn
                  handle_login={handleLogin}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path="/operations/manage-events"
              element={<EventsManagerPage headerHeight={headerHeight} />}
            />
            <Route path="/hire-with-us" element={<Hire />} />
            
            <Route
              path="/event-listing"
              element={
                <HackathonPage
                  Activedata={activeEventData}
                  Pastdata={pastEventData}
                />
              }
            />
            <Route path="/course/webmonk" element={<Webmonk />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/course/codeslayer" element={<CodeSlayer />} />
            <Route path="/events/:id" element={<EventsDetail />} />
            <Route path="/*" element={<NotFound />} />
            <Route path="/course/machinester" element={<MlProgram />} />
            <Route path="/course/IOT" element={<IotProgram />} />
            <Route
              path="/cart"
              element={
                <Cart
                  headerHeight={headerHeight}
                  setCartDetailsData={setCartDetailsData}
                  setCartValueData={setCartValueData}
                />
              }
            />
            <Route path="/test" element={<Test />} />
            <Route path="/operations/sales" element={<SalesOperations />} />
            <Route
              path="/payment-success"
              element={<PaymentSuccess headerHeight={headerHeight} />}
            />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
