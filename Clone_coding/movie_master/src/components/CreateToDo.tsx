import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from 'recoil';
import {toDoState} from "./atoms";


interface IForm {
  toDo:string;
}
 

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleVaild = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: "TO_DO" },
      ...oldToDos,
    ]); //함수를 넣으면, 리턴값이 state값이된다.
    setValue("toDo", ""); //data가 유효하다면 출력 후 비우기
  };
  return (
    <form onSubmit={handleSubmit(handleVaild)}>
      <input
        {...register("toDo", {
          required: "Please write a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
