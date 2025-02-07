import React, { useState } from "react";
import "./App.css";
import GoogleSignIn from "./SignIn";
import Hardword from "./hardword/HardwordGame";
import WelcomeScreen from "./components/welcome/WelcomeScreen";
import GameRules from "./components/info/Info";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleStartGame = () => {
    setCurrentScreen("game");
  };

  const [currentScreen, setCurrentScreen] = useState("welcome");

  return (
    <div className="App">
      <header className="App-header">
        {currentScreen === "welcome" ? (
          <>
            <WelcomeScreen onStartGame={handleStartGame} />
          </>
        ) : (
          <div className="App">
            <header className="App-header">
              <h1>Hardword</h1>
            </header>
            <div className="main">
              {/* <GoogleSignIn/> */}
              <GameRules />
              <Hardword />
              <Portfolio  userName={'Srijan Samridh'} profilePicUrl={''}/>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
