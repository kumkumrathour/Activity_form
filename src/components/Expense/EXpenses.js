import ExpensesItem from "./ExpensesItem";
import './Expenses.css';
const Expenses = (props)=>{
    return (
    <div className="expenses">
        <ExpensesItem
         title={props.items[0].title}
         amount={props.items[0].amount}
         />
      <ExpensesItem
       title={props.items[1].title} 
      amount={props.items[1].amount}
      />
      <ExpensesItem
      title={props.items[2].title} 
      amount={props.items[2].amount}
      />
    </div>
    )
}
export default Expenses;