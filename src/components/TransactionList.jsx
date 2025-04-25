import TransactionItem from "./TransactionItem";
import css from "./TransactionList.module.css";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div className={css.container}>
      <h2>내역</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            data={transaction}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
