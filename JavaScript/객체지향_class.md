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

## 상속 > extends 사용
Person이라는 객체에 추가기능을 가진 PersonPlus 만들기.

사용법 : class 상속받을 객체 extends 부모객체, 새로추가될 내용만 입력
```js
//부모
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
//상속
class PersonPlus extends Person{
    avg(){ //추가할 기능
        return (this.first+ this.second) / 2;
    }
}
const kim = new PersonPlus('kim', 10, 20);
console.log(kim.avg()); //15
```
## super 자식에서 부모호출

위와 같은 코드로 볼때 부모 Person은 name과 first,second만 받고 있는데, 

자식에서 third라는 새로운 값을 더 받고 싶다.

이럴때는 어떻게 해야할까? super을 사용한다.

super는 뒤에 괄호와 온점이 붙을 때 다른 역할을 한다.

super() : 부모class의 생성자. constructor안쪽부분.
```js
 constructor(name, first, second){ 
        this.name = name;
        this.first = first;
        this.second = second;
}
```
super. : 부모class.

```js
//부모
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
//third 추가하기
class PersonPlus extends Person{
    constructor(name, first, second, third){//third추가
     super(name, first, second)//부모 Person에서 받아옴
     this.third = third; //새로운 값만 할당
    }
    sum(){
        return super.sum() + this.third;//부모의 sum값 + third
    }
    avg(){ 
        return (this.first+ this.second + this.third) / 3;
    
    }
}
const kim = new PersonPlus('kim', 10, 20. 30);//30추가
console.log(kim.sum()); //60
console.log(kim.avg()); //20
```
## 다른예제 추가.

```js
//Person을 상속받는 Rin객체만들기.
class Person{
    constructor(name){
          this.name = name;
    }
eat(){
    return `${this.name} eats something `;
}
}

//상속 + 메소드만 추가
class Rin extends Person{
    sleep(name, time){
        this.time = time; //필수로 넣어주기. 새로받는값정의 
        return `${this.name} sleeps at ${time}`
    }   
}

const rin = new Rin('rin'); //객체생성 부모 Person이 받는 name넣어주기.

console.log(rin.sleep('rin', 12)); //rin sleeps at 12
```


