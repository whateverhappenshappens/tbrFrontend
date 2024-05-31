import React from "react";
import "./Associate.css";
import boy from "../../../assets/boy pointing@2x.png";

const Associate: React.FC = () => {
  return (
    <div className="associate">
      <div className="associate-text">
        <p className="associate-text-head1 vr-bold try">Campus Associates</p>
        <p className="associate-text-para1 vr-medium">
          The TechBairn Campus Associate Program offers a valuable opportunity
          for college students interested in entrepreneurship. It aims to build
          a community of like-minded individuals and enhance their leadership
          and communication skills. Joining this program can provide valuable
          networking, skill development, and mentorship opportunities for
          aspiring entrepreneurs. If you're passionate about entrepreneurship,
          TechBairn's campus associate program could be an excellent starting
          point for your journey.
        </p>
        <button className="enroll-btn">
          <p>Apply Now</p>
        </button>
      </div>
      <div className="associate-img">
        <img src={boy} alt="boy" />
      </div>
    </div>
  );
};

export default Associate;
