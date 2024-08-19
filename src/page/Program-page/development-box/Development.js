import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Development.css";
const Development = ({ value }) => {
    const [data, setData] = value;
    const handleAll = () => {
        setData("all");
    };
    const handleWeb = () => {
        setData("web");
    };
    const handleMl = () => {
        setData("ml");
    };
    const handleCode = () => {
        setData("code");
    };
    const handleIot = () => {
        setData("iot");
    };
    return (_jsxs("div", { className: "development-box", children: [_jsx("div", { className: "all-box", children: _jsx("button", { onClick: handleAll, children: "All" }) }), _jsx("div", { className: "web-development-box", children: _jsx("button", { onClick: handleWeb, children: "Web Development" }) }), _jsx("div", { className: "machine-learning-box", children: _jsx("button", { onClick: handleMl, children: "Machine Learning" }) }), _jsx("div", { onClick: handleCode, className: "machine-learning-box", children: _jsx("button", { children: "Coding" }) }), _jsx("div", { onClick: handleIot, className: "machine-learning-box", children: _jsx("button", { children: "IOT" }) })] }));
};
export default Development;
