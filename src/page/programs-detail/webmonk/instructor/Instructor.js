import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Instructor.css";
import profilepic from "../../../../assets/LaveshGaurav.jpeg";
import linkedin from "../../../../assets/linkedin.png";
const Instructor = () => {
    return (_jsxs("div", { className: "speaker", children: [_jsx("div", { className: "speaker-heading", children: _jsx("p", { children: "About Instructor" }) }), _jsxs("div", { className: "speaker-content", children: [_jsx("div", { className: "speaker-biodata", children: _jsx("p", { children: "Meet Lavesh, our Full Stack Web Development Instructor. Lavesh brings over 5 years of experience in the full stack development journey and has been an educator for more than 3 years. He has collaborated with numerous startups, contributing to the creation of many scalable products. Lavesh has also helped thousands of students launch their careers in full stack web development." }) }), _jsxs("div", { className: "speaker-profile", children: [_jsx("img", { src: profilepic, className: "instructor_image", alt: "" }), _jsx("p", { className: "speaker-profile-name", children: "Lavesh Gaurav" }), _jsx("p", { className: "speaker-profile-company", children: "Senior Software Engineer" }), _jsxs("div", { className: "speaker-profile-linkedin", children: [_jsx("img", { src: linkedin, alt: "" }), _jsx("a", { href: " https://www.linkedin.com/in/lavesh-gaurav-552728115/\r\n", children: _jsx("p", { children: "Let's Connect" }) })] })] })] })] }));
};
export default Instructor;
