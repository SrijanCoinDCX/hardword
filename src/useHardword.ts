import { useState, useEffect } from 'react';

const WORD_LIST = [
  'BEST', 'REST', 'FELT', 'MEAT', 'LEFT', 'FAST',
  'WORD', 'GAME', 'PLAY', 'STOP', 'LAKE', 'FIRE',
  'WIND', 'BLUE', 'HOPE', 'LOVE', 'CARE', 'LIFE',
  'MOON', 'STAR', 'SOUL', 'MIND', 'BOOK', 'TREE',
  'RAIN', 'SNOW', 'CALM', 'WILD', 'BOLD', 'WARM',
  'RISE', 'FALL', 'SING', 'WALK', 'TALK', 'SWIM'
];

const useHardword = () => {
  const [targetWord, setTargetWord] = useState('');
  const [board, setBoard] = useState<string[][]>(Array(6).fill(Array(4).fill('')));
  const [resultCircles, setResultCircles] = useState<{green: number, yellow: number}[]>(Array(6).fill({green: 0, yellow: 0}));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [isWinModalOpen, setIsWinModalOpen] = useState(false);
  const [isLoseModalOpen, setIsLoseModalOpen] = useState(false);

  const initializeGame = () => {
    setTargetWord(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
    setBoard(Array(6).fill(Array(4).fill('')));
    setResultCircles(Array(6).fill({green: 0, yellow: 0}));
    setCurrentRow(0);
    setCurrentCol(0);
    setIsWinModalOpen(false);
    setIsLoseModalOpen(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  const checkWordMatch = (guessedWord: string) => {
    if (guessedWord.length !== 4) return { green: 0, yellow: 0 };
    let green = 0;
    let yellow = 0;
    const greenMatches = guessedWord.split('').filter((letter, index) => letter === targetWord[index]);
    green = greenMatches.length;
    const remainingTargetLetters = targetWord.split('').filter((_, index) =>
      guessedWord[index] !== targetWord[index]
    );
    const remainingGuessLetters = guessedWord.split('').filter((_, index) =>
      guessedWord[index] !== targetWord[index]
    );
    yellow = remainingGuessLetters.filter(letter =>
      remainingTargetLetters.includes(letter)
    ).length;
    const isWin = guessedWord === targetWord;
    if (isWin) {
      setIsWinModalOpen(true);
      transferNFT();
    }
    return { green, yellow };
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

  return {
    board,
    resultCircles,
    isWinModalOpen,
    isLoseModalOpen,
    targetWord,
    handleKeyPress,
    initializeGame
  };
};

export default useHardword;