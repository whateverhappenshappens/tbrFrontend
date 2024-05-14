import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Benefits.css";
import BenefitsCard from "./benefits-card/Benefits-Card";
import writing from "../../../assets/writing.png";

const Benefits: React.FC = () => {
  const benefitsData = [
    {
      image: writing,
      text: "Receive exclusive TechBairn merchandise such as T-shirts, swaggers, and gadgets.",
    },
    {
      image: writing,
      text: "Earn additional stipends for outstanding performance.",
    },
    {
      image: writing,
      text: "Get a stipend for each successful referral using your student referral code.",
    },
    {
      image: writing,
      text: "Receive a Letter of Recommendation, Certificates, and a Pre-Placement Offer(PPO).",
    },
    {
      image: writing,
      text: "Top three achievers will be granted free access to our online programs.",
    },
    {
      image: writing,
      text: "Gain valuable exposure by working with a startup company.",
    },
    {
      image: writing,
      text: "Join our team to enjoy surprises and bonuses on a monthly and yearly basis.",
    },
    {
      image: writing,
      text: "Acquire and enhance valuable skills.",
    },
    {
      image: writing,
      text: "Experience a positive and enriching work environment.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 cards initially
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval to 2000 milliseconds (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="benefits">
      <div className="benefits-head">
        <p className="vr-bold">Benefits of a Campus Associate</p>
      </div>
      <Slider {...settings}>
        {benefitsData.map((benefit, index) => (
          <BenefitsCard key={index} image={benefit.image} text={benefit.text} />
        ))}
      </Slider>
    </div>
  );
};

export default Benefits;
