import React from "react";
import "./Upcoming.css";
import { AiOutlineRight } from "react-icons/ai";
// import speaker from "../../../assets/Group 380.png";

interface props {
  data: any;
  enroll: any;
}

const Upcoming: React.FC<props> = (props) => {
  const arr = new Array<number>(5);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }

  return (
    <div className="upcoming">
      <div className="upcoming-content">
        <div className="upcoming-info">
          <div className="upcoming-links">
            <a href="http://">
              <p>Events</p>
            </a>
            <AiOutlineRight size={15} color="white" />
            <a href="http://">
              <p>Upcoming Event 1</p>
            </a>
          </div>
          <div className="upcoming-paragraphs">
            <p className="upcoming-paragraphs-para1">{props.data?.heading}</p>
            {/* <p className="upcoming-paragraphs-para2">A Full Stack Web Development Program</p> */}
            <p className="upcoming-paragraphs-para3">
              {props.data?.speakerName}
            </p>
          </div>
          <div className="upcoming-ratings">
            <div className="upcoming-stars">
              <p>10K+ Students</p>
            </div>
          </div>
          <div className="upcoming-date">
            <p>
              Date :{" "}
              {new Date(props.data?.date).toLocaleString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}{" "}
            </p>
            <p>
              Time :{" "}
              {new Date(props.data?.date).toLocaleString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
            </p>
            <p>Mode : Online</p>
          </div>
          {props.enroll && (
            <div className="upcoming-buttons">
              <button className="enroll-btn upcoming-buttons-enroll">
                <p>Enroll Now</p>
              </button>
            </div>
          )}
        </div>
        <div className="upcoming-img">
          <div className="upcoming-links-2">
            <a href="http://">
              <p>Events</p>
            </a>
            <AiOutlineRight size={15} color="white" />
            <a href="http://">
              <p>Upcoming Event 1</p>
            </a>
          </div>
          <p className="upcoming-paragraphs-para1-1">{props.data?.heading}</p>

          {props.data?.bannerLinkPC ? (
            <img src={props.data?.bannerLinkPC} alt="" />
          ) : (
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
          )}
          <button className="speaker-btn">
            Ashutosh<br></br>Co-Founder @TechBairn
          </button>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
