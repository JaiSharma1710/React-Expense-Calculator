import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  let [year, setYear] = React.useState("2022");

  const OnChangeYear = (selectedYear) => {
    setYear(selectedYear);
  };

  const FilteredExpense = props.item.filter((element) => {
    return element.date.getFullYear().toString() === year;
  });

  return (
    <div className="expenses">
      <ExpenseChart expenses={FilteredExpense} />
      <ExpensesFilter year={OnChangeYear} default={year} />
      <ExpenseList items={FilteredExpense} />
    </div>
  );
}

export default Expenses;
