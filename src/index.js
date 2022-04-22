import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';

let todoList = [];
let incompleteTodos = localStorage.getItem('storedTodos');
if (incompleteTodos) {
  todoList = JSON.parse(incompleteTodos);
}
let todoList2 = [];
let completeTodos = localStorage.getItem('storedTodos2');
if (completeTodos) {
  todoList = JSON.parse(completeTodos);
}


ReactDOM.render(

  <App incompleteTodos={todoList} completeTodos={todoList2} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

