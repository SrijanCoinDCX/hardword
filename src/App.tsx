import React from 'react';
import './App.css';
// import GoogleSignIn from './SignIn';
import Hardword from './game';
import GameRules from './components/info/Info';
import Portfolio from './components/portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hardword</h1>
      </header>
      <div className="main">
        {/* <GoogleSignIn/> */}
        <GameRules/>
        <Hardword/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;