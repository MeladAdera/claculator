import React from 'react';
import {Display}from'./Display';
import {Keypad}from './Keypad'
import { useState } from 'react';

export const Calculator = () => {

    // 1. الحالة للقيمة المعروضة على الشاشة (تبدأ بصفر)
    const [displayValue, setDisplayValue] = useState('0');
    
    // 2. الحالة لتخزين القيمة السابقة (تبدأ فارغة)
    const [storedValue, setStoredValue] = useState(null);
    
    // 3. الحالة لتخزين العملية المحددة (تبدأ فارغة)
    const [operation, setOperation] = useState(null);
    
    // 4. الحالة لمعرفة إذا كنا ننتظر إدخال رقم جديد
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const handleButtonClick = (buttonValue) => {
      // 1. معالجة الأرقام (0-9)
      if (['0','1','2','3','4','5','6','7','8','9'].includes(buttonValue)) {
        handleNumber(buttonValue);
      }
      
      // 2. معالجة النقطة العشرية
      else if (buttonValue === '.') {
        handleDecimal();
      }
      
      // 3. معالجة زر المسح (C)
      else if (buttonValue === 'C') {
        handleClear();
      }
      
      // 4. معالجة العمليات الحسابية
      else if (['+', '-', '×', '÷'].includes(buttonValue)) {
        handleOperation(buttonValue);
      }
      else if (buttonValue === 'DEL') {
        handleDelete();
      }
      // 5. معالجة زر التساوي (=)
      else if (buttonValue === '=') {
        handleEquals();
      }
      
      
      // ... يمكن إضافة المزيد مثل (+/-) و (%)
    };
    // 1. معالجة الأرقام
const handleNumber = (number) => {
  if (waitingForOperand) {
    // إذا كنا ننتظر رقماً جديداً، نبدأ الرقم الجديد
    setDisplayValue(number);
    setWaitingForOperand(false);
  } else {
    // إذا لم نكن في حالة انتظار، نضيف الرقم إلى القيمة الحالية
    setDisplayValue(displayValue === '0' ? number : displayValue + number);
  }
};

// 2. معالجة النقطة العشرية
const handleDecimal = () => {
  if (waitingForOperand) {
    setDisplayValue('0.');
    setWaitingForOperand(false);
    return;
  }
  
  // نتحقق أن القيمة الحالية لا تحتوي على نقطة عشرية
  if (!displayValue.includes('.')) {
    setDisplayValue(displayValue + '.');
  }
};
const handleDelete = () => {
  if (displayValue.length === 1 || displayValue== Infinity) {
    // إذا كان هناك رقم واحد فقط، نعود للصفر
    setDisplayValue('0');
  } else {
    // نزيل آخر حرف من القيمة الحالية
    setDisplayValue(displayValue.slice(0, -1));
  }
};
// 3. مسح الكل
const handleClear = () => {
  setDisplayValue('0');
  setStoredValue(null);
  setOperation(null);
  setWaitingForOperand(false);
};

// 4. معالجة العمليات
const handleOperation = (op) => {
  // حفظ القيمة الحالية كقيمة مخزنة
  setStoredValue(parseFloat(displayValue));
  // تحديد العملية
  setOperation(op);
  // الانتظار لإدخال الرقم التالي
  setWaitingForOperand(true);
};

// 5. معالجة التساوي (سنضيف المنطق لاحقاً)
const handleEquals = () => {
  // 1. التحقق من وجود عملية وقيمة مخزنة
  if (operation && storedValue !== null) {
    // 2. تحويل القيمة المعروضة إلى رقم
    const currentValue = parseFloat(displayValue);
    
    // 3. حساب النتيجة بناءً على العملية
    let result;
    switch(operation) {
      case '+':
        result = storedValue + currentValue;
        break;
      case '-':
        result = storedValue - currentValue;
        break;
      case '×':
        result = storedValue * currentValue;
        break;
      case '÷':
        result = storedValue / currentValue;
        break;
      default:
        return; // لا شيء إذا كانت العملية غير معروفة
    }
    
    // 4. عرض النتيجة
    setDisplayValue(String(result));
    
    // 5. تحديث الحالات
    setStoredValue(result); // النتيجة تصبح القيمة المخزنة الجديدة
    setOperation(null); // مسح العملية
    setWaitingForOperand(true); // الانتظار لإدخال جديد
  }
};
    return (
      <div className="w-80 bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <Display value={displayValue} />
        <Keypad onButtonClick={handleButtonClick} />
      </div>
    );
};
