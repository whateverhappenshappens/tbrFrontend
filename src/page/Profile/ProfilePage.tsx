import React from "react";
import "./Profile.css";
import boyProfile from "../../assets/Boy photo.png";

function ProfilePage() {
  return (
    <div className="Main mt-[10rem]">
      <div className="main_box2">
        <div className="main_box">
          <aside className="left">
            <img src={boyProfile} alt="" />
            <div className="buttondabba">
              <button className="buttun buttun1">Change Picture</button>
              <button className="buttun buttun2">Apply Chnages</button>
            </div>
          </aside>
          <div className="right">
            <label>Fullname</label>
            <br />
            <br />
            <div className="search-container">
              <input type="text" name="search" placeholder="John Doe" />
              <button type="button">Edit</button>
            </div>
            <br />

            <label>Email</label>
            <br />
            <br />
            <div className="search-container">
              <input
                type="text"
                name="search"
                placeholder="Johndoe@gmail.com"
              />
              <button type="button">Edit</button>
            </div>
            <br />
            <label>Phone Number</label>
            <br />
            <br />
            <div className="search-container">
              <input
                type="text"
                name="search"
                placeholder="Enter phone number"
              />
            </div>
            <br />
            <label>College Name</label>
            <br />
            <br />
            <div className="search-container">
              <input
                type="text"
                name="search"
                placeholder="Enter collage name"
              />
            </div>
            <br />
            <label>Year of passing</label>
            <br />
            <br />
            <div className="search-container">
              <input
                type="number"
                name="search"
                placeholder="Enter year of passing"
              />
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
