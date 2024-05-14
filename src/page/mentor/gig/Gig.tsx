import React from "react";
import "./Gig.css";
import { RiArrowRightSLine } from "react-icons/ri";

const Gig: React.FC = () => {
  const points = [
    {
      point: "TechBairn has brought the best opportunity at your doorsteps!",
    },
    {
      point:
        "We are seeking for the mentor who will see the hope and ability inside a mentee. If that sounds exactly like what you are then you could be a good fit.",
    },
    {
      point:
        "We have students from all over the world looking for great instructors who would guide to follow the correct path in their respective profession.",
    },
    {
      point:
        "Our vast mentor network includes engineers, from leading companies like Google, Facebook, Microsoft, Amazon, Adobe, along with startups and mid-sized enterprises too.",
    },
    {
      point:
        "Compensation: Generate income by imparting abundant knowledge to the community.As you nurture the community, your skills also flourish in tandem.",
    },
    {
      point:
        "Expand your network of intellectuals: Contribute to an extensive network of esteemed technical experts and a dynamic, global community of innovators. Broaden your connections with diverse mentors hailing from leading companies across the globe.",
    },
  ];
  return (
    <div className="gig">
      <div className="content">
        <div className="gig-headings">
          <p className="gig-headings-head1">About the Gig</p>
          <p className="gig-headings-head2">
            <span>What Awaits You in the Basket?</span>
            <br />
            <br /> Discover the chance to elevate your expertise. Rarely do
            golden opportunities knock, but when they do, seize them without
            hesitation. Knowledge is the only entity that grows through sharing.
          </p>
        </div>
        <div className="gig-points">
          <ul>
            {points.map((item, index) => (
              <li key={index} className="gig-point">
                {item.point}
                <br />
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
