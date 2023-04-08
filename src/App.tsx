import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';
import CalculatorHome from './pages/calculator-home/calculator-home.component';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/calculator" element={<CalculatorHome />} />
      </Routes>
    </Router>
  );
};

export default App;
