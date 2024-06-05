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
import About from "./components/About";
import { Toaster } from "react-hot-toast";
import HackathonPage from "./page/hackathon/HackathonPage";
import Hire from "./page/hirewithus/Hire";
import Programs from "./page/Program-page/Program";
import { EventsAPI } from "./apis/EventsAPI/EventsAPI";
import Test from "./components/Test";
import { UserAPI } from "./apis/UserAPIs";
import OperationSignIn from "./page/operations/OperationSignIn";
import NotFound from "./page/NotFound/NotFound";
import SalesOperations from "./page/operations/SalesOperations";
import EnrollStudent from "./page/enroll/EnrollStudent";
import ProfilePage from "./page/Profile/ProfilePage";

function App() {
  const [headerHeight, setHeaderHeight] = useState<number>(0);
  const [activeEventData, setactiveEventData] = useState<any>();
  const [pastEventData, setpastEventData] = useState<any>();
  const [coupon, setCoupon] = useState<any>();

  useEffect(() => {
    const active = async () => {
      try {
        await EventsAPI.activeEvents()
          .then((res) => {
            setactiveEventData(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      } catch (e) {
        console.error(e);
      }
    };

    const past = async () => {
      try {
        await EventsAPI.pastEvents()
          .then((res) => {
            setpastEventData(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      } catch (e) {
        console.error(e);
      }
    };

    active();
    past();
  }, []);

  const updateHeaderHeight = (height: number) => {
    setHeaderHeight(height);
  };

  const loginContainer = useRef<HTMLDivElement>(null);
  const signupContainer = useRef<HTMLDivElement>(null);
  const handle_login = () => {
    loginContainer.current!.style.display === "block"
      ? (loginContainer.current!.style.display = "none")
      : (loginContainer.current!.style.display = "block");
  };
  const handle_signup = () => {
    signupContainer.current!.style.display === "block"
      ? (signupContainer.current!.style.display = "none")
      : (signupContainer.current!.style.display = "block");
  };

  // AUTHENTICATED STATE
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      await UserAPI.check_access_token_validity()
        .then((res: any) => {
          if (res.status === 200) {
            setIsLoggedIn(true);
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            setIsLoggedIn(false);
          }
        });
    };
    checkTokenValidity();
  }, []);

  return (
    <BrowserRouter>
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
          handle_login={handle_login}
          handle_signup={handle_signup}
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
                handle_login={handle_login}
                activedata={activeEventData}
                pastdata={pastEventData}
              />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
          <Route path="/operations" element={<OperationSignIn />} />

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
          <Route path="*" element={<NotFound />} />
          <Route path="/course/machinester" element={<MlProgram />} />
          <Route path="/course/IOT" element={<IotProgram />} />
          <Route path="/cart" element={<Cart headerHeight={headerHeight} />} />
          <Route path="/test" element={<Test />} />
          <Route path="/operations/sales" element={<SalesOperations />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/payment-success"
            element={<PaymentSuccess headerHeight={headerHeight} />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
