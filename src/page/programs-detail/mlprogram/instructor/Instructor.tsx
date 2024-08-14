import React from "react";
import "./Instructor.css";
import profilepic from "../../../../assets/shashank shekhar(ML).jpeg";
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
            Meet Shashank, our Artificial Intelligence and Machine Learning
            Instructor Shashank is currently a Senior Consultant in Data Science
            at Celebal Technologies, with over 5 years of experience in the AI
            and ML domain. As an educator for the past 4 years, Shashank has
            helped many students launch their careers in AI, with his students
            now working at top MNCs and startups. He has developed products for
            numerous startups and large corporations, and serves as an advisor
            to many startups. Shashank is known for his exceptional research and
            development skills and is loved by students for his engaging
            teaching style.
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
          <p className="speaker-profile-name">Shashank Shekhar</p>
          <p className="speaker-profile-company">
            Senior Consultant - Data Science @ Celebal Technologies
          </p>
          <div className="speaker-profile-linkedin">
            <img src={linkedin} alt="" />
            <a
              href=" https://www.linkedin.com/in/shashank2806/
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
