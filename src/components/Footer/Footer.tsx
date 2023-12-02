import "./Footer.scss";

import logoImg from "../../images/logoWhite.png"


export const Footer = () => {
  return (
      <div className="footer">
          <div className="footer__content global-container">
              <img src={logoImg} alt="logoImg"/>
              <div className="footer__content-row">
                  <div className="footer__content-colymn">
                      <div className="header">Financial Refund Authority</div>
                      <div>
                          <div className="item">Как распознать обман?</div>
                          <div className="item">Отзывы</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="header">Полезные ссылки</div>
                      <div>
                          <div className="item">Калькулятор возврата</div>
                          <div className="item">Проверка на мошенничество</div>
                          <div className="item">О персональных данных</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="header">Помощь</div>
                      <div>
                          <div className="item">Что такое FRA?</div>
                          <div className="item">Как работает FRA</div>
                          <div className="item">Частые вопросы</div>
                      </div>
                  </div>
                  <div className="footer__content-colymn">
                      <div className="header">Контакты</div>
                  </div>
              </div>
          </div>
      </div>
  );
};
