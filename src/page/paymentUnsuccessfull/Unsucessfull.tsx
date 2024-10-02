import React, { useEffect } from 'react'
import unsuccess from "../../assets/unsuccess.png"
import Header from '../../components/header/Header'
import "./Unsucessfull.css"
import { NavLink } from 'react-router-dom'
function Unsucessfull() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    
    <>
    <div className='himan mt-[10rem] '>
        <div className='h-[50rem] flex justify-center items-center'>
        <img src={unsuccess} alt="" /></div>
        <p className='imp flex justify-center items-center'>Your Payment was unsuccessful !</p>
        <p className='impo1 flex justify-center items-center'>So sorry to hear that your payment didn't go through!</p><p className='imp2 flex justify-center items-center' > Need help? Don't hesitate!</p><p className='impo1 flex justify-center items-center'> You can reach us at: hello@techbain.comor call us at: +91 8789726459</p>
        <NavLink to="/"> <div className='impo-button'><button>Return to Home</button></div></NavLink>
       
        
    </div>
    </>
  )
}

export default Unsucessfull