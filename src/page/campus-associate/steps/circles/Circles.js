import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Circles.css';
const Circles = (props) => {
    return (_jsxs("div", { className: "circles-container", children: [_jsx("div", { className: "circle", children: _jsx("div", { style: { backgroundColor: props.color }, className: "backGroundCircle", children: _jsx("img", { src: props.image, alt: "" }) }) }), _jsx("p", { className: "circles-head vr-demi-bold", children: props.heading })] }));
};
export default Circles;
