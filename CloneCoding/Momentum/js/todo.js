const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
//저장목록 배열
const toDos = [];
const TODOS_KEY ="todos";

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));//JSON은 객체나 배열도 스트링으로만들어줌.
}
function deleteTodolist(e){
    const li = e.target.parentElement; //클릭된 요소의 부모
    li.remove();
}

function paintToDo(newTodo){
   const li = document.createElement('li');
   const span = document.createElement('span');
   span.innerText = newTodo ;
   const button = document.createElement("button");
   button.innerText =" ✖"; //이모지 윈도우 + . 
   button.addEventListener("click", deleteTodolist);
   li.appendChild(span); // li에 span넣기
   li.appendChild(button);
   
   toDoList.appendChild(li); //입력받은 값을 받은 li를 리스트에 추가.
}

function handleToDoForm(e){
    e.preventDefault(); //새로고침 방지.
    const newTodo =  toDoInput.value; //값을 저장하고
    toDoInput.value = ""; // 비우기.
    toDos.push(newTodo);
    paintToDo(newTodo); //비우기 전값을 출력
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoForm);

function sayHello(){
    console.log('hello');
}

//저장된 리스트가져오기
const saveTodos =localStorage.getItem(TODOS_KEY);

//리스트가 저장되어있으면
if(saveTodos){
    const parsedToDos =JSON.parse(saveToDos);  //다시 살아있는 배열로 만들어주기 그냥저장하면 전체스트링이됨.
    parsedToDos(forEach(item => {
     console.log('this is a list of', )    
    }));
}
