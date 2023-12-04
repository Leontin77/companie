import "./form.scss";
import {MainButton} from "components/MainButton/mainButton";
import "react-phone-number-input/style.css";
import {useForm, Controller} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input";
import {isValidPhoneNumber} from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


declare global {
    interface Window {
        fbq?: (eventType: string, eventName: string) => void;
    }
}

const validationSchema = yup.object().shape({
    name: yup.string().required("Имя и Фамилия обязательны"),
    sum: yup.number().required("Укажите сумум утеряных средств"),
    email: yup
        .string()
        .email("Введите действительный адрес электронной почты")
        .required("Email обязателен"),
    phone: yup
        .string()
        .test(
            "is-valid-phone",
            "Введите действительный номер телефона",
            (value) => {
                if (value) {
                    return isValidPhoneNumber(value);
                }
                return true;
            }
        )
        .required("Номер телефона обязателен"),
});

interface FormData {
    name: string;
    email: string;
    phone: string;
    sum: number;
}

export const Form = () => {
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: yupResolver(validationSchema) as any,
    });

    const navigate = useNavigate();

    let IPData: any = JSON.parse(localStorage?.getItem("IPData"));

    const onSubmit = (data: FormData) => {
        const message =
            `Новая заявка со страницы: ${window.location.href}\n\n` +
            "Данные формы: \n" +
            "IP: " +
            IPData?.usersIP +
            " " +
            IPData?.usersCountry +
            " " +
            IPData?.usersCity +
            "\n" +
            `Имя Фамилия: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Телефон: ${data.phone}\n` +
            `Сумма утраченных средств: ${data.sum}\n`;

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", message);
        if (localStorage?.getItem("Id")) {
            window.fbq("init", localStorage?.getItem("Id"));
            window.fbq("track", "Lead");
        }

        //         axios.post("https://api.telegram.org/bot6312131562:AAErXlBgmHzS8fZVrhG6bq_U4_eA3a59VZc/sendMessage", {
        //   chat_id: "-1001647056777",
        //   text: message
        // })
        //   .then((response: any) => {
        //     if (localStorage.getItem('Id')) {
        //             window.fbq('init', localStorage?.getItem('Id'));
        //             window.fbq('track', 'Lead');
        //       console.log('2222222222');
        //     } else {
        //       console.log('33333333333');
        //     }
        //   })
        //   .catch((error: any) => console.error(error));
        navigate('/thankyou')
    };

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-wrapper">
                <Controller
                    name="name"
                    control={control}
                    render={({field}) => (
                        <input
                            className="form-input"
                            placeholder="Имя и фамилия"
                            type="text"
                            id="name"
                            {...field}
                        />
                    )}
                />
                {errors.name && (
                    <p className="form-input-error">{errors.name.message}</p>
                )}
            </div>
            <div className="input-wrapper">
                <Controller
                    name="phone"
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <PhoneInput
                            defaultCountry={IPData?.countryCode || "PL"}
                            placeholder="Enter phone number"
                            value={IPData?.phoneCode}
                            onChange={onChange}
                            className="form-input"
                        />
                    )}
                />
                {errors.phone && (
                    <p className="form-input-error">{errors.phone.message}</p>
                )}
            </div>
            <div className="input-wrapper">
                <Controller
                    name="email"
                    control={control}
                    render={({field}) => (
                        <input
                            placeholder="Email"
                            className="form-input"
                            type="text"
                            id="email"
                            {...field}
                        />
                    )}
                />
                {errors.email && (
                    <p className="form-input-error">{errors.email.message}</p>
                )}
            </div>
            <div className="input-wrapper">
                <Controller
                    name="sum"
                    control={control}
                    render={({field}) => (
                        <input
                            placeholder="Сумма потерянных средств"
                            className="form-input"
                            type="number"
                            id="sum"
                            {...field}
                        />
                    )}
                />
                {errors.sum && <p className="form-input-error">{errors.sum.message}</p>}
            </div>
            <MainButton
                text="Получить консультацию"
                // width="389px"
                background="#701b45"
            />
        </form>
    );
};
