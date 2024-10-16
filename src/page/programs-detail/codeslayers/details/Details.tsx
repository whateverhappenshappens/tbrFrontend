import React, { useState, useEffect } from "react";
import "./Details.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useCart } from "../../../../CartContext";
import { toast } from "react-toastify";
import code from "../../../../assets/ai-cloud-concept-with-robot-arm.png"
import { useNavigate } from "react-router-dom";
interface Props {
  star: number;
  rating: number;
  students: number;
  
  
}

const Details: React.FC<Props> = (props) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [randomStudents, setRandomStudents] = useState<number>(0);
  const [randomRating, setRandomRating] = useState<number>(0);

  useEffect(() => {
    let studentsIntervalId: NodeJS.Timeout;
    let ratingIntervalId: NodeJS.Timeout;
    let countStudents = 0;
    let countRating = 0;

    studentsIntervalId = setInterval(() => {
      if (countStudents <= props.students) {
        setRandomStudents(countStudents);
        countStudents += 100;
      } else {
        clearInterval(studentsIntervalId);
      }
    }, 10);

    ratingIntervalId = setInterval(() => {
      if (countRating <= props.rating) {
        setRandomRating(countRating);
        countRating += 100;
      } else {
        clearInterval(ratingIntervalId);
      }
    }, 10);

    return () => {
      clearInterval(studentsIntervalId);
      clearInterval(ratingIntervalId);
    };
  }, [props.students, props.rating]);

  const handleEnroll = () => {
    // const generateUniqueId = () => {
    //   return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    // };

    const course = {
      id: "code-slayer",
      name: "CodeSlayer",
      description: " A Competitive Programming Course.A Complete Placement Preparation Program ",
      price: 4999,
      discountedPrice: 3499,
      image:code   
    };

    addToCart(course);
    toast.success("Item successfully added to cart!");
    setTimeout(() => {
      navigate(`/cart`)
    }, 2000);
  };

  const arr = new Array<number>(5).fill(0);

  return (
    <div className="details">
      {/* Ensure ToastContainer is placed here */}
      <div className="details-content4">
        <div className="details-info">
          <div className="details-links">
            <a href="http://">
              <p>Programs</p>
            </a>
            
            
            <AiOutlineRight size={15} color="white" />
            <a href="http://">
              <p>CodeSlayer</p>
            </a>
          </div>
          <div className="details-paragraphs">
            <p className="details-paragraphs-para1">
              A Competitive Programming program, complete Placement Preparation
              Program
            </p>
          </div>
          <div className="details-ratings">
            <div className="details-stars">
              <div className="star">
                {arr.map((_, key) =>
                  key < props.star ? (
                    <AiFillStar key={key} color="yellow" size={20} />
                  ) : (
                    <AiOutlineStar key={key} color="white" size={20} />
                  )
                )}
              </div>
              <div className="rating">(5K+ Ratings)</div>
            </div>
            <div className="details-best">
              <p className="para-1">10K+ Students</p>
              <p className="para-2"> Bestseller</p>
            </div>
          </div>
          <div className="details-date">
            <p>Batch Starting Date: Winter 2024 </p>
            <p>Program Format: Online Live Classes </p>
            <p>Program Duration: 2 Months , At 2-10 hrs/week</p>
            <p>You Will Learn: C++, Data Structures and Algorithms</p>
          </div>
          <div className="details-buttons">
            <button className="details-buttons-enroll" onClick={handleEnroll}>
              <p>
                Enroll Now for{" "}
                <span className="details-buttons-strike"> ₹ 4999</span> ₹ 3,499
              </p>
            </button>
            <a href="https://drive.google.com/file/d/1OseXuScYsS0n2X3I_n8UHstEFBbuLlAj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className="py-7 details-buttons-download">
              <p>Download Syllabus</p>
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
