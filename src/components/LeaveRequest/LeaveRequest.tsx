import "./LeaveRequest.scss";

import handIcon from "../../images/LeaveReq/hand.png"
import moneyIcon from "../../images/LeaveReq/money.png"
import {Form} from "components/Form/form";

export const LeaveRequest = () => {
  return (
      <div className="leave-request-wrapper">
          <div className="leave-request global-container frame35">
              <div className="leave-request__content">
                  <div className="leave-request__content-header">
                      <div className="subtitle">Оставь заявку</div>
                      <div className="title">ПОМОЖЕМ ВЕРНУТЬ ВАШИ ДЕНЬГИ, УКРАДЕННЫЕ БРОКЕРОМ МОШЕННИКОМ</div>
                  </div>
                  <div className="leave-request__content-blocks">
                      <div className="subtitle">ЕСЛИ:</div>
                      <div className="leave-request__content-blocks-row">
                          <div className="block">
                              <img src={moneyIcon} alt="handIcon"/>
                              <div className="text">Потеря от 1000$ и больше</div>
                          </div>
                          <div className="block">
                              <img src={handIcon} alt="handIcon"/>
                              <div className="text">Еще не прошло 5 лет</div>
                          </div>
                      </div>
                  </div>
                  <div className="subtitle">Внимание: не доверяйте специалистам, которые гарантируют вам 100% результат за 1-2 недели!</div>
              </div>
              <Form/>
          </div>
      </div>
  );
};
