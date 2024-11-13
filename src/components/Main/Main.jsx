import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img
          src={assets.user_kim}
          alt="user-icon"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            objectFit: "cover",
            cursor: "pointer",
          }}
        />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello , Dev.</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautiful places to see in the upcoming Dev Fest</p>
            <img src={assets.compass_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Briefly summarize this concept:Urban planning</p>
            <img src={assets.bulb_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Brainstorm team bonding activities for our Ajira trip</p>
            <img src={assets.message_icon} alt="compass-icon" />
          </div>
          <div className="card">
            <p>Improve the readability of the following code</p>
            <img src={assets.code_icon} alt="compass-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
