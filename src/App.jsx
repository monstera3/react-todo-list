import React, {useState} from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos,setIncompleteTodos] = useState(['aaaaa','bbbbbbb']);
  const [completeTodos,setCompleteTodos] = useState(['cccccc']);

  const onChangeTodoText = (event) =>{
    setTodoText(event.target.value)
  }

  const onClickAdd = () => {
    if(todoText==="")return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((props) =>{
            return(
              <div key={props} className="list-row">
                <li>{props}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((props) =>{
            return(
              <div key={props} className="list-row">
                <li>cccccc</li>
                <button>戻す</button>
              </div>
            );
          })}

        </ul>
      </div>

    </>

  );
}
