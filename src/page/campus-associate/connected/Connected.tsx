import React from "react";
import './Connected.css'
import Phone from '../../../assets/phone-blue.png'

const Connected: React.FC = () => {
    return (
        <div className="connected">
            <p className="connected-head1 vr-bold">Feel Connected, Join us !</p>
            <p className="connected-head2 vr-medium">If you think that you can resonate with the above stated points, we are eager to have you on our team. Or if you feel like you have some questions, feel free to request a call back and we will get back to you in no time.</p>
            <div className="connected-button">
                <button className="connected-button-request visbyroundCF bold ">
                    <div className="connected-button-request-div">
                        <img src={Phone} alt="" />
                        <p className="vr-medium">Request a call back</p>
                    </div>
                </button>
                <button className="connected-button-join">
                    <p className="vr-medium">Join Us</p>
                </button>
            </div>
        </div>
    );
}

export default Connected