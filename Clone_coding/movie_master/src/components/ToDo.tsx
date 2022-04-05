import React from "react";
import { IToDo } from "./atoms";
import { useSetRecoilState } from 'recoil';
import {toDoState } from "./atoms";

// function ToDo({ text, category }: IToDo) {
//atom에서 받아와서 체크
//   const onClick = (newCategory : IToDo["category"]) => {
//     console.log("o wanna go to", newCategory)

//   }
//   return (
//     <li>
//       <span> {text} </span>
//       {category !== "DOING" && <button onClick={()=> onClick("DOING")}>Doing</button>}
//       {category !== "TO_DO" && <button onClick={()=> onClick("TO_DO")}>To Do</button>}
//       {category !== "DONE" && <button onClick={()=> onClick("DONE")}>Done</button>}
//     </li>
//   );
// }
// //유저가 클릭한 카테고리를 인식하여 변경되게 onClick 함수만들기
// export default ToDo;

//name을 이용한 방법
function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState) //atom수정
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(event?.currentTarget.name)
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      //타켓의 경로알기 함수형프로그래밍 배열에서 인덱스찾기
      //todo배열의 id와 props의 id를 비교한다
      const targetIndex = oldToDos.findIndex(toDo => toDo.id === id)
     const oldToDo = oldToDos[targetIndex];
     const newToDo = {text, id, category:name }//newtodo는 오브젝트로, 받아온 prop text사용
    //카테고리는 클릭된 버튼의 카테고리 받아와야해서 name
    console.log(oldToDo, newToDo)
      return oldToDos;
    })
  };
  return (
    <li>
      <span> {text} </span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}
//유저가 클릭한 카테고리를 인식하여 변경되게 onClick 함수만들기
export default ToDo;
