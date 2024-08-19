import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Card.css";
const Cards = (props) => {
    return (_jsxs("div", { className: "exp-cards", children: [_jsx("div", { className: "exp-cards-colorfulbg", style: { backgroundColor: props.color }, children: _jsx("div", { className: "img-circle", style: {
                        border: "2px solid white",
                        width: "90px",
                        height: "90px",
                        borderRadius: "50%",
                    } }) }), _jsx("p", { className: "exp-cards-head", children: props.heading }), _jsx("div", { className: "exp-cards-para", children: props.para })] }));
};
export default Cards;
