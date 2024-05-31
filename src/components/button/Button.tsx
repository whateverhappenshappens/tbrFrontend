import React, { CSSProperties } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    buttonTextColor: string,
    onClick: () => void;
    style?: React.CSSProperties;
}



const Button: React.FC<ButtonProps> = ({ buttonTextColor, text, onClick, style }) => {

    const styles: CSSProperties = {

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        opacity:1,
        borderWidth: 0
    };
    return (
        <button style={{...styles, ...style}}  onClick={onClick}>
        <p style={{color: buttonTextColor, font:"normal normal bold 30px/37px Visby Round CF"}}>{text}</p>
      </button>
    );
}


export default Button;
