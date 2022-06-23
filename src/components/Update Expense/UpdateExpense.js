import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./UpdateExpense.css";

function UpdateExpense(props) {
  const onExpenseChange = (expenseData) => {
    props.updatedExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm ExpenseData={onExpenseChange} />
    </div>
  );
}

export default UpdateExpense;
