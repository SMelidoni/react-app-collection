import '../main-menu/main-menu.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const MainMenu: FC = () => {
  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <div className='main-menu-container'>
        <header className='main-menu-header'>React App Collection</header>
        <h1 className='main-menu-sub-header'>Main Menu</h1>
        <p>Select your game:</p>
        <GlobalButton label='Calculator' route='/calculator' />
        <GlobalButton label='Tic-Tac-Toe' route='/tic-tac-toe-home' />
      </div>
    </div>
  );
};

export default MainMenu;
