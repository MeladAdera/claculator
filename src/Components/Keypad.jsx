import React from 'react';
import {Button} from './Button';

  export const Keypad = ({ onButtonClick }) => {
  const buttons = [
    'C', '+/-', '%', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=','DEL'
  ];

  return (
    <div className="grid grid-cols-4 gap-2 p-5">
    {buttons.map((btn) => (
      <Button 
        key={btn} 
        value={btn} 
        onClick={() => onButtonClick(btn)} // تمرير قيمة الزر للمكون الأب
      />
    ))}
  </div>
  );
};


