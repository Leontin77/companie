import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import "./rating.scss";
import axios from "axios";

const validationSchema = yup.object().shape({
  name: yup.string().required("Имя и Фамилия обязательны"),
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
  // sum: number;
}

export const Raiting = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [openDropDownMenu, setOpenDropDownMenu] = useState(false);
  const [selectedCheckbox1, setSelectedCheckbox1] = useState<any>();
  const [selectedCheckbox2, setSelectedCheckbox2] = useState<any>();
  const [selectedCheckbox3, setSelectedCheckbox3] = useState<any>();

  const [type, setType] = useState("");
  const [duration, setDuration] = useState("");
  const [amount, setAmount] = useState("");
  const [brokerName, setBrokerName] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [lossAmount, setLossAmount] = useState("");
  const [probability, setProbability] = useState(94);

  const [lossAmountError, setLossAmountError] = useState('');

  const [amountNumber, setAmountNumber] = useState(0);
  const [duretionNumber, setDurationNumber] = useState(0);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema) as any
  });

  const checkboxOptions = [
    { id: "brokerFraud", label: "Обманул брокер-мошенник" },
    { id: "financialPyramid", label: "Попал(а) на финансовую пирамиду" },
    { id: "fakeOrg", label: "Обман со стороны фиктивной организации" },
    { id: "cryptoFraud", label: "Мошенничество с криптовалютами" },
    {
      id: "bankFraud",
      label: "Обман в банке и/или кража денег с банковской карты",
    },
    { id: "pyramidScheme", label: "Риэлторская компания - мошенник" },
    { id: "other", label: "Другое" },
  ];

  const checkboxOptionsStep2 = [
    { id: "duration1", label: "от 1 дня до 3 месяцев", value: 50 },
    { id: "duration2", label: "от 3 месяцев до 6 месяцев", value: 120 },
    { id: "duration3", label: "от 6 месяцев до 1 года", value: 280 },
    { id: "duration4", label: "от 1 года до 2 лет", value: 120 },
    { id: "duration5", label: "от 2 лет до 3 лет", value: 550 },
    { id: "duration6", label: "более 3 лет", value: 1300 },
  ];

  const checkboxOptionsStep3 = [
    { id: "money1", label: "до 1000", value: 1000 },
    { id: "money2", label: "от 1000 до 5000", value: 5000 },
    { id: "money3", label: "от 5000 до 10000", value: 10000 },
    { id: "money1", label: "свыше 10000", value: 100000 },
  ];

  // const handleSubmit = () => {
  //   const submissionData = {
  //     fraudType: type,
  //     fraudDuration: duration,
  //     fraudAmount: amount,
  //     brokerName: brokerName,
  //     fullName: fullName,
  //     contactNumber: contactNumber,
  //     email: email,
  //     lossAmount: lossAmount,
  //   };
  //   console.log("submissionData", submissionData);
  //   setType("");
  //   setDuration(0);
  //   setAmount("");
  //   setBrokerName("");
  //   setFullName("");
  //   setContactNumber("");
  //   setEmail("");
  //   setLossAmount(0);
  //   setSelectedCheckbox1(null);
  //   setSelectedCheckbox2(null);
  //   setSelectedCheckbox3(null);
  // };
  let IPData: any = JSON.parse(localStorage?.getItem("IPData"));

  const onSubmit = (data: FormData) => {
    if (!lossAmount) {
      setLossAmountError('Укажите сумму утраченных средств');
      return
    }
    const submissionData = {
      fraudType: type,
      fraudDuration: duration,
      fraudAmount: amount,
      brokerName: brokerName,
      fullName: data.name,
      contactNumber: data.phone,
      email: data.email,
      lossAmount: lossAmount,
    };
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
      `Тип мошенничества: ${submissionData.fraudType}\n` +
      `Когда случилось: ${submissionData.fraudDuration}\n` +
      `Назва Брокера: ${submissionData.brokerName}\n` +
      `Телефон: ${submissionData.contactNumber}\n` +
      `Сумма утраченных средств: ${submissionData.fraudAmount}\n` +
      `Имя Фамилия: ${submissionData.fullName}\n` +
      `Email: ${submissionData.email}\n`;
    // `Телефон: ${data.phone}\n` +

    if (localStorage?.getItem("Id")) {
      window.fbq("init", localStorage?.getItem("Id"));
      window.fbq("track", "Lead");
    }
    axios
    .get(`https://arbidragons.bitrix24.de/rest/15/phixobf45i2so9k9/crm.lead.add.json?FIELDS[NAME]=${submissionData.fullName}&FIELDS[EMAIL][0][VALUE]=${submissionData.email}&FIELDS[PHONE][0][VALUE]=${submissionData.contactNumber}&FIELDS[SOURCE_ID]=CALL&FIELDS[SECOND_NAME]=${submissionData.fraudAmount}&FIELDS[ADDRESS]=${IPData?.usersCountry}, ${IPData?.usersCity}`);

    axios
      .post(
        "https://api.telegram.org/bot6838927302:AAFQekM_kdasi7J56AA3D6KMB8sVaZS7TZs/sendMessage",
        {
          chat_id: "-1002068894098",
          text: message,
        }
      )
      .then((response: any) => {
        if (localStorage.getItem("Id")) {
          window.fbq("init", localStorage?.getItem("Id"));
          window.fbq("track", "Lead");
          navigate("/thankyou");
        } else {
          navigate("/thankyou");
        }
      })
      .catch((error: any) => console.error(error));
  };

  useEffect(() => {
    setProbability(calculateProbability(amountNumber, duretionNumber));
  }, []);

  const calculateProbability = (
    amountLost: number,
    daysSinceTransfer: number
  ): number => {
    const minProbability = 87;
    const maxProbability = 96;
    const maxDays = 1825;
    const maxAmount = 100000;
    const daysFactor = (maxDays - daysSinceTransfer) / maxDays;
    const amountFactor = amountLost / maxAmount;
    const weightedProbability = (daysFactor + amountFactor) / 2;

    const probabilityRange = maxProbability - minProbability;
    const probability = minProbability + probabilityRange * weightedProbability;

    return Math.min(Math.max(probability, minProbability), maxProbability);
  };

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckboxChange = (id: any) => {
    if (step === 1) {
      setSelectedCheckbox1(id);
    }
    if (step === 2) {
      setSelectedCheckbox2(id);
    }
    if (step === 3) {
      setSelectedCheckbox3(id);
    }
  };

  const nextStep = () => {
    switch (step) {
      case 1:
        type === "" ? setStep(step) : setStep(step + 1);
        break;
      case 2:
        duration === "" ? setStep(step) : setStep(step + 1);
        break;
      case 3:
        amount === "" ? setStep(step) : setStep(step + 1);
        break;
      case 4:
        brokerName === "" ? setStep(step) : setStep(step + 1);
        break;
      case 5:
        setStep(step + 1);
        break;
      // case 6: fullName && email && contactNumber ? onSubmit() : setStep(step);
      // break;
    }
  };

  return (
    <section className="chooseType">
      <div className="container">
        <div className="chooseType-content">
          <div className="chooseType-header">
            Получить оценку моего дела всего за пару минут
          </div>
          <div className="chooseType-checkboxes">
            {step === 1 && (
              <h5>Выберите вид мошенничества, с которым вы столкнулись</h5>
            )}
            {step === 2 && (
              <h5>Как много времени прошло с момента кражи ваших денег?</h5>
            )}
            {step === 3 && <h5>Какую сумму денег у вас украли? ($)</h5>}
            {step === 4 && (
              <h5>
                Укажите название брокера/ организации укравшей ваши деньги?
              </h5>
            )}
            {step === 5 && (
              <h5>
                Ваш случай имеет все шансы на успешный исход, оставьте заявку на
                бесплатную консультацию и наши специалисты предложат вам все
                доступные варианты  возврата ваших денег.
              </h5>
            )}
            {step === 6 && <h5>Хочу получить полный анализ моей ситуации!</h5>}
            <form onSubmit={handleSubmit(onSubmit)}>

            {step === 1 && (
              <fieldset>
                {checkboxOptions.map((option, index) => (
                  <div
                    key={option.id}
                    className="checkbox-group"
                    onClick={() => {
                      setType(option.label);
                      handleCheckboxChange(`option${index}`);
                    }}
                  >
                    <div
                      className={
                        selectedCheckbox1 === `option${index}`
                          ? "choosenOption"
                          : "notCheckedOption"
                      }
                    >
                      <input
                        type="checkbox"
                        id={`option${index}`}
                        checked={selectedCheckbox1 === `option${index}`}
                        name="fraudType"
                        onClick={() => setType(option.label)}
                        onChange={() => handleCheckboxChange(`option${index}`)}
                        className={
                          selectedCheckbox1 === `option${index}`
                            ? "choosenOptionInput"
                            : ""
                        }
                      />
                    </div>
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </fieldset>
            )}
            {step === 2 && (
              <fieldset>
                {checkboxOptionsStep2.map((option, index) => (
                  <div
                    key={option.id}
                    className="checkbox-group"
                    onClick={() => {
                      setDuration(option.label);
                      handleCheckboxChange(`option${index}`);
                    }}
                  >
                    <div
                      className={
                        selectedCheckbox2 === `option${index}`
                          ? "choosenOption"
                          : "notCheckedOption"
                      }
                    >
                      <input
                        type="checkbox"
                        id={`option${index}`}
                        checked={selectedCheckbox2 === `option${index}`}
                        name="fraudDuration"
                        onClick={() => {
                          setDuration(option.label);
                          setAmountNumber(option.value);
                        }}
                        onChange={() => handleCheckboxChange(`option${index}`)}
                        className={
                          selectedCheckbox2 === `option${index}`
                            ? "choosenOptionInput"
                            : ""
                        }
                      />
                    </div>
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </fieldset>
            )}
            {step === 3 && (
              <fieldset>
                {checkboxOptionsStep3.map((option, index) => (
                  <div
                    key={index}
                    className="checkbox-group"
                    onClick={() => {
                      setAmount(option.label);
                      handleCheckboxChange(`option${index}`);
                    }}
                  >
                    <div
                      className={
                        selectedCheckbox3 === `option${index}`
                          ? "choosenOption"
                          : "notCheckedOption"
                      }
                    >
                      <input
                        type="checkbox"
                        id={`option${index}`}
                        checked={selectedCheckbox3 === `option${index}`}
                        name="fraudAmount"
                        onClick={() => {
                          setAmount(option.label);
                          setAmountNumber(option.value);
                        }}
                        onChange={() => handleCheckboxChange(`option${index}`)}
                        className={
                          selectedCheckbox3 === `option${index}`
                            ? "choosenOptionInput"
                            : ""
                        }
                      />
                    </div>
                    <label htmlFor={option.id}>{option.label}</label>
                  </div>
                ))}
              </fieldset>
            )}
            {step === 4 && (
              <fieldset>
                <input
                  className="chooseType-input"
                  type="text"
                  placeholder="Ваш ответ"
                  onChange={(e) => setBrokerName(e.target.value)}
                />
              </fieldset>
            )}
            {step === 5 && (
              <h2 className="chooseType-percent">{`Вероятность возврата: > ${probability.toFixed(
                0
              )}%.`}</h2>
            )}
              {step === 6 && (
                <div className="chooseType-box">
                  <div className="inputWrapper">
                    <Controller
                      name="name"
                      control={control}
                      render={({ field }) => (
                        <input
                          className="chooseType-box-input"
                          placeholder="Имя и фамилия"
                          onChange={(e) => setFullName(e.target.value)}
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
                  {/* <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Имя и фамилия"
                    onChange={(e) => setFullName(e.target.value)}
                  /> */}
                  <div className="inputWrapper">
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field }) => (
                        <PhoneInput
                          defaultCountry={IPData?.countryCode || "PL"}
                          placeholder="Enter phone number"
                          value={IPData?.phoneCode}
                          onChange={(value) => setContactNumber(value)}
                          className="chooseType-box-input"
                          {...field}
                        />
                      )}
                    />
                    {errors.phone && (
                      <p className="form-input-error">{errors.phone.message}</p>
                    )}
                  </div>
                  {/* <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Контактный номер"
                    onChange={(e) => setContactNumber(e.target.value)}
                  /> */}
                  {/* <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  /> */}
                  <div className="inputWrapper">
                    <Controller
                      name="email"
                      control={control}
                      render={({ field }) => (
                        <input
                          placeholder="Email"
                          className="chooseType-box-input"
                          type="text"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          {...field}
                        />
                      )}
                    />
                    {errors.email && (
                      <p className="form-input-error">{errors.email.message}</p>
                    )}
                  </div>

                  <div
                    className="chooseType-box-input dropDown"
                    onClick={() => setOpenDropDownMenu(!openDropDownMenu)}
                  >
                    {!lossAmount ? (
                      <span className="dropDown-title">
                        Укажите сумму потерянных средств
                      </span>
                    ) : (
                      <span>{lossAmount}</span>
                    )}
                    {openDropDownMenu && (
                      <div className="openDropdown">
                        {checkboxOptionsStep3.map((option, index) => (
                          <div
                            className="openDropdown-label"
                            onClick={() => {
                              setLossAmount(option.label);
                              setOpenDropDownMenu(!openDropDownMenu);
                            }}
                          >
                            <span>{option.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {lossAmountError &&
                      <p className="form-input-error">{lossAmountError}</p>
                    }
                  </div>
                </div>
              )}
              <div className="chooseType-buttons">
                {screenWidth > 1024 ? (
                  <button
                    type="button"
                    className={`button withLeftArrow ${
                      step === 1 && "disabled"
                    }`}
                    disabled={step === 1 && true}
                    onClick={() => setStep(step - 1)}
                  >
                    Вернуться
                  </button>
                ) : (
                  <button
                    type="button"
                    className={`button withLeftArrow ${
                      step === 1 && "disabled"
                    }`}
                    disabled={step === 1 && true}
                    onClick={() => setStep(step - 1)}
                  ></button>
                )}
                {screenWidth > 1024 ? (
                  <button
                    type={step === 6 ? "submit" : "button"}
                    className="button withRightArrow"
                    onClick={() => {
                      // if (step !== 6) {
                      console.log('BUTTON');

                        nextStep();
                      // }
                    }}
                  >
                    {step === 6 ? (
                      <span>Получить анализ</span>
                    ) : (
                      <span>Продолжить</span>
                    )}
                  </button>
                ) : (
                  <button
                    type={'submit'}
                    className="button withRightArrow"
                    onClick={() => {
                      console.log('BUTTON');
                      // if (step !== 6) {
                        nextStep();
                      // }
                    }}
                  >
                    {step === 6 ? <span></span> : <span></span>}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
