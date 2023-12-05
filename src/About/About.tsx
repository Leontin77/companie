import "./About.scss";
import {Header} from "components/Header/header";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const About = () => {
        return (
        <main className="about">
            <div className="about__picture">
                <div className="global-container">
                    <div className="about__picture-info">
                        <div className="title">
                            ЧТО ТАКОЕ FINANCIAL <br/> REFUND AUTHORITY И КАК <br/>  ЭТО РАБОТАЕТ?
                        </div>
                    </div>
                </div>
            </div>
            <div className="global-container">
                <div className="about__fca" >
                    <div className="about__fca-info">
                        <div className="about__fca-info-text">Financial Refund Authority (FRA) – это специальное подразделение по возврату средств, похищенных брокером-мошенником. Подразделение FRA было создано и полностью управляется финансовым регулятором Financial Conduct Authority (FCA).</div>
                        <div className="about__fca-info-text">Наше специальное подразделение в индивидуальном порядке рассматривает заявления клиентов у которых возникли проблемы с брокерами мошенниками. Будучи подразделением FCA у нас есть доступ к базе более чем 56 000  финансовых брокеров.</div>
                    </div>
                    <div className="about__fca-image"></div>
                </div>
                <div className="about__charge">
                    <div className="about__charge-info">
                        <div className="about__charge-info-title">Подразделение FRA</div>
                        <div  className="about__charge-info-text">Единственный способ безопасно вернуть деньги без <br/> знаний всех тонкостей процедуры chargeback.</div>
                    </div>
                </div>
            </div>
            <section className="aboutUs">
                <div className="global-container">
                    <div className="aboutUs-content">
                        <div className="aboutUs-subtitle">
                            В число задач нашего подразделения входит борьба с деятельностью незаконных брокерских компаний, а именно – помощь в возврате украденных у клиентов средств. Таким образом мы помогаем FCA выполнять её основополагающие задачи:
                        </div>
                        <ul className="aboutUs-list">
                            <li className="aboutUs-list-item">
                                <h4>Защищать права потребителей финансовых услуг</h4>
                                <div className="shortBorder"></div>
                                <div className="item-descr">
                                    Делается это с целью стабилизации как частных финансовых рынков отдельных государств так и для стабилизации международного рынка финансовых услуг.
                                </div>
                            </li>
                            <li className="aboutUs-list-item">
                                <h4>Ликвидация брокеров мошенников</h4>
                                <div className="shortBorder"></div>
                                <div className="item-descr">
                                    Эта задача одновременно решает вопрос с защитой прав потребителей и добросовестных брокеров, из-за которых уровень доверия к ним снижается.
                                </div>
                            </li>
                            <li className="aboutUs-list-item">
                                <h4>Помощь с возвратом денежных средств, украденных брокерами мошенниками</h4>
                                <div className="shortBorder"></div>
                                <div className="item-descr">
                                    Юристы и причастные сотрудники с соответствующих регулирующих органов помогают оперативно вернуть украденные у клиентов деньги.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
