import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';
import { IoCalendarNumberSharp } from "react-icons/io5";

function App({ selectedEvent, setUpdateFormVisible }) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    pcBanner: '',
    mobileBanner: '',
    eventMode: '',
    speakerImage: '',
    heading: '',
    subHeading: '',
    date: new Date(),
    aboutSpeaker: '',
    speakerSocialLink: '',
    speakerExperienceDetails: '',
    speakerName: '',
    youtubeLink: '',
    isActive: false
  });

  useEffect(() => {
    if (selectedEvent) {
      setFormData({
        pcBanner: selectedEvent.bannerLinkPC,
        mobileBanner: selectedEvent.bannerLinkMobile,
        eventMode: selectedEvent.mode,
        speakerImage: selectedEvent.speakerImg,
        heading: selectedEvent.heading,
        subHeading: selectedEvent.subHeading,
        date: new Date(selectedEvent.date),
        aboutSpeaker: selectedEvent.aboutSpeaker,
        speakerSocialLink: selectedEvent.speakerSocial,
        speakerExperienceDetails: selectedEvent.speakerExperience,
        speakerName: selectedEvent.speakerName,
        youtubeLink: selectedEvent.youtubeLink,
        isActive: selectedEvent.isActive
      });
    }
  }, [selectedEvent]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setFormData(prevState => ({
      ...prevState,
      date
    }));
  };

  const handleRadioChange = (e) => {
    const isActive = e.target.value === 'true';
    setFormData(prevState => ({
      ...prevState,
      isActive
    }));
  };

  const handleUploadClick = () => {
    setShowPopup(true);
  };

  const handleSaveClick = () => {
    console.log('Data updated:', formData);
    setUpdateFormVisible(false);
  };

  const handleOptionClick = (option) => {
    setShowPopup(false);
    if (option === 'yes') {
      console.log('Data updated:', formData);
    } else {
      console.log('Update cancelled');
    }
  };

  return (
    <div className="main">
      <div className="inline-form">
        <label htmlFor="pcBanner">PC Banner Link:</label>
        <input
          type="text"
          id="pcBanner"
          name="pcBanner"
          placeholder='PC Banner Link'
          value={formData.pcBanner}
          onChange={handleInputChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="mobileBanner">Mobile Banner Link:</label>
        <input
          type="text"
          id="mobileBanner"
          name="mobileBanner"
          placeholder='Mobile Banner Link'
          value={formData.mobileBanner}
          onChange={handleInputChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="eventMode">Speaker Image:</label>
        <input
          type="text"
          id="speakerImage"
          name="speakerImage"
          placeholder='Speaker Image'
          value={formData.speakerImage}
          onChange={handleInputChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="eventMode">Event Mode:</label>
        <input
          type="text"
          id="eventMode"
          name="eventMode"
          placeholder='Event Mode'
          value={formData.eventMode}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          name="heading"
          placeholder='Heading'
          value={formData.heading}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="subHeading">Sub Heading:</label>
        <input
          type="text"
          id="subHeading"
          name="subHeading"
          placeholder='Sub Heading'
          value={formData.subHeading}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="date">Date:</label>
        <div className="date-input-container">
          <input
            type="date"
            id="date"
            name="date"
            placeholder='Date'
            value={formData.date}
            onChange={handleInputChange}
            className='date'
          />
          <span className="calendar-icon">
<IoCalendarNumberSharp /></span>
        </div>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerName">Speaker's Name</label>
        <input
          type="text"
          id="speakerName"
          name="speakerName"
          placeholder="Speaker's Name"
          value={formData.speakerName}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="aboutSpeaker">About Speaker:</label>
        <input
          type="text"
          id="aboutSpeaker"
          name="aboutSpeaker"
          placeholder='About Speaker'
          value={formData.aboutSpeaker}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerSocialLink">Speaker's Social Link:</label>
        <input
          type="text"
          id="speakerSocialLink"
          name="speakerSocialLink"
          placeholder="Speaker's Social Link"
          value={formData.speakerSocialLink}
          onChange={handleInputChange}
        />
        {/* <button onClick={handleUploadClick}>Upload</button> */}
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerExperienceDetails">Speaker's Experience Details:</label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder="Speaker's Experience Details"
          value={formData.speakerExperienceDetails}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="youtubeLink">Youtube link</label>
        <input
          type="text"
          id="youtubeLink"
          name="youtubeLink"
          placeholder="Youtube link"
          value={formData.youtubeLink}
          onChange={handleInputChange}
        />
        {/* <button onClick={handleUploadClick}>Upload</button> */}
      </div><br></br>
      <div className="inline-form">
        <label>Is Active:</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div>
          <label>
            <input
              type="radio"
              name="isActive"
              value="true"
              checked={formData.isActive === true}
              onChange={handleRadioChange}
            />&nbsp;
            Yes
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="isActive"
              value="false"
              checked={formData.isActive === false}
              onChange={handleRadioChange}
            />&nbsp;
            No
          </label>
        </div>
      </div><br></br>
      <button className="btn-save" onClick={handleSaveClick}>Save</button>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Are you sure you want to update:</h2>
            <button onClick={() => handleOptionClick('yes')}>Yes</button>
            <button onClick={() => handleOptionClick('no')}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
