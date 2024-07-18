import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Profile.css";
import boyProfile from "../../assets/Boy photo.png";

function ProfilePage() {
  const [year, setYear] = useState(null);

  return (
    <div className="Main mt-[10rem]">
      <div className="main_box22">
        <aside className="left1">
          <img src={boyProfile} alt="" />
          <div className="buttondabba1">
            <button className="buttun22 buttun1">Change Picture</button>
            <button className="buttun buttun2">Apply Changes</button>
          </div>
        </aside>
        <div className="right12">
          <label>Fullname</label>
          <br />
          <br />
          <div className="search-container">
            <input type="text" name="search" placeholder="John Doe" />
          </div>
          <br />

          <label>Email</label>
          <br />
          <br />
          <div className="search-container">
            <input type="text" name="search" placeholder="Johndoe@gmail.com" />
          </div>
          <br />

          <label>Phone Number</label>
          <br />
          <br />
          <div className="search-container">
            <input type="text" name="search" placeholder="Enter phone number" />
          </div>
          <br />

          <label>College Name</label>
          <br />
          <br />
          <div className="search-container">
            <input type="text" name="search" placeholder="Enter college name" />
          </div>
          <br />

          <label>Year of passing</label>
          <br />
          <br />
          <div className="search-container">
            <DatePicker
              selected={year}
              onChange={(date) => setYear(date)}
              showYearPicker
              dateFormat="yyyy"
              placeholderText="Enter year of passing"
            />
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
