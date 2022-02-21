# 객체지향_전역객체와 this

전역객체를 설명하기위해서 코드를 잠시보자.

일반적인 함수를 만들고 우리는 그 함수를 실행하기 위해서

함수명(); 이렇게 작성한다. 그런데 window.hello(); 라고작성해도 실행이된다.

이렇게 window가 객체, hello()가 메소드이므로 window가 생략되어도 hello()는 윈도우의 메소드이다.
```js
function hello(){
    alert('hello');
}

hello(); //실행 
window.hello();// 실행
```

따라서 모든 전역변수(Global object)와 함수는 사실 window 객체의 프로퍼티다.

## 전역객체 API

웹브라우저 자바스크립트에서는 alert()이라는 전역객체의 메소드가 존재하지만 node.js에는 존재하지 않는다. 또한 전역객체의 이름도 호스트환경에 따라서 다른데, 웹브라우저에서 전역객체는 window이지만 node.js에서는 global이다. 

# this
객체를 만들다보면 this라는 키워드를 사용하는 것을 볼 수 있는데,
this가 무엇인지 알아보자.

일단 this는 값이 딱 고정되어있는 것이아니라, 상황에 따라 그 값이 변한다.

## 함수의 호출
```js
//예시1 
function func(){
    if(window === this){
        console.log("window === this");
    }
}
func();  //window === this 출력
```
예시1에서는 this가 window 객체일경우 window === this를 출력하게 되어있다.

## 메소드의 호출
```js
//예시2 
const hello = {
    func : function(){
        if( hello === this){
                console.log("hello === this");
        }
    }
}
hello.func(); // hello === this 출력
```
예시2에서는 this가 함수(메소드)가 소속된 객체를 가르킨다.

## 생성자의 호출

```js
//예시3 생활코딩 예시
let funcThis = null; 
 
function Func(){
    funcThis = this;
}
const o1 = Func();
if(funcThis === window){
    console.log('window'); //window 
}
 
const o2 = new Func();
if(funcThis === o2){
    console.log('o2'); //o2
}

```

함수 Func에서 전역변수 funcThis에 this를 할당.

o1에서는 일반함수이기에 예시1번과 같이 this는 window를 가르키고,

o2에서는 new 라는 키워드를 붙여 객체로 만들어줬으므로, this는
객체 o2를 가르킨다.

# apply, call

함수는 객체다. > 그리고 객체는 프로퍼티를 가지고 있다.

함수의 매소드인 apply, call을 이용하면 this의 값을 제어할 수 있다.

```js 
//생활코딩 예시
//switch문은 괄호안에 있는 값이 case값과 같을때 break를 만나 멈춘다.
const o = {}
const p = {}
function func(){
    switch(this){
        case o:
            console.log('o');
            break;
        case p:
            console.log('p');
            break;
        case window:
            console.log('window');
            break;          
    }
}
func(); //함수호출 > this의값은 window 세번째줄이 실행 > console.log('window');
func.apply(o); // func라는 함수의 값에 o를 넣어 > 첫번재줄 실행 >  console.log('o');
func.apply(p); // func라는 함수의 값에 p를 넣어 > 첫번재줄 실행 >  console.log('p');


```
함수를 어떤식으로 호출하느냐에따라 맥락적으로 어떠한 객체에 종속되기도 한다.

그렇기에 this의 값은 변화무쌍하다.(this는 함수가 소속된 객체를 가르킨다.)




참고사이트 [생활코딩](https://opentutorials.org/course/743/6571)
