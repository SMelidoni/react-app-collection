import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';

import ReactCalculatorApp from '../react-calculator-app/src/App';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="/react-calculator-app"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <ReactCalculatorApp />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
