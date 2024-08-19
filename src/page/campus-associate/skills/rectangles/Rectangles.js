import { jsx as _jsx } from "react/jsx-runtime";
import "./Rectangles.css";
const Rectangles = (props) => {
    return (_jsx("div", { className: "rectangles", children: _jsx("p", { className: "vr-demi-bold", children: props.paragraph }) }));
};
export default Rectangles;
