import { formmatCurrency } from "../utils/features";
import css from "./BalanceInfo.module.css";

const BalanceInfo = () => {
  return (
    <div className={css.container}>
      <h2>잔액</h2> <span>{formmatCurrency(200000)}</span>
    </div>
  );
};

export default BalanceInfo;
