import './tic-tac-toe-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../../components/global-button/global-button.component';

const TicTacToeHome: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='tic-tac-toe-home-container'>
        <div className='tic-tac-toe-home-back-button'>
          <GlobalButton label='<- Back' route='/' />
        </div>
        <header className='tic-tac-toe-home-header'>
          <h1 className='header-text header-text-react'>React</h1>
          <h1 className='header-text header-text-tic-tac-toe'>Tic-Tac-Toe</h1>
        </header>
        <div className='tic-tac-toe-home-content'>
          <GlobalButton label='Single Player' route='/tic-tac-toe-single' />
          <GlobalButton label='Two Player' route='/tic-tac-toe-2p' />
        </div>
      </div>
    </div>
  );
};

export default TicTacToeHome;
