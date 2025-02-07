import React, { useState, useEffect } from 'react';
import './Hardword.css';
const WORD_LIST = [
  'BEST', 'REST', 'FELT', 'MEAT', 'LEFT', 'FAST',
  'WORD', 'GAME', 'PLAY', 'STOP', 'LAKE', 'FIRE',
  'WIND', 'BLUE', 'HOPE', 'LOVE', 'CARE', 'LIFE',
  'MOON', 'STAR', 'SOUL', 'MIND', 'BOOK', 'TREE',
  'RAIN', 'SNOW', 'CALM', 'WILD', 'BOLD', 'WARM',
  'RISE', 'FALL', 'SING', 'WALK', 'TALK', 'SWIM'
];
const Hardword: React.FC = () => {
  const [targetWord, setTargetWord] = useState('');
  const [board, setBoard] = useState<string[][]>(Array(6).fill(Array(4).fill('')));
  const [resultCircles, setResultCircles] = useState<{green: number, grey: number}[]>(Array(6).fill({green: 0, grey: 0}));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);
  const initializeGame = () => {
    setTargetWord(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
    setBoard(Array(6).fill(Array(4).fill('')));
    setResultCircles(Array(6).fill({green: 0, grey: 0}));
    setCurrentRow(0);
    setCurrentCol(0);
    setIsWinModalOpen(false);
    setIsLoseModalOpen(false);
  };
  useEffect(() => {
    initializeGame();
  }, []);
  const checkWordMatch = (guessedWord: string) => {
    if (guessedWord.length !== 4) return { green: 0, grey: 0 };
    let green = 0;
    let grey = 0;
    const greenMatches = guessedWord.split('').filter((letter, index) => letter === targetWord[index]);
    green = greenMatches.length;
    const remainingTargetLetters = targetWord.split('').filter((_, index) =>
      guessedWord[index] !== targetWord[index]
    );
    const remainingGuessLetters = guessedWord.split('').filter((_, index) =>
      guessedWord[index] !== targetWord[index]
    );
    grey = remainingGuessLetters.filter(letter =>
      remainingTargetLetters.includes(letter)
    ).length;
    const isWin = guessedWord === targetWord;
    if (isWin) {
      setIsWinModalOpen(true);
      transferNFT();
    }
    return { green, grey };
  };
  const transferNFT = () => {
    console.log('Transferring NFT to wallet');
  };
  const handleKeyPress = (key: string) => {
    if (key === 'Backspace') {
      if (currentCol > 0) {
        const newBoard = [...board];
        newBoard[currentRow] = newBoard[currentRow].map((letter, index) =>
          index === currentCol - 1 ? '' : letter
        );
        setBoard(newBoard);
        setCurrentCol(currentCol - 1);
      }
    } else if (key === 'Enter' && currentCol === 4) {
      const guessedWord = board[currentRow].join('');
      const matchResult = checkWordMatch(guessedWord);
      const newResultCircles = [...resultCircles];
      newResultCircles[currentRow] = matchResult;
      setResultCircles(newResultCircles);
      if (currentRow === 5 && matchResult.green !== 4) {
        setIsLoseModalOpen(true);
      }
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    } else if (/^[a-zA-Z]$/.test(key) && currentCol < 4) {
      const newBoard = [...board];
      newBoard[currentRow] = newBoard[currentRow].map((letter, index) =>
        index === currentCol ? key.toUpperCase() : letter
      );
      setBoard(newBoard);
      setCurrentCol(currentCol + 1);
    }
  };
  return (
    <div className="container">
      <div className="title">Hardword</div>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            <div className="cell-container">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className="cell"
                >
                  {letter}
                </div>
              ))}
            </div>
            <div className="result-circles">
              <div className="circle green">
                {resultCircles[rowIndex].green}
              </div>
              <div className="circle grey">
                {resultCircles[rowIndex].grey}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="keyboard">
        <div className="keyboard-row">
          {['Q','W','E','R','T','Y','U','I','O','P'].map((key) => (
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
          {['A','S','D','F','G','H','J','K','L'].map((key) => (
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
            onClick={() => handleKeyPress('Enter')}
            className="keyboard-key enter"
          >
            Enter
          </button>
          {['Z','X','C','V','B','N','M'].map((key) => (
            <button
              key={key}
              onClick={() => handleKeyPress(key)}
              className="keyboard-key"
            >
              {key}
            </button>
          ))}
          <button
            onClick={() => handleKeyPress('Backspace')}
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
            <button
              onClick={initializeGame}
              className="modal-button"
            >
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
            <button
              onClick={initializeGame}
              className="modal-button"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Hardword;