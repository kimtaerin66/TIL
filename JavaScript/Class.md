# 자바스크립트 - 객체 지향 프로그래밍
객체 지향 프로그래밍(OOP, Object-oriented programming)이란?

컴퓨터 프로그래밍 패러다임중 하나로, 프로그래밍에서 필요한 데이터를 추상화시켜 상태와 행위를 가진 객체를 만들고 그 객체들 간의 유기적인 상호작용을 통해 로직을 구성하는 프로그래밍 방법이다.

쉽게 말하자면, 개발자가 원하는대로 틀을 만들고 (함수나 클래스)
그 틀에 new 키워드를 이용해 인스턴스를 만드는 것.

## 객체 instance
![Alt text](../IMG/object.png)

여기서 하나의 모델이 되는 이 블루프린트(청사진이) => 이전에는 함수로정의
ES6 부터는 Class사용 

그 청사진을 바탕으로 한 객체 오브젝트들이=> 인스턴스 instances 가 된다.

즉 한개의 틀을 이용해 여러개를 만들어낼수 있다는 것.
## instance 만들기
인스턴스를 만드는 방법은 3가지이다.

- 리터럴방식
-  함수 방식
 - 클래스 방식

 ### 1. 리터럴방식
 가장 기초적인 object만드는 방식, 말그대로 직접작성한다.
 ```js
const car(){
    brand : "hyundai",
    name : "avante",
    color : "white"
    }
}
 ```

  ### 2. 함수 방식
 new를 이용해 인스턴스를 만든다.
  ```js
function car(brand, name, color){
    }


const avante = new car("hyundai", "avante", "white");
//생성자함수가 받는 순서대로 값을 넣는다.

  ```
  -----------------------
  자바스크립트 ES5까지는 함수로 인스턴스를 만들다가,
   ES6부터는 class를 이용해서 인스턴스를 만든다. 그래서 class가 굉장히 중요하기 때문에 따로 다루겠다.

   ## 3. 클래스 방식

   ## 사용법 
   
 클래스는 두가지 방식으로 사용할 수 있는데, 

 class 선언적 방식과 class 표현식을 변수에 할당하는 방법이다.
 
```js
//class 선언적 방식
class car{}

console.log(new car()); //사용시 new를 붙여 사용

//class 표현식을 변수에 할당
const car = class {};

console.log(new car()); //사용시 new를 붙여 사용
```
여기서 중요한건 호이스팅이 일어나지 않는다는 것.
```js
new car();

class car {}; //car is not defined;
```

## constructor 생성자

인스턴스를 생성할 때 초기값을 넣어준다.

```js
class A{} //초기값이 아무것도 없는 인스턴스

console.log(new A());

class B{ 
    constructor(name, age){
        console.log('hello', name, age);
    }
}
console.log(new B('rin',29)); //hello rin 29 출력
console.log(new B()); //인자를 안넣으면 undefined 출력
```
## 멤버변수
외부에서 값 받기
```js
class A{
     constructor(name, age){
         this.name = name;
         this.age = age;
     }
}

console.log(new A('rin', 29)); // A {name: 'rin', age: 29} 
```
더 쉽게 표현

```js
class B{
    name; //this.name과 같다
    age;
}
//크롬, node 옛날버전에선 에러가난다.
console.log(new B()); //B {name: undefined, age: undefined}

class C{
    name = 'no name'; //초기값
    age = 0; //초기값
   constructor(name, age){ 
       this.name = name;
       this.age = age;
   }
}

console.log(new C('rin',29 )); //C {name: 'rin', age: 29}
```
## 멤버함수
```js
 class A{
     hello(){
         console.log('hello', this);
     }
     
     hello2 = () =>{
          console.log('hello2', this);
     }
 }

 new A().hello(); //hello A {hello2: ƒ}
 new A().hello2(); //hello2 A {hello2: ƒ}

 class B{
     name = 'rin'; 

     hello(){
         console.log('hello', this.name);
         //윗줄에서 선언한 name을 활용
     }
 }

 new B().hello(); //hello rin
```











