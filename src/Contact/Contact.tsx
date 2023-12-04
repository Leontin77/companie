import "./Contact.scss";
import {Header} from "components/Header/header";


import timeImg from "../images/contacts/time.png";
import msgImg from "../images/contacts/msg.png";
import phoneImg from "../images/contacts/phone.png";
import locationImg from "../images/contacts/location.png";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const Contact = () => {
        return (
        <main className="contacts">
            {/* <Header/> */}
            <div className="contacts__picture">
                <div className="global-container">
                    <div className="contacts__picture-info">
                        <div className="title">
                            КОНТАКТЫ
                        </div>
                        <div className="divider"></div>
                        <div className="contacts-item">
                            <img src={timeImg} alt="contactImg"/>
                            <div>
                                <b>Рабочее время:</b>
                                <span> 9:00 – 17:00, Пн – Пт</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={msgImg} alt="contactImg"/>
                            <div>
                                <b>Связаться с нами:</b>
                                <span> support@back-legal.com</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={phoneImg} alt="contactImg"/>
                            <div>
                                <b>Позвоните нам:</b>
                                <span>  +4915779119790</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={locationImg} alt="contactImg"/>
                            <div>
                                <span>Potsdamer Str. 2, 10785 Berlin, Deutschland</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
