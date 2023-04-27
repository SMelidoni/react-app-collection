import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';
import CalculatorHome from './pages/calculator-home/calculator-home.component';
import TicTacToeHome from './pages/tic-tac-toe/tic-tac-toe-home/tic-tac-toe-home.component';
import TicTacToeSingle from './pages/tic-tac-toe/tic-tac-toe-single/tic-tac-toe-single.component';
import TicTacToe2P from './pages/tic-tac-toe/tic-tac-toe-2p/tic-tac-toe-2p.component';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/calculator' element={<CalculatorHome />} />
        <Route path='/tic-tac-toe-home' element={<TicTacToeHome />} />
        <Route path='/tic-tac-toe-single' element={<TicTacToeSingle />} />
        <Route path='/tic-tac-toe-2p' element={<TicTacToe2P />} />
      </Routes>
    </Router>
  );
};

export default App;
