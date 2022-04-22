import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

let todoList = [];
let incompleteTodos = localStorage.getItem('storedTodos');
if (incompleteTodos) {
  todoList = JSON.parse(incompleteTodos);
}


ReactDOM.render(

  <App incompleteTodos={todoList}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

