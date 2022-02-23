# Asynchronous 비동기
![Alt text](../IMG/Asynchronous.jpg)

카페에서 커피를 주문할 때를 예를 들어 .동기적 상황과, 비동기적 상황 보자,

상황1: 앞사람이 커피를 주문하고, 주문한 커피가 나올 때까지 뒷사람은 주문을 하지못한다. => 한번에 한가지 일만 진행 => 동기적

 하나의 작업이 끝날 때까지 다른 작업을 막는것을 blocking 이라한다.

 <br/>

상황2: 앞사람이 커피를 주문하면, 진동벨을 주고 기다린다.

앞사람이 기다리는 동안, 뒷사람이 주문을 한다. => 계속 다음일이 이어진다. => 비동기적

## 비동기가 합리적인 이유

한번에 한가지일을 하며 다음일을 막는것은 시간이 굉장히 많이 걸린다.

그에비해 한번에 여러가지 일을 하는 것이 훨씬 효과적
(단, 비동기는 어떤 일이 먼저끝나는지 알수없다 > 순서가 상관없는일에 쓰임.)

비동기가 쓰이는 상황
- 백그라운드 실행, 로딩 창 등의 작업
- 인터넷에서 서버로 요청을 보내고, 응답을 기다리는 작업
- 큰 용량의 파일을 로딩하는 작업

## nodeJS의 특성 - 비동기

nodeJS에서는 시간이 걸리는 일은 모두 비동기적으로 처리한다.

(물론 동기적으로 처리할수도 있지만, 권장되지않는다.)

### nodeJS에서 비동기 사용하기 예제

fileSystem 모듈(파일을 다루는 모듈)의 readfile메소드를

동기적/ 비동기적으로 사용해보고 비교해보자.

- 동기적으로 사용

사용법 :  fs.readFile('파일명', '인코딩방식', 콜백함수);

코드를 작성한 순서대로 출력된다. 1 > data
```js 
//index.js 사용하려는 js파일
const fs =  require('fs');

console.log(1);

const data = fs.readFileSync('data.txt', 'utf8');
console.log(data);

//data.txt
hello world

// 1
//hello world
```
- 비동기적으로 사용

한번에 여러가지 일을 하기때문에 어떤코드가 먼저 출력될지 모른다.

1 > 3 > 2 > data 출력

사용법 :  fs.readFile('파일명', '인코딩방식', 콜백함수);

```js 
//index.js 사용하려는 js파일

const fs =  require('fs');

console.log(1);

fs.readFile('data.txt', 'utf8', function(err, data){
    console.log(2);
    console.log(data);
});

console.log(3);

//data.txt
hello world

//1
//3
//2
//hello world
```
