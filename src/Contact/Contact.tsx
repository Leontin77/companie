import "./Contact.scss";
import {Header} from "components/Header/header";


import contactImg from "../images/contact.png";
import {LeaveRequest} from "components/LeaveRequest/LeaveRequest";
import {Footer} from "components/Footer/Footer";

export interface ILandingProps {
}

export const Contact = () => {
        return (
        <main className="contacts">
            {/*<Header/>*/}
            <div className="contacts__picture">
                <img src={contactImg} alt="contactImg"/>
            </div>
            <LeaveRequest/>
            <Footer/>
        </main>
    );
};
