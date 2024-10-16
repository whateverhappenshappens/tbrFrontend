import { NavLink } from "react-router-dom";
import girlPic from "../../../assets/Girl@2x.png";
import phoneCall from "../../../assets/phone-call.png";
import "../../../styles/components/Explore.css";
import { useNavigate } from "react-router-dom";
import { UserAPI } from "../../../apis/UserAPIs";

const Explore = ({ handle_login }: any) => {
  const Navigate = useNavigate();
  
  const public_test = () => {
    UserAPI.public_test();
  };

  const redirectProgram = () => {
    Navigate("/programs");
  };

  return (
    <div className="explore">
      <div className="box1">
        <div className="dont-know-text-box">
          <p className="dont-know-text">Invest in your</p>
          <p className="dont-know-text">future with&nbsp;</p>
          <p className="dont-know-text">TechBairn&nbsp;</p>
        </div>

        <div className="about-techbairn">
          Personalized Education - Speak with our professionals to choose the
          ideal career path that suits your needs. Step along the path to
          success by signing up with TechBairn!
        </div>
        <div className="explore-btn cursor-pointer" onClick={redirectProgram}>
          Explore
        </div>
        <div className="explore-btn opacity-0" onClick={() => public_test()}>
          {/* Explore */}
          Public Test
        </div>
      </div>
      <div className="mid-box">
        <img className="clueless-girl-img" alt="clueless girl" src={girlPic} />
      </div>
      <div className="box2">
        <p className="guided-learning-text">Guided Learning</p>
        <p className="talk-to-consultant">
          Talk to our consultants and find your right path to start.
        </p>
        <div className="call-back-btn-box">
          <NavLink className="call-back-btn" to="https://docs.google.com/forms/d/e/1FAIpQLSdKJREAXanAnHM_bDf5OuKje08OHyaxXVypePaqPm0Wlv61gQ/viewform" target="_blank" rel="noopener noreferrer">
            <img src={phoneCall} alt="Phone image" className="phone-image" />
            <span className="request-call-back-text">Request a call back</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Explore;
