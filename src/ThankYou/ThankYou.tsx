import "./ThankYou.scss";
import {Header} from "components/Header/header";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const ThankYou = () => {
        return (
        <main className="thank-you">
            <Header/>
            <div className="thank-you__picture">
                <div className="global-container">
                    <div className="thank-you__picture-info">
                        <div className="title">
                            БЛАГОДАРИМ ЗА ВАШУ ЗАЯВКУ!
                        </div>
                        <div className="divider"></div>
                        <div className="thank-you-item">
                            Наш консультант свяжется с вами для персональной бесплатной консультации в ближайшее время!
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
};
