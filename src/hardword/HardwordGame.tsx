import React from "react";
import "./Hardword.css";
import useHardword from "./useHardword";

const Hardword: React.FC = () => {
  const {
    board,
    resultCircles,
    isWinModalOpen,
    isLoseModalOpen,
    targetWord,
    handleKeyPress,
    initializeGame,
  } = useHardword();

  return (
    <div className="container">
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            <div className="cell-container">
              {row.map((letter, colIndex) => (
                <div key={colIndex} className="cell">
                  {letter}
                </div>
              ))}
            </div>
            <div className="result-circles">
              <div
                className={`circle ${
                  resultCircles[rowIndex].green > 0 ? "green" : "grey"
                }`}
              >
                {resultCircles[rowIndex].green}
              </div>
              <div
                className={`circle ${
                  resultCircles[rowIndex].yellow > 0 ? "yellow" : "grey"
                }`}
              >
                {resultCircles[rowIndex].yellow}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="keyboard-key"
            >
              {key}
            </button>
          ))}
        </div>
        <div className="keyboard-row middle">
          {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((key) => (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="keyboard-key"
            >
              {key}
            </button>
          ))}
        </div>
        <div className="keyboard-row">
          <button
            onClick={() => handleKeyPress("Enter")}
            className="keyboard-key enter"
          >
            Enter
          </button>
          {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="keyboard-key"
            >
              {key}
            </button>
          ))}
          <button
            onClick={() => handleKeyPress("Backspace")}
            className="keyboard-key backspace"
          >
            ⌫
          </button>
        </div>
      </div>
      {isWinModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Congratulations!</h2>
            <p>You've won the game!</p>
            <p>NFT transferred to your wallet</p>
            <button onClick={initializeGame} className="modal-button">
              Play Again
            </button>
          </div>
        </div>
      )}
      {isLoseModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Game Over!</h2>
            <p>The word was: {targetWord}</p>
            <button onClick={initializeGame} className="modal-button">
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hardword;
