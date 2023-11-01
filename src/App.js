import React from 'react';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NoName from './NoName';
import Expenses from './components/Expenses/Expenses';
import Hello from './Hello';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
  ];

  //ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (NewExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log(NewExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
