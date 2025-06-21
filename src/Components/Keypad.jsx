import React from 'react';
import Button from './Button';

const Keypad = () => {
  const buttons = [
    'C', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  return (
    <div className="grid grid-cols-4 gap-2 p-5">
      {buttons.map((btn) => (
        <Button key={btn} value={btn} />
      ))}
    </div>
  );
};

export default Keypad;
