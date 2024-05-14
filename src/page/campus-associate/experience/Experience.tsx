import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Experience.css";
import Cards from "./cards/Cards";
import growth from "../../../assets/growth-graph.png";
import heart from "../../../assets/heart.png";
import skills from "../../../assets/skills.png";

const Experience: React.FC = () => {
  const para1 =
    "Through our comprehensive program, we aim to bring out the best in you both personally and professionally.";
  const para2 =
    "We have confidence in your talent and are unafraid to delegate crucial roles to capable individuals like you.";
  const para3 =
    "Sharpen your communication and leadership skills, giving you the opportunity to stand out from the crowd.";
  const para4 =
    "Build your own network across various industries using our extensive resources.";
  const para5 =
    "Gain insight into the functioning of the professional world and work in an environment that mirrors real-world scenarios.";
  const para6 =
    "Become the proud owner of authentic merchandise and cutting-edge gadgets.";

  const cardsData = [
    {
      color: "#2FD18C",
      heading: "Professional Growth",
      para: para1,
      image: growth,
    },
    { color: "#FFD75B", heading: "Responsibility", para: para2, image: heart },
    {
      color: "#FF6954",
      heading: "Skills Enhancement",
      para: para3,
      image: skills,
    },
    {
      color: "#2FD18C",
      heading: "Networking Opportunities",
      para: para4,
      image: growth,
    },
    {
      color: "#FFD75B",
      heading: "Real-world Exposure",
      para: para5,
      image: heart,
    },
    {
      color: "#FF6954",
      heading: "Rewards and Recognition",
      para: para6,
      image: skills,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="experience">
      <div className="experience-texts">
        <p className="experience-head1 vr-bold">Live The Perfect Experience</p>
        <p className="experience-head2 vr-regular">
          Your trust in us is valued, and we reciprocate by providing you with
          valuable benefits.
        </p>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            color={card.color}
            heading={card.heading}
            para={card.para}
            image={card.image}
          />
        ))}
      </div>
      <Slider {...settings} className="slick-slider-mobile">
        {cardsData.map((card, index) => (
          <div key={index}>
            <Cards
              color={card.color}
              heading={card.heading}
              para={card.para}
              image={card.image}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Experience;
