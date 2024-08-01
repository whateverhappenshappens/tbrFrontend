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
            Meet Shashank, our Data Structure & Algorithm (DSA) Instructor
            Shashank is currently pursuing a Computing Science thesis at the
            University of Alberta and has a keen interest in applying Machine
            Learning to solve complex problems. Known for his exceptional
            problem-solving skills and sharp coding abilities, Shashank was part
            of the ICPC Regionalist 2019 and is a MITACS GRI scholarship
            awardee. With over 2 years of experience as a backend software
            engineer at companies like Red Hat, nference, and GeeksforGeeks, he
            brings valuable industry insights to his teaching. Shashank has been
            an instructor for over 4 years, collaborating with platforms like
            Unacademy, GeeksforGeeks, and Scalar on their placement preparation
            programs. His passion for teaching and expertise in DSA make him a
            valuable asset to TechBairn.
            {/* <br />
            <br /> Previous Experience : Apple Inc.
            <br /> Qualification : How much you need?
            <br /> Salary : More than you can imagine !!
            <br />
            <br />{" "} */}
          </p>
        </div>
        <div className="speaker-profile">
          <img src={profilepic} alt="" />
          <p className="speaker-profile-name">Shashank Pathak</p>
          <p className="speaker-profile-company">
            ML Research @ Omics Lab, V&R Lab
          </p>
          <div className="speaker-profile-linkedin">
            <img src={linkedin} alt="" />
            <a
              href=" https://www.linkedin.com/in/shashankcube/
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
