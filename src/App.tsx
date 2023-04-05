import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';
import ReactAppCalculator from './submodules/react-calculator-app/src/App';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/calculator" element={<ReactAppCalculator />} />
      </Routes>
    </Router>
  );
};

export default App;
