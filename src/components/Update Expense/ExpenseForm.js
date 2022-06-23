import React from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  let [title, updatedTitle] = React.useState("");
  let [amount, updateAmount] = React.useState("");
  let [date, updateDate] = React.useState("");
  let [updateForm, setUpdateForm] = React.useState(0);

  const openForm = () => {
    setUpdateForm(1);
  };

  const closeFrom = () => {
    setUpdateForm(0);
  };

  const titleHandeler = (event) => {
    updatedTitle(event.target.value);
  };

  const amountHandeler = (event) => {
    updateAmount(event.target.value);
  };

  const dateHandeler = (event) => {
    updateDate(event.target.value);
  };

  const formHandeler = (event) => {
    setUpdateForm(0);
    event.preventDefault();
    const updateValues = {
      id: Math.random(),
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.ExpenseData(updateValues);
    updatedTitle("");
    updateAmount("");
    updateDate("");
  };

  if (updateForm === 0) {
    return (
      <div>
        <button onClick={openForm} className="new-expense__actions">
          Add New Expense
        </button>
      </div>
    );
  } else if (updateForm === 1) {
    return (
      <form onSubmit={formHandeler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={title} onChange={titleHandeler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={amountHandeler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={date}
              onChange={dateHandeler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={closeFrom}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
