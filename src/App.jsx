import "./App.css";

import "bootstrap-icons/font/bootstrap-icons.css";

import BalanceInfo from "./components/BalanceInfo";
import IncomeExpenseInfo from "./components/IncomeExpenseInfo";
import TransactionInput from "./components/TransactionInput";
import TransactionList from "./components/TransactionList";

function App() {
  return (
    <main className="wrapper">
      <h1>용돈기입장</h1>
      <BalanceInfo />
      <IncomeExpenseInfo />
      <TransactionInput />
      <TransactionList />
    </main>
  );
}

export default App;
