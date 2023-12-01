import "./form.scss";
import { MainButton } from "components/MainButton/mainButton";
export const Form = () => {
  return (
    <form className="form">
      <input className="form-input" type="text" placeholder="Имя и фамилия" />
      <input className="form-input" type="number" placeholder="Контактный номер"/>
      <input className="form-input" type="text" placeholder="Email" />
      <input className="form-input" type="number" placeholder="Сумма потерянных средств" />
      <MainButton
        text="Получить консультацию"
        width="389px"
        background="#701b45"
      />
    </form>
  );
};
