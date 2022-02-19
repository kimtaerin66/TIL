import React from 'react';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");// input값 state로 만들기.
  const [todos, setTodos] = useState([]); //입력된 todo들을 배열에 저장.
  const onChange = (e) => { //input에 값이 바뀔때마다 감지.
    setTodo(e.target.value); //감지한 값을 todo로.
  }
  const onSubmit = (e) => {
    e.preventDefault(); //버튼 클릭시 새로고침 막기
    if(todo === ""){ //비어있다면
      return; //그냥 리턴. 끝낸다.
    }

    //입력된 값 배열에 저장하기
    //state는 절대 직접고치지 않는다 = push 사용불가능
    setTodos((currentArray) => [todo,...currentArray]); //현재값을 맨앞에, 기존배열값 뒤에
    setTodo("") //추가된 값 비워주기

  }
  console.log(todos);
  return (
    <div className="App">

     <h1>My To Dos</h1>

     <form onSubmit={onSubmit}>
     <input 
     value={todo}
     placeholder ='Please write your to do' 
     onChange={onChange} /> 
     <button>Add To Do</button>
     </form>
     <hr />

     {todos.map((el, idx) => 
     <li key={idx}>{el}</li>)}


    </div>//
  );
}

export default App;



//여러개의 값(todo)을 받기위해 배열을 만들어 주는게 포인트.

//map사용시 li의 모든 item을 인식하기 때문에 key값 필요.