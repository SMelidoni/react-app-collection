import './tic-tac-toe-main.styles.scss';

import React, { FC, useState, useCallback } from 'react';

import TicTacToeBoard from '../tic-tac-toe-board/tic-tac-toe-board.component';

interface TicTacToeMainProps {
  updateScores: (winner: 'X' | 'O' | 'draw') => void;
}

const TicTacToeMain: FC<TicTacToeMainProps> = ({ updateScores }) => {
  // State to keep track of the current player's turn (X or O)
  const [isXNext, setIsXNext] = useState<boolean>(true);

  // State to store the popup message
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  // State to store the current round number
  const [round, setRound] = useState<number>(1);

  // Function to handle the display of popup messages
  const handlePopup = useCallback((message: string | null) => {
    setPopupMessage(message);
  }, []);

  const handleGameOver = useCallback(
    (winner: 'X' | 'O' | 'draw') => {
      updateScores(winner);
      // Increment the round number
      setRound((prevRound) => prevRound + 1);
      setTimeout(() => {
        handlePopup(null);
      }, 3000);
    },
    [handlePopup, updateScores],
  );

  return (
    <div className='tic-tac-toe-main-wrapper'>
      {popupMessage && <div className='popup'>{popupMessage}</div>}
      <div className='tic-tac-toe-main-container'>
        <header className='tic-tac-toe-main-header'>Round {round}</header>
        <div className='tic-tac-toe-main-content'>
          <div className='player-turn'>
            <span className={`tic-tac-toe-piece-x${isXNext ? ' active' : ''}`}>
              X
            </span>
            <span className={`tic-tac-toe-piece-o${!isXNext ? ' active' : ''}`}>
              O
            </span>
          </div>
          <TicTacToeBoard
            onGameOver={handleGameOver}
            isXNext={isXNext}
            setIsXNext={setIsXNext}
            handlePopup={handlePopup}
          />
        </div>
      </div>
    </div>
  );
};

export default TicTacToeMain;
