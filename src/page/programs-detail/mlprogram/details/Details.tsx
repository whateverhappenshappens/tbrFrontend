import React, { useState, useEffect } from "react";
import "./Details.css";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface Props {
  star: number;
  rating: number;
  students: number;
}

const Details: React.FC<Props> = (props) => {
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

  const arr = new Array<number>(5).fill(0);

  return (
    <div className="details">
      <div className="details-content">
        <div className="details-info">
          <div className="details-links">
            <a href="http://">
              <p>Programs</p>
            </a>
            <AiOutlineRight size={15} color="white" />
            <a href="http://">
              <p>Web Dev</p>
            </a>
            <AiOutlineRight size={15} color="white" />
            <a href="http://">
              <p>Machinester</p>
            </a>
          </div>
          <div className="details-paragraphs">
            <p className="details-paragraphs-para1">
              A Machine Learning Journey Unlock the Future with AI and Machine
              Learning
            </p>

            <p className="details-paragraphs-para3">
              Join India's biggest Machine Learning training program along{" "}
              <br />
              with thousands of like-minded enthusiasts.
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
            <p>Batch Starting Date: Winter 2023 </p>
            <p>Program Format: Online Live Classes </p>
            <p>Program Duration: 3 Months , At 5-10 hrs/week</p>
          </div>
          <div className="details-buttons">
            <button className="details-buttons-enroll">
              <p>
                Enroll Now for<p className="details-buttons-strike"> ₹ 5000</p>{" "}
                ₹ 3,999
              </p>
            </button>
            <button className="details-buttons-download">
              <p>Download Syllabus</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
