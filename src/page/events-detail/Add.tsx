import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { IoCloseSharp } from "react-icons/io5";

function App() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="main">
      <div className="inline-form">
        <label htmlFor="pcBanner">PC Banner Link:</label>
        <input type="text" id="pcBanner" name="pcBanner" placeholder='PC Banner Link'/>
        <button>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="mobileBanner">Mobile Banner Link:</label>
        <input type="text" id="mobileBanner" name="mobileBanner" placeholder='Mobile Banner Link:' />
        <button>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="eventMode">Speaker Image:</label>
        <input type="text" id="eventMode" name="eventMode" placeholder='Speaker Image:'/>
        <button>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="eventMode">Event Mode:</label>
        <input type="text" id="eventMode" name="eventMode" placeholder='Event Mode:' />
        <button>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="heading"> Heading:</label>
        <input type="text" id="heading" name="heading" placeholder='Heading'/>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="subHeading">Sub Heading:</label>
        <input type="text" id="subHeading" name="subHeading" placeholder='Sub Heading'/>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="date">Date:</label>
        <DatePicker 
          selected={startDate} 
          onChange={date => setStartDate(date)} 
          className="custom-datepicker"
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerName">Speaker's Name</label>
        <input type="text" id="speakerName" name="speakerName" placeholder="Speaker's Name"/>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="aboutSpeaker">About Speaker:</label>
        <input type="text" id="aboutSpeaker" name="aboutSpeaker" placeholder='About Speaker'/>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerSocial">Speaker's Social Link:</label>
        <input type="text" id="speakerSocial" name="speakerSocial" placeholder="Speaker's Social Link"/>
        <button>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerExperience">Speaker's Experience Details:</label>
        <input type="text" id="speakerExperience" name="speakerExperience" placeholder="Speaker's Experience Details"/>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="Youtube link">Youtube link</label>
        <input type="text" id="youtubeLink" name="youtubeLink" placeholder="Youtube link"/>
        <button>Upload</button>
      </div><br></br>
      <button type="submit" className='btn-save'>Submit</button><br></br>
    </div>
  );
}

export default App;
