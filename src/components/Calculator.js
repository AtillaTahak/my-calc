import React from 'react';

const Calculator = () => (
  <section className="calculator">
    <div className="calcBody">
      <div className="row">
        <input className="inputUser" type="text" />
      </div>
      <div className="row">
        <button type="button" className="backClr">AC</button>
        <button type="button" className="backClr">+/-</button>
        <button type="button" className="backClr">%</button>
        <button type="button" className="backClr difClr">÷</button>
      </div>
      <div className="row">
        <button type="button" className="backClr">7</button>
        <button type="button" className="backClr">8</button>
        <button type="button" className="backClr">9</button>
        <button type="button" className="backClr difClr">X</button>
      </div>
      <div className="row">
        <button type="button" className="backClr">4</button>
        <button type="button" className="backClr">5</button>
        <button type="button" className="backClr">6</button>
        <button type="button" className="backClr difClr">-</button>
      </div>
      <div className="row">
        <button type="button" className="backClr">1</button>
        <button type="button" className="backClr">2</button>
        <button type="button" className="backClr">3</button>
        <button type="button" className="backClr difClr">+</button>
      </div>
      <div className="row">
        <button type="button" className="backClr zero">0</button>
        <button type="button" className="backClr">.</button>
        <button type="button" className="backClr difClr">=</button>
      </div>

    </div>

  </section>

);
export default Calculator;
