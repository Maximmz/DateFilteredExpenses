import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  const [newExp, setnewExp] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
      };
      props.onAddExpense(expenseData);
      setnewExp(false);
    };
    function clickHandler() {
      setnewExp(true);
    };
    function cancelAdding() {
      setnewExp(false);
    };
  
    return (
      <div className='new-expense'>
        {!newExp && <button onClick={clickHandler}>Add new expense</button> }
        {newExp && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelAdding} />}
      </div>
    );
  };
  
  export default NewExpense;