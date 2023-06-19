import './todo-home.styles.scss';

import React, { FC } from 'react';

import GlobalButton from '../../components/global-button/global-button.component';
import Todo from '../../components/todo/todo.component';

const ToDoHome: FC = () => {
  return (
    <div className='todo-home-container'>
      <div className='todo-home-back-button'>
        <GlobalButton label='<- Back' route='/' />
      </div>
      <header className='todo-home-header'>
        <h1 className='header-text header-text-react'>React</h1>
        <h1 className='header-text header-text-todo'>To Do</h1>
      </header>
      <div className='todo-home-content'>
        <Todo />
      </div>
    </div>
  );
};

export default ToDoHome;
