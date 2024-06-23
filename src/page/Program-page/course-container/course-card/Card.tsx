import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../CartContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Props {
  heading: string;
  para1: string;
  teachername: string;
  image: string;
  link: string;
}

const Card: React.FC<Props> = (props) => {
  const { addToCart } = useCart();

  const handleEnroll = () => {
    const generateUniqueId = () => {
      return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    };

    const course = {
      id: generateUniqueId(),
      name: props.heading,
      description: props.para1,
      price: 5000,
      discountedPrice: 2999,
    };

    addToCart(course);
    toast.success("Item successfully added to cart!");
  };

  return (
    <div className="course-card">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <div className="course-card-banner-image">
        <p>Live Classes</p>
        <img src={props.image} alt="Girl"></img>
      </div>
      <div className="course-card-content-box">
        <div className="course-card-content-header">
          <h3>{props.heading}</h3>
          <div className="course-card-content-header-rating">
            4.0 ★ ★ ★ ★ ☆ (10,000)
          </div>
        </div>
        <div className="course-card-content">
          <p className="course-card-content-para1">{props.para1}</p>
          <div className="months-and-internship-oppurtunity">
            <div className="months-details">3 months</div>
            <div className="internship-oppurtunity-details">
              Internship oppurtunity
            </div>
          </div>
          <p className="Teacher-Name">{props.teachername}</p>
          <div className="course-card-content-button">
            <button className="enroll-btn course-card-content-button-enroll-now" onClick={handleEnroll}>
              Enroll Now
            </button>
            <button className="course-card-content-button-view-details">
              <Link to={props.link}> Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
