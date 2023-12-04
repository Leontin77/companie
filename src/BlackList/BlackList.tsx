import "./BlackList.scss";
import {Header} from "components/Header/header";


import headerPageImg from "../images/blackList/headerPage.png";
import {data} from "BlackList/blackData";
import AboutUsIcon2 from "../images/aboutUs2.png";
import AboutUsIcon3 from "../images/aboutUs3.png";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const BlackList = () => {
    console.log("data", data)
    return (
        <main className="black-list">
            {/* <Header/> */}
            <div className="black-list__picture">
                <div className="global-container">
                    <div className="black-list__picture-info">
                        <div className="title">
                            ЧЕРНЫЙ СПИСОК
                        </div>
                        <div className="divider"></div>
                        <div className="subtitle">
                            За опыт работы нашей организации у нас сформировалась наработанная база брокеров-мошенников. Она
                            постоянно обновляется, так как мошенники быстро закрывают старые компании по которым их вычислили и
                            открывают новые. Все эти данные наша организация передает в FCA для формирования полного списка,
                            которым в конечном итоге мы также пользуемся.
                        </div>
                    </div>
                </div>
            </div>
            <div className="black-list__table global-container">
                <div className="black-list__table-title">
                    Ниже мы привели таблицу известных брокеров-мошенников. Если вы нашли в списке брокера от которого
                    пострадали, свяжитесь с нами и наши специалисты помогут решить проблему и вернуть ваши деньги.
                </div>
                <div className="black-list__table-header"></div>
                <ul className="black-list__table-body">
                    <li>
                        <div>БРОКЕР</div>
                        <div>КОНТАКТНОЕ ЛИЦО</div>
                        <div>СТАТУС</div>
                    </li>
                    {data && data.map((one: any) => one &&
                        <li>
                            <div>{one[0]}</div>
                            <div>
                                {one[1].map((el: any) => <p>{el}</p>)}
                            </div>
                            <div>{one[2]}</div>
                        </li>
                    )}
                </ul>
            </div>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
