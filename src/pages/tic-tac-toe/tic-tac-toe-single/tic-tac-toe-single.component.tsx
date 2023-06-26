import './tic-tac-toe-single.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../../components/global-button/global-button.component';

const TicTacToeSingle: FC = () => {
  return (
    <div className='tic-tac-toe-single-container'>
      <div className='tic-tac-toe-single-back-button'>
        <GlobalButton label='<- Back' route='/tic-tac-toe-home' />
      </div>
      <header className='tic-tac-toe-single-header'>
        <h1 className='single-player-header-text'>Single Player</h1>
      </header>
      <div className='tic-tac-toe-single-content'>
        <p>Coming Soon...</p>
        <div>
          <p>
            <span className='arrow-icon'>&#x2193;</span> Click Here for 2P{' '}
            <span className='arrow-icon'>&#x2193;</span>
          </p>
          <GlobalButton label='Two Player' route='/tic-tac-toe-2p' />
        </div>
      </div>
    </div>
  );
};

export default TicTacToeSingle;
