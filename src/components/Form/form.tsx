import "./form.scss";
import { MainButton } from "components/MainButton/mainButton";

interface FormProps {
  border? : string;
}
export const Form:  React.FC<FormProps> = ({border}) => {
  const borderStyle = {
    border: border
  };
  return (
    <form className="form" style={borderStyle}>
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
