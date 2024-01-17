import "./form.scss";
import { MainButton } from "components/MainButton/mainButton";
import "react-phone-number-input/style.css";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any,
  });

  const navigate = useNavigate();
  const pixID = localStorage?.getItem("pixID") || null;

  let IPData: any = JSON.parse(localStorage?.getItem("IPData"));

  const onSubmit = (data: FormData) => {
    // window.fbq(`track`, "Lead");
    const url = window.location.search;
    const params = new URLSearchParams(url.split("?")[1]);

    // Now, you can get each parameter using the `get` method
    const ag = params.get("ag");
    const pid = params.get("pid");
    const kr = params.get("kr");
    const ad = params.get("ad");
    const fbclid = params.get("fbclid");

    // Log the values to console or use them as needed
    console.log({ ag, pid, kr, ad, fbclid });

    // If you want to store them in an object:
    const utmParams = {
      ag: params.get("ag"),
      pid: params.get("pid"),
      kr: params.get("kr"),
      ad: params.get("ad"),
      fbclid: params.get("fbclid"),
    };

    console.log(utmParams);

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
    // axios.get(
    //   `https://arbidragons.bitrix24.de/rest/15/phixobf45i2so9k9/crm.lead.add.json?FIELDS[NAME]=${data.name}&FIELDS[EMAIL][0][VALUE]=${data.email}&FIELDS[PHONE][0][VALUE]=${data.phone}&FIELDS[SOURCE_ID]=CALL&FIELDS[SECOND_NAME]=${data.sum}&FIELDS[UTM_CAMPAIGN]=${utmParams.ad}&FIELDS[UTM_CONTENT]=${utmParams.kr}&FIELDS[UTM_MEDIUM]=${utmParams.pid}&FIELDS[UTM_SOURCE]=${utmParams.ag}&FIELDS[UTM_TERM]=${utmParams.fbclid}&FIELDS[ADDRESS]=${IPData?.usersCountry}, ${IPData?.usersCity}`
    // );
    // axios
    //   .post(
    //     "https://api.telegram.org/bot6838927302:AAFQekM_kdasi7J56AA3D6KMB8sVaZS7TZs/sendMessage",
    //     {
    //       chat_id: "-1002068894098",
    //       text: message,
    //     }
    //   )
    //   .then((response: any) => {
    //     if (pixID) {
          navigate(`/thankyou`);
    //       // window.location.href = `${window.location.origin}/thankyou?pid=${pixID}&rel`;
    //     } else {
    //       navigate("/thankyou");
    //     }
    //   })
    //   .catch((error: any) => console.error(error));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
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
          render={({ field: { onChange, value } }) => (
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
          render={({ field }) => (
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
          render={({ field }) => (
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
