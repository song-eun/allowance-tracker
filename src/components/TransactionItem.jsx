import { formmatCurrency } from "../utils/features";
import css from "./TransactionItem.module.css";

const TransactionItem = ({ data, onDelete }) => {
  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <li className={css.item}>
      <div className={css.content}>
        <span>{data.description}</span>
        <span className={data.type === "income" ? css.income : css.expense}>
          {formmatCurrency(data.amount)}
        </span>
      </div>

      <div className={css.actions}>
        {/* <button>
          <i className="bi bi-pencil-fill"></i>
        </button> */}
        <button onClick={handleDelete}>
          <i className="bi bi-x"></i>
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
