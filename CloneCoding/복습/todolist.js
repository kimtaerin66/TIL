const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");

//add
function addTodelist(e){
    e.preventDefault(); //새로고침막고 
    const whatTodo = todoInput.value; //내용 담기.
    todoInput.value = ""; //담았으면 input창 비우기. 주의 - whatTodo변수에 담는게아니라 value
const ul = document.createElement('ul'); //ul만들고
const li = document.createElement('li'); //li하나씩 생성.
const span = document.createElement('span'); //옆에 버튼넣어야하니 span으로 생성.
 span.innerText = whatTodo;
const btn = document.createElement('button');
    btn.innerText = 'X';
//btn.addEventListener("click", deleteList);

  li.appendChild(span);
  li.appendChild(btn);
  ul.appendChild(li);
todoForm.appendChild(ul);




  
}

todoForm.addEventListener("submit", addTodelist);



