import React, { useState } from 'react';
import './Investice.css';

function Investice() {
  const [initialAmount, setInitialAmount] = useState('');
  const [monthlyDeposit, setMonthlyDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentPeriod, setInvestmentPeriod] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const principle = parseFloat(initialAmount);
    const deposit = parseFloat(monthlyDeposit);
    const rate = parseFloat(interestRate) / 100 / 12;
    const periods = parseFloat(investmentPeriod) * 12;
    let futureVal = principle;

    for (let i = 0; i < periods; i++) {
      futureVal += deposit;
      futureVal *= 1 + rate;
    }

    setFutureValue(futureVal.toFixed(2));
  };

  return (
    <div className="container2">
      <h2>Kalkulačka investic</h2>
      <div className="input-group">
        <label>
          Počáteční částka:
          <input type="number" value={initialAmount} onChange={(e) => setInitialAmount(e.target.value)} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Měsíční vklad:
          <input type="number" value={monthlyDeposit} onChange={(e) => setMonthlyDeposit(e.target.value)} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Roční úroková sazba (%):
          <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
        </label>
      </div>
      <div className="input-group">
        <label>
          Doba trvání (v letech):
          <input type="number" value={investmentPeriod} onChange={(e) => setInvestmentPeriod(e.target.value)} />
        </label>
      </div>
      <div>
        <button className="button" onClick={calculateFutureValue}>Calculate</button>
      </div>
      {futureValue && (
        <div className="result">
          <h3>Odhad hodnoty je:</h3>
          <p>{futureValue} Kč</p>
        </div>
      )}
    </div>
  );
}

export default Investice;
