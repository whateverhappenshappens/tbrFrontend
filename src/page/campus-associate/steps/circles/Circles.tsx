import React from "react"
import './Circles.css'

interface props{
    image: string,
    heading:string,
    color:string;
}

const Circles:React.FC<props>=(props)=>{
    return (
        <div className="circles-container">
            <div className="circle">
                <div style={{backgroundColor: props.color }} className="backGroundCircle"><img src={props.image} alt="" /></div>
            </div>
            <p className="circles-head vr-demi-bold">{props.heading}</p>
        </div>
    );
}

export default Circles