import Expenses from './components/Expense/EXpenses';
import './App.css';

function App() {
  const expenses = [
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
  return (
    <div className="App">
      <Expenses items ={expenses}/>
    </div>
  );
}

export default App;
