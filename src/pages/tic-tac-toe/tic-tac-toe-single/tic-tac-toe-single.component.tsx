import './tic-tac-toe-single.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../../components/global-button/global-button.component';

const TicTacToeSingle: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='tic-tac-toe-single-container'>
        <div className='tic-tac-toe-single-back-button'>
          <GlobalButton label='<- Back' route='/tic-tac-toe-home' />
        </div>
        <header className='tic-tac-toe-single-header'>
          <h1 className='single-player-header-text'>Single Player</h1>
        </header>
        <div className='tic-tac-toe-single-content'>
          <p>Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeSingle;
