import React from 'react';
import "./MediaPresence.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type MediaProps = {
  title: string;
  para: string;
  image: string;
  link: string;
};

type MediaPresenceProps = {
  mediaItems: Array<MediaProps>;
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
          prevArrow: <div className="prev-arrow">&#10094;</div>,
          nextArrow: <div className="next-arrow">&#10095;</div>,
        },
      },
    ],
  };

  return (
    <div className="media-presence">
      <h2>Media Presence</h2>
      <Slider {...settings} className="slider">
        {mediaItems.map((item, idx) => (
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
