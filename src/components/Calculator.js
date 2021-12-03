import React, { useState } from 'react';

import calculate from '../logic/calculate';

const Calculator = () => {
  const [value, setValue] = useState({
    total: '',
    next: '',
    operation: '',

  });
  const writeInner = (button) => {
    const btnName = button.target.innerHTML;
    setValue(calculate(value, btnName));
  };
  const view = () => {
    if (value.next) {
      return value.next;
    }
    if (value.operation) {
      return value.operation;
    }
    if (value.total) {
      return value.total;
    }
    return 0;
  };
  return (
    <section className="calculator">
      <div className="calcBody">
        <div className="row">
          <input className="inputUser" type="text" placeholder="0" value={view()} onChange={() => { }} />
        </div>
        <div className="row">
          <button type="button" className="backClr" onClick={writeInner}>AC</button>
          <button type="button" className="backClr" onClick={writeInner}>+/-</button>
          <button type="button" className="backClr" onClick={writeInner}>%</button>
          <button type="button" className="backClr difClr" onClick={writeInner}>÷</button>
        </div>
        <div className="row">
          <button type="button" className="backClr" onClick={writeInner}>7</button>
          <button type="button" className="backClr" onClick={writeInner}>8</button>
          <button type="button" className="backClr" onClick={writeInner}>9</button>
          <button type="button" className="backClr difClr" onClick={writeInner}>x</button>
        </div>
        <div className="row">
          <button type="button" className="backClr" onClick={writeInner}>4</button>
          <button type="button" className="backClr" onClick={writeInner}>5</button>
          <button type="button" className="backClr" onClick={writeInner}>6</button>
          <button type="button" className="backClr difClr" onClick={writeInner}>-</button>
        </div>
        <div className="row">
          <button type="button" className="backClr" onClick={writeInner}>1</button>
          <button type="button" className="backClr" onClick={writeInner}>2</button>
          <button type="button" className="backClr" onClick={writeInner}>3</button>
          <button type="button" className="backClr difClr" onClick={writeInner}>+</button>
        </div>
        <div className="row">
          <button type="button" className="backClr zero" onClick={writeInner}>0</button>
          <button type="button" className="backClr" onClick={writeInner}>.</button>
          <button type="button" className="backClr difClr" onClick={writeInner}>=</button>
        </div>

      </div>

    </section>
  );
};

export default Calculator;
