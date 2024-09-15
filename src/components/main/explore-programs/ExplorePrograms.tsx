import "../../../styles/components/ExplorePrograms.css";

import { NavLink } from "react-router-dom";

// import { useRef } from "react";

const ExplorePrograms = () => {
  // const programCard = useRef();
  // const programCardLogoBG = useRef();
  // const programCardLogoFG = useRef();
  return (
    <div className="explore-programs">
      <div className="main">
        <div className="name">
          <h1>Explore program by categories</h1>
          <p>Get top on-demand courses from our list of courses</p>
        </div>
        <NavLink className="explore-btn" to="/programs">
          View all
        </NavLink>
      </div>
      <div className="programs">
        <div className="program-card one">
          <div className="logo">
            <span>{"</>"}</span>
          </div>
          <div className="details">
            <h2>Codeslayer</h2>
            <p>A Placement Preparation Program</p>
          </div>
        </div>
        <div className="program-card two">
          <div className="logo">
            <span>{"</>"}</span>
          </div>
          <div className="details">
            <h2>Webmonk</h2>
            <p>Full Stack Web Development Program</p>
          </div>
        </div>
        <div className="program-card three">
          <div className="logo">
            <span>{"</>"}</span>
          </div>
          <div className="details">
            <h2>Machinester</h2>
            <p>A complete Machine Learning Program</p>
          </div>
        </div>
        <div className="program-card one">
          <div className="logo">
            <span>{"</>"}</span>
          </div>
          <div className="details">
            <h2>IOT</h2>
            <p>A complete Internet of Things Program</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePrograms;
