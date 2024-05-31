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
    "Access skilled professionals who have completed our rigorous ed tech course, enriching your company with diverse perspectives.";
  const para2 =
    "Streamline your recruitment process without incurring any additional costs.    ";
  const para3 =
    "Swiftly fill positions with our efficient platform, saving time and securing top talent.    ";
  const para4 =
    "Fill vacant positions quickly and efficiently with pre-qualified candidates and streamlined processes.";
  const para5 =
    "Access candidates proficient in over 150 technologies, tailored to your company's needs.";
  const para6 =
    " Enjoy flexible hiring options to meet your immediate and future talent needs.    ";

  const cardsData = [
    {
      color: "#2FD18C",
      heading: "Diverse Talent Pool",
      para: para1,
      image: growth,
    },
    {
      color: "#FFD75B",
      heading: "Zero Cost Hiring",
      para: para2,
      image: heart,
    },
    {
      color: "#FF6954",
      heading: "Reduced Hiring Time",
      para: para3,
      image: skills,
    },
    {
      color: "#2FD18C",
      heading: "Reduced Hiring Time",
      para: para4,
      image: growth,
    },
    {
      color: "#FFD75B",
      heading: "Comprehensive Skill Set",
      para: para5,
      image: heart,
    },
    {
      color: "#FF6954",
      heading: "Year-Round Availability",
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
          We appreciate your trust and we reciprocate by benefiting you
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
