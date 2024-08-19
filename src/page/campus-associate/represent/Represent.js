import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from "react";
import Boy from "../../../assets/Boyphoto@2x.png";
import "./Represent.css";
const Represent = () => {
    // Create a ref to the element you want to scroll to
    const scrollToRef = useRef(null);
    // Function to handle the scroll
    const handleExploreClick = () => {
        if (scrollToRef.current) {
            scrollToRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (_jsxs("div", { className: "container2", children: [_jsxs("div", { className: "represent", children: [_jsx("p", { className: "represent-head1", children: "Your Campus, Your Influence: Join Us Today!" }), _jsx("p", { className: "vr-regular represent-head2", children: "Become a Campus Associate, by representing our mission and helping shape the future of education on your campus." }), _jsx("button", { className: "represent-button", onClick: handleExploreClick, children: _jsx("p", { className: "vr-bold", children: "Explore" }) })] }), _jsx("div", { className: "boy-image", children: _jsx("img", { src: Boy, alt: "" }) }), _jsxs("div", { ref: scrollToRef, className: "doubts", children: [_jsxs("p", { className: "vr-bold doubts-head1 try", children: ["Ready to make", _jsx("br", {}), _jsx("br", {}), " an impact?"] }), _jsx("p", { className: "vr-medium medium doubts-head2", children: "Get in touch with us to learn more!" }), _jsx("a", { href: "http://bit.ly/forms_TB-CA", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { className: "doubts-button mt-[4rem] vr-bold", children: _jsx("div", { className: "doubts-button-div", children: _jsx("p", { children: "Apply Now" }) }) }) })] })] }));
};
export default Represent;
