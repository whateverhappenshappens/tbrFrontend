import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./FridaySale.css";
import eventBoy from "../../../assets/Man photo@2x.png";
import { Link } from "react-router-dom";
const Enroll = () => {
    return (_jsx("div", { className: "enroll", children: _jsxs("div", { className: "enroll-content", children: [_jsxs("div", { className: "enroll-text", children: [_jsxs("p", { className: "enroll-text-large ", children: [_jsx("span", { children: "Flat 50% off" }), _jsx("br", {}), "Black Friday Sale on Machinester"] }), _jsx("p", { className: "enroll-text-small visbyroundCF medium", children: "Are you passionate about making a difference in society and expanding your own knowledge? TechBairn offers an exciting opportunity right at your fingertips!" }), _jsx("button", { className: "enroll-button", children: _jsx(Link, { to: "/course/codeslayer", children: _jsx("p", { children: "Apply Now" }) }) })] }), _jsxs("div", { className: "enroll-img", children: [_jsxs("p", { className: "image-para", children: [_jsx("span", { children: "Flat 50% off" }), _jsx("br", {}), "Black Friday Sale on Machinester"] }), _jsx("img", { src: eventBoy, alt: "Girl" })] })] }) }));
};
export default Enroll;
