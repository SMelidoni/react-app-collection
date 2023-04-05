import '../main-menu/main-menu.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';

const MainMenu: FC = () => {
  return (
    <div className="main-menu-container">
      <header className="main-menu-header">Main Menu</header>
      <GlobalButton label="Home" altText="Go to the home page" route="/" />
      <GlobalButton
        label="Calculator"
        altText="Go to the react calculator app"
        route="/calculator"
      />
    </div>
  );
};

export default MainMenu;
