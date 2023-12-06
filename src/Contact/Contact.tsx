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
                                <span> 8:00 – 17:00, Пн – Пт</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={msgImg} alt="contactImg"/>
                            <div>
                                <b>Связаться с нами:</b>
                                <span> support@fra.eu.com</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={phoneImg} alt="contactImg"/>
                            <div>
                                <b>Позвоните нам:</b>
                                <span>  +447487361843</span>
                            </div>
                        </div>
                        <div className="contacts-item">
                            <img src={locationImg} alt="contactImg"/>
                            <div>
                                <span>20 Cabot Square, London, United Kingdom</span>
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
