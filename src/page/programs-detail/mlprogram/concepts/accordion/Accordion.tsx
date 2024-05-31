import React from "react";
import './Accordion.css';
import { useState } from 'react';

interface props {
    title: string,
    content: string
}
const Accordion: React.FC<props> = (props) => {
    const [isActive, setIsActive] = useState(false);
    const style={
        borderTopLeftRadius: '60px' ,
        borderTopRightRadius: '60px',
        borderBottomLeftRadius: !isActive ? '60px' : '0',
        borderBottomRightRadius: !isActive ? '60px' : '0',
        backgroundColor:!isActive ? '#6D87F5' : '#ffffff',
        color:isActive ? '#2E436A' : '#ffffff'
    }
    return (
        <div className="accordion">
            <div className="accordion-item">
                <div
                    style={style}
                    className="accordion-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className="accordion-question">{props.title}</div>
                    <div className="accordion-plus-minus">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="accordion-content">{props.content}</div>}
            </div>
        </div>
    );
}
export default Accordion;