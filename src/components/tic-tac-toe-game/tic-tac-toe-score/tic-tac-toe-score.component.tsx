import './tic-tac-toe-score.styles.scss';

import React, { FC } from 'react';

interface TicTacToeScoreProps {
  xScore: number;
  oScore: number;
}

const TicTacToeScore: FC<TicTacToeScoreProps> = ({ xScore, oScore }) => {
  return (
    <div className='tic-tac-toe-score-wrapper'>
      <div className='tic-tac-toe-score-container'>
        <div className='player-score'>
          <span className='player-label'>X</span>
          <span className='player-score-number'>{xScore}</span>
        </div>
        <div className='player-score'>
          <span className='player-label'>O</span>
          <span className='player-score-number'>{oScore}</span>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeScore;
