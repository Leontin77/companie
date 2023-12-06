import "./ThankYou.scss";
import {Header} from "components/Header/header";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";
import { useEffect } from "react";
import ReactPixel from 'react-facebook-pixel';

export interface ILandingProps {
}

export const ThankYou = () => {

      useEffect(() => {
        if (localStorage.getItem('Id')) {
            window.fbq('init', localStorage?.getItem('Id'));
            window.fbq('track', 'Lead');
        }
      }, []);
        return (
        <main className="thank-you">
            {/* <Header/> */}
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
