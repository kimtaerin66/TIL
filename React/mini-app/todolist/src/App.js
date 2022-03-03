import React from 'react';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState("");// input값 state로 만들기.
  const [array, setArray] = useState([]); //입력된 todo들을 배열에 저장.
  const onChange = (e) => { //input에 값이 바뀔때마다 감지.
    setValue(e.target.value); //감지한 값을 value로.
  }
  const onSubmit = (e) => {
    e.preventDefault(); //버튼 클릭시 새로고침 막기
    if(value === ""){ //비어있다면
      return; //그냥 리턴. 끝낸다.
    }

    //입력된 값 배열에 저장하기
    //state는 절대 직접고치지 않는다 = push 사용불가능
    setArray((currentArray) => [value,...currentArray]); //현재값을 맨앞에, 기존배열값 뒤에
    setValue("") //추가된 값 비워주기

  }
  const onDelete = (e) => {
    let li = e.target.parentNode;
    li.remove();  
 }

 const onReset = () => {
     setArray([]); //배열전부 비우기

 }
 return (
  <div>
   <h1>To Do List</h1>
 <form onSubmit={onSubmit}>
     <label htmlFor="write">Write </label>
     <input id="write" 
            placeholder="Please write what to do"
            value={value}
            onChange={onChange} />
     <button>Add</button>
     <button onClick={onReset}>Reset</button>      
 </form>
 <hr />

  {array.map((el, idx) => 
  <li key={idx}>{el} <button onClick={onDelete}>x</button>
 
  </li>)}

 

</div>
)}
export default App;



//여러개의 값(todo)을 받기위해 배열을 만들어 주는게 포인트.

//map사용시 li의 모든 item을 인식하기 때문에 key값 필요.