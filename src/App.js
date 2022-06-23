import Expenses from "./components/Expense/Expenses";
import UpdateExpense from "./components/Update Expense/UpdateExpense";
import React from "react";
import "./App.css";

let date = new Date().getFullYear();

const initialExpenses = [
  {
    id: "e1",
    title: "grocery",
    amount: 940,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 34000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2940,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  let [expense, setExpense] = React.useState(initialExpenses);

  const onUpdateExpense = (newExpense) => {
    setExpense((prevValue) => {
      return [newExpense, ...prevValue];
    });
  };

  return (
    <div>
      <UpdateExpense updatedExpense={onUpdateExpense} />
      <Expenses item={expense} />
      <footer className="footer">&copy;{date}, Jai Sharma</footer>
    </div>
  );
}

export default App;
