import './calculator-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';
import BasicCalculator from '../../components/basic-calculator/basic-calculator.component';

const CalculatorHome: FC = () => {
  return (
    <div className='calculator-home-container'>
      <div className='calculator-home-back-button'>
        <GlobalButton label='<- Back' route='/' />
      </div>
      <header className='calculator-home-header'>
        <h1 className='header-text header-text-react'>React</h1>
        <h1 className='header-text header-text-calculator'>Calculator</h1>
      </header>
      <div className='calculator-home-content'>
        <BasicCalculator />
      </div>
    </div>
  );
};

export default CalculatorHome;
