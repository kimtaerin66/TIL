//random
//Math.random()은 0~1사이의 랜덤숫자제공 
//원하는 수만큼 곱하고, Math.floor로 정수만들기.


const userInput = document.querySelector("#input1");
const guessInput = document.querySelector("#input2");


//paly 버튼 클릭시 내가선택한 숫자와 머신이 선택한 숫자나옴.
const gameForm = document.querySelector('#game-form');
const span = document.querySelector('span');
const h4 = document.querySelector("h4");



function handleBtnSubmit(e){
    e.preventDefault(); //새로고침 막기.
    const userNumber = userInput.value; //작성값 변수에담기
    const guessNumber = guessInput.value; //작성값 변수에담기
    const random = Math.floor(Math.random()*userNumber);

    //유저넘버와 게스넘버가 있는경우에만 다음 문구 보여주기
    if(userNumber >= guessNumber){
      span.innerText = `You chose : ${guessNumber}, the machine chose : ${random}.`
    //0~내가 유저가 선택한값사이의 랜덤값.
        if(guessNumber === random){
            h4.innerText = "You won!"
        }else {
            h4.innerText = "You lost!"
        }

    }
}
//이벤트 리스너 
gameForm.addEventListener("submit", handleBtnSubmit);
