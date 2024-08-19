import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Enroll.css";
import eventBoy from "../../../assets/Group 426.png";
import { Link } from "react-router-dom";
const Enroll = () => {
    return (_jsx("div", { className: "enroll", children: _jsxs("div", { className: "enroll-content", children: [_jsxs("div", { className: "enroll-text", children: [_jsx("p", { className: "enroll-text-large ", children: "Hire With Us" }), _jsx("p", { className: "enroll-text-small visbyroundCF medium", children: "Empower Your Business with Future-Ready Talent" }), _jsx("button", { className: "enroll-button ", children: _jsx(Link, { to: "https://forms.gle/snETvuhLtfvEPptD8", target: "_blank", children: _jsx("p", { children: "Join us!" }) }) })] }), _jsxs("div", { className: "enroll-img", children: [_jsx("p", { className: "image-para", children: "Hire With Us" }), _jsx("img", { src: eventBoy, alt: "Girl" })] })] }) }));
};
export default Enroll;
