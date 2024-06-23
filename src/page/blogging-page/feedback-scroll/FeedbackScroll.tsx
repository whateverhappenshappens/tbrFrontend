import React from "react";
import { useNavigate } from "react-router-dom";

import "../../../styles/components/FeedbackScroll.css";
import FeedbackImg from "../../../assets/CA 3@2x.png";
// import SlideImg from "../../../assets/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { blogs } from "../blogs";
// import { Blog } from "../../../types/Blog";

interface FeedbackScrollProps extends React.JSX.IntrinsicAttributes {
  // changeBlogCallback: (blog: Blog) => void;
}

const FeedbackScroll: React.FC<FeedbackScrollProps> = () => {
  const navigate = useNavigate();

  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
  };

  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`)
  }
  return (
    <div className="feedback-scroll">
      {/* TODO: Add multiple cards */}
      <Slider {...settings} className="slider">
        {blogs.slice(0, 5).map((blog) => (
          <div className="feedback-scroll-card" onClick={() => handleBlogClick(blog.id)}>
            <div className="feedback-scroll-img-div">
              <img src={blog.image} alt="" />
            </div>
            <div className="feedback-scroll-content-div">
              <h6 className="feedback-scroll-content-div-Technology-text">
                {blog.genre}
              </h6>
              <h1 className="feedback-scroll-content-div-extraordinary-text">
                {blog.title}
              </h1>
              <p className="feedback-scroll-content-div-extraordinary-text-description">
                {blog.summary}
              </p>
              <div className="my">
              <div className="feedback-scroll-content-div-owner-content">
                <img
                  src={FeedbackImg}
                  alt=""
                  className="feedback-scroll-content-div-owner-content-img"
                />
                <div className="feedback-scroll-content-div-owner-content-details">
                  <p className="name">{blog.author}</p>
                  <p >{blog.date}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default FeedbackScroll;
