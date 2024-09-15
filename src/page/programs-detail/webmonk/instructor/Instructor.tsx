import React from "react";
import "./Instructor.css";
import profilepic from "../../../../assets/LaveshGaurav.jpeg";
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
            Meet Lavesh, our Full Stack Web Development Instructor. Lavesh
            brings over 5 years of experience in the full stack development
            journey and has been an educator for more than 3 years. He has
            collaborated with numerous startups, contributing to the creation of
            many scalable products. Lavesh has also helped thousands of students
            launch their careers in full stack web development.
            {/* <br />
            <br /> Previous Experience : Apple Inc.
            <br /> Qualification : How much you need?
            <br /> Salary : More than you can imagine !!
            <br />
            <br />{" "} */}
          </p>
        </div>
        <div className="speaker-profile">
          <img src={profilepic} className="instructor_image" alt="" />
          <p className="speaker-profile-name">Lavesh Gaurav</p>
          <p className="speaker-profile-company">Senior Software Engineer</p>
          <div className="speaker-profile-linkedin">
            <img src={linkedin} alt="" />
            <a
              href=" https://www.linkedin.com/in/lavesh-gaurav-552728115/
"
            >
              <p>Let's Connect</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Instructor;
