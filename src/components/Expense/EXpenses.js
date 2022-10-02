import ExpensesItem from "./ExpensesItem";
import './Expenses.css';
const Expenses = (props)=>{
    return (
    <div className="expenses">
        {props.items.map((expense)=>(
            <ExpensesItem 
            key={expense.id}
               title={expense.title}
               amount={expense.amount}
               />
        ))}
    </div>
    )
}
export default Expenses;