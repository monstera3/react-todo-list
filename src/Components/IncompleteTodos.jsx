import React from "react";

export const IncompleteTodos = (props) => {
  const {Todos,onClickComplete,onClickDelete}= props;
  return(
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {Todos.map((props,index) =>{
          return(
            <div key={props} className="list-row">
              <li>{props}</li>
              <button onClick={()=> onClickComplete(index)}>完了</button>
              {/*  何行目が押されたか認識するためにindexを追加*/}
              <button onClick={()=> onClickDelete(index)} >削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  )
}
