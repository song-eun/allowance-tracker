import { useState } from "react";
import { formmatCurrency } from "../utils/features";
import css from "./TransactionItem.module.css";
import Modal from "./Modal";

const TransactionItem = ({ data, onDelete }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    onDelete(data.id);
    setIsModalOpen(false);
  };

  const cancelDelete = () => {
    setIsModalOpen(false);
  };

  return (
    <li className={css.item}>
      <div className={css.content}>
        <span>{data.description}</span>
        <span className={data.type === "income" ? css.income : css.expense}>
          {formmatCurrency(data.amount)}
        </span>
      </div>

      <div className={css.actions}>
        {/* <button>
          <i className="bi bi-pencil-fill"></i>
        </button> */}
        <button onClick={handleDelete}>
          <i className="bi bi-x"></i>
        </button>
      </div>
      {isModalOpen && (
        <Modal
          message={"정말 삭제하시겠습니까?"}
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </li>
  );
};

export default TransactionItem;
