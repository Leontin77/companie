import "./Review.scss";
import {Header} from "components/Header/header";


import {data} from "BlackList/blackData";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const Review = () => {
    return (
        <main className="review">
            <Header/>
            <div className="review__picture">
                <div className="global-container">
                    <div className="review__picture-info">
                        <div className="title">
                            ЧТО О НАС <br/> ГОВОРЯТ КЛИЕНТЫ
                        </div>
                        <div className="divider"></div>
                        <div className="subtitle">
                            Мы ценим все отзывы наших клиентов и благодарны им за обратную связь! Фидбек клиентов помогает нам улучшать качество предоставляемых услуг и предлагать именно то, что необходимо для закрытия релевантных запросов!
                        </div>
                    </div>
                </div>
            </div>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
