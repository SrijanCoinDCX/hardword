import React, { useEffect, useRef, useState } from "react";
import "./WelcomeScreen.css"; // Import the CSS file
import GoogleSignIn from "../../SignIn";
interface WelcomeScreenProps {
  onStartGame: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartGame }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.animation = "float 3s ease-in-out infinite";
    }
    if (titleRef.current) {
      titleRef.current.style.animation = "fadeIn 1.5s ease-out";
    }
    if (subtitleRef.current) {
      subtitleRef.current.style.animation = "fadeIn 2s ease-out";
    }
    if (buttonRef.current) {
      buttonRef.current.style.animation = "fadeIn 2.5s ease-out";
    }
  }, []);

  const handleSignIn = (user: any) => {
    setIsSignedIn(true);
    console.log("User signed in:", user);
  };

  return (
    <div className="welcome-screen">
      {/* Logo */}
      <div ref={logoRef} className="logo-container">
        <div className="logo-circle blue"></div>
        <div className="logo-circle purple"></div>
        <div className="logo-circle green"></div>
      </div>

      {/* Title */}
      <h1 ref={titleRef} className="title">
        Hardword
      </h1>

      {/* Subtitle */}
      <p ref={subtitleRef} className="subtitle">
        Find the hidden word in 6 tries. Challenge yourself and beat the game!
      </p>

      <GoogleSignIn onSignIn={handleSignIn} />

      <div style={{ height: "40px" }}></div>

      {/* Play Button */}
      <button
        ref={buttonRef}
        onClick={isSignedIn ? onStartGame : undefined}
        className={`play-button ${isSignedIn ? "enabled" : "disabled"}`}
        disabled={!isSignedIn}
      >
        PLAY
        {isSignedIn && <div className="button-overlay"></div>}
      </button>
    </div>
  );
};

export default WelcomeScreen;
