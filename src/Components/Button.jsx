import React from 'react';
export const Button = ({ value, onClick }) => {
  // تحديد أنماط الأزرار حسب نوعها
  let buttonStyle = "text-xl font-medium rounded-full h-16 flex items-center justify-center ";
  
  if (value === '0') {
    buttonStyle += "col-span-1 bg-gray-600 text-white hover:bg-gray-500";
  } else if (['+', '-', '×', '÷', '='].includes(value)) {
    buttonStyle += "bg-yellow-500 text-white hover:bg-yellow-600";
  } else if (['C', '+/-', '%'].includes(value)) {
    buttonStyle += "bg-gray-500 text-white hover:bg-gray-400";
  } 
 else if (value === 'DEL') {
  buttonStyle += "bg-red-500 text-white hover:bg-red-600";
}
  else {
    buttonStyle += "bg-gray-700 text-white hover:bg-gray-600";
  }

  return (
   <button className={buttonStyle} onClick={onClick}>
    {value}
  </button>
  );
};

