import React, { useEffect, useState } from "react";
import "./Upcoming.css";
import { AiOutlineRight } from "react-icons/ai";
// import speaker from "../../../assets/Group 380.png";

interface props {
  star: number;
  rating: number;
  students: number;
  data: any;
}

const Upcoming: React.FC<props> = (props) => {
  console.log(props.data);
  // const [enroll, setEnroll] = useState<boolean>(false);

  // useEffect(() => {
  //   if (props.data.isActive === "true") {
  //     setEnroll(!enroll);
  //   }
  // }, []);
  const arr = new Array<number>(5);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  console.log(props.data?.isActive);

  return (
    <div className="upcoming ">
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
              {props.data?.subHeading}
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
          e
          {props.data?.isActive && (
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

          <img src={props.data?.bannerLinkPC} alt="" />
          <button className="speaker-btn">
            Ashutosh<br></br>Co-Founder @TechBairn
          </button>
        </div>
      </div>
    </div>
  );
};
export default Upcoming;
