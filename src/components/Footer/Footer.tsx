import "./Footer.scss";

import logoImg from "../../images/logoWhite.png"


export const Footer = () => {
  return (
      <div className="footer">
          <div className="footer__content global-container">
              <img src={logoImg} alt="logoImg"/>
              <div className="footer__content-row">
                  <div className="footer__content-colymn">
                      <div className="footer__content-colymn-header">Financial Refund Authority</div>
                      <div>
                          <div className="footer__item">Как распознать обман?</div>
                          <div className="footer__item">Отзывы</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="footer__content-colymn-header">Полезные ссылки</div>
                      <div>
                          <div className="footer__item">Калькулятор возврата</div>
                          <div className="footer__item">Проверка на мошенничество</div>
                          <div className="footer__item">О персональных данных</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="footer__content-colymn-header">Помощь</div>
                      <div>
                          <div className="footer__item">Что такое FRA?</div>
                          <div className="footer__item">Как работает FRA</div>
                          <div className="footer__item">Частые вопросы</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="footer__content-colymn-header">Контакты</div>
                  </div>
              </div>
          </div>
      </div>
  );
};
