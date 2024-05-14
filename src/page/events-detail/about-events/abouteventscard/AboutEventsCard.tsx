import React from 'react';
import './AboutEventsCard.css'


interface props{
    image:string,
    text:string
}

const abouteventsCard:React.FC<props>= (props)=>{
    return (
        <div className="abouteventscard-card">
                <img src={props.image}></img>
                <p className="vr-medium">You will be provided with </p>
                <p className="vr-medium">Letter Of Recommendation</p>
                <p className="vr-medium">and Certificates.</p>
        </div>
    )
}

export default abouteventsCard;