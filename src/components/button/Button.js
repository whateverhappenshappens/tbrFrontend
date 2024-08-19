import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ buttonTextColor, text, onClick, style }) => {
    const styles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity: 1,
        borderWidth: 0
    };
    return (_jsx("button", { style: { ...styles, ...style }, onClick: onClick, children: _jsx("p", { style: { color: buttonTextColor, font: "normal normal bold 30px/37px Visby Round CF" }, children: text }) }));
};
export default Button;
