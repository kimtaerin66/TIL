# module 모듈
모듈이란 어떤 기능을 조립할 수 있는 형태로 만든 부분, 즉 부품이다.

node.js에는 기본적으로 내장되어있는 내장모듈들이 있다.

[nodeJS내장모듈](https://nodejs.org/dist/latest-v14.x/docs/api/)


## 내장모듈 사용법
부품을 가져다 쓸땐 require가 필요하다.

해당 스크립트 가장 상단에 작성해준다.

```js
//os모듈 사용시
const os = require('os') ;
```

모듈을 상수에 할당하는 이유는, 변경되지 않음을 의미.

이렇게 상단에 적어주고, 내장모듈 os에 들어가 확인하면 사용할 수 있는 메소드들이 있다.

그중 platform을 사용해보자.
```js
const o = require('os') ;
console.log(o.platform());

//win32 출력
```
나의경우에는 윈도우를 사용하고 있기에 win32라고 출력이 된다.

<br />

## 타인의 모듈(외장모듈) 사용법
모듈은 npm으로 설치한다. npm으로 설치하고, 2가지 방법으로 사용할 수 있다.

1. 독립적으로 사용

2. 부품으로 사용


### npm 

npm(node package manager)은 node.js 설치시에 같이 설치된다. 

npm에는 node.js에서 사용되는 각종 코드 패키지들이 모여있다.

node계의 앱스토어나, 플레이스토어와 비슷하다고 볼 수 있다.

[npm사이트](https://www.npmjs.com/)
각종 패키지들(모듈)을 검색해서 찾아볼 수 있다.

<br />

## 독립적으로 사용하기

### 1. 설치하기

Uglify(일부터 내코드를 못생기게 만듬)라는 소프트웨어를 설치해보자

```node
//방법 1 글로벌(전역)
npm install uglify-js -g

//방법 2 로컬
npm install uglify-js
```
소프트웨어를 설치할때 두가지방법이 있는데 -g를 붙이면

전역, 내컴퓨터 어디에서나 사용가능

붙이지않으면 현재 다운받은 곳. 이 프로젝트에서만 사용이 가능하다.

```js
//pretty.js 작성
function hello(name){
    console.log(`hello ${name}!`)
};

hello(rin);
```

### 2. 사용하기
이렇게 작성한 js파일을 Uglify로 읽어보면,

uglifyjs [input files] [options]
```node
uglifyjs pretty.js
```
출력  function hello(name){console.log(`hello ${name}!`)}hello(rin);

기존 코드에서 모든여백을 없앤 코드로 수정됨 >  pretty.min.js으로 저장.

(min은 관습적으로 여백을 모두 줄여, 메모리를 줄인파일을 뜻함)

----------------------------------------------------------

## 부품으로 사용하기
### 1.기초세팅하기

부품으로 사용하기 위해서는 내 프로젝트폴더를 기본셋팅해야한다.

프로젝트 폴더에 들어가 init해주기 > package.json이 만들어진다.
```node
npm init
```

이렇게 입력하면 여러가지 환경설정이 나온다.

첫번째 프로젝트 이름(name), 특별히 쓰지않으면 괄호안의 이름으로 된다.

description : 프로젝트에 관한 설명,

entry point : 어떠한 js가 이패키지를 구동시키는 js인지

그외 깃 설정 등


질문을 받고싶지 않다면 -y(yes)를 작성, 그러면 기본값을 사용한다.
```node
$ npm init -y
```

### 2. 설치하기

```node
//방법1
$ npm install underscore

//방법2
$ npm install underscore --save
```
방법1은 말그대로, 테스트시 사용되거나, 이번프로젝트에서 임시로 사용하는 소프트웨어를 설치할때.

방법2는 --save를 붙여 아예 저장, 설치한다는 뜻

내가 다른 곳에서 프로젝트를 하더라고 계속 사용하겠다, 꼭 있어야하는 파일이다. 


이렇게 설치하고나면 프로젝트폴더에 node_modules에 underscore파일이 생기고,

package.json에도 추가된걸 확인할 수 있다.
```js
//package.json
// --save로 설치시
 "dependencies": {
    "underscore": "^1.13.2"
  }
```
### 3. 사용하기

설치까지 끝났다면, 내장모듈처럼 해당 js상단에 require해준다.

underscore는 변수명을 _ 로하는게 관습.


```js
//js 상단
const _ = require('underscore');

const arr = [1,2,3,4,5];
console.log(arr[0]); //1
console.log(_.first(arr)); //1
console.log(_.last(arr)); //5
```
first는 배열의 첫번째 값을 가져오는 underscore의 메소드.

last는 배열의 마지막 값을 가져오는 underscore의 메소드.

참고사이트 [생활코딩](https://opentutorials.org/course/2136/11854)



