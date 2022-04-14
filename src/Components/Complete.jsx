import React from "react";

export const Complete = (props) => {
  const {completeTodos,onClickBack}= props;
  return(
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
  )
}
