const clock = document.querySelector("h2#clock");

function sayHello(){
    console.log("hello");
}
//매번 반복되는일 - 몇초마다
//첫번째 argument 실행될 함수, 두번째 argument 실행될 함수의 간격(ms단위)
// setInterval(sayHello, 2000);

//함수를 바로실행 x 몇초있다가 실행
//첫번째 argument 실행될 함수, 두번째 argument 얼마나기다리고 실행될지(ms단위)
// setTimeout(sayHello,2000);

//new Date 오늘 날짜, 요일, 시간등 가져옴.

const date = new Date;

//오늘 날짜가져오기
//19출력 오늘1월19일
date.getDate();

//오늘 요일가져오기(숫자로나타냄)
//3출력 오늘은 수요일.
date.getDay(); 

//올해 년도 가져오기 
//2022출력
date.getFullYear();

//시계만들기 > 1초마다 시,분,초 가져오기 > setInterval
function getClock(){
    const date = new Date;
    //Stirng으로 만드는이유 > padStart를 적용하기위해.
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
     clock.innerText =`${hours}:${minutes}:${seconds}`;
}
getClock() //setInterval이 실행되려면 1초기다려야하니 바로 실행.
setInterval(getClock, 1000);

//0~9초일때 00,01,02초로 두글자로 나오게하기 > padStart/padEnd string에만 사용가능한 함수.
//"1".padStart(2,"0") "1"을 2글자로 만들고, 2글자가 아니면 앞에 0을 추가.

