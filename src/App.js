import React, { useState } from "react";
import "./App.css";
import confetti from "canvas-confetti";
import CloseIcon from "@mui/icons-material/Close";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

function App() {
const [showLetter, setShowLetter] = useState(false);
const [showProposal, setShowProposal] = useState(false);
const [accepted, setAccepted] = useState(false);
const [yesScale, setYesScale] = useState(1);
const [noPosition, setNoPosition] = useState({ top: 80, left: 220 });
const [isCut, setIsCut] = useState(false);

const launchConfetti = () => {
   confetti({
  particleCount: 300,
  spread: 120,
  startVelocity: 45,
  scalar: 1.2,
  zIndex: 2000,
  origin: { y: 0.6 }
});

  };

  return (
  <div className="landing">

    {/* Landing Content Always Visible */}
    <div className="envelope-wrapper">

  <div
    className={`envelope ${isCut ? "cut" : ""}`}
    onClick={() => {
      setIsCut(true);

      setTimeout(() => {
        setShowLetter(true);
      }, 800);
    }}
  >
    {/* Left Half */}
    <div className="envelope-half left"></div>

    {/* Right Half */}
    <div className="envelope-half right"></div>

    {/* Ribbon */}
    {!isCut && (
      <div className="ribbon">
        ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️ ❤️
      </div>
    )}

    {/* Scissor */}
    {!isCut && (
  <ContentCutIcon
    className="scissor"
    fontSize="large"
  />
)}

  </div>

</div>


    {/* Hearts */}
    <div className="hearts">
      {[...Array(50)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomSize = 12 + Math.random() * 25;
        const randomDuration = 8 + Math.random() * 10;
        const randomDelay = Math.random() * 5;
        return (
          <span
            key={i}
            className="heart"
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              fontSize: `${randomSize}px`,
              animationDuration: `${randomDuration}s`,
              animationDelay: `${randomDelay}s`
            }}
          >
            ❤️
          </span>
        );
      })}
    </div>

    {/* Letter Modal */}
    {showLetter && (
      <div className="modal-overlay">
        <div className="letter">
<CloseIcon
  className="close-icon"
  onClick={() => setShowLetter(false)}
/>


          <h1>A Letter From My Heart</h1>

          <p><strong>My Dearest Love,</strong></p>

          <p>
           From the moment you walked into my life, everything started feeling a little brighter and a lot more beautiful.
You are the calm in my chaos, the smile I wait for, and the reason my heart feels so full every single day.
With you, even the ordinary moments feel magical and worth remembering forever.
I don’t just love you for who you are — I love you for how I become the best version of myself when I’m with you.
No matter where life takes us, I promise to choose you, support you, and stand beside you — always.
          </p>

          <div className="signature">
            <p>With all my love,</p>
            <p>Your forever 💖</p>
          </div>

          <hr style={{ margin: "5px 0", opacity: 0.2 }} />

<p style={{ textAlign: "center", marginBottom: "10px" }}>
  Before I end this… I need to ask you something 💖
</p>
<div style={{ textAlign: "center" }}>
<button
  className="proposal-trigger"
  onClick={() => setShowProposal(true)}
>
  One Last Question
</button>
</div>

        </div>
      </div>
    )}

{showProposal && (
  <div className="modal-overlay">
    <div className="proposal-box">
      <CloseIcon
    className="proposal-close"
    onClick={() => {
      setShowProposal(false);
      setAccepted(false);
      setYesScale(1);
      setNoPosition({ top: 80, left: 220 });
    }}
  />
      {!accepted ? (
        <>
          <h2> My heart already chose you… will you choose me too? 💖</h2>

          <div className="proposal-buttons">
            <button
              className="yes-btn"
              style={{ transform: `scale(${yesScale})` }}
              onClick={() => {
                setAccepted(true);
                launchConfetti();
              }}
            >
              YES 💖
            </button>

            <button
              className="no-btn"
              style={{
                position: "absolute",
                top: noPosition.top,
                left: noPosition.left
              }}
              onMouseEnter={() => {
                setNoPosition({
                  top: Math.random() * (window.innerHeight / 4),
left: Math.random() * (window.innerWidth / 4)

                });

                setYesScale(prev => Math.min(prev + 0.1, 2));
              }}
            >
              NO <SentimentVeryDissatisfiedIcon fontSize="small" />

            </button>
          </div>
        </>
      ) : (


        <h2>You just made me the happiest person alive 💕</h2>
      )}
    </div>
  </div>
)}

  </div>
);

}

export default App;
