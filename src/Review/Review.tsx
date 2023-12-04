import "./Review.scss";
import {Header} from "components/Header/header";
import Slider from "react-slick";
import tanyaImg from "../images/review/tanya.png";
import iraImg from "../images/review/ira.png";
import arkashaImg from "../images/review/arkasha.png";
import katyaImg from "../images/review/katrysia.png";
import leshaImg from "../images/review/lesha.png";
import yevhenImg from "../images/review/yevhen.png";

import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const Review = () => {
    const users = [
        {
            name: "ТАТЬЯНА",
            photo: tanyaImg,
            text: "Единственный раз решила прибегнуть к услугам брокера и тут же попала на мошенника. Благодарна специалистам организации FRA за то что помогли вернуть деньги в течение трех недель и проконсультировали как проверить брокера в следующий раз."
        },
        {
            name: "ИРИНА",
            photo: iraImg,
            text: "Рекомендую специалистов подразделения FRA, которым  я благодарна за помощь в разбирательствах с брокером Cryptotexp.live. Не верила уже, что смогу получить свои деньги обратно, но специалисты FRA мне помогли это сделать."
        },
        {
            name: "АРКАДИЙ",
            photo: arkashaImg,
            text: "Всегда нужно хранить документы, подтверждающие мои операции. В этот раз я мало того что повелся на брокера-мошенника, так еще и растерял ряд важных документов. Несмотря на это мне удалось вернуть часть своих денег, за что я очень благодарен специалистам организации FRA."
        },
        {
            name: "ЕВГЕНИЙ",
            photo: yevhenImg,
            text: "Не верил , что смогу вернуть свои деньги, но друг посоветовал обратиться к этой организации и я рад, что так и сделал. Мне вернули деньги в течение трех недель. Рекомендую!"
        },
        {
            name: "КАРИНА",
            photo: katyaImg,
            text: "Крипотоброкер Armax Trade слил все мои деньги и перестал отвечать на мои звонки. Я очень благодарна команде FRA за довольно скорое решение моего запроса. Чуть больше чем через три недели мне возместили весь ущерб в полном объеме."
        },
        {
            name: "АЛЕКСЕЙ",
            photo: leshaImg,
            text: "Рад что не опустил руки и наткнулся на баннер в интернете, пройдя по которому  заполнил заявку и со мной оперативно связались для консультации по моему вопросу. Уже через месяц я получил свои деньги обратно."
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <main className="review">
            {/* <Header/> */}
            <div className="review__picture">
                <div className="global-container">
                    <div className="review__picture-info">
                        <div className="title">
                            ЧТО О НАС <br/> ГОВОРЯТ КЛИЕНТЫ
                        </div>
                        <div className="divider"></div>
                        <div className="subtitle">
                            Мы ценим все отзывы наших клиентов и благодарны им за обратную связь! Фидбек клиентов
                            помогает нам улучшать качество предоставляемых услуг и предлагать именно то, что необходимо
                            для закрытия релевантных запросов!
                        </div>
                    </div>
                </div>
            </div>
            <Slider {...settings}>
                    {users.map(one =>
                        <div className="review__user" >
                            <div className="review__user-title">
                                <img src={one.photo} alt="one.photo"/>
                                <div>{one.name}</div>
                            </div>
                            <div className="review__user-text">{one.text}</div>
                        </div>
                    )}
            </Slider>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
