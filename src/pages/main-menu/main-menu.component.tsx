import '../main-menu/main-menu.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const MainMenu: FC = () => {
  return (
    <div className="global-page-container">
      <div className="main-menu-container">
        <header className="main-menu-header">Main Menu</header>
        <GlobalButton label="Home" route="/" />
        <GlobalButton label="Calculator" route="/calculator" />
      </div>
    </div>
  );
};

export default MainMenu;
