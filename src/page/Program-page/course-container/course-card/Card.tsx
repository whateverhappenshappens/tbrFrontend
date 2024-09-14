import "./Card.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../CartContext";
import { toast } from "react-toastify";

// Define the type for props
interface CardProps {
  id: number;
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

  // Call the function to generate a random rating count for each card
  const randomRatingCount = getRandomRatingCount();

  const handleEnroll = () => {
    const course = {
      id: props.id,
      name: props.heading,
      description: props.para1,
      price: 4999,
      discountedPrice: 3429,
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
            4.0 ★★★★☆ ({randomRatingCount})
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
