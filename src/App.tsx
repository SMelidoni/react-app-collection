import './App.scss';

import React, { FC } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import MainMenu from './pages/main-menu/main-menu.component';
import CalculatorHome from './pages/calculator-home/calculator-home.component';
import TicTacToeHome from './pages/tic-tac-toe/tic-tac-toe-home/tic-tac-toe-home.component';
import TicTacToeSingle from './pages/tic-tac-toe/tic-tac-toe-single/tic-tac-toe-single.component';
import TicTacToe2P from './pages/tic-tac-toe/tic-tac-toe-2p/tic-tac-toe-2p.component';
import PageNotFound from './pages/not-found/not-found.component';

const App: FC = () => {
  const location = useLocation();

  return (
    <div className='global-page-container'>
      <div className='pixelated-grid'></div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={location.key}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ position: 'absolute', width: '100%' }}
          transition={{ duration: 0.25 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<MainMenu />} />
            <Route path='/calculator' element={<CalculatorHome />} />
            <Route path='/tic-tac-toe-home' element={<TicTacToeHome />} />
            <Route path='/tic-tac-toe-single' element={<TicTacToeSingle />} />
            <Route path='/tic-tac-toe-2p' element={<TicTacToe2P />} />
            <Route path='/404' element={<PageNotFound />} />
            <Route path='*' element={<Navigate to='/404' />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
