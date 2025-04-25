import { formmatCurrency } from "../utils/features";
import css from "./BalanceInfo.module.css";

const BalanceInfo = ({ balance }) => {
  return (
    <div className={css.container}>
      <h2>잔액</h2> <span>{formmatCurrency(balance)}</span>
    </div>
  );
};

export default BalanceInfo;
