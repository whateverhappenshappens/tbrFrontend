import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Instructor.css";
import profilepi from "../../../../assets/DSA.jpg";
import linkedin from "../../../../assets/linkedin.png";
const Instructor = () => {
    return (_jsxs("div", { className: "speaker", children: [_jsx("div", { className: "speaker-heading", children: _jsx("p", { children: "About Instructor" }) }), _jsxs("div", { className: "speaker-content", children: [_jsx("div", { className: "speaker-biodata", children: _jsx("p", { children: "Meet Shashank, our Data Structure & Algorithm (DSA) Instructor Shashank is currently pursuing a Computing Science thesis at the University of Alberta and has a keen interest in applying Machine Learning to solve complex problems. Known for his exceptional problem-solving skills and sharp coding abilities, Shashank was part of the ICPC Regionalist 2019 and is a MITACS GRI scholarship awardee. With over 2 years of experience as a backend software engineer at companies like Red Hat, nference, and GeeksforGeeks, he brings valuable industry insights to his teaching. Shashank has been an instructor for over 4 years, collaborating with platforms like Unacademy, GeeksforGeeks, and Scalar on their placement preparation programs. His passion for teaching and expertise in DSA make him a valuable asset to TechBairn." }) }), _jsxs("div", { className: "speaker-profile", children: [_jsx("img", { className: "instructor_image", src: profilepi, alt: "" }), _jsx("p", { className: "speaker-profile-name", children: "Shashank Pathak" }), _jsx("p", { className: "speaker-profile-company", children: "ML Research @ Omics Lab, V&R Lab" }), _jsxs("div", { className: "speaker-profile-linkedin", children: [_jsx("img", { src: linkedin, alt: "" }), _jsx("a", { href: " https://www.linkedin.com/in/shashankcube/\r\n", children: _jsx("p", { children: "Let's Connect" }) })] })] })] })] }));
};
export default Instructor;
