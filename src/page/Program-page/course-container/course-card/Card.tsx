import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../CartContext";
import { toast } from "react-toastify";

// Define the type for props
interface CardProps {
  id: string;
  heading: string;
  para1: string;
  image: string;
  teachername: string;
  link: string;
}

const Card: React.FC<CardProps> = (props) => {
  const { addToCart } = useCart();

  // Function to generate a random number between 8000 and 10000
  const getRandomRatingCount = () => {
    return Math.floor(Math.random() * (10000 - 8000 + 1)) + 8000;
  };

  // Function to generate a random star rating between 4.0 and 5.0
  const getRandomRating = () => {
    return (Math.random() * (5 - 4) + 4).toFixed(1); // Generates a float between 4.0 and 5.0
  };

  // Call the functions to generate random values for rating and rating count
  const randomRatingCount = getRandomRatingCount();
  const randomStarRating = parseFloat(getRandomRating());

  // Function to render stars based on the rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 >= 0.5 ? 1 : 0; // If there is a half-star
    const emptyStars = 5 - fullStars - halfStar; // Remaining empty stars

    return (
      <>
        {Array(fullStars)
          .fill("★")
          .map((star, index) => (
            <span key={index} className="filled-star">
              {star}
            </span>
          ))}
        {halfStar === 1 && <span className="half-star">★</span>} {/* Render half star */}
        {Array(emptyStars)
          .fill("☆")
          .map((star, index) => (
            <span key={index} className="empty-star">
              {star}
            </span>
          ))}
      </>
    );
  };

  const handleEnroll = () => {
    const course = {
      id: props.id,
      name: props.heading,
      description: props.para1,
      price: 4999,
      discountedPrice: 3499,
      image: props.image,
    };
    addToCart(course);
    toast.success("Item successfully added to cart!");
  };

  return (
    <div className="course-card">
      <div className="course-card-banner-image">
        <p>Live Classes</p>
        <img src={props.image} alt="Course Banner" />
      </div>
      <div className="course-card-content-box">
        <div className="course-card-content-header">
          <h3>{props.heading}</h3>
          <div className="course-card-content-header-rating">
            {randomStarRating} {renderStars(randomStarRating)} ({randomRatingCount})
          </div>
        </div>
        <div className="course-card-content">
          <p className="course-card-content-para1">{props.para1}</p>
          <div className="months-and-internship-oppurtunity">
            <div className="months-details">3 months</div>
            <div className="internship-oppurtunity-details">
              Internship opportunity
            </div>
          </div>
          <p className="Teacher-Name">{props.teachername}</p>
          <div className="course-card-content-button">
            <button
              className="enroll-btn course-card-content-button-enroll-now"
              onClick={handleEnroll}
            >
              Enroll Now
            </button>
            <button className="course-card-content-button-view-details">
              <Link to={props.link}>Details</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
