import css from "./Modal.module.css";

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p>{message}</p>
        <div className={css.actions}>
          <button onClick={onCancel}>취소</button>
          <button className={css.delete} onClick={onConfirm}>
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
