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
    "With a mutually benefited program we bring out the best in you personally and professionally.";
  const para2 =
    "We have full confidence in your capability and you are trusted with crucial roles.";
  const para3 =
    "Develop your communication and leadership skills. Get a chance to stand out from the crowd.    ";
  const para4 =
    "With a mutually benefited program we bring out the best in you personally and professionally.";
  const para5 =
    "We have full confidence in your capability and you are trusted with crucial roles.";
  const para6 =
    " Develop your communication and leadership skills. Get a chance to stand out from the crowd.";

  const cardsData = [
    {
      color: "#2FD18C",
      heading: "Growth",
      para: para1,
      image: growth,
    },
    {
      color: "#FFD75B",
      heading: "Responsibility",
      para: para2,
      image: heart,
    },
    {
      color: "#FF6954",
      heading: "Skills",
      para: para3,
      image: skills,
    },
    {
      color: "#2FD18C",
      heading: "Growth",
      para: para4,
      image: growth,
    },
    {
      color: "#FFD75B",
      heading: "Responsibility",
      para: para5,
      image: heart,
    },
    {
      color: "#FF6954",
      heading: "Skills",
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
        <p className="experience-head1 vr-bold">Why we stand out Different?</p>
        <p className="experience-head2 vr-regular">
        We appreciate your trust and we reciprocate by benefiting you.
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
