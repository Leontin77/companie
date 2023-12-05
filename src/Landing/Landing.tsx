import "./Landing.scss";
import { useEffect, useState } from "react";
import { Header } from "components/Header/header";
import { MainButton } from "components/MainButton/mainButton";
import { FAQ } from "components/FAQ/faq";
import MoneyIcon from "../images/money.png";
import PercentageIcon from "../images/percentage.png";
import { Form } from "components/Form/form";
import AboutUsIcon1 from "../images/aboutUs1.png";
import AboutUsIcon2 from "../images/aboutUs2.png";
import AboutUsIcon3 from "../images/aboutUs3.png";
import MethodIcon from "../images/method.png";
import ProfiIcon from "../images/profi.png";
import AutomatisationIcon from "../images/automatisation.png";
import BuroIcon from "../images/buro.png";
import companyIcon1 from "../images/company1.png";
import companyIcon2 from "../images/company2.png";
import companyIcon3 from "../images/company3.png";
import companyIcon4 from "../images/company4.png";
import companyIcon5 from "../images/company5.png";
import companyIcon6 from "../images/company6.png";
import companyIcon7 from "../images/company7.png";
import companyIcon8 from "../images/company8.png";
import companyIcon9 from "../images/company9.png";
import companyIcon10 from "../images/company10.png";
import companyIcon11 from "../images/company11.png";
import companyIcon12 from "../images/company12.png";
import companyIcon13 from "../images/company13.png";
import { LeaveRequest } from "components/LeaveRequest/LeaveRequest";
import { Footer } from "components/Footer/Footer";
import { Raiting } from "components/Rating/rating";

import { useLocation } from "react-router-dom";

export interface ILandingProps {}

export const Landing = () => {
  // const [openFAQ,  setOpenFAQ] = useState(false);
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

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      {/* <Header /> */}
      <section className="hero">
        {/* <img className="heroBG" src={heroBG} alt="" /> */}
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
                className=""
                text="Оформить заявление на возврат денег!"
                width={screenWidth > 1024 ? '650px' : '100%'}
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
              КАК FRA ПОМОЖЕТ ВЕРНУТЬ ВАМ ДЕНЬГИ?
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
                <h4>Как скоро мне вернут деньги?</h4>
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
      <Raiting/>
      <section className="ourAdvantages">
        <div className="container">
          <div className="ourAdvantages-content">
            <h2 className="aboutUs-title">НАШИ ПРЕИМУЩЕСТВА</h2>
            <div className="aboutUs-subtitle">
              Поможем вернуть деньги, украденные у тебя брокером-мошенником!
              Беремся за дело при потерях от 1000$. Вероятность возврата - в
              свыше  96% случаях.
            </div>

            <div className="ourAdvantages-info">
              <ul className="ourAdvantages-list">
                <li className="ourAdvantages-list-item">
                  <div className="title">
                    <img src={MethodIcon} alt="" />
                    <span>Собственная методология</span>
                  </div>
                  <div>
                    Наша уникальная методология  помогла вернуть нашим клиентам
                    деньги из более чем десятка юрисдикций.
                  </div>
                </li>

                <li className="ourAdvantages-list-item">
                  <div className="title">
                    <img src={ProfiIcon} alt="" />
                    <span>30+ Профессионалов</span>
                  </div>
                  <div>
                    Наша команда профессионалов обеспечивает положительные
                    результаты благодаря многолетнему опыту наших специалистов.
                  </div>
                </li>

                <li className="ourAdvantages-list-item">
                  <div className="title">
                    <img src={AutomatisationIcon} alt="" />
                    <span>Автоматизация процессов</span>
                  </div>
                  <div>
                    Процесс возврата денег полностью автоматизирован, все
                    необходимые действия выполняются онлайн.
                  </div>
                </li>

                <li className="ourAdvantages-list-item">
                  <div className="title">
                    <img src={BuroIcon} alt="" />
                    <span>Без бюрократии</span>
                  </div>
                  <div>
                    Вам не потребуется заполнять бумаги или обращаться к юристу.
                    Мы сделаем все за вас!
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="logos">
        <div className="container">
          <div className="logos-content">
            <h2 className="aboutUs-title">МЫ УЖЕ ПОМОГЛИ ВЕРНУТЬ ДЕНЬГИ ОТ:</h2>
            <div className="logos-img">
              <img className="imgLogo" src={companyIcon1} alt="" />
              <img className="imgLogo" src={companyIcon2} alt="" />
              <img className="imgLogo" src={companyIcon3} alt="" />
              <img className="imgLogo" src={companyIcon4} alt="" />
              <img className="imgLogo" src={companyIcon5} alt="" />
              <img className="imgLogo" src={companyIcon6} alt="" />
              <img className="imgLogo" src={companyIcon7} alt="" />
              <img className="imgLogo" src={companyIcon8} alt="" />
              <img className="imgLogo" src={companyIcon9} alt="" />
              <img className="imgLogo" src={companyIcon10} alt="" />
              <img className="imgLogo" src={companyIcon11} alt="" />
              <img className="imgLogo" src={companyIcon12} alt="" />
              <img className="imgLogo" src={companyIcon13} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="faq">
        <div className="container">
          <div className="faq-content">
            <h2 className="aboutUs-title">FAQ</h2>
            <ul className="faq-list">
              <li className="faq-list-item" onClick={() => setOpenFAQ(!openFAQ)}>
                <div className="title">
                  <img src={!openFAQ ? plusIcon : minusIcon} alt="" />
                  <span>Как функционирует FRA?</span>
                </div>
                {openFAQ && 
                <div className="description">
                  <div>
                    FRA – это подразделение Financial Conduct Authority (FCA –
                    Управление по финансовому регулированию и надзору
                    репутацию), предназначенное для борьбы с противозаконной
                    деятельностью компаний-мошенников, которые представляются
                    представителями FCA, обещая помочь клиентам вернуть их
                    потерянные деньги.
                  </div>
                  <div>
                    Специальное подразделение FRA было создано из-за резко
                    возросшего количества компаний-мошенников, противозаконная
                    деятельность которых портит репутацию Управлению по
                    финансовому регулированию и надзору (FCA). 
                  </div>
                  <div>
                    В рамках своей деятельности FRA занимается возвратом
                    клиентам украденных у них денежных средства абсолютно
                    законным путем, что дает ему возможность задействовать в
                    своей работе помощь соответствующих регуляторных органов,
                    увеличивая вероятность на успешный исход дела. 
                  </div>
                  <ul>
                    Этапы процесса возврата денег выглядит так:
                    <li>1. Регистрация.</li>
                    <li>2. Заполнение профиля.</li>
                    <li>3. Заполнение заявки и загрузка документов.</li>
                    <li>4.Отправка документов в банк.</li>
                  </ul>
                  <div>
                    Как только процедура будет окончена, деньги возвращаются на
                    карту пострадавшего физ.лица.
                  </div>
                  <div>
                    Помните, что ChargeBack не гарантирует 100% возврат денег. В
                    некоторых случаях шанс на ChargeBack может стремиться к
                    нулю. Перед началом процедуры рекомендуется ознакомиться с
                    разделом "Часто задаваемые вопросы", чтобы полностью
                    понимать весь механизм. Наш сервис бесплатный и наши
                    специалисты никогда не требуют предварительной оплаты или
                    комиссии. Вся коммуникация с сервисом осуществляется
                    исключительно по оставленным вами контактам.
                  </div>
                </div>}
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <FAQ/>
      <span id="faq"></span>
      <LeaveRequest/>
            <Footer/>
    </main>
  );
};
