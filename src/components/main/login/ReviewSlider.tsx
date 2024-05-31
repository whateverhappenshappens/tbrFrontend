import React, { useState, useEffect } from "react";
import ReviewBox, { ReviewProps } from "./ReviewBox";

const reviews: ReviewProps[] = [
  {
    content: "I have done multiple courses with TechBairn and they have helped me land my first internship with Google. I recommend everyone to at least try their programs once.",
    name: "Ankit Sinha",
    college: "KIIT University",
    id: "1",
    img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    content: "I have done multiple courses with TechBairn and they have helped me land my first internship with Google. I recommend everyone to at least try their programs once.",
    name: "Rajesh Kumar",
    college: "IIT Bombay",
    id: "2",
    img: "data:image/jpeg;base64,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",
  },
  {
    content: "I have done multiple courses with TechBairn and they have helped me land my first internship with Google. I recommend everyone to at least try their programs once.",
    name: "Priya Sharma",
    college: "NIT Trichy",
    id: "3",
    img: "data:image/jpeg;base64,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",
  },
];

const ReviewSlider = () => {
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      }, 4000); // change review every 5 seconds
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="review-slider">
        {reviews.map((review, index) => (
          <div key={review.id} className={index === currentReviewIndex ? "active" : ""}>
            <ReviewBox {...review} />
          </div>
        ))}
      </div>
    );
  };
  

export default ReviewSlider;
