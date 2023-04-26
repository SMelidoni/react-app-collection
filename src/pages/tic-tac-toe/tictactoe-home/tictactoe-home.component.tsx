import './tictactoe-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../../components/global-button/global-button.component';

const TicTacToeHome: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='tictactoe-home-container'>
        <div className='tictactoe-home-back-button'>
          <GlobalButton label='<- Back' route='/' />
        </div>
        <header className='tictactoe-home-header'>
          <h1 className='header-text header-text-react'>React</h1>
          <h1 className='header-text header-text-tictactoe'>Tic-Tac-Toe</h1>
        </header>
        <div className='tictactoe-home-content'>
          <GlobalButton label='Single Player' route='/tictactoe-single' />
          <GlobalButton label='Two Player' route='/tictactoe-2p' />
        </div>
      </div>
    </div>
  );
};

export default TicTacToeHome;
