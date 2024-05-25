import "../../styles/components/Header.css";
import logo from "../../assets/Logo.png";
import hamburger from "../../assets/hamburger.png";
import { NavLink } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Login from "../main/login/Login";
import Signup from "../Sign-up/Signup";

function Header({
  updateHeaderHeight,
  handle_login,
  handle_signup,
  loginContainer,
  signupContainer,
  isLoggedIn,
  setIsLoggedIn,
}: any) {
  const [navOpen, setNavOpen] = useState(false);

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
  return (
    <header className="header" ref={headerContainer}>
      <div
        className="login-pop absolute w-3/4 bg-white top-[66%] border"
        ref={loginContainer}
      >
        <div
          className="text-9xl right-[5%] cursor-pointer absolute overflow-hidden"
          onClick={() => (loginContainer.current.style.display = "none")}
        >
          &times;
        </div>
        <Login handle_login={handle_login} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div
        className="signup absolute w-[78%] bg-white top-[64%] border "
        ref={signupContainer}
      >
        <div
          className="text-9xl cursor-pointer right-[5%] absolute overflow-hidden"
          onClick={() => (signupContainer.current.style.display = "none")}
        >
          &times;
        </div>
        <Signup />
      </div>

      <NavLink to="/">
        <img className="logo" src={logo} alt="Techbairn logo" />
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
            <NavLink className="nav-list-item" to="/refer">
              refer & earn
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-list-item" to="/more">
              more <span aria-hidden="true">↓</span>
            </NavLink>
          </li>
        </ul>
        {!isLoggedIn ? (
          <div className="authenticate">
            <div className="sign-up" onClick={() => handle_signup()}>
              Sign Up
            </div>
            <div className="log-in" onClick={() => handle_login()}>
              Log In
            </div>
          </div>
        ) : (
          <div className="h-48 md:h-fit">
            <NavLink to="/profile" className="user-profile-img block bg-cyan-500 w-28 h-28 rounded-full"></NavLink>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
