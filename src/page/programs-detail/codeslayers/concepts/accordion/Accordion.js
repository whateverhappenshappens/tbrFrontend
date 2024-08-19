import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './Accordion.css';
import { useState } from 'react';
const Accordion = (props) => {
    const [isActive, setIsActive] = useState(false);
    const style = {
        borderTopLeftRadius: '60px',
        borderTopRightRadius: '60px',
        borderBottomLeftRadius: !isActive ? '60px' : '0',
        borderBottomRightRadius: !isActive ? '60px' : '0',
        backgroundColor: !isActive ? '#6D87F5' : '#ffffff',
        color: isActive ? '#2E436A' : '#ffffff'
    };
    return (_jsx("div", { className: "accordion", children: _jsxs("div", { className: "accordion-item", children: [_jsxs("div", { style: style, className: "accordion-title", onClick: () => setIsActive(!isActive), children: [_jsx("div", { className: "accordion-question", children: props.title }), _jsx("div", { className: "accordion-plus-minus", children: isActive ? '-' : '+' })] }), isActive && _jsx("div", { className: "accordion-content", children: props.content })] }) }));
};
export default Accordion;
