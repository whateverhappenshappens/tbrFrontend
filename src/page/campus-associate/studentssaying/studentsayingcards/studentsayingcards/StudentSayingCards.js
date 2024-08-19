import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./StudentSayingCards.css";
import { HiMiniUser } from "react-icons/hi2";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
const StudentSayingCard = (props) => {
    const arr = new Array(5);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = i;
    }
    return (_jsxs("div", { className: "studentsayingcard", children: [_jsxs("div", { className: "studentsayingcard-info", children: [_jsx("div", { className: "studentsayingcard-logo", style: { backgroundColor: props.color }, children: _jsx(HiMiniUser, { color: props.logocolor, size: 100 }) }), _jsxs("div", { className: "studentsayingcard-profile", children: [_jsx("p", { className: "vr-bold studentsayingcard-profile-name", children: props.username }), _jsx("p", { className: " studentsayingcard-profile-name", children: props.college })] }), _jsx("div", { className: "studentsayingcard-linkedin", children: _jsx(BsLinkedin, { color: "#6D87F5", size: 50 }) })] }), _jsx("div", { className: "studentsayingcard-review", children: _jsx("p", { children: props.review }) }), _jsx("div", { className: "studentsayingcard-card-stars", children: arr.map((value, key) => key < props.rating ? (_jsx(AiFillStar, { color: "#6D87F5", size: 40 }, key)) : (_jsx(AiOutlineStar, { color: "#6D87F5", size: 40 }, key))) })] }));
};
export default StudentSayingCard;
