import "./CalculatorPage.scss";
import { Header } from "components/Header/header";
import { Footer } from "components/Footer/Footer";
import CalculatorComponent from "components/CalculatorComponent/CalculatorComponent";
import headerPageImg from "../images/CalculatorTopImage.png";
import { MainButton } from "components/MainButton/mainButton";
import { LeaveRequest } from "components/LeaveRequest/LeaveRequest";

export interface ILandingProps {}
const gridContent = [
  "Являемся официальным подразделением FCA",
  "Поможем вернуть деньги в сроки от 1 дня до 2 месяцев",
  "Сделаем все вместо вас, без лишней бюрократии",
  "Деньги вернуться сразу на вашу карту",
  "Работаем онлайн с любой точки мира, без предоплат",
];

export const CalculatorPage = () => {
  return (
    <main className="calculatorPage">
      <Header />
      <div className="calculatorPage_container global-container">
        {/* <img className="calculatorPage_picture" src={headerPageImg}></img> */}
        {/* <div className="calculatorPage_picture"> */}
          <CalculatorComponent />
          <div className="calculatorPage_container_sideInfo">
            <div className="calculatorPage_container_sideInfo_btnsRow">
              <div className="calculatorPage_container_sideInfo_btnsRow_btn">
                БЕЗ ПРЕДОПЛАТ
              </div>
              <div className="calculatorPage_container_sideInfo_btnsRow_btn">
                ОПЕРАТИВНО
              </div>
            </div>
            <div className="calculatorPage_container_sideInfo_text">
              Поможем законным путем вернуть деньги быстро и эффективно!
            </div>
            <MainButton
              text="Получить консультацию сейчас"
              width="100%"
              background="#701B45"
            />
          </div>
        {/* </div> */}
      </div>
      <div className="calculatorPage_bottomInfo global-container">
        {gridContent.map((content, index) => (
          <div key={index} className={`item item${index + 1}`}>
            <p>{content}</p>
          </div>
        ))}
      </div>
      <LeaveRequest />
      <Footer />
    </main>
  );
};
