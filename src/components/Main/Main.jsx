import React, { useContext } from "react";
import "./Main.css";
import DOMPurify from "dompurify";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context";
const Main = () => {
  const {
    onSent,
    recentPrompts,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
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
        {!showResult ? (
          <>
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
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_kim} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              <p
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(resultData),
                }}
              ></p>
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="gallary-icon" />
              <img src={assets.mic_icon} alt="mic-icon" />
              <img
                onClick={() => onSent()}
                src={assets.send_icon}
                alt="send-icon"
              />
            </div>
          </div>
          <p className="bottom-info">
            gemini may display innacurate info,including about people,so
            double-check its response.by Kimtech
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
