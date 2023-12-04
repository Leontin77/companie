import "./Footer.scss";

import { Link } from "react-router-dom";

import logoImg from "../../images/logoWhite.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content global-container">
        <Link to="/">
          <img src={logoImg} alt="logoImg" />
        </Link>
        <div className="footer__content-row">
          <div className="footer__content-colymn">
            <div className="footer__content-colymn-header">
              Financial Refund Authority
            </div>
            <div>
              <div className="footer__item">Как распознать обман?</div>
              <Link className="footer__item" to="/review">
                Отзывы
              </Link>
            </div>
          </div>
          <div className="footer__content-colymn">
            <div className="footer__content-colymn-header">Полезные ссылки</div>
            <div>
              <Link className="footer__item" to="/calculator">
                Калькулятор возврата
              </Link>
              <Link className="footer__item" to="/#quiz">
                Проверка на мошенничество
              </Link>
              <Link className="footer__item" to="/politics">
                О персональных данных
              </Link>
            </div>
          </div>
          <div className="footer__content-colymn">
            <div className="footer__content-colymn-header">Помощь</div>
            <div>
              <div className="footer__item">Что такое FRA?</div>
              <div className="footer__item">Как работает FRA</div>
              <Link className="footer__item" to="/#faq">
                Частые вопросы
              </Link>
            </div>
          </div>
          <div className="footer__content-colymn">
            <Link className="footer__content-colymn-header" to="/contact">
              Контакты
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
