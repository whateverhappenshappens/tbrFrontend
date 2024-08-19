import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Enroll.css";
import eventBoy from "../../../assets/Group 425.png";
import { Link } from "react-router-dom";
const Enroll = () => {
    return (_jsx("div", { className: "enroll", children: _jsxs("div", { className: "enroll-content", children: [_jsxs("div", { className: "enroll-text", children: [_jsx("p", { className: "enroll-text-large ", children: "Become a Mentor" }), _jsx("p", { className: "enroll-text-small visbyroundCF medium", children: "Are you passionate about making a difference in society and expanding your own knowledge? TechBairn offers an exciting opportunity right at your fingertips!" }), _jsx("button", { className: "enroll-button ", children: _jsx(Link, { to: "https://forms.gle/iuE2x5w7b15ms2vz7", target: "_blank", children: _jsx("p", { children: "Apply Now" }) }) })] }), _jsxs("div", { className: "enroll-img", children: [_jsx("p", { className: "image-para", children: "Become a Mentor" }), _jsx("img", { src: eventBoy, alt: "Girl" })] })] }) }));
};
export default Enroll;
