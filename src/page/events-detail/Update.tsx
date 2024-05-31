import React, { useState, useEffect } from 'react';
import './styles.css';

function UpdateForm({ selectedEvent, setUpdateFormVisible }: any) {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    pcBanner: '',
    mobileBanner: '',
    eventMode: '',
    speakerImage: '',
    heading: '',
    subHeading: '',
    date: '',
    aboutSpeaker: '',
    speakerSocialLink: '',
    speakerExperienceDetails: '',
    speakerName:'',
    youtubeLink:''
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
        date: selectedEvent.date,
        aboutSpeaker: selectedEvent.aboutSpeaker,
        speakerSocialLink: selectedEvent.speakerSocial,
        speakerExperienceDetails: selectedEvent.speakerExperience,
        speakerName:selectedEvent.speakerName,
        youtubeLink:selectedEvent.youtubeLink
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
      // Handle option 1 - Update data
      console.log('Data updated:', formData);
    } else {
      // Handle other option or cancellation
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
        <label htmlFor="speakerImage">Speaker Image:</label>
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
        <label htmlFor="subHeading">Sub-Heading:</label>
        <input
          type="text"
          id="subHeading"
          name="subHeading"
          placeholder='Sub-Heading'
          value={formData.subHeading}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          id="date"
          name="date"
          placeholder='Date'
          value={formData.date}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerName">Speaker Name:</label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder='Speaker Name'
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
        <label htmlFor="speakerSocialLink">Speaker Social Link:</label>
        <input
          type="text"
          id="speakerSocialLink"
          name="speakerSocialLink"
          placeholder='Speaker Social Link'
          value={formData.speakerSocialLink}
          onChange={handleInputChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="speakerExperienceDetails">Speaker Experience Details:</label>
        <input
          type="text"
          id="speakerExperienceDetails"
          name="speakerExperienceDetails"
          placeholder='Speaker Experience Details'
          value={formData.speakerExperienceDetails}
          onChange={handleInputChange}
        />
      </div><br></br>
      <div className="inline-form">
        <label htmlFor="youtubeLink">youtube Link:</label>
        <input
          type="text"
          id="youtubeLink"
          name="youtubeLink"
          placeholder='youtube Link'
          value={formData.youtubeLink}
          onChange={handleInputChange}
        />
        <button onClick={handleUploadClick}>Upload</button>
      </div><br></br>
      <button className="btn-save" onClick={handleSaveClick}>Save</button>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <h2>Are you sure you want to update:</h2>
            <button onClick={() => handleOptionClick('yes')}>yes </button>
            <button onClick={() => handleOptionClick('no')}>no</button>
          </div>
        </div>
      )}

    </div>
  );
}

export default UpdateForm;
