import React from "react";
import './FaqAccordion.css';
import { useState } from 'react';

interface props {
    title: string,
    content: string
}
const FaqAccordion: React.FC<props> = (props) => {
    const [isActive, setIsActive] = useState(false);
    const style={
        borderTopLeftRadius: '60px' ,
        borderTopRightRadius: '60px',
        borderBottomLeftRadius: !isActive ? '60px' : '0',
        borderBottomRightRadius: !isActive ? '60px' : '0',
        boxShadow: isActive ? '0px 8px 6px #00000029' : 'none',
    }
    return (
        <div className="faqaccordion">
            <div className="faqaccordion-item">
                <div
                    style={style}
                    className="faqaccordion-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div className="faqaccordion-question">{props.title}</div>
                    <div className="faqaccordion-plus-minus">{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className="faqaccordion-content">{props.content}</div>}
            </div>
        </div>
    );
}
export default FaqAccordion;