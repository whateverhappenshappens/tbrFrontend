import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import "./Content.css";
import girl1 from "./Mask Group 16.png";
import msg from "./Group 480.png";
import call from "./Group 481.png";
import location from "./Group 482.png";
const Content = () => {
    const footerRef = useRef(null);
    const scrollToFooter = () => {
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs("div", { className: "gig1", children: [_jsx("div", { className: "gig-headings", children: _jsxs("div", { className: "mine1", children: [_jsxs("div", { className: "left23", children: [_jsx("p", { className: "us", onClick: scrollToFooter, children: "Contact Us" }), _jsx("p", { className: "us1", children: "Have some questions or just wanted to know more about us? Why not pick up your phone." }), _jsx("br", {}), _jsxs("div", { className: "ice", children: [_jsxs("div", { className: "icon1", children: [_jsx("div", { className: "lefty12", children: _jsx("img", { src: msg, alt: "aa" }) }), _jsxs("div", { className: "righty", children: [_jsx("p", { children: "hello@techbairn.com" }), _jsx("p", { children: "info@techbairn.com" })] })] }), _jsxs("div", { className: "icon1", children: [_jsx("div", { className: "lefty12", children: _jsx("img", { src: call, alt: "aa" }) }), _jsxs("div", { className: "righty", children: [_jsx("p", { children: "(+91)- 8789726459" }), _jsx("p", { children: "(+91)- 8545860096" })] })] }), _jsxs("div", { className: "icon1", children: [_jsx("div", { className: "lefty12", children: _jsx("img", { src: location, alt: "aa" }) }), _jsx("div", { className: "righty", children: _jsxs("p", { className: "tryr", children: ["1st Floor, 568/569, 20th Cross", _jsx("br", {}), " Rd, KPC Layout, Kasavanahalli", _jsx("br", {}), " Bengaluru, Karnataka 560035"] }) })] })] })] }), _jsx("div", { className: "right23", children: _jsx("img", { src: girl1, alt: "girl" }) })] }) }), _jsx("div", { ref: footerRef, className: "footer" })] }));
};
export default Content;
