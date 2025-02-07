import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleSignIn from './SignIn';
import Hardword from './game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GoogleSignIn/>
        <Hardword/>
      </header>
    </div>
  );
}

export default App;