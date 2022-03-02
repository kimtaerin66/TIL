# Callback_Promise_AsyncAwait 비교

비동기적으로 실행할 때 쓰이는 세가지를 비교해보자.

## 예제) 2초,4초,6초마다 입력한 값을 출력하고 싶다.

## 1. Callback

```js
const printString = (string, callback) =>{
    setTimeout(() => {
        console.log(string); //값출력
        callback(); //콜백실행
    }, 2000);
}

const printAll = () => {
    printString("A", () => {
        printString("B", () => {
            printString("C", () => {})
        })
    })
}

printAll();

```

printString의 익명함수는 string과 콜백함수를 받고,

setTimeout에 의해 2초후에 string을 출력하고, 콜백을 실행한다.

계속해서 다음 스트링을 출력해야히기때문에 콜백에서 함수를 실행하고, 또 실행한다.

## 결과
![Alt text](../IMG/callback.gif)

## 문제점

만약 A,B,C이후 D, E, F등 결과값을 계속 더 출력하고 싶다면...

아래 PrintAll이 끝없이 길어지는 콜백hell이 된다. 

## 2. Promise

callback과 동일한 코드를 promise로 수정해보았다.

```js

const printString = (string) => {
 return new Promise((resolve, reject)=>{
     setTimeout(() => {
         console.log(string);
         resolve();
     }, 2000);
 })
}

const printAll = () =>{
    printString("A")
    .then(()=>{
        return printString("B")
    })
    .then(()=>{
        return printString("C")
    })
}

printAll();

//A
//B
//C
```

결과값은 동일하게 나온다. 그렇다면 콜백이랑 다른점은 무엇일까?

1. printString에서 콜백을 받지않는다. 

2. 인스턴스 promise를 생성해 resolve와 reject를 써준다. > 콜백대신 resolve 실행

3. printAll에서 A실행이 잘되었다면 .then으로 이어 그다음 실행될 액션을 이어준다. 

 

## 3. Async Await
promise에서 한단계 더 나아가.. async await

요즘은 노드버전만 높으면 내장되어있어 바로 쓸수 있는 기능이다.

promise지만 실제로 보이는 모습이 일반함수처럼 보이는게 특징이다.
```js
const printString = (string) => {
 return new Promise((resolve, reject)=>{
     setTimeout(() => {
         console.log(string);
         resolve();
     }, 2000);
 })
}
const printAll = async() =>{
  await  printString("A")
  await  printString("B")
  await  printString("C")

}
printAll();
//A
//B
//C
```
윗부분은 promise와 동일하고, 아래 출력부분에서

async()를 사용해 await를 붙여 일반함수처럼 실행한다. 

 

결과는 역시나 동일하게 A 2초후 B 2초후 C가 출력된다. 