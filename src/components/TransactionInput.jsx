import { useState } from "react";
import css from "./TransactionInput.module.css";

const TransactionInput = ({ onAdd }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!description.trim()) {
      setError("내용을 입력해주세요");
      return;
    }

    if (!amount || isNaN(amount) || Number(amount) <= 0) {
      setError("금액을 올바르게 입력해주세요");
      return;
    }

    const newItem = {
      id: Math.round(Math.random() * 9999),
      description,
      amount: parseInt(amount),
      type: type,
    };

    onAdd(newItem);
    setDescription("");
    setAmount("");
    setType("income");
    setError("");
  };

  return (
    <div className={css.container}>
      <h2>새로운 거래 추가</h2>
      <label htmlFor="description">내용 </label>
      <input
        className={css.inputField}
        id="description"
        type="text"
        placeholder="내용 입력..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div>
        <input
          type="radio"
          id="income"
          name="myRadio"
          value="income"
          checked={type === "income"}
          onChange={() => setType("income")}
        />
        <label htmlFor="income">수입</label>

        <input
          type="radio"
          id="expense"
          name="myRadio"
          value="expense"
          checked={type === "expense"}
          onChange={() => setType("expense")}
        />
        <label htmlFor="expense">지출</label>
      </div>

      <input
        className={css.inputField}
        type="number"
        placeholder="금액 입력..."
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      {error && <p className={css.error}>{error}</p>}
      <button onClick={handleSubmit}>거래 추가</button>
    </div>
  );
};

export default TransactionInput;
