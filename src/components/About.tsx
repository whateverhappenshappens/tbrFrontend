import React from "react";
import "./About.css"; // Import the CSS file
import logo from "../assets/Logo.svg"; // Adjust the path to your logo

const About = () => {
  return (
    <div className="about-us">
      <div className="logo-container">
        <img src={logo} alt="TechBairn Logo" className="company-logo" />
      </div>
      
      <section className="who-we-are">
        <h1>Who We Are</h1>
        <p>
          TechBairn stands out as the fastest-growing educational and upskilling platform nationwide. At TechBairn, we're more than just an ed-tech company – we're the bridge connecting ambitious students with the careers of tomorrow. Backed by industry giants like Microsoft, Amazon, and MongoDB, and endorsed by StartupIndia. We focus on action, not just applause. Recognitions like "Best E-Learning Company of the Year 2022" by BW Business World Magazine and features in the Economic Times fuel our passion to create innovative programs that equip students with the skills they need to land their dream jobs.
        </p>
      </section>

      <section className="why-choose">
        <h1>Why Choose TechBairn?</h1>
        <ul>
          <li>50,000+ Learners: Join a thriving community of tech enthusiasts and future industry leaders.</li>
          <li>250+ College & University Partnerships: Leverage our extensive network for added recognition and career opportunities.</li>
          <li>50+ Hiring Partners: Get connected with top companies actively seeking our industry-ready graduates.</li>
        </ul>
      </section>

      <section className="supported-by">
        <h1>Supported By</h1>
        <ul style={{ listStyleType: "circle" }}>
          <li>AWS</li>
          <li>Microsoft</li>
          <li>MongoDB</li>
          <li>StartupIndia</li>
          <li>MSME</li>
        </ul>
      </section>

      <section className="collaborations">
        <h1>Our Collaborations</h1>
        <ul style={{ listStyleType: "circle" }}>
          <li>IIT Bombay</li>
          <li>IIT Roorkee</li>
          <li>IIT Bhu</li>
          <li>IIT Bhubaneswar</li>
          <li>IIM Sambalpur</li>
          <li>NMIMS Bangalore</li>
          <li>DTU (Delhi Technical University)</li>
          <li>NIT Durgapur</li>
          <li>BIT Mesra</li>
          <li>Shri Ram College of Commerce (SRCC)</li>
          <li>VIT</li>
          <li>Christ University</li>
          <li>Usha Mittal Institute of Technology (UMIT)</li>
          <li>KJ Somaiya College of Engineering</li>
          <li>KIIT</li>
          <li>SOA</li>
          <li>Tehno Main Salt Lake</li>
          <li>SKIT</li>
          <li>St. John College, Mumbai</li>
          <li>Army Institute of Technology (AIT Pune)</li>
          <li>Thadomal Shahani Engineering College</li>
          <li>FR.C. Rodrigues Institute of Technology, Vashi</li>
          <li>Sri Sri University</li>
        </ul>
      </section>

      <section className="instructors">
        <h1>Our Instructors: Industry Experts</h1>
        <p className="ml-[35rem] bold">
          Learn from the best. Our instructors are experienced professionals from:
        </p>
        <ul style={{ listStyleType: "circle" }}>
          <li>Directi</li>
          <li>GeeksforGeeks</li>
          <li>Learning Mate</li>
          <li>ClearTax</li>
          <li>Accenture</li>
          <li>Celebal</li>
        </ul>
      </section>

      <section className="hiring-partners">
        <h1>Our Hiring Partners: A Launchpad to Your Dream Job</h1>
        <ul style={{ listStyleType: "circle" }}>
          <li>Casa Altaire</li>
          <li>TheCodingHour</li>
          <li>Merque Berry</li>
          <li>Many More!</li>
        </ul>
        <p className="ml-[35rem]">We connect you with leading companies actively seeking top tech talent.</p>
      </section>

      <section className="success-stories">
        <h1>Our Students: Success Stories</h1>
        <ul style={{ listStyleType: "circle" }}>
          <li>High Radius</li>
          <li>IIIT Bhubaneswar</li>
          <li>D Y Patil</li>
          <li>Many More!</li>
        </ul>
        <p className="ml-[35rem]">Join our growing network of successful alumni and launch your dream tech career.</p>
      </section>

      <section className="recognition">
        <h1>Recognition and Media Presence</h1>
        <p className="ml-[35rem]">
          TechBairn is making waves in the EdTech industry. See what the media is saying:
        </p>
        <ul style={{ listStyleType: "circle" }}>
          <li>Economics Times</li>
          <li>BW Business World</li>
          <li>YourStory Media</li>
          <li>Startup Story Media</li>
          <li>Business Connect</li>
          <li>Startup Urban</li>
          <li>Startup Talky</li>
          <li>Indian Achievers' Awards (IIF India)</li>
        </ul>
        <p className="ml-[35rem]">Our innovative approach and commitment to student success are gaining national recognition.</p>
      </section>

      
    </div>
  );
};

export default About;
