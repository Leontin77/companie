import React, { useState } from "react";
import "./CalculatorComponent.scss";

interface ICalculatorState {
  brokerName: string;
  amountLost: number;
  daysSinceTransfer: number;
  probability: number;
}
declare module "react" {
  interface CSSProperties {
    "--fill-percentage"?: string;
  }
}

const CalculatorComponent: React.FC = () => {
  const [calculatorState, setCalculatorState] = useState<ICalculatorState>({
    brokerName: "",
    amountLost: 1000,
    daysSinceTransfer: 1,
    probability: 94,
  });

  const calculateProbability = (amountLost: number, daysSinceTransfer: number): number => {

    const minProbability = 87;
    const maxProbability = 96;
    const maxDays = 1825; 
    const maxAmount = 100000;
    const daysFactor = (maxDays - daysSinceTransfer) / maxDays;
    const amountFactor = (amountLost) / maxAmount;
    const weightedProbability = (daysFactor + amountFactor) / 2;
  

    const probabilityRange = maxProbability - minProbability;
    const probability = minProbability + (probabilityRange * weightedProbability);
  

    return Math.min(Math.max(probability, minProbability), maxProbability);
  };
  
  // ...
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const valueAsNumber = Number(value);
    
    setCalculatorState(prevState => {
      const newAmountLost = name === 'amountLost' ? valueAsNumber : prevState.amountLost;
      const newDaysSinceTransfer = name === 'daysSinceTransfer' ? valueAsNumber : prevState.daysSinceTransfer;
  
      const newProbability = calculateProbability(newAmountLost, newDaysSinceTransfer);
  
      return {
        ...prevState,
        [name]: name === 'brokerName' ? value : valueAsNumber,
        probability: newProbability,
      };
    });
  };


  const handleCalculate = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // const newProbability = calculateProbability();
    // setCalculatorState({
    //   ...calculatorState,
    //   probability: newProbability,
    // });
  };

  return (
    <div className="CalculatorComponent">
      <h3 className="CalculatorComponent_header">КАЛЬКУЛЯТОР</h3>
      <h2 className="CalculatorComponent_subHeader">Определить вероятность возврата украденных у меня денег</h2>
      <form onSubmit={handleCalculate}>
        <div className="input-group">
          <label htmlFor="broker-name">
            <span>1</span>
            Введите название брокера-мошенника
          </label>
          <input
            id="broker-name"
            name="brokerName"
            type="text"
            placeholder="Название брокера"
            value={calculatorState.brokerName}
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="amount-lost">
          <span className="green">2</span>
            Укажите сумму потерянных средств, $
          </label>
          <input
            id="amount-lost"
            name="amountLost"
            type="range"
            min="1000"
            max="100000"
            className="green"
            value={calculatorState.amountLost}
            onChange={handleInputChange}
            style={{
                "--fill-percentage": `${
                  (calculatorState.amountLost / 100000) * 100
                }%`,
              }}
          />
          <div className="range-value">
            <span>1000 $</span>
            <span>100000 $ +</span>
          </div>
          {/* <div className="range-value">${calculatorState.amountLost}</div> */}
        </div>
        <div className="input-group">
          <label htmlFor="days-since-transfer">
            <span className="blue">3</span>
            Сколько прошло времени после перевода вами денег, дней
          </label>
          <input
            id="days-since-transfer"
            name="daysSinceTransfer"
            type="range"
            min="1"
            max="1825"
            value={calculatorState.daysSinceTransfer}
            onChange={handleInputChange}
            style={{
              "--fill-percentage": `${
                (calculatorState.daysSinceTransfer / 1825) * 100
              }%`,
            }}
          />
          <div className="range-value">
            <span>1 день</span>
            <span>1825 дней</span>
          </div>
          {/* <div className="range-value">
            {calculatorState.daysSinceTransfer} дней
          </div> */}
        </div>
        <div className="input-group">
          <label htmlFor="" className="summary">
            <span>4</span>
            <div>
            Вероятность возврата ваших денег, %
            </div>
             <div className="probability-value">
            {Number(calculatorState.probability.toFixed(1)) * 1}%
          </div>
          </label>
         
          {/* <div className="range-value">
            {calculatorState.daysSinceTransfer} дней
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default CalculatorComponent;
