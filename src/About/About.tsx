import "./About.scss";
import { Header } from "components/Header/header";
import { LeaveRequest } from "components/LeaveRequest/LeaveRequest";
import { Footer } from "components/Footer/Footer";
import ReturnImg from "../images/return/return.png";

export interface ILandingProps {}

export const About = () => {
  const info = [
    {
      number: "1",
      label:
        "Брокер перестал выходить на связь, а доступ к вашему личному кабинету заблокирован.",
    },
    {
      number: "2",
      label:
        "На вашем счету пропали все денежные средства и брокер рассказывает вам что завтра послезавтра все решится. ",
    },
    {
      number: "3",
      label:
        "Если у вас есть доказательная база о сотрудничестве с брокером - важно все.",
    },
    {
      number: "4",
      label:
        "Если вы хотите быстрее вернуть деньги чем ждать арбитражного разбирательства.",
    },
    {
      number: "5",
      label:
        "Если вы обращались за помощью в государственные структуры, но вам не смогли помочь или процесс затянулся и результатов по нему нет.",
    },
    {
      number: "6",
      label:
        "В частных случаях, которые вы можете обсудить лично, связавшись с нашими специалистами, заполнив форму для связи.",
    },
  ];

  const youNeed = [
    {
      number: "1",
      label:
        "Заявление от пострадавшей стороны. Все заявления должны быть на двух языках (родном и английском). так как их будут рассматривать представительства платежных систем и другие международные регуляторные органы.",
    },
    {
      number: "2",
      label:
        "Доказательства. Ими могут быть переписки, заключенные договора, согласно которым можно юридически задокументировать нарушение ваших прав. Скриншоты, ссылки и другие доказательства также подойдут. ",
    },
    {
      number: "3",
      label:
        "Переписка с правонарушителем. Необходимо для того, чтобы платежная система, банк и другие включенные в процедуру органы могли зафиксировать , что вы действительно обращались по своей проблеме но ответа не получили.",
    },
    {
      number: "4",
      label:
        "Банковская выписка. Она необходима для того, чтобы вы могли указать какие именно транзакции планируете оспаривать.Обратите внимание, что при консультации с нашими специалистами вы также сможете предоставить вспомогательные доказательства, которых могло не оказаться в списке.",
    },
  ];

  return (
    <main className="about">
      <div className="about__picture">
        <div className="global-container">
          <div className="about__picture-info">
            <div className="title">
              ЧТО ТАКОЕ FINANCIAL <br /> REFUND AUTHORITY И КАК <br /> ЭТО
              РАБОТАЕТ?
            </div>
          </div>
        </div>
      </div>
      <div className="global-container">
        <div className="about__fca">
          <div className="about__fca-info">
            <div className="about__fca-info-text">
              Financial Refund Authority (FRA) – это специальное подразделение
              по возврату средств, похищенных брокером-мошенником. Подразделение
              FRA было создано и полностью управляется финансовым регулятором
              Financial Conduct Authority (FCA).
            </div>
            <div className="about__fca-info-text">
              Наше специальное подразделение в индивидуальном порядке
              рассматривает заявления клиентов у которых возникли проблемы с
              брокерами мошенниками. Будучи подразделением FCA у нас есть доступ
              к базе более чем 56 000 финансовых брокеров.
            </div>
          </div>
          <div className="about__fca-image"></div>
        </div>
        <div className="about__charge">
          <div className="about__charge-info">
            <div className="about__charge-info-title">Подразделение FRA</div>
            <div className="about__charge-info-text">
              Единственный способ безопасно вернуть деньги без <br /> знаний
              всех тонкостей процедуры chargeback.
            </div>
          </div>
        </div>
      </div>
      <section className="aboutUs">
        <div className="global-container">
          <div className="aboutUs-content">
            <div className="aboutUs-subtitle">
              В число задач нашего подразделения входит борьба с деятельностью
              незаконных брокерских компаний, а именно – помощь в возврате
              украденных у клиентов средств. Таким образом мы помогаем FCA
              выполнять её основополагающие задачи:
            </div>
            <ul className="aboutUs-list">
              <li className="aboutUs-list-item">
                <h4>Защищать права потребителей финансовых услуг</h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Делается это с целью стабилизации как частных финансовых
                  рынков отдельных государств так и для стабилизации
                  международного рынка финансовых услуг.
                </div>
              </li>
              <li className="aboutUs-list-item">
                <h4>Ликвидация брокеров мошенников</h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Эта задача одновременно решает вопрос с защитой прав
                  потребителей и добросовестных брокеров, из-за которых уровень
                  доверия к ним снижается.
                </div>
              </li>
              <li className="aboutUs-list-item">
                <h4>
                  Помощь с возвратом денежных средств, украденных брокерами
                  мошенниками
                </h4>
                <div className="shortBorder"></div>
                <div className="item-descr">
                  Юристы и причастные сотрудники с соответствующих регулирующих
                  органов помогают оперативно вернуть украденные у клиентов
                  деньги.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="ourMission">
        <div className="global-container">
          <div className="ourMission-content">
            <h3 className="ourMission-title">
              В каких случаях FRA поможет вернуть украденные брокером деньги?
            </h3>
            <div className="ourMission-box">
              {info?.map((item: any) => (
                <div className="ourMission-container">
                  <div className="ourMission-container__number">
                    {item.number}
                  </div>
                  <div className="ourMission-container__descr">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="return">
        <div className="global-container">
          <div className="return-content">
            <h3 className="ourMission-title maxWidth">
               Процедура возврата денежных средств от FRA
            </h3>
            <ul className="return-list">
              <li className="return-list__item">
                Наши специалисты готовят пакет необходимых документов и от имени
                заявителя подают заявления с требованием вернуть украденные
                деньги в банк. 
              </li>
              <li className="return-list__item">
                Затем банк инициирует разбирательство и готовит запрос в
                банк-эквайер (тот банк в который ушли ваши деньги) платежные
                системы. 
              </li>
              <li className="return-list__item">
                Для максимально эффективного результата наши специалисты также
                делают запрос в регуляторные органы и следят за тем, чтобы банк
                оперативно отвечал на запрос. 
              </li>
              <li className="return-list__item">
                Ответ платежных систем фактически является ключевым в решении -
                вернут вам деньги или нет. Но и это не последняя инстанция и
                наши специалисты добивались успешного результата уже в суде.
                Однако это частные случаи, большинство заявлений удается решить
                коммуницируя с платежными системами.
              </li>
              <li className="return-list__item">
                Далее в каждом частном случае наши специалисты следуют своим
                индивидуальным процедурам, что в конечном итоге дает коэффициент
                возврата денег клиентам в 95%.
              </li>
            </ul>
            <div className="return-image">
              <img className="return-image__img" src={ReturnImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="returnTerms">
        <div className="global-container">
          <div className="returnTerms-content">
            <h3 className="ourMission-title">
               Сроки возврата денежных средств?
            </h3>
            <div className="returnTerms-subtitle">
              Специалисты организации FRA подходят к решению задачи комплексно,
              благодаря чему средний срок возврата денег составляет до двух
              недель. В отдельных случаях он может быть от трёх до шести
              недель. 
            </div>
            <br />
            <div className="returnTerms-subtitle">
              Мы считаем коэффициент возврата в 95% в такие кратчайшие сроки
              своим преимуществом и ценим доверие наших клиентов.
            </div>
            <div className="returnTerms-question">
              Что нужно для запуска процесса?{" "}
            </div>
            <div className="returnTerms-box">
              {youNeed.map((item) => (
                <div className="returnTerms-container">
                  <div className="returnTerms-container__number">
                    {item.number}
                  </div>
                  <div className="returnTerms-container__descr">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="howToHelp">
        <div className="global-container">
          <div className="howToHelp-content">
            <h3 className="ourMission-title maxWidth">
              Как может защищаться брокер мошенник{" "}
            </h3>
            <div className="howToHelp-subtitle">
              Изучая каждое дело наши специалисты в первую очередь изучают
              договор оферты, который клиент подписал с правонарушителем.
            </div>
            <br/>
            <div className="howToHelp-subtitle">
              Если вы оплачивали услуги с ваших карт и эти условия были
              прописаны в договоре, то прямых признаков мошенничества нет.
              Потому как вы собственноручно сделали перевод, будучи инвестором. 
            </div>
            <br/>
            <div className="howToHelp-subtitle">
              Но если вы не можете вывести ваши средства, или ваш аккаунт
              заблокирован, с него пропали все деньги и вам не отвечают или
              постоянно что-то обещают но результата нет, то причин вернуть вам
              деньги очень много и главное, реально сделать это легально,
              юридическим путем.
            </div>
          </div>
        </div>
      </section>
      <LeaveRequest />
      <Footer />
    </main>
  );
};
