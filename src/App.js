import React ,{useState} from 'react';
import Expenses from './components/Expense/EXpenses';
import NewExpense from './components/NewExpense/NewExpense';

import './App.css';
const Dummy_expenses = [
  { id:'e1' ,
   title: 'car' , 
   amount:23
},
{ id: 'e2' ,
  title: 'bike' , 
  amount: 45
},
{ id:'e3' ,
  title: 'scotter', 
  amount:67
}
];

function App() {
 const [expenses, setExpenses] = useState(Dummy_expenses)


const addExpenseHandler = expense =>{
  console.log("add to app");
  setExpenses((prevExpense) =>{
    return [expense,...prevExpense];
  })
}
  return (
    <div className="App">
      <NewExpense onAddExpense= {addExpenseHandler}  />
      <Expenses items ={expenses}/>
      
    </div>
  );
}

export default App;
