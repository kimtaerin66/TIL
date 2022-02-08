# if 조건문
조건문은 함수에서 한발짝 더 나아간 문법이다.
이름에서도 알 수 있듯이 조건을 걸어서 문제를 해결한다.

정말 간단하게 영어문법처럼 if&#126; 만약&#126; 한다면 , 결과값 &#126;하게 해라 이런식으로 작성한다.

## =, == 와 === 의 차이

=는 자바스크립트에선 절대 같다는 등호가 아니고, 값을 할당할 때 사용한다.
```js
const number = 1; //변수number에 1할당.
```
==는 타입을 비교하지않을 때, ===는 타입까지 비교할 때 

숫자 1과 문자 '1'로 예를 들어보자.
```js
const num = 1; //숫자 1
const str = '1';  //문자 1

if(num == str) //true
if(num == str) //false
```
이렇게 등호하나로 값이 완전히 달라지기때문에
조건문에서는 반드시 등호 3개를 사용하여 타입까지 정확히 비교한다.
## 조건식 거짓으로 취급하는 값
1. false
2. undefined
3. null
4. 0
5. NaN
6. the empty string ("")


--------
## 조건문의 종류
- if

가장 간단하고 쉬운 조건문은 if.

딱 조건문에 해당할 때, 한가지만 작성이 가능하다.

if(조건문){실행문}
```javascript
//변수 a의 값이 0이면 1을 더한다.
let a = 0;
if(a === 0){
    a = a + 1 ;
}
console.log(a); //1출력.
```

- if else

if문에서 조금더 확장되어 조건문에 해당하지않을 경우까지 작성이 가능하다.
```javascript
//변수 a의 값이 0이면 1을 더하고, 0이 아니면 2를 더한다. 

let a = 5;
if(a === 0){
    a = a + 1 ;
} else {
     a = a + 2;
}
console.log(a); //a는 0이 아니므로, 기존값 5 + 2 = 7출력. 
```

- else if 

else if란 위의 if else와 크게 다르진 않은데,
조건문을 여러개 만들경우에 사용한다.

예를들어 a가 0인경우, a가 1인경우, a가 2인경우..
조건을 else if에 담아주고, 마지막 그외의 모든경우를 else로 끝낸다.


```javascript
//변수 a의 값이 0이면 1을 더하고, 1이면 2를 더하고, 2이면 3을 더한다.
//그외의 경우 I don't know 출력.

let a = 1;
if(a === 0){
    a = a + 1 ;
} else if(a === 1){
     a = a + 2;
}else if(a === 2){
    a = a + 3;
}else {
    console.log("I don't know");
}

console.log(a); //a는 a이 므로, 기존값 1 + 2 = 3출력. 
```

- switch문

사용법

```
switch ( 변수 ){

    case A: // 값 A
        // 변수 값이 A 일때 실행할 명령문
        break;
    case B:
        // 변수 값이 B 일때 실행할 명령문
        break;
    case C:
        // 변수 값이 C 일때 실행할 명령문
        break;
    default:
        // 모든 CASE에 부합하지 않을때 실행할 명령문
        break;
}
```
switch 문법은 해당 경우에 만족하는 경우 실행할 실행문을 실행했다면,
break를 사용하여 빠져나온다.

바로 위에서 만든 예제를 switch문으로 만들어 보자.
```js

let a = 1;
switch(a){
    case 0: 
         a = a + 1 ;
         break;
    case 1: 
         a = a + 2 ;
         break;
    case 2:
         a = a + 3 ;
         break;
    default:
        console.log("I don't know");
        break;
}   //3출력. 

```

- 삼항 연산자

삼항연산자를 이용하면 조건문을 더 간단하게 나타낼 수 있다.

제일앞에 조건을 쓰고 ? 가 if역할을 한다.

문법

(조건문) ? 참일때 실행 : 거짓일때 실행

```js
(5 > 3) ? console.log("참") : console.log("거짓"); 
// 참 출력

```