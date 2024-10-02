import { NavLink } from "react-router-dom";
import girlPic from "../../assets/Girl@2x.png";
import phoneCall from "../../assets/phone-call.png";
import "../../styles/components/Explore.css";
import { useEffect } from "react";
// import { UserAPI } from "../../../apis/UserAPIs";

const ReferExplore = () => {
  //   const private_test = () => {
  //     UserAPI.private_test(handle_login);
  //   };
  //   const public_test = () => {
  //     UserAPI.public_test();
  //   };

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

  return (
    <div className="explore">
      <div className="box1 mt[10rem]">
        <div className="dont-know-text-box">
          <p className="dont-know-text">Refer & Earn</p>
        </div>

        <div className="about-techbairn">
          Personalized Education - Speak with our professionals to choose the
          ideal career path that suits your needs. Step along the path to
          success by signing up with TechBairn!
        </div>
        <div className="explore-btn cursor-pointer">Explore</div>
        <div className="explore-btn opacity-0">
          {/* Explore */}
          Public Test
        </div>
      </div>
      <div className="mid-box">
        <img className="clueless-girl-img" alt="clueless girl" src={girlPic} />
      </div>
      <div className="box2">
        <p className="guided-learning-text">Settle your doubts</p>
        <p className="talk-to-consultant">
          Talk to our consultants and find your right path to start.
        </p>
        <div className="call-back-btn-box">
          <NavLink className="call-back-btn" to="/request-call">
            <img src={phoneCall} alt="Phone image" className="phone-image" />
            <span className="request-call-back-text">Request a call back</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ReferExplore;
