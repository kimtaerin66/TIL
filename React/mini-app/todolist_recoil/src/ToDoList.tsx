import React from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const { register, watch, handleSubmit } = useForm();
    const onValid = (data:any) => {
       console.log(data);
     }
    return (
            <div>
              <form onSubmit={handleSubmit(onValid)} >
                <input {...register("todo")}  placeholder="Write your ToDos" />
                <button>Add</button>
              </form>
            </div>
          );
}

export default ToDoList;
