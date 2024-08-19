import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ReviewBox1.css";
const ReviewBox = ({ content, img, name, college }) => {
    return (_jsxs("div", { className: "review-container", children: [_jsx("p", { className: "review-text", children: content }), _jsxs("div", { className: "person-info", children: [_jsx("img", { src: img, className: "profile-pic", alt: "Profile pic" }), _jsxs("div", { children: [_jsx("p", { className: "user-name", children: name }), _jsx("p", { className: "user-college", children: college })] })] })] }));
};
export default ReviewBox;
