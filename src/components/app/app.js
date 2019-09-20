import React from 'react';
import './app.css';
import Header from '../header/header';
import Order from './../orders-block/orders';
import Message from './../message-block/message';
import UserProjectList from './../user-project-list/user-project-list';
import TodoList from './../todo-list/todo-list';
import TransactionBlockContainer from '../transaction-block/transaction';

const App = () => {
  return (
    <div className="app"> 
      <Header className='header' />
      <Order className='order-block' />
      <div className='areas'>
        <Message className='message-area' />
        <UserProjectList className='user-project-area' />
        <TodoList className='todo-list'/>
        <TransactionBlockContainer className='trans-block' />
      </div>
    </div>
  );
}

export default App;
