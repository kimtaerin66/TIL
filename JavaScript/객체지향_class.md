# class

 자바스크립트 ES5까지는 함수로 인스턴스를 만들다가, ES6부터는 class를 이용해서 인스턴스를 만든다.



## class 사용법 


```js
class Person{

}

const kim = new Person();
console.log('kim', kim); //kim Person {}
```

## 초기화하기 > constructor
기본값 셋팅하기(초기화)에는 함수가 실행되기전, 자동으로 실행되기로 약속되어있는 함수 - constructor를 꼭 써줘야한다.
```js
class Person{
    constructor(name, first, second){ 
        this.name = name;
        this.first = first;
        this.second = second;
    }
}

const kim = new Person('kim', 10, 20);
console.log('kim', kim); //Person {name: 'kim', first: 10, second: 20}

```


## class에서 객체의 method 구현하기
function과 class비교 

```js
//기존 function 사용
function Person(brand, name, color){ //바뀌는 값 받기.
        this.name = name;
        this.first = first;
        this.second = second;

Person.prototype.sum  = function(){
      return `prototype : ${this.first} + ${this.second}`;
  }
}
const kim = new Person('kim', 10, 20);
const lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum()); //kim.sum() prototype 30
console.log('lee.sum()', lee.sum()); //lee.sum() prototype 20

//-----------------------------------------------------------------------

//class 사용
class Person{
    constructor(name, first, second){ 
        this.name = name;
        this.first = first;
        this.second = second;
}
sum(){
    return `prototype : ${this.first} + ${this.second}`;
    }
}



const kim = new Person('kim', 10, 20);
const lee = new Person('lee', 10, 10);
console.log('kim.sum()', kim.sum()); //kim.sum() prototype 30
console.log('lee.sum()', lee.sum()); //lee.sum() prototype 20

```
class에서는 메소드를 더 간결하게 작성할 수 있다.

## 상속 extends 사용
