import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Profile.css";
import boyProfile from "../../assets/Boy photo.png";
import { UserAPI } from "../../apis/UserAPIs";
import toast from "react-hot-toast";

function UserProfile() {
  const [year, setYear] = useState(null);
  const [isSaved, setIsSaved] = useState(true);
  const [editableField, setEditableField] = useState(null);
  const [profile, setProfile] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    stream: "",
  });

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

  const handleSave = async () => {
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
    } catch (error) {
      console.error("An error occurred while updating the profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const toggleEdit = (field) => {
    setEditableField((prevField) => (prevField === field ? null : field));
    setIsSaved(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  return (
    <div className="Main mt-[10rem]">
      <div className="main_box22">
        <aside className="left1">
          <img src={boyProfile} alt="" />
          <div className="buttondabba1">
            <button className="buttun22 buttun1">Change Picture</button>
            <button className="buttun buttun2" onClick={handleSave}>
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
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
