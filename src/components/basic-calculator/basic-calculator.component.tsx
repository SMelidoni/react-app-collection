import './basic-calculator.styles.scss';

import React, { useState } from 'react';
import { evaluate } from 'mathjs';

const BasicCalculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.getAttribute('data-value');
    if (value === '=') {
      try {
        setResult(String(evaluate(result)));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'Reset') {
      setResult('');
    } else {
      if (['+', '-', '*', '/'].includes(value as string)) {
        const lastChar = result[result.length - 1];
        if (['+', '-', '*', '/'].includes(lastChar)) {
          return;
        }
      }
      setResult(result + value);
    }
  };

  return (
    <>
      <h1 className="basic-calculator-title">Basic</h1>
      <div className="basic-calculator">
        <input type="text" className="display" value={result} readOnly />
        <div className="buttons">
          {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '.', '+'].map(
            (value) => (
              <button
                key={value}
                className={
                  typeof value === 'number'
                    ? 'number-button'
                    : 'operation-button'
                }
                data-value={value}
                onClick={handleClick}
              >
                {value}
              </button>
            )
          )}
          <button className="equal-button" data-value="=" onClick={handleClick}>
            =
          </button>
        </div>
        <button
          className="clear-button"
          data-value="Reset"
          onClick={handleClick}
        >
          RESET
        </button>
      </div>
    </>
  );
};

export default BasicCalculator;
