# get, set 게터 세터
객체의 값을 바꿀때 직접적으로 바꾸지않고, 게터와 세터를 이용한다.

get : 해당 객체의 특정값을 얻는 메소드

set : 해당 객체의 특정값을 설정하는 메소드



```js
class A{
    _name = 'no name';

    get name(){
        return this._name + `@@@`;
    }

    set name(value){
        this._name = value + '!!!';
    }
}

const a = new A(); //객체 만들고
console.log(a); //출력 A {_name: 'no name'}

```
객체의 기본값 _name: 'no name' 이 출력된다.

값설정하기 = set하기

```js
a.name = 'rin'; //set
console.log(a); // rin!!!
```

get하기

```js
console.log(a.name); //rin!!!@@@
```

get은 set으로 설정된값 + get의 값 둘다나오는것을 확인할수 있다.

get, set을 사용할때는 일반변수가아닌(name) 

언더바(_name)를 사용하는게 관습
## setter가 없는경우 => readonly 
```js
class B{
    _name = 'no name';

    get name(){
        return this._name + '@@@';
    }
}

const b = new B(); 
console.log(b); //no name
b.name = 'rin'; //no name

```

setter가 없기에 이름 변경이 안된다.

# static 변수, 함수 
new A()를 하지않고도, 해당 값에 접근이 가능하다.

```js
class A{
    static age = 29;
    static hello(){
        console.log(A.age);
    }
}

console.log(A.age);
A.hello(); //29

//static을 전부 빼면
//undefined 출력
```

```js
//잘못된 경우 예시
class B{
    age = 30;
    static hello(){
    console.log(this.age);
    }
}

 console.log(B, B.age); //B는 출력되지만, B.age는 undefined static이 없어 접근불가능
 console.log(B.hello()); // undefined static은 객체에 속하지않음>this를 읽지못함. 
```