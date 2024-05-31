import React from "react";
import "./Instructor.css";
import profilepic from "../../../assets/Mask Group 10.png";
import linkedin from "../../../assets/linkedin.png";
import { AiOutlineLinkedin } from "react-icons/ai";

const Instructor: React.FC = () => {
  return (
    <div className="instructor">
      <div className="instructor-heading">
        <p>About Instructor</p>
      </div>
      <div className="instructor-content">
        <div className="instructor-biodata">
          <p>
            Here we will have a bio data of instructor who is going to teach the
            students. Here we will have a bio data of instructor who is going to
            teach the students. Here we will have a bio data of instructor who
            is going to teach the students. Here we will have a bio data of
            instructor who is going to teach the students. Here we will have a
            bio data of instructor who is going to teach the students. Here we
            will have a bio data of instructor who is going to teach the
            students. Here we will have a bio data of instructor who is going to
            teach the students. Here we will have a bio data of instructor who
            is going to teach the students.
            <br />
            <br /> Previous Experience : Apple Inc.
            <br /> Qualification : How much you need?
            <br /> Salary : More than you can imagine !!
          </p>
        </div>
        <div className="instructor-profile">
          <img src={profilepic} alt="" />
          <p className="instructor-profile-name">Robert Downey Jr.</p>
          <p className="instructor-profile-company">CEO Marvel Inc.</p>
          <div className="instructor-profile-linkedin">
            <img src={linkedin} alt="" />
            <p>Let's Connect</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructor;
