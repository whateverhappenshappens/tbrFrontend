import React, { useState } from "react";
import "./StudentSaying.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";

const StudentSaying: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 2; // Total number of cards

  const handleBackward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - 1 : prevIndex - 1
    );
  };

  const handleForward = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalCards - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="studentsaying">
      {/* Heading */}
      <div className="studentsaying-heading">
        <p className="vr-bold">What our students are saying</p>
      </div>
      {/* Student Saying Cards */}
      <div className="studentsaying-cards">
        {/* Left Arrow */}
        <div className="studentsaying-cards-left" onClick={handleBackward}>
          <MdOutlineArrowBackIos size={35} color="white" />
        </div>
        {/* Student Saying Cards Content */}
        <div className="studentsaying-cards-card">
          {/* Display cards based on currentIndex */}
          <StudentSayingCard
            color="#FFEDB6"
            logocolor="#FFC81E"
            username="John Doe"
            program="Program Name"
            link="https://example.com" // Replace with correct URL
            review="Here there should be a short para of the review of the particular student. The review should be concise, brief and to the point. It is very important so as to keep the space clean."
            rating={3}
          />

          {/* Display the next card if it exists */}
          {totalCards > 1 && currentIndex === 0 && (
            <StudentSayingCard
              color="#FECBC4"
              logocolor="#FE624C"
              username="Jane Doe"
              program="Program Name"
              link="https://example.com" // Replace with correct URL
              review="Another short para of the review of another student. Keeping it concise and clean."
              rating={4}
            />
          )}
        </div>
        {/* Right Arrow */}
        <div className="studentsaying-cards-right" onClick={handleForward}>
          <MdOutlineArrowForwardIos size={35} color="white" />
        </div>
      </div>
    </div>
  );
};

export default StudentSaying;
