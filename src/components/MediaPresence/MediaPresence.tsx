import React from "react";
import "./MediaPresence.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image from "../../assets/education-view-india.png"

type MediaProps = {
  title: string;
  para: string;
  image: string;
  link: string;
};

type MediaPresenceProps = {
  mediaItems: Array<MediaProps>;
};

//Previous Arrow Component
const PrevArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="custom-arrow prev-arrow mobile-arrow" onClick={onClick}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#fff" stroke="#6d87f5" strokeWidth="2"/>
        <polyline points="14,7 9,12 14,17" fill="none" stroke="#6d87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

//Next Arrow Component
const NextArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <div className="custom-arrow next-arrow mobile-arrow" onClick={onClick}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#fff" stroke="#6d87f5" strokeWidth="2"/>
        <polyline points="10,7 15,12 10,17" fill="none" stroke="#6d87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

const MediaItem = ({ title, link, para, image }: MediaProps) => {
  return (
    <div className="media-item">
      <div className="image">
        <img src={image} alt={title} />
      </div>
      <div className="media-title">{title}</div>
      <div className="media-para">{para}</div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="read-now">
        READ NOW
      </a>
    </div>
  );
};

const MediaPresence = ({ mediaItems }: MediaPresenceProps) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          prevArrow: <PrevArrow />,
          nextArrow: <NextArrow />,
        },
      },
    ],
  };

  // Add the new box data with text style and size matching others
  const extraItem = {
    title: "",
    para: "TechBairn was featured in Education View India’s January 2025 Edition, for its outstanding innovation, excellence, transformative impact in the Indian education sector.",
    image: image,
    link: "https://theeducationview.com/ashutosh-kumar-shandilya-driving-excellence-and-empowering-learners-globally-with-tech/"
  };

  // Combine all items so the extra box is treated like others
  const allItems = [...mediaItems, extraItem];

  return (
    <div className="media-presence">
      <h2>Media Presence</h2>
      <Slider {...settings} className="slider">
        {allItems.map((item, idx) => (
          <MediaItem
            key={idx}
            title={item.title}
            para={item.para}
            image={item.image}
            link={item.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default MediaPresence;