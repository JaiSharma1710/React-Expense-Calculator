import "./ExpenseTracker.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseTracker(props) {
  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">Rs.{props.price}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseTracker;
