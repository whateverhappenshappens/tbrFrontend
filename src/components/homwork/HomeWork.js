import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./HomeWork.css";
import bookLogo from "../../assets/homework--2--10@1x.png";
const HomeWork = ({ color, text }) => {
    return (_jsxs("div", { className: "homework-box", children: [_jsx("div", { className: "circle", style: { backgroundColor: color }, children: _jsx("img", { className: "book-logo", src: bookLogo, alt: "book-logo" }) }), _jsx("p", { className: "ellipse-description", children: text })] }));
};
export default HomeWork;
