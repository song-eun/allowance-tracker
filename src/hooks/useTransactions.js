import { useEffect, useState } from "react";

export const useTransactions = () => {
  const stored = localStorage.getItem("transactions");
  const initList = stored ? JSON.parse(stored) : [];
  const [transactions, setTransactions] = useState(initList);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const incomeTotal = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);

  const expenseTotal = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  return {
    transactions,
    setTransactions,
    incomeTotal,
    expenseTotal,
  };
};
