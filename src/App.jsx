import React, {useState} from "react";
import "./styles.css";
import {InputTodo} from "./Components/InputTodo";
import {IncompleteTodos} from "./Components/IncompleteTodos";
import {Complete} from "./Components/Complete";

export const App = (props) => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState(props.incompleteTodos);
  const [completeTodos,setCompleteTodos] = useState(props.completeTodos);

  const onChangeTodoText = (event) =>{
    setTodoText(event.target.value)
  }

  //入力した文字をリストに追加する
  const onClickAdd = () => {
    if(todoText==="")return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    updateStoredTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
    updateStoredTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);
    updateStoredTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
    updateStoredTodos2(newCompleteTodos);

  };

  //戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos=[...completeTodos];
    newCompleteTodos.splice(index,1);
    updateStoredTodos2(newCompleteTodos);

    const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
    updateStoredTodos(newIncompleteTodos);

  }

  //ローカルストレージのキーのstoredTodosに追加される
  const updateStoredTodos = (updatedTasks) => {
    localStorage.setItem('storedTodos', JSON.stringify(updatedTasks));
  }

  //ローカルストレージのキーのstored-completeTodosに追加される
  const updateStoredTodos2 = (updatedTasks2) => {
    localStorage.setItem('stored-completeTodos', JSON.stringify(updatedTasks2));
  }

  return (
    <>
      <h1>TODO LIST</h1>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >=5}
      />

      {incompleteTodos.length >=5 &&
        (<p style={{color:"red"}}>登録できるのは5つまで</p>) }

      <IncompleteTodos
        Todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <Complete completeTodos={completeTodos} onClickBack={onClickBack}/>

    </>

  );
}
