import React, { useRef, useState, useEffect } from "react";
import { Navigate, NavLink } from "react-router-dom";
import Login from "../main/login/Login";
import Signup from "../main/Sign/Signup";
import { UserAPI } from "../../apis/UserAPIs";
import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/techbairn logo black-01.png";
import hamburger from "../../assets/hamburger.png";
import "../../styles/components/Header.css";
import { CgProfile } from "react-icons/cg";
import userImage from "../../assets/useImage.jpg";

function Header({
  updateHeaderHeight,
  handle_login,
  handle_signup,
  loginContainer,
  isLoggedIn,
  setIsLoggedIn,
}: any) {
  const [navOpen, setNavOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false); // State to manage login popup visibility
  const [showSignup, setShowSignup] = useState(false); // State to manage signup popup visibility
  const [loggedInUserEmail, setloggedInUserEmail] = useState<string>("");
  const transRef = useRef<HTMLDivElement>(null);
  const closeNavRef = useRef<HTMLDivElement>(null);
  const mainNav = useRef<HTMLDivElement>(null);

  const headerContainer = useRef<any>(null);

  useEffect(() => {
    if (navOpen) {
      transRef.current?.classList.add("open");
      closeNavRef.current?.classList.add("open");
      mainNav.current?.classList.add("open");
    } else {
      transRef.current?.classList.remove("open");
      closeNavRef.current?.classList.remove("open");
      mainNav.current?.classList.remove("open");
    }
    updateHeaderHeight(Math.ceil(headerContainer.current.offsetHeight));
  }, [navOpen]);

  const handleLogout = () => {
    UserAPI.logout(setIsLoggedIn);
  };

  return (
    <header className="header" ref={headerContainer}>
      {showLogin && (
        <div className="login-pop absolute w-3/4 bg-white top-[24%] rounded-lg border">
          <div
            className="text-9xl right-[5%] z-10 cursor-pointer absolute overflow-hidden"
            onClick={() => setShowLogin(false)}
          >
            &times;
          </div>
          <Login handle_login={handle_login} setIsLoggedIn={setIsLoggedIn} setloggedInUserEmail={setloggedInUserEmail}/>
        </div>
      )}
      {showSignup && (
        <div className="signup absolute w-[78%] bg-white top-[24%] border rounded-lg">
          <div
            className="text-9xl cursor-pointer z-10 right-[5%] absolute overflow-hidden"
            onClick={() => setShowSignup(false)}
          >
            &times;
          </div>
          <Signup setIsLoggedIn={setIsLoggedIn} /> {/* Pass setIsLoggedIn here */}
        </div>
      )}

      <NavLink to="/">
        <img className="logo h-[5rem]" src={logo} alt="Techbairn logo" />
      </NavLink>

      <div className="open-nav" onClick={() => setNavOpen(true)}>
        <img src={hamburger} alt="hamburger" />
      </div>
      <div className="trans-box" ref={transRef}></div>
      <nav className="main-nav open" ref={mainNav}>
        <div
          className="close-nav open"
          onClick={() => setNavOpen(false)}
          ref={closeNavRef}
        >
          &times;
        </div>
        <ul className="nav-list">
          <li>
            <NavLink className="nav-list-item" to="/programs">
              programs
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/campus-associate">
              campus associate
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/event-listing">
              events
            </NavLink>
          </li>
          <li className="more-btn-display">
            <div className="more-btn">
              more↓
              <ul className="dropdown-menu">
                <li>
                  <NavLink to="/hire-with-us">
                    <button className="more-option">Hire with us</button>
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog">
                    <button className="more-option">Blog</button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/About-us">
                    <button className="more-option">About Us</button>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/cart">
              <FaCartShopping />
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <button className="more-option1">Blog</button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us">
              <button className="more-option1">About Us</button>
            </NavLink>
          </li>
        </ul>
        {!isLoggedIn ? (
          <div className="authenticate">
            <div className="sign-up" onClick={() => setShowSignup(true)}>
              Sign Up
            </div>
            <div className="log-in" onClick={() => setShowLogin(true)}>
              Log In
            </div>
          </div>
        ) : (
          <div className="h-48 flex justify-evenly items-center md:h-fit">
            <NavLink to="/user-profile">
              <img
                src={userImage}
                alt="User Profile"
                className="w-[50px] h-[50px] rounded-full"
              />
            </NavLink>
            <div className="ml-5">
              <button
                onClick={handleLogout}
                className="bg-[#6d87f5] text-[2.3rem] p-2 rounded-[1rem] text-white"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;


// import "../../styles/components/Header.css";
// import logo from "../../assets/Logo.png";
// import hamburger from "../../assets/hamburger.png";
// import { NavLink } from "react-router-dom";
// import { useRef, useState, useEffect } from "react";
// import Login from "../main/login/Login";
// import Signup from "../main/Sign/Signup";
// import { UserAPI } from "../../apis/UserAPIs";
// import { FaCartShopping } from "react-icons/fa6";

// function Header({
//   updateHeaderHeight,
//   handle_login,
//   handle_signup,
//   loginContainer,
//   signupContainer,
//   isLoggedIn,
//   setIsLoggedIn,
// }: any) {
//   const [navOpen, setNavOpen] = useState(false);
//   const [showLogin, setShowLogin] = useState(false); // State to manage login popup visibility
//   const [showSignup, setShowSignup] = useState(false); // State to manage signup popup visibility

//   const transRef = useRef<HTMLDivElement>(null);
//   const closeNavRef = useRef<HTMLDivElement>(null);
//   const mainNav = useRef<HTMLDivElement>(null);

//   const headerContainer = useRef<any>(null);

//   useEffect(() => {
//     if (navOpen) {
//       transRef.current?.classList.add("open");
//       closeNavRef.current?.classList.add("open");
//       mainNav.current?.classList.add("open");
//     } else {
//       transRef.current?.classList.remove("open");
//       closeNavRef.current?.classList.remove("open");
//       mainNav.current?.classList.remove("open");
//     }
//     updateHeaderHeight(Math.ceil(headerContainer.current.offsetHeight));
//   }, [navOpen]);

//   const handleTrue = () => {
//     setMoreOpen(!moreOpen);
//   };

//   const handleLogout = () => {
//     UserAPI.logout();
//     setIsLoggedIn(!isLoggedIn);
//   };

//   return (
//     <header className="header" ref={headerContainer}>
//       {showLogin && (
//         <div className="login-pop absolute w-3/4 bg-white top-[66%] rounded-lg border">
//           <div
//             className="text-9xl right-[5%] z-10 cursor-pointer absolute overflow-hidden"
//             onClick={() => setShowLogin(false)}
//           >
//             &times;
//           </div>
//           <Login handle_login={handle_login} setIsLoggedIn={setIsLoggedIn} />
//         </div>
//       )}
//       {showSignup && (
//         <div className="signup absolute w-[78%] bg-white top-[64%] border rounded-lg">
//           <div
//             className="text-9xl cursor-pointer z-10 right-[5%] absolute overflow-hidden"
//             onClick={() => setShowSignup(false)}
//           >
//             &times;
//           </div>
//           <Signup />
//         </div>
//       )}

//       <NavLink to="/">
//         <img className="logo" src={logo} alt="Techbairn logo" />
//       </NavLink>
//       <div className="open-nav" onClick={() => setNavOpen(true)}>
//         <img src={hamburger} alt="hamburger" />
//       </div>
//       <div className="trans-box" ref={transRef}></div>
//       <nav className="main-nav open" ref={mainNav}>
//         <div
//           className="close-nav open"
//           onClick={() => setNavOpen(false)}
//           ref={closeNavRef}
//         >
//           &times;
//         </div>
//         <ul className="nav-list">
//           <li>
//             <NavLink className="nav-list-item" to="/programs">
//               programs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-list-item" to="/campus-associate">
//               campus associate
//             </NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-list-item" to="/event-listing">
//               events
//             </NavLink>
//           </li>
//           <li className="more-btn-display">
//             <div className="more-btn">
//               more↓
//               <ul className="dropdown-menu">
//                 <li>
//                   <NavLink to="/hire-with-us">
//                     <button className="more-option" onClick={handleTrue}>
//                       Hire With Us
//                     </button>
//                   </NavLink>
//                 </li>

//                 <li>
//                   <NavLink to="/blog">
//                     <button className="more-option">Blog</button>
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/About-us">
//                     <button className="more-option" onClick={handleTrue}>
//                       About Us
//                     </button>
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>
//           </li>
//           <li>
//             <NavLink className="nav-list-item" to="/cart">
//               <FaCartShopping />
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/event-listing">
//               <button className="more-option1" onClick={handleTrue}>
//                 Refer & Earn
//               </button>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/blog">
//               <button className="more-option1" onClick={handleTrue}>
//                 Blog
//               </button>
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">
//               <button className="more-option1" onClick={handleTrue}>
//                 About Us
//               </button>
//             </NavLink>
//           </li>

//         </ul>
//         {!isLoggedIn ? (
//           <div className="authenticate">
//             <div className="sign-up" onClick={() => setShowSignup(true)}>
//               Sign Up
//             </div>
//             <div className="log-in" onClick={() => setShowLogin(true)}>
//               Log In
//             </div>
//           </div>
//         ) : (
//           <div className="h-48 flex justify-evenly items-center  md:h-fit">
//             <NavLink
//               to="/profile"
//               className="user-profile-img block bg-cyan-500 w-28 h-28 rounded-full"
//             ></NavLink>
//             <div className="ml-5">
//               <button
//                 onClick={handleLogout}
//                 className="bg-[#6d87f5] text-[2.3rem]  p-2 rounded-[1rem] text-white"
//               >
//                 Log Out
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Header;
