import { useState } from 'react';
import './app.css'
import Display from './components/Display';
import AppButton from './components/AppButton';

function App() {
  const [displayValue, setDisplayValue] = useState(''); //То что отображается на дисплее
  const [firstOperand, setFirstOperand] = useState(''); //Первое число
  const [operator, setOperator] = useState(''); //Выбранная операция
  const [secondOperand, setSecondOperand] = useState(''); //Второе число


  const handleDigitClick = (digit) => { //Функция обработчик клика на число
    if (operator === '') { //Если юзер еще не вводил ничего и дисплей пустой то значит что сначала заполняем первый операнд
      setFirstOperand(firstOperand + digit);
    } else {
      setSecondOperand(secondOperand + digit); 
    }
    setDisplayValue(displayValue + digit);
  };

  const handleOperatorClick = (op) => {
    if (firstOperand !== '' && operator === '' && displayValue !== '') { //Сработает если юзер ввел первое число, но не ввел второе
      setOperator(op);
      setDisplayValue(displayValue + ' ' + op + ' ');
    }
  };

  //Функция которая очищает дисплей при нажатии на С
  const handleClearClick = () => {
    setDisplayValue('');
    setFirstOperand('');
    setOperator('');
    setSecondOperand('');
  };

  //Реализация операций
  const handleEqualsClick = () => {
    if (firstOperand !== '' && operator !== '' && secondOperand !== '') {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(firstOperand) + parseFloat(secondOperand);
          break;
        case '-':
          result = parseFloat(firstOperand) - parseFloat(secondOperand);
          break;
        case '*':
          result = parseFloat(firstOperand) * parseFloat(secondOperand);
          break;
        case '/':
          result = parseFloat(firstOperand) / parseFloat(secondOperand);
          break;
        default:
          return;
      }
      setDisplayValue(result.toString());
      setFirstOperand(result.toString());
      setOperator('');
      setSecondOperand('');
    }
  };
  return (
  <div className="container">
    <Display value={displayValue}/>
    <div className='buttons'>
      <div className='btn-row'>
        <AppButton onClick={() => handleDigitClick('7')}>7</AppButton>
        <AppButton onClick={() => handleDigitClick('8')}>8</AppButton>
        <AppButton onClick={() => handleDigitClick('9')}>9</AppButton>
        <AppButton onClick={() => handleOperatorClick('+')}>+</AppButton>
      </div>
      <div className='btn-row'>
        <AppButton onClick={() => handleDigitClick('4')}>4</AppButton>
        <AppButton onClick={() => handleDigitClick('5')}>5</AppButton>
        <AppButton onClick={() => handleDigitClick('6')}>6</AppButton>
        <AppButton onClick={() => handleOperatorClick('-')}>-</AppButton>
      </div>
      <div className='btn-row'>
        <AppButton onClick={() => handleDigitClick('1')}>1</AppButton>
        <AppButton onClick={() => handleDigitClick('2')}>2</AppButton>
        <AppButton onClick={() => handleDigitClick('3')}>3</AppButton>
        <AppButton onClick={() => handleOperatorClick('*')}>*</AppButton>
      </div>
      <div className='btn-row'>
        <AppButton onClick={() => handleDigitClick('0')}>0</AppButton>
        <AppButton onClick={handleClearClick}>C</AppButton>
        <AppButton onClick={handleEqualsClick}>=</AppButton>
        <AppButton onClick={() => handleOperatorClick('/')}>/</AppButton>
      </div>
    </div>
  </div>
  );
}

export default App;
