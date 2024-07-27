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
            Meet Siddharth Bhatter, our IoT, Embedded Systems, and Robotics
            Instructor Siddharth Bhatter, the founder & CEO of Karkhana
            Makerspace and CTO of pKare, is driven by a passion for education,
            innovation, and startups. With over 10 years of experience, he has
            inspired a love for problem-solving in students and budding
            entrepreneurs. Since 2015, Siddharth has trained and mentored over
            100,000 students and innovators, equipping them with the skills and
            mindset to tackle real-world problems in Electronics, Embedded
            Systems, IoT, and AI. Leading Karkhana Makerspace, a company
            dedicated to "Architecting Tomorrow's Innovators," Siddharth has
            overseen numerous success stories, from students building
            award-winning inventions to young entrepreneurs launching impactful
            startups. A TEDx speaker on startups and entrepreneurship, he
            continues to guide the product development and strategy of multiple
            student-driven startups, fostering a culture of innovation and
            excellence.
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
          <p className="speaker-profile-name">Siddharth Bhatter</p>
          <p className="speaker-profile-company">Founder & CEO @Karkhana</p>
          <div className="speaker-profile-linkedin">
            <img src={linkedin} alt="" />
            <a
              href=" https://www.linkedin.com/in/vyaparibaniya/
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
