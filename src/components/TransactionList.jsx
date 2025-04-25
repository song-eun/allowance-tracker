import TransactionItem from "./TransactionItem";
import css from "./TransactionList.module.css";

const transactions = [
  {
    id: 1,
    description: "용돈",
    amount: 300000,
    type: "income", // "income" 또는 "expense"
    date: "2025-04-25",
  },
  {
    id: 2,
    description: "영화 관람",
    amount: 11000,
    type: "expense",
    date: "2025-04-25",
  },
];

const TransactionList = () => {
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
