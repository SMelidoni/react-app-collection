import './App.scss';

import React, { FC } from 'react';
import MainMenu from './pages/main-menu/main-menu.component';

const App: FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <MainMenu />
      </header>
    </div>
  );
};

export default App;
