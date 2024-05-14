import "./StudentReviews.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import profile_icon from "../../assets/"

type ReviewProps = {
  name: string;
  program_name: string;
  //   profile_img: string;
  review: string;
  rating: number;
  social: string;
};

type StudentReviewsProps = {
  reviewItems: Array<ReviewProps>;
};

const ReviewItem = ({
  name,
  program_name,
  review,
  rating,
  social,
}: ReviewProps) => {
  return (
    <div className="review-item">
      <div className="profile">
        <img src="" alt="" />
        <div className="desc">
            <div className="name">{name}</div>
            <div className="program">{program_name}</div>
        </div>
        <div className="social">
            <a href={social}><img src="" alt="" /></a>
        </div>
      </div>
      <div className="review">{review}</div>
      <div className="rating">{rating}</div>
    </div>
  );
};

const StudentReviews = ({ reviewItems }: StudentReviewsProps) => {
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
          prevArrow: <div className="prev-arrow">{"❮"}</div>,
          nextArrow: <div className="next-arrow">{"❯"}</div>,
        },
      },
    ],
  };

  return (
    <div className="studentReviews">
      <h2>Student Reviews</h2>
      <Slider {...settings} className="slider">
        {reviewItems.map((item, idx) => (
          <ReviewItem
            key={idx}
            name={item.name}
            program_name={item.program_name}
            review={item.review}
            rating={item.rating}
            social={item.social}
          />
        ))}
      </Slider>
    </div>
  );
};

export default StudentReviews;
