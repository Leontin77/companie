import React, { useEffect, useState } from "react";
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
    "--thumb-color"?: string;
  }
}

const CalculatorComponent: React.FC = () => {
  const [calculatorState, setCalculatorState] = useState<ICalculatorState>({
    brokerName: "",
    amountLost: 1000,
    daysSinceTransfer: 1,
    probability: 94,
  });

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateProbability = (
    amountLost: number,
    daysSinceTransfer: number
  ): number => {
    const minProbability = 87;
    const maxProbability = 96;
    const maxDays = 1825;
    const maxAmount = 100000;
    const daysFactor = (maxDays - daysSinceTransfer) / maxDays;
    const amountFactor = amountLost / maxAmount;
    const weightedProbability = (daysFactor + amountFactor) / 2;

    const probabilityRange = maxProbability - minProbability;
    const probability = minProbability + probabilityRange * weightedProbability;

    return Math.min(Math.max(probability, minProbability), maxProbability);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const valueAsNumber = Number(value);

    setCalculatorState((prevState) => {
      const newAmountLost =
        name === "amountLost" ? valueAsNumber : prevState.amountLost;
      const newDaysSinceTransfer =
        name === "daysSinceTransfer"
          ? valueAsNumber
          : prevState.daysSinceTransfer;

      const newProbability = calculateProbability(
        newAmountLost,
        newDaysSinceTransfer
      );

      return {
        ...prevState,
        [name]: name === "brokerName" ? value : valueAsNumber,
        probability: newProbability,
      };
    });
  };

  const getDayWordForm = (days: number) => {
    const number = Math.abs(days) % 100;
    var numLastDigit = number % 10;

    if (number > 10 && number < 20) {
      return days + " дней";
    }
    if (numLastDigit > 1 && numLastDigit < 5) {
      return days + " дня";
    }
    if (numLastDigit === 1) {
      return days + " день";
    }
    return days + " дней";
  };

  return (
    <div className="CalculatorComponent">
      <h3 className="CalculatorComponent_header">КАЛЬКУЛЯТОР</h3>
      <h2 className="CalculatorComponent_subHeader">
        Определить вероятность возврата украденных у меня денег
      </h2>
      <form>
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
        <div className="input-group green">
          <label htmlFor="amount-lost" className="green">
            <span className="green">2</span>
            Укажите сумму потерянных средств, $
          </label>
          <div style={{ position: "relative" }}>
            <span
              className="fakeInput"
              style={{
                position: "absolute",
                "--fill-percentage": `${
                  (calculatorState.amountLost / 100000) * 100
                }%`,
                "--thumb-color": "#00bfb3",
              }}
            ></span>
            <input
              id="amount-lost"
              name="amountLost"
              type="range"
              min="1000"
              max="100000"
              // className="green"
              value={calculatorState.amountLost}
              onChange={handleInputChange}
              style={{
                "--fill-percentage": `${
                  (calculatorState.amountLost / 100000) * 100
                }%`,
                "--thumb-color": `#00bfb3`,
              }}
            />
            <div
              style={{
                position: "relative",
                width: `${screenWidth < 1024 ? "calc(100vw - 130px)" : screenWidth < 1240 ? "85%" : "88%"}`,
                height: "10px",
                margin: "0 auto",
              }}
            >
              <div
                className="range-tooltip green"
                style={{
                  left: `${
                    (calculatorState.amountLost / 100000) * 100 === 1
                      ? 0
                      : (calculatorState.amountLost / 100000) * 100
                  }%`,
                }}
              >
                {calculatorState.amountLost} $
              </div>
            </div>
          </div>
          <div className="range-value">
            <span>1000 $</span>
            <span>100000 $ +</span>
          </div>
          {/* <div className="range-value">${calculatorState.amountLost}</div> */}
        </div>
        <div className="input-group">
          <label htmlFor="days-since-transfer" className="blue">
            Сколько прошло времени после перевода вами денег, дней
          </label>
          <div style={{ position: "relative" }}>
            <span
              className="fakeInput"
              style={{
                position: "absolute",
                "--fill-percentage": `${
                  (calculatorState.daysSinceTransfer / 1825) * 100
                }%`,
                "--thumb-color": "#003c71",
              }}
            ></span>
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
                "--thumb-color": "#003c71",
              }}
            />
            <div
              style={{
                position: "relative",
                width: `${screenWidth < 1024 ? "calc(100vw - 130px)" : screenWidth < 1240 ? "85%" : "88%"}`,
                height: "10px",
                margin: "0 auto",
              }}
            >
              <div
                className="range-tooltip"
                style={{
                  left: `${
                    (calculatorState.daysSinceTransfer / 1825) * 100 === 1
                      ? 0
                      : (calculatorState.daysSinceTransfer / 1825) * 100
                  }%`,
                }}
              >
                {getDayWordForm(calculatorState.daysSinceTransfer)}
              </div>
            </div>
          </div>
          <div className="range-value">
            <span>1 день</span>
            <span>1825 дней</span>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="" className="summary">
            <span>4</span>
            <div>Вероятность возврата ваших денег, %</div>
            <div className="probability-value">
              {Number(calculatorState.probability.toFixed(0))}%
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
