const loginForm = document.querySelector("#login-form");
//document가 아닌 loginForm에서 찾기. 
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

//관습적으로 string값만 포함된 건 대문자로 이름짓기
//string을 계속 작성하여 오타가 나 틀린확률을 없앤다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){ //엔터를 누르거나, 로그인버튼 클릭시 발생
   event.preventDefault(); //기본동작 막기
   const username = loginInput.value; //작성값 변수에 담기
   localStorage.setItem(USERNAME_KEY, username); //localStorage에 저장하기
   loginForm.classList.add(HIDDEN_CLASSNAME); //class추가하여 인풋(입력창) 숨기기
   paintGreetings(username);
}


function paintGreetings(username){
    greeting.classList.remove(HIDDEN_CLASSNAME); //클래스 hidden 삭제.
    greeting.innerText = `Hello ${username}`;//h1에 username넣기
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

//form과 인삿말 모두 숨기고 시작.
if(savedUsername === null){ //유저정보가 없는 경우 > form
    loginForm.classList.remove(HIDDEN_CLASSNAME); //클래스 hidden 삭제.
    loginForm.addEventListener("submit",onLoginSubmit);
} else { //있는 경우 > 인삿말
    paintGreetings(savedUsername);
}


