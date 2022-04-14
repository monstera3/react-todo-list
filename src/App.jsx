import React, {useState} from "react";
import "./styles.css";
import {InputTodo} from "./Components/InputTodo";
import {IncompleteTodos} from "./Components/IncompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState([]);
  const [completeTodos,setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) =>{
    setTodoText(event.target.value)
  }

  //入力した文字をリストに追加する
  const onClickAdd = () => {
    if(todoText==="")return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  //削除ボタン
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  //完了ボタン
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index,1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  //戻すボタン
  const onClickBack = (index) => {
    const newCompleteTodos=[...completeTodos];
    newCompleteTodos.splice(index,1);

    const newIncompleteTodos=[...incompleteTodos,completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      <IncompleteTodos
        Todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((props,index) =>{
            return(
              <div key={props} className="list-row">
                <li>{props}</li>
                <button onClick={()=> onClickBack(index)}>戻す</button>
              </div>
            );
          })}

        </ul>
      </div>

    </>

  );
}
