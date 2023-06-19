import './tic-tac-toe-2p.styles.scss';

import React, { FC, useEffect, useState } from 'react';

import GlobalButton from '../../../components/global-button/global-button.component';
import TicTacToeScore from '../../../components/tic-tac-toe-game/tic-tac-toe-score/tic-tac-toe-score.component';
import TicTacToeMain from '../../../components/tic-tac-toe-game/tic-tac-toe-main/tic-tac-toe-main.component';

const TicTacToe2P: FC = () => {
  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const resetGame = () => {
    setPopupMessage('Game Resetting');
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const updateScores = (winner: 'X' | 'O' | 'draw') => {
    if (winner === 'X') {
      setXScore((prevXScore) => prevXScore + 1);
    } else if (winner === 'O') {
      setOScore((prevOScore) => prevOScore + 1);
    }
  };

  useEffect(() => {
    if (popupMessage) {
      const timeoutId = setTimeout(() => setPopupMessage(null), 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [popupMessage]);

  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='tic-tac-toe-2p-container'>
        {popupMessage && (
          <div className='popup'>
            {popupMessage}
            <span className='popup-dot'>.</span>
            <span className='popup-dot'>.</span>
            <span className='popup-dot'>.</span>
          </div>
        )}
        <div className='tic-tac-toe-2p-back-button'>
          <GlobalButton label='<- Back' route='/tic-tac-toe-home' />
        </div>
        <header className='tic-tac-toe-2p-header'>
          <h1 className='header-text'>2 Player</h1>
        </header>
        <div>
          <TicTacToeScore xScore={xScore} oScore={oScore} />
        </div>
        <div className='tic-tac-toe-2p-content'>
          <TicTacToeMain updateScores={updateScores} />
          <GlobalButton label='Reset Game' onClick={resetGame} />
        </div>
      </div>
    </div>
  );
};

export default TicTacToe2P;
