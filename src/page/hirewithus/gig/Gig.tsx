import React from "react";
import "./Gig.css";
import { RiArrowRightSLine } from "react-icons/ri";

const Gig: React.FC = () => {
  const points = [
    {
      point:
        "The tech landscape is constantly evolving, and companies need skilled individuals who can keep pace. At TechBairn, we don't just train individuals, we cultivate well-rounded professionals equipped with the latest in-demand skills like web development, machine learning, and competitive coding.      ",
    },
    {
      point:
        "Our diverse pool of graduates are prepared to tackle any challenge and become valuable assets to your team.",
    },
    {
      point:
        "Ready to build your dream team? Browse our talented graduates and find the perfect fit for your company's needs.",
    },
    {
      point: "Happy Hiring!        ",
    },
  ];
  return (
    <div className="gig">
      <div className="content">
        <div className="gig-headings">
          <p className="gig-headings-head1">About the Gig</p>
        </div>
        <div className="gig-points">
          <ul>
            {points.map((item, index) => (
              <li key={index} className="gig-point">
                {item.point}
                <br />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gig;
