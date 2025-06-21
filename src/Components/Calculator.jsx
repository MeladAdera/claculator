import React from 'react';
import Display from './Display'
import Keypad from './Keypad';

const Calculator = () => {
  return (
    <div className="w-80 bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
      <Display value="0" />
      <Keypad />
    </div>
  );
};

export default Calculator;