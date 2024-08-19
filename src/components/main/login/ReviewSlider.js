import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import ReviewBox from "./ReviewBox";
const reviews = [
    {
        content: "TechBairn offers a supportive learning experience for freshers. The instructors and staff are positive and motivating, creating a people-friendly environment. Highly recommended for those starting their professional journey.",
        name: "Harsh Ambastha",
        college: "VIT Vellore",
        id: "1",
        img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        content: "A very helpful learning experience for freshers. Teaching instructors and management staff are positive and constantly motivate the students. The environment in the company is also people friendly and easy to work in. ",
        name: "Kriti Srivastava",
        college: "KIIT University",
        id: "2",
        img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        content: "It was a great experience to learn with TechBairn. Throughout the program the teaching assistant and the coordinators everyone was very supportive and helpful. I recommend everyone to at least try their programs once",
        name: "Subhashis Dutta",
        college: "Netaji Subhash Engineering College",
        id: "3",
        img: "https://images.unsplash.com/photo-1592188657297-c6473609e988?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D",
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
    return (_jsx("div", { className: "review-slider", children: reviews.map((review, index) => (_jsx("div", { className: index === currentReviewIndex ? "active" : "", children: _jsx(ReviewBox, { ...review }) }, review.id))) }));
};
export default ReviewSlider;
