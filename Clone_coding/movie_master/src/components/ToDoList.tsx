import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { toDoState } from "./atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  // const value = useRecoilValue(toDoState);//atom에 접근하기
  // const modFn = useSetRecoilState(toDoState); //atom value변경

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
