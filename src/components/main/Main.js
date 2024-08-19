import { jsx as _jsx } from "react/jsx-runtime";
import LandingPage from "../../page/LandingPage/LandingPage";
import "../../styles/components/Main.css";
const Main = () => {
    return (_jsx("div", { className: "main-body", children: _jsx(LandingPage, {}) }));
};
export default Main;
