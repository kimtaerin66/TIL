# Promise
Promise란? 비동기적 상황에서 사용되는 객체이며, ES6부터 자바스크립트 표준 내장 객체로 추가되었다.

이 Promise 객체는 비동기적 상황에서 코드를 좀 더 명확하게 표현하고, 실행하도록 만든다.

Promise를 출력해 그 모습을 살펴보면,

이러한 모습으로 출력되는 걸 확인할 수 있다. 이렇게 따로 import하지않아도
사용 가능하다.

```js
console.log(Promise);

//[Function: Promise]
```

## 1. 기본문법

생성자(new)를 통해서 프로미스 객체를 만들 수 있다.

인자로는 executor함수를 받는다.

```js
//index.js
new Promise((resolve, reject) => {});
```
executor함수 :이 함수는 resolve와 reject를 인자로 가진다.

resolve는 해당코드가 성공적일 때 실행할 코드,

reject는 에러가 발생할 때 실행할 코드이다.


## 2. 상태

Promise는 3가지 상태를 가지고있다.
1. pending(대기) : 생성자를 통해 프로미스 객체를 만드는 순간 팬딩상태가 된다.
```js
new Promise((resolve, reject) => {});
```
2. Fulfilled(이행) : 팬딩상태 후 resolve 함수를 실행하면, 풀필드 상태가 된다. 

    then을 사용하여 처리 결과값을 받아낸다.
```js
new Promise((resolve, reject) => {
    resolve();
});
```
3. Rejected(실패) : reject를 실행하면, 리젝티드 상태가 된다.
    
    실패한 이유(값)을 catch로 받아낸다.
 
```js
new Promise((resolve, reject) => {
    reject();
});
```

### 예제
p라는 프로미스 객체가 1초 후에 Fulfilled 상태가 된다.

```js
const p = new Promise((resolve,reject)=>{
    //pending
    setTimeout(() => {
        resolve(); //fullfilled
    }, 1000);
});
```

## 3. 사용하기

위의 예제에서 만든 p를 이용해보자.

p.then(콜백함수) 이렇게 작성하면 사용할 수 있다.


```js
p.then(()=>{
    console.log('1초 후에 Fulfilled 된다.');
})

//1초뒤 출력 - 1초 후에 Fulfilled 된다.   
```
실제 promise를 사용할때는 따로 생성하고 사용하기보다는,

함수를 사용해 함수의 실행과 동시에 프로미스 객체를 만들면서

 pending이 시작하도록 한다.

 ### resolve 예제1

```js
function p(){
    return  new Promise((resolve,reject)=>{
    //pending
    setTimeout(() => {
        resolve(); //fullfilled
    }, 1000);
});
}

p().then(()=>{
 console.log('1초 후에 Fulfilled 된다.');
});

//1초뒤 출력 - 1초 후에 Fulfilled 된다. 
```

 ### reject 예제1
 ```js
function p(){
    return  new Promise((resolve,reject)=>{
    //pending
    setTimeout(() => {
        reject(); //rejected
    }, 1000);
});
}

p()
  .then(()=>{
 console.log('1초 후에 Fulfilled 된다.');
}).catch(()=>{
  console.log('1초 후에 rejected 된다.');  
})

//1초뒤 출력 - 1초 후에 rejected 된다. 
//then부분은 출력되지 않음
```

---------------------------------

 ### resolve 예제2
 resolve에 전달하고자하는 함수나 메세지를 넣으면,
 해당 코드가 실행된 후,

다음 동작을 설정할 수 있다.


```js
function p(){
    return new Promise((resolve,reject)=>{
    //pending
    setTimeout(() => {
        resolve('Hello'); //fullfilled 메세지를 전달
    }, 1000);
});
}

p().then(()=>{
 console.log('1초 후에 Fulfilled 된다.' + msg);
});

//1초뒤 출력 - 1초 후에 Fulfilled 된다. Hello
```

 ### reject 예제2
resolve와 마찬가지로, reject가 인자로 받을 수 있다.
```js
function p(){
    return new Promise((resolve,reject) => {
    //pending
    setTimeout(() => {
        reject('error'); //rejected
    }, 1000);
});
}

p().then((msg)=>{
 console.log('1초 후에 Fulfilled 된다.', msg);
})
   .catch((reason)=>{
  console.log('1초 후에 rejected 된다.', reason);  
})

//1초 후에 rejected 된다. error
```

하.지.만 보통 에러처리는 에러객체를 사용한다.

```js

function p(){
    return new Promise((resolve,reject) => {
    //pending
    setTimeout(() => {
        reject(new Error('bad')); //rejected
    }, 1000);
});
}

p().then((msg)=>{
 console.log('1초 후에 Fulfilled 된다.', msg);
})
   .catch((error)=>{
  console.log('1초 후에 rejected 된다.', error);  
})

//출력
// 1초 후에 rejected 된다. Error: bad
```