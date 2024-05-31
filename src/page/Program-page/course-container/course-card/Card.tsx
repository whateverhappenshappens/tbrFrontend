import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

interface props {
  heading: string;
  para1: string;
  teachername: string;
  image: string;
  link: string;
}
const Card: React.FC<props> = (props) => {
  return (
    <div className="course-card">
      <div className="course-card-banner-image">
        <p>Live Classes</p>
        <img src={props.image} alt="Girl"></img>
      </div>
      <div className="course-card-content-box">
        <div className="course-card-content-header">
          <h3>{props.heading}</h3>
          <div className="course-card-content-header-rating">
            4.0 ★ ★ ★ ★ ☆ (10,000)
          </div>
        </div>
        <div className="course-card-content">
          <p className="course-card-content-para1">{props.para1}</p>
          <div className="months-and-internship-oppurtunity">
            <div className="months-details">3 months</div>
            <div className="internship-oppurtunity-details">
              Internship oppurtunity
            </div>
          </div>
          <p className="Teacher-Name">{props.teachername}</p>
          <div className="course-card-content-button">
            <button className="enroll-btn course-card-content-button-enroll-now">
              Enroll Now
            </button>
            <button className="course-card-content-button-view-details">
              <Link to={props.link}> Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
