import css from "./TransactionInput.module.css";

const TransactionFrom = () => {
  return (
    <div className={css.container}>
      <h2>새로운 거래 추가</h2>
      <label htmlFor="title">내용 </label>
      <input id="title" type="text" placeholder="내용 입력..." />

      <div>
        <input type="radio" name="myRadio" value="income" defaultChecked />
        <label>수입</label>
        <input type="radio" name="myRadio" value="expense" />
        <label>지출</label>
      </div>
      <input type="number" placeholder="금액 입력..." />

      <button>거래 추가</button>
    </div>
  );
};

export default TransactionFrom;
