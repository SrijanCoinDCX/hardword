import React from 'react';
import './info.css';

const GameRules = () => {
    return (
        <div>
            <div className="game-rules">
                <h3>How to Play Hardword</h3>
                <p>Guess the 4-letter word in 6 tries.</p>
                <ul>
                    <li>Each guess must be a valid 4-letter word.</li>
                    <li>Hit the enter button to submit.</li>
                    <li>After each guess, the color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
                <div className="result-pattern">
                    <h4>Result Pattern</h4>
                    <div className="inline">
                        <div className="green-circle"></div><span>Green: Correct letter in the correct spot.</span>
                    </div>
                    <div className="inline">
                        <div className="yellow-circle"></div><span>Yellow: Correct letter in the wrong spot.</span>
                    </div>
                    <div className="inline">
                        <div className="grey-circle"></div><span>Grey: Incorrect letter or initial State with value 0.</span>
                    </div>
                </div>
            </div>
            <div className="rewards">
                <h2>Rewards</h2>
                <p>Winners will receive<br></br> an NFT token.</p>
                <p>Good luck!</p>
            </div>
        </div>
    );
};

export default GameRules;