import React, { useState, useEffect } from "react";
import "./Profile1.css";
import boyProfile from "../../assets/Boy photo.png";
import { UserAPI } from "../../apis/UserAPIs";

function Profile() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    stream: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [editableField, setEditableField] = useState(null);
  const [isSaved, setIsSaved] = useState(true); // Track if the profile is saved
  const [showModal, setShowModal] = useState(false); // State for controlling the modal

  useEffect(() => {
    const profileEmail = localStorage.getItem("user-email");
    if (profileEmail) {
      setEmail(profileEmail);
    }
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (email) {
        try {
          const res = await UserAPI.userProfileDetail(email);
          setProfile({
            fullname: res.data.name,
            email: res.data.email,
            phoneNumber: res.data.mobileNumber,
            collegeName: res.data.collegeName,
            stream: res.data.stream,
          });
        } catch (error) {
          console.error(
            "An error occurred while fetching profile data:",
            error
          );
        }
      }
    };
    fetchProfileData();
  }, [email]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
      validateProfile(savedProfile); // Validate the loaded profile
    }
  }, []);

  // Validate input fields
  const validateProfile = (updatedProfile) => {
    const { fullname, email, phoneNumber, collegeName, stream } =
      updatedProfile;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const newErrors = {};

    if (!fullname) newErrors.fullname = "Fullname is required.";
    if (!email || !emailRegex.test(email))
      newErrors.email = "Invalid email address.";
    if (!phoneNumber || !phoneRegex.test(phoneNumber))
      newErrors.phoneNumber = "Invalid phone number.";
    if (!collegeName) newErrors.collegeName = "College name is required.";
    if (!stream) newErrors.stream = "Stream is required.";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      const updatedProfile = { ...prevProfile, [name]: value };
      validateProfile(updatedProfile);
      setIsSaved(false); // Mark profile as not saved when changes are made
      return updatedProfile;
    });
  };

  // Save data to localStorage
  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsSaved(true); // Mark profile as saved
    setShowModal(false); // Hide the modal
  };

  const handleCompletePayment = () => {
    if (!isSaved) {
      setShowModal(true); // Show the modal if changes are not saved
    } else {
      // Proceed with the payment process
    }
  };

  const toggleEdit = (field) => {
    setEditableField((prevField) => (prevField === field ? null : field));
  };

  return (
    <div className="main_box21 mt-[7rem]">
      <aside className="lefty">
        <img src={boyProfile} alt="" />
        <div className="buttondabba">
          <button className="buttun buttun1">Change Picture</button>
          <button
            className="buttun buttun2"
            onClick={handleSave}
            // disabled={!isValid}
          >
            Apply Changes
          </button>
        </div>
      </aside>
      <div className="righty">
        <label>Fullname</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="fullname"
            placeholder="John Doe"
            value={profile.fullname}
            onChange={handleChange}
            readOnly={editableField !== "fullname"}
          />
          <div className="edit">
            <button type="button" onClick={() => toggleEdit("fullname")}>
              {editableField === "fullname" ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        {errors.fullname && <p className="error">{errors.fullname}</p>}
        <br />

        <label>Email</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="email"
            placeholder="Johndoe@gmail.com"
            value={profile.email}
            onChange={handleChange}
            readOnly={editableField !== "email"}
          />
          <div className="edit">
            <button type="button" onClick={() => toggleEdit("email")}>
              {editableField === "email" ? "Save" : "Edit"}
            </button>
          </div>
        </div>
        {errors.email && <p className="error">{errors.email}</p>}
        <br />

        <label>Phone Number</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Enter phone number"
            value={profile.phoneNumber}
            onChange={handleChange}
          />
        </div>
        {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
        <br />

        <label>College Name</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="collegeName"
            placeholder="Enter college name"
            value={profile.collegeName}
            onChange={handleChange}
          />
        </div>
        {errors.collegeName && <p className="error">{errors.collegeName}</p>}
        <br />

        <label>Stream</label>
        <br />
        <br />
        <div className="search-container">
          <input
            type="text"
            name="stream"
            placeholder="Enter your Stream"
            value={profile.stream}
            onChange={handleChange}
          />
        </div>
        {errors.stream && <p className="error">{errors.stream}</p>}
        <br />
        <br />
        <br />
        <button
          className="buttun3"
          disabled={!isValid}
          onClick={handleCompletePayment}
        >
          Complete Payment
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Unsaved Changes</h2>
            <p>Please save your changes before completing the payment.</p>
            <button className="buttun4" onClick={handleSave}>
              Save Changes
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="buttun4" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
