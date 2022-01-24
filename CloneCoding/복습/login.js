const container = document.querySelector(".container");
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");


function saveUsername(){
    const username = loginInput.value;// 엔터치면 담음.
    localStorage.setItem("username", username); //키, value
}


//이벤트리스너는 form에 달기
loginForm.addEventListener("submit", saveUsername);

//등록된 유저네임확인
const savedUsername = localStorage.getItem("username");
if(savedUsername){ //있으면 폼숨기고 인사하기
    loginForm.classList.add("hidden");
const hello = document.createElement('h1');
container.appendChild(hello);
hello.innerText =`Hello ${savedUsername}`;
}