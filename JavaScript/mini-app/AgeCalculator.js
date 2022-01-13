//유저에게 나이를 입력받아, 술을 마실수 있는 나이인지 확인.

//prompt를 이용해 유저에게 나이 입력받기 
//참고로 요즘안쓴다. alert과 동일하게, 모든 자바스크립트를 중지하기때문. 디자인도 안이쁨.

const age = parseInt(prompt("How old are you?"));

//propmt에 입력받은값은 string타입이라 숫자로 변환. parseInt사용.
//isNaN이라는 미리 정의되어있는 함수. ture이면 입력값이 number가 아님.

//사용자가 숫자를 입력하지 않았거나 음수를 입력할 경우
if(isNaN(age) || age < 0){
    console.log('Please write a real positive number')
}else if(age < 18 ){                    //사용자가 18세미만인 경우
    console.log('You are too young');
}else if(age >=18 && age <50){          //사용자가 18세이상 50세이하인 경우
    console.log('You can drink');
}else if(age <=50 && age < 80 ){        //사용자가 50세이상 80세미만인 경우
    console.log('You should exercise');
} else if(age >= 80){                    //사용자가 80세 초과인 경우
    console.log('You do what you want');

}

