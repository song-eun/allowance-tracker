import TransactionItem from "./TransactionItem";
import css from "./TransactionList.module.css";

const TransactionList = ({ transactions }) => {
  return (
    <div className={css.container}>
      <h2>내역</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} data={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
