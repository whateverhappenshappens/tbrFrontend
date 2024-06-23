import React, { useState } from "react";
import "./StudentSaying.css";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import StudentSayingCard from "./studentsayingcards/StudentSayingCards";

const StudentSaying: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = 5; // Total number of cards

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

  const reviews = [
    {
      color: "#FFEDB6",
      logocolor: "#FFC81E",
      username: "Tirthankar Roy",
      program: "IoT & Embedded System",
      link: "https://example.com",
      review: "Very Good experience,Teaching and doubt clearing was excellent and the teacher who was allocated helped us in thinking out of the box and descriptively answered all our doubts Thank you",
      rating: 4,
    },
    {
      color: "#FECBC4",
      logocolor: "#FE624C",
      username: "Amarun Ghosh",
      program: "IoT & Embedded System",
      link: "https://example.com",
      review: "The lessons and topics taught were present relevant, the teaching was good and engaging and The implementations of ideas into projects were extraordinary and the overall experience was great.",
      rating: 4,
    },
    {
      color: "#B6FFED",
      logocolor: "#1EFC81",
      username: "Shreya Kesari",
      program: "IoT & Embedded System",
      link: "https://example.com",
      review: "This internship was a very good experience for me I learned so many new things about IoT and about the hardware and its connection and how to do the coding part. Thank you to you sir for teaching us so nicely.",
      rating: 5,
    },
    {
      color: "#C4CBFE",
      logocolor: "#4C62FE",
      username: "Shreya Kesari",
      program: "IoT & Embedded System",
      link: "https://example.com",
      review: "It was a very good experience and we had learn a lot from this internship about IoT and about the Arduino board and about its connection and about more sensors.",
      rating: 4,
    },
    {
      color: "#FECBB6",
      logocolor: "#FE4C6E",
      username: "Ansuman Pati",
      program: "IoT & Embedded System",
      link: "https://example.com",
      review: "Thank you, TechBairn, for your commitment to excellence in education and for equipping me with the tools needed to excel in the dynamic field of IoT",
      rating: 4,
    },
  ];

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
          {/* Display the current card based on currentIndex */}
          <StudentSayingCard {...reviews[currentIndex]} />
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
