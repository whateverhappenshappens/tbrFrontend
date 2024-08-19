import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Buttons.css";
import { useState } from "react";
const Buttons = ({ Activedata, Pastdata, activeCallback, }) => {
    const [isToggled, setIsToggled] = useState(false);
    const upcomingBackgroundColor = isToggled ? "white" : "#6D87F5";
    const pastBackgroundColor = isToggled ? "#6D87F5" : "white";
    const upcomingTextColor = isToggled ? "#6D87F5" : "white";
    const pastTextColor = isToggled ? "white" : "#6D87F5";
    const makeTrue = async () => {
        setIsToggled(false);
        activeCallback();
    };
    const makeFalse = async () => {
        setIsToggled(true);
        activeCallback();
    };
    return (_jsx("div", { className: "events-buttons-container", children: _jsxs("div", { className: "events-buttons", children: [_jsx("button", { style: {
                        backgroundColor: upcomingBackgroundColor,
                        color: upcomingTextColor,
                    }, onClick: makeTrue, className: "events-button-upcoming", children: _jsxs("p", { className: "visbyroundCF bold", children: ["Active ", _jsx("br", {}), "Events"] }) }), _jsx("button", { style: { backgroundColor: pastBackgroundColor, color: pastTextColor }, onClick: makeFalse, className: "events-button-past", children: _jsxs("p", { className: "visbyroundCF bold", children: ["Past ", _jsx("br", {}), " Events"] }) })] }) }));
};
export default Buttons;
