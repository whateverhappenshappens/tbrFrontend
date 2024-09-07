import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react"; // Import useEffect hook
import "./CampusAssociate.css";
import Represent from "./represent/Represent";
import Associate from "./associate/Associate";
import Experience from "./experience/Experience";
import Steps from "./steps/Steps";
import Skills from "./skills/Skills";
import Roles from "./roles/Roles";
import Benefits from "./benefits/Benefits";
import Connected from "./connected/Connected";
import StudentSaying from "./studentssaying/studentsayingcards/StudentSaying";

const CampusAssociate = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when the component is mounted
    }, []);

    return (
        _jsxs("div", {
            className: "container1 mt-[5rem]",
            children: [
                _jsx(Represent, {}),
                _jsx(Associate, {}),
                _jsx(Experience, {}),
                _jsx(Steps, {}),
                _jsx(Skills, {}),
                _jsx(Roles, {}),
                _jsx(Benefits, {}),
                _jsx(StudentSaying, {}),
                _jsx(Connected, {})
            ]
        })
    );
};

export default CampusAssociate;
