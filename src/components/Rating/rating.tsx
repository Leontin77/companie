import { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import "./rating.scss";

export const Raiting = () => {
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

  const [amountNumber, setAmountNumber] = useState(0);
  const [duretionNumber, setDurationNumber] = useState(0);

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
  const handleSubmit = () => {
    const submissionData = {
      fraudType: type,
      fraudDuration: duration,
      fraudAmount: amount,
      brokerName: brokerName,
      fullName: fullName,
      contactNumber: contactNumber,
      email: email,
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
    if (step === 6) {
      setStep(1);
    } else {
      setStep(step + 1);
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

            <form>
              {step === 1 && (
                <fieldset>
                  {checkboxOptions.map((option, index) => (
                    <div key={option.id} className="checkbox-group">
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
                          onChange={() =>
                            handleCheckboxChange(`option${index}`)
                          }
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
                    <div key={option.id} className="checkbox-group">
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
                          onChange={() =>
                            handleCheckboxChange(`option${index}`)
                          }
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
                    <div key={index} className="checkbox-group">
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
                          onChange={() =>
                            handleCheckboxChange(`option${index}`)
                          }
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
                  <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Имя и фамилия"
                    onChange={(e) => setFullName(e.target.value)}
                  />
                  <PhoneInput
                    defaultCountry={IPData?.countryCode || "PL"}
                    placeholder="Enter phone number"
                    value={IPData?.phoneCode}
                    onChange={(e) => setContactNumber(e)}
                    className="chooseType-box-input"
                  />
                  {/* <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Контактный номер"
                    onChange={(e) => setContactNumber(e.target.value)}
                  /> */}
                  <input
                    className="chooseType-box-input"
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div
                    className="chooseType-box-input dropDown"
                    onClick={() => setOpenDropDownMenu(!openDropDownMenu)}
                  >
                    {!lossAmount ? (
                      <span className="dropDown-title">Укажите сумму потерянных средств</span>
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
                    type="button"
                    className="button withRightArrow"
                    onClick={() => {
                      if (step === 6) {
                        handleSubmit();
                      }
                      nextStep();
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
                    type="button"
                    className="button withRightArrow"
                    onClick={() => {
                      if (step === 6) {
                        handleSubmit();
                      }
                      nextStep();
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
