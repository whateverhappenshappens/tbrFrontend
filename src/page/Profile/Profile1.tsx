import React, { useState, useEffect } from "react";
import "./Profile1.css";
import { UserAPI } from "../../apis/UserAPIs";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState({
   
    email: "",
    phoneNumber: "",
    collegeName: "",
    stream: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});
  const [editableField, setEditableField] = useState(null);
  const [isSaved, setIsSaved] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([
    { course: "Webmonk - A Complete Web Development Program", price: 1000 },
    { course: "Webmonk - A Complete Web Development Program", price: 2000 },
    { course: "Webmonk - A Complete Web Development Program", price: 1500 },
  ]);

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
            fullname: res.data.fullname,
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

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    if (savedProfile) {
      setProfile(savedProfile);
      validateProfile(savedProfile);
    }
  }, []);

  const validateProfile = (updatedProfile) => {
    const { fullname, email, phoneNumber, collegeName, stream } =
      updatedProfile;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    const newErrors = {};

    
    if (!email || !emailRegex.test(email))
      newErrors.email = "Invalid email address.";
    if (!phoneNumber || !phoneRegex.test(phoneNumber))
      newErrors.phoneNumber = "Invalid phone number.";
    if (!collegeName) newErrors.collegeName = "College name is required.";
    if (!stream) newErrors.stream = "Stream is required.";

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => {
      const updatedProfile = { ...prevProfile, [name]: value };
      validateProfile(updatedProfile);
      setIsSaved(false);
      return updatedProfile;
    });
  };

  const handleSave = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setIsSaved(true);
    setShowModal(false);
    toast.success("Changes saved successfully!");
  };

  const handleCompletePayment = () => {
    if (!isSaved) {
      setShowModal(true);
    } else {
      toast.info("Proceeding with the payment process...");
      // Proceed with the payment process
    }
  };

  const toggleEdit = (field) => {
    setEditableField((prevField) => (prevField === field ? null : field));
  };

  const handleCourseSelect = (course, price) => {
    setSelectedCourses((prevCourses) => [
      ...prevCourses,
      { course, price },
    ]);
  };

  const totalAmount = selectedCourses.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="main_box21 mt-[10rem]">
      <div className="flex-container">
        <div className="column">
          <label>Fullname</label>
          <div className="search-container">
            <input
              type="text"
              name="fullname"
              placeholder="John Doe"
              value={profile.fullname}
              onChange={handleChange}
              readOnly={editableField !== "fullname"}
            />
            <button type="button" onClick={() => toggleEdit("fullname")}>
              {editableField === "fullname" ? "Save" : "Edit"}
            </button>
          </div>
          <label>College Name</label>
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

          <label>Stream</label>
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

          <label>Email</label>
          <div className="search-container">
            <input
              type="text"
              name="email"
              placeholder="Johndoe@gmail.com"
              value={profile.email}
              onChange={handleChange}
              readOnly={editableField !== "email"}
            />
            <button type="button" onClick={() => toggleEdit("email")}>
              {editableField === "email" ? "Save" : "Edit"}
            </button>
          </div>
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Phone Number</label>
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

          <button
            className="payment"
            disabled={!isValid}
            onClick={handleCompletePayment}
          >
            Complete Payment
          </button>
        </div>
      
        <div className="summary-container">
          <h3>Fill the information then proceed to pay</h3>
          <h2>Summary</h2>
          <div className="sum">
            <p className="items">Items</p>
            <p className="price">Price</p>
          </div>
          {selectedCourses.map((course, index) => (
            <div className="course-summary" key={index}>
              <p className="items">{course.course}</p>
              <p className="price1">Rs {course.price}/-</p>
            </div>
          ))}
          <div className="total-summary">
            <p className="order">Order total:</p>
            <p className="price1">Rs {totalAmount}/-</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Unsaved Changes</h2>
            <p>Please save your changes before completing the payment.</p>
            <button className="buttun4" onClick={handleSave}>
              Save Changes
            </button>
            <button className="buttun4" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Profile;
