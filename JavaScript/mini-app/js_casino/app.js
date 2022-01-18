//random
//Math.random()은 0~1사이의 랜덤숫자제공 
//원하는 수만큼 곱하고, Math.floor로 정수만들기.




const userInput = document.querySelector("#casino input[name=userInput]");
const guessInput = document.querySelector("#casino input[name=guessInput]");

//사용자가 지정한 숫자 구하기


//paly 버튼 클릭시 내가선택한 숫자와 머신이 선택한 숫자나옴.
const playBtn = document.querySelector('.playBtn');
const answer = document.querySelector('.answer');
const YouChose = document.querySelector('.YouChose'); 
const machineNumber = document.querySelector('.machineNumber');
const h3 = answer.querySelector("h3");



function handleBtnClick(e){
    e.preventDefault(); //새로고침 막기.
    const userNumber = userInput.value; //작성값 변수에담기
    const guessNumber = guessInput.value; //작성값 변수에담기
    localStorage.setItem("userNumber",userNumber); // 저장
    localStorage.setItem("guessNumber",guessNumber); // 저장

    //유저넘버와 게스넘버가 있는경우에만 다음 문구 보여주기
    if(localStorage.getItem("userNumber") !== null && localStorage.getItem("guessNumber") !== null ){
        answer.classList.remove('hidden');
        YouChose.innerText = localStorage.getItem("guessNumber"); //유저가 선택한값 불러와서 넣어주기.
        const random = Math.floor(Math.random()*userNumber);
        machineNumber.innerText  = random; //0~내가 유저가 선택한값사이의 랜덤값.
        if(machineNumber.innerText === YouChose.innerText){
            h3.innerText = "You won!"
        }

    }

    // localStorage.setItem("guessNumber", guessNumber); //guessNumber 저장
    // if(localStorage.getItem("")){}


}

//이벤트 리스너
playBtn.addEventListener("click", handleBtnClick);
