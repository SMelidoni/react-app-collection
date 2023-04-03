import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
      </Routes>
    </Router>
  );
};

export default App;
