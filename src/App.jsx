import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import BalanceInfo from "./components/BalanceInfo";
import IncomeExpenseInfo from "./components/IncomeExpenseInfo";
import TransactionInput from "./components/TransactionInput";
import TransactionList from "./components/TransactionList";
import { useEffect, useState } from "react";

function App() {
  const stored = localStorage.getItem("transactions");
  const initList = stored ? JSON.parse(stored) : [];
  const [transactions, setTransactions] = useState(initList);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (newItem) => {
    setTransactions((prev) => [...prev, newItem]);
  };

  const incomeTotal = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expenseTotal = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  const balance = incomeTotal - expenseTotal;

  return (
    <main className="wrapper">
      <h1>용돈기입장</h1>
      <BalanceInfo balance={balance} />
      <IncomeExpenseInfo income={incomeTotal} expense={expenseTotal} />
      <TransactionInput onAdd={handleAddTransaction} />
      <TransactionList transactions={transactions} />
    </main>
  );
}

export default App;
