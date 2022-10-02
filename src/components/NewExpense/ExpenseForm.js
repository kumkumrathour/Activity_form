import React , {useState} from "react";
import './ExpenseForm.css'
const ExpenseForm = (props) =>{
    const [enteredTitle , setEnteredTitle] = useState('');
    const [enteredAmount , setEnteredAmount] = useState('');
    const titleChangeHandler =(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event)=>{
        setEnteredAmount(event.target.value);
    }
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title :enteredTitle,
           amount:enteredAmount
        }
        console.log(expenseData);
          props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
    }
return (
   
    <form onSubmit = {submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label> Title </label>
                <input type= 'text' value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' value={enteredAmount} onChange = {amountChangeHandler}/>
            </div>
            <button type='submit'> Add Exepnse </button>
        </div>
    </form>
);
}
export default ExpenseForm;