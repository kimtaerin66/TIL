import { createStore } from "redux";
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
//string정리
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

//action만 작성
const addToDo = text =>{
  return {
    type : ADD_TODO,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE_TODO,
    id
  }
};

const reducer = (state = [], action) => {
  //list를 추가하거나, 삭제
  switch (action.type) {
    case ADD_TODO:
      //절대 push하지않긴(mutate변형x) => 새로운것을 리턴
      return [...state,{ text :action.text, id :Date.now()}];
    case DELETE_TODO:
      //선택한 id(지울id)와 다른것만 출력
      return state.filter(toDo => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(()=>console.log(store.getState()))

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text)); //저장된값 li로만들기
 };

const dispatchDeleteToDo = (e) => {
 const id = parseInt(e.target.parentNode.id);
 store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener('click', dispatchDeleteToDo)
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}

store.subscribe(paintToDos);





const onSubmit = (e) => {
  e.preventDefault(); //새로고침막기
  const toDo = input.value; //작성한값 저장
  input.value = ""; //비워주기
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

//reducer에게 무엇인가 시키려고 대화하는게 dispatch