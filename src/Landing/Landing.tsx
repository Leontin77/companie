import "./Landing.scss";
import { useState } from "react";
import { Header } from "components/Header/header";
import { MainButton } from "components/MainButton/mainButton";
import MoneyIcon from "../images/money.png";
import PercentageIcon from "../images/percentage.png";
import { Form } from "components/Form/form";
import AboutUsIcon1 from "../images/aboutUs1.png";
import AboutUsIcon2 from "../images/aboutUs2.png";
import AboutUsIcon3 from "../images/aboutUs3.png";
export interface ILandingProps {}

export const Landing = () => {
  return (
    <main className="wrapper">
      <Header />
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-content__description">
              <h1 className="hero-title">
                Поможем вернуть деньги через chargeback онлайн
              </h1>
              <div className="hero-subtitle">
                <div>
                  В FRA вы без предоплаты оформляете заявление на возврат
                  денежных средств через процедуру ChargeBack онлайн и наши
                  специалисты помогут вернуть вам деньги законным путем.
                </div>
                <br />
                <div>
                  Оставьте заявку и мы свяжемся с вами для уточнения деталей! 
                </div>
              </div>
              <MainButton
                text="Оформить заявление на возврат денег!"
                width="650px"
                background="#701b45"
              />
              <ul className="hero-help">
                <li className="hero-help-item greenBorder">
                  <img src={MoneyIcon} alt="" />
                  <div>Беремся за дело при потере от 1000$</div>
                </li>
                <li className="hero-help-item blueBorder">
                  <img src={PercentageIcon} alt="" />
                  <div>Процент возвратов – 95%</div>
                </li>
              </ul>
            </div>
            <Form />
          </div>
        </div>
      </section>
      <section className="aboutUs">
        <div className="container">
          <div className="aboutUs-content">
            <h2 className="aboutUs-title">
              КАК FRA ПОМОЖЕТВЕРНУТЬ ВАМ ДЕНЬГИ?
            </h2>
            <div className="aboutUs-subtitle">
              Наш отдел специализируется на работе с брокерами-мошенниками,
              помогая  клиентам получать украденные у них деньги оперативно и
              эффективно.
            </div>
            <ul className="aboutUs-list">
              <li className="aboutUs-list-item">
                <h4>Хочу оставить заявку на возврат денег</h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Заполните форму и уточните все факты мошенничества
                </div>
              </li>
              <li className="aboutUs-list-item">
                <h4>Нужна помощь с оформлением ChargeBack</h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Как только офферта будет подписана, мы начинаем процедуру
                </div>
              </li>
              <li className="aboutUs-list-item">
                <h4>Как скоро мне вернутденьги?</h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Как только офферта будет подписана, мы начинаем процедуру
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="aboutUs bg-white">
        <div className="container">
          <div className="aboutUs-content">
            <h2 className="aboutUs-title">
              КАК ПОНЯТЬ ЧТО ПОПАЛНА БРОКЕРА МОШЕННИКА?
            </h2>
            <div className="aboutUs-subtitle">
              Опыт наших специалистов и тесные взаимосвязи с регуляторными
              органами помогают вернуть деньги даже в самых безнадежных
              ситуациях
            </div>
            <ul className="aboutUs-list">
              <li className="aboutUs-list-item howToKnow">
                <img src={AboutUsIcon1} alt="" />
                <div className="howToKnow-content">
                  <h4>Не получается вывести деньги</h4>
                  <div className="shortBorder"></div>
                  <div className="item-descr">
                    Ваш аккаунт на сайте брокера заблокирован или же сам сайт
                    больше не существует
                  </div>
                </div>
              </li>
              <li className="aboutUs-list-item howToKnow">
                <img src={AboutUsIcon2} alt="" />
                <div className="howToKnow-content">
                  <h4>Платформа не работает</h4>
                  <div className="shortBorder"></div>
                  <div className="item-descr">
                    Брокер-мошенник обращается к вам с просьбой оплатить
                    дополнительные платежи, хотя причин для этого нет
                  </div>
                </div>
              </li>
              <li className="aboutUs-list-item howToKnow">
                <img src={AboutUsIcon3} alt="" />
                <div className="howToKnow-content">
                  <h4>Брокер не отвечает на звонки</h4>
                  <div className="shortBorder"></div>
                  <div className="item-descr">
                    Вы не можете дозвониться брокеру по ранее рабочим номерам,
                    сам брокер вам не перезванивает
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="chooseType">
        <div className="container">
          <div className="chooseType-content">
            <div className="chooseType-header">
              Получить оценку моего дела всего за пару минут
            </div>
            <div className="chooseType-checkboxes">
              <h5>Выберите вид мошенничества, с которым вы столкнулись</h5>
              <form>
                <fieldset>
                  <div className="checkbox-group">
                    <input type="checkbox" id="brokerFraud" name="fraudType" />
                    <label htmlFor="brokerFraud">Обманул брокер-мошенник</label>
                  </div>

                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="financialPyramid"
                      name="fraudType"
                    />
                    <label htmlFor="financialPyramid">
                      Попал(а) на финансовую пирамиду
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <input type="checkbox" id="fakeOrg" name="fraudType" />
                    <label htmlFor="fakeOrg">
                      Обман со стороны фиктивной организации
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <input type="checkbox" id="cryptoFraud" name="fraudType" />
                    <label htmlFor="cryptoFraud">
                      Мошенничество с криптовалютами
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <input type="checkbox" id="bankFraud" name="fraudType" />
                    <label htmlFor="bankFraud">
                      Обман в банке и/или кража денег с банковской карты
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <input
                      type="checkbox"
                      id="pyramidScheme"
                      name="fraudType"
                    />
                    <label htmlFor="pyramidScheme">
                      Риэлторская компания - мошенник
                    </label>
                  </div>

                  <div className="checkbox-group">
                    <input type="checkbox" id="other" name="fraudType" />
                    <label htmlFor="other">Другое</label>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
