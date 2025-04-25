import { formmatCurrency } from "../utils/features";
import css from "./IncomeExpenseInfo.module.css";

const IncomeExpenseInfo = () => {
  return (
    <div className={css.container}>
      <div className={css.income}>
        <h2>수입</h2>
        <span>{formmatCurrency(300000)}</span>
      </div>
      <div className={css.expense}>
        <h2>지출</h2> <span>{formmatCurrency(100000)}</span>
      </div>
    </div>
  );
};

export default IncomeExpenseInfo;
