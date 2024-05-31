import React from "react";
import "./Instructor.css";
import profilepic from "../../../../assets/Mask Group 10.png";
import linkedin from "../../../../assets/linkedin.png";

const Instructor: React.FC = () => {
  return (
    <div className="speaker">
      <div className="speaker-heading">
        <p>About Instructor</p>
      </div>
      <div className="speaker-content">
        <div className="speaker-biodata">
          <p>
            Here we will have a bio data of speaker who is going to teach the
            students. Here we will have a bio data of speaker who is going to
            teach the students. Here we will have a bio data of speaker who is
            going to teach the students. Here we will have a bio data of speaker
            who is going to teach the students. Here we will have a bio data of
            speaker who is going to teach the students. Here we will have a bio
            data of speaker who is going to teach the students. Here we will
            have a bio data of speaker who is going to teach the students. Here
            we will have a bio data of speaker who is going to teach the
            students.
            <br />
            <br /> Previous Experience : Apple Inc.
            <br /> Qualification : How much you need?
            <br /> Salary : More than you can imagine !!
            <br />
            <br />{" "}
          </p>
        </div>
        <div className="speaker-profile">
          <img src={profilepic} alt="" />
          <p className="speaker-profile-name">Robert Downey Jr.</p>
          <p className="speaker-profile-company">CEO Marvel Inc.</p>
          <div className="speaker-profile-linkedin">
            <img src={linkedin} alt="" />
            <p>Let's Connect</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructor;
