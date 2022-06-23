import React from "react";
import "./ExpenseList.css";
import ExpenseTracker from "./ExpenseTracker";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expense!!!</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => {
        return (
          <ExpenseTracker
            key={element.id}
            title={element.title}
            price={element.amount}
            date={element.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
