import React from "react";
import {AiOutlineCheck} from 'react-icons/ai'
import {AiOutlineDelete} from 'react-icons/ai'

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
              <button onClick={()=> onClickComplete(index)}>完了<AiOutlineCheck size="1.2rem"/></button>
              {/*  何行目が押されたか認識するためにindexを追加*/}
            <button onClick={()=> onClickDelete(index)} >削除<AiOutlineDelete size="1.2rem"/></button>
            </div>
          );
        })}
      </ul>
    </div>
  )
}
