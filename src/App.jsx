import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import BalanceInfo from "./components/BalanceInfo";
import IncomeExpenseInfo from "./components/IncomeExpenseInfo";
import TransactionInput from "./components/TransactionInput";
import TransactionList from "./components/TransactionList";

import { useTransactions } from "./hooks/useTransactions";

function App() {
  const { transactions, setTransactions, incomeTotal, expenseTotal } =
    useTransactions();

  const handleAddItem = (newItem) => {
    setTransactions((prev) => [...prev, newItem]);
  };

  const handleDeleteItem = (id) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <main className="wrapper">
      <h1>용돈기입장</h1>
      <BalanceInfo balance={incomeTotal - expenseTotal} />
      <IncomeExpenseInfo income={incomeTotal} expense={expenseTotal} />
      <TransactionInput onAdd={handleAddItem} />
      <TransactionList
        transactions={transactions}
        onDelete={handleDeleteItem}
      />
    </main>
  );
}

export default App;
