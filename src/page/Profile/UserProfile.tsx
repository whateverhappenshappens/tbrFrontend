import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Profile.css";
import boyProfile from "../../assets/useImage.jpg";
import { UserAPI } from "../../apis/UserAPIs";
import toast from "react-hot-toast";

// Define the Profile interface
interface Profile {
  fullname: string;
  email: string;
  phoneNumber: string;
  collegeName: string;
  stream: string;
}

function UserProfile() {
  const [year, setYear] = useState(null);
  const [isSaved, setIsSaved] = useState(true);
  const [editableField, setEditableField] = useState<string | null>(null);

  // Initialize the profile with the Profile interface type
  const [profile, setProfile] = useState<Profile>({
    fullname: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    stream: "",
  });

  const [errors, setErrors] = useState<Partial<Profile>>({});

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await UserAPI.userProfileDetail();
        console.log(res);
        setProfile({
          fullname: res.data.name,
          email: res.data.email,
          phoneNumber: res.data.mobileNumber,
          collegeName: res.data.collegeName,
          stream: res.data.stream,
        });
      } catch (error) {
        console.error("An error occurred while fetching profile data:", error);
      }
    };
    fetchProfileData();
  }, []);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validate = () => {
    let validationErrors: Partial<Profile> = {};
    if (!profile.fullname) validationErrors.fullname = "Fullname is required";
    if (!validateEmail(profile.email)) validationErrors.email = "Invalid email format";
    if (!validatePhoneNumber(profile.phoneNumber)) validationErrors.phoneNumber = "Invalid phone number";
    if (!profile.collegeName) validationErrors.collegeName = "College Name is required";
    if (!profile.stream) validationErrors.stream = "Stream is required";
    return validationErrors;
  };

  const handleSave = async () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill out all required fields correctly");
      return;
    }

    const patchOps = [
      { op: "replace", path: "/name", value: profile.fullname },
      { op: "replace", path: "/collegeName", value: profile.collegeName },
      { op: "replace", path: "/stream", value: profile.stream },
      { op: "replace", path: "/mobileNumber", value: profile.phoneNumber },
    ];

    try {
      await UserAPI.UpdateUserProfile(profile.email, patchOps);
      setIsSaved(true);
      setEditableField(null);
      toast.success("Profile updated successfully");
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const toggleEdit = (field: keyof Profile) => {
    setEditableField((prevField) => (prevField === field ? null : field));
    setIsSaved(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return (
    <div className="Main mt-[10rem]">
      <div className="main_box22">
        <aside className="left1">
          <img src={boyProfile} alt="" />
          <div className="buttondabba1">
            <button className="apply_button" onClick={handleSave}>
              Apply Changes
            </button>
          </div>
        </aside>
        <div className="right">
          <label>Fullname</label>
          <br />
          <br />
          <div className="search-container">
            <input
              type="text"
              name="fullname"
              value={profile.fullname}
              onChange={handleInputChange}
              disabled={editableField !== "fullname"}
              placeholder="John Doe"
            />
            <div className="edit">
              <button type="button" onClick={() => toggleEdit("fullname")}>
                {editableField === "fullname" ? "Save" : "Edit"}
              </button>
            </div>
            {errors.fullname && <span className="error">{errors.fullname}</span>}
          </div>
          <br />

          <label>Email</label>
          <br />
          <br />
          <div className="search-container">
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              disabled
              placeholder="Johndoe@gmail.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <br />

          <label>Phone Number</label>
          <br />
          <br />
          <div className="search-container">
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              disabled={editableField !== "phoneNumber"}
              placeholder="Enter phone number"
            />
            <div className="edit">
              <button type="button" onClick={() => toggleEdit("phoneNumber")}>
                {editableField === "phoneNumber" ? "Save" : "Edit"}
              </button>
            </div>
            {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
          </div>
          <br />

          <label>College Name</label>
          <br />
          <br />
          <div className="search-container">
            <input
              type="text"
              name="collegeName"
              value={profile.collegeName}
              onChange={handleInputChange}
              disabled={editableField !== "collegeName"}
              placeholder="Enter college name"
            />
            <div className="edit">
              <button type="button" onClick={() => toggleEdit("collegeName")}>
                {editableField === "collegeName" ? "Save" : "Edit"}
              </button>
            </div>
            {errors.collegeName && <span className="error">{errors.collegeName}</span>}
          </div>
          <br />

          <label>Stream</label>
          <br />
          <br />
          <div className="search-container">
            <input
              type="text"
              name="stream"
              value={profile.stream}
              onChange={handleInputChange}
              disabled={editableField !== "stream"}
              placeholder="Enter stream like CSE, IT..."
            />
            <div className="edit">
              <button type="button" onClick={() => toggleEdit("stream")}>
                {editableField === "stream" ? "Save" : "Edit"}
              </button>
            </div>
            {errors.stream && <span className="error">{errors.stream}</span>}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
