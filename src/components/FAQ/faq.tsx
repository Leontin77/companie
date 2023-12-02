import { useState } from "react";
import plusIcon from "../../images/plus.png";
import minusIcon from "../../images/minus.png";

export const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(false);
  const [openFAQ1, setOpenFAQ1] = useState(false);
  const [openFAQ2, setOpenFAQ2] = useState(false);
  const [openFAQ3, setOpenFAQ3] = useState(false);
  const [openFAQ4, setOpenFAQ4] = useState(false);
  const [openFAQ5, setOpenFAQ5] = useState(false);
  const [openFAQ6, setOpenFAQ6] = useState(false);
  const [openFAQ7, setOpenFAQ7] = useState(false);
  const [openFAQ8, setOpenFAQ8] = useState(false);
  const [openFAQ9, setOpenFAQ9] = useState(false);

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-content">
          <h2 className="aboutUs-title">FAQ</h2>
          <ul className="faq-list">
            <li className="faq-list-item" onClick={() => setOpenFAQ(!openFAQ)}>
              <div className="title">
                <img src={!openFAQ ? plusIcon : minusIcon} alt="" />
                <span>Как функционирует FRA?</span>
              </div>
              {openFAQ && (
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
                </div>
              )}
            </li>
            <li
              className="faq-list-item"
              onClick={() => setOpenFAQ1(!openFAQ1)}
            >
              <div className="title">
                <img src={!openFAQ1 ? plusIcon : minusIcon} alt="" />
                <span>В какие сроки можно оспорить транзакцию?</span>
              </div>
              {openFAQ1 && (
                <div className="description">
                  Согласно законодательству, платежные системами могут
                  оспаривать транзакцию сроком до 540 дней.В то же время банки
                  могут рассматривать ваше обращение  для: Visa - 180 дней,
                  Mastercard - 120 дней. Вероятность возврата ваших средств
                  увеличивается если вы скорее обратитесь в соответствующие
                  организации. Обратите внимание что в Интернете вы можете найти
                  разные сроки для оспаривания транзакций, так как каждый банк
                  устанавливает свои собственные сроки в соответствии с
                  внутренними нормативами.
                </div>
              )}
            </li>
            <li
              className="faq-list-item"
              onClick={() => setOpenFAQ2(!openFAQ2)}
            >
              <div className="title">
                <img src={!openFAQ2 ? plusIcon : minusIcon} alt="" />
                <span>В каких случаях возможен ChargeBack?</span>
              </div>
              {openFAQ2 && (
                <ul className="description">
                  <li>Неосуществление обещанного возврата (refund) в торговой точке.</li>
                  <li> Деньги списались дважды.</li>
                  <li>Списалась сумма, больше стоимости покупки.</li>
                  <li>Списание без авторизации, или списание денег за покупку, которую владелец карты не делал.</li>
                  <li>Если товар или услуга не соответствуют описанию. </li>
                  <li>Неполное предоставление услуг и/или умышленное введения клиента в заблуждение.</li>
                  <li>  Когда оплаченный товар не был предоставлен, а услуга оказанной.</li>
                  <li> Отказ продавца принять товар обратно или умышленное затягивание процесса возврата.</li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
