import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainMenu from './pages/main-menu/main-menu.component';
import CalculatorHome from './pages/calculator-home/calculator-home.component';
import TicTacToeHome from './pages/tic-tac-toe/tictactoe-home/tictactoe-home.component';
// import TicTacToeSingle from './pages/tic-tac-toe/tictactoe-single/tictactoe-single.component';
// import TicTacToe2P from './pages/tic-tac-toe/tictactoe-2p/tictactoe-2p.component';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/calculator' element={<CalculatorHome />} />
        <Route path='/tictactoe-home' element={<TicTacToeHome />} />
        {/* <Route path='/tictactoe-single' element={<TicTacToeSingle />} />
        <Route path='/tictactoe-2p' element={<TicTacToe2P />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
