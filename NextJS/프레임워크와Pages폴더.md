# 프레임워크vs라이브러리
FrameWork와 Libray의 차이점을 알아보자.

먼저 nextJS을 만들었다면, 자동으로 생성된 pages폴더안의
파일들을 전부 삭제해보자.

=> 그리고 index.js를 생성
```js
//pages/index.js
export default function Home(){
    return "hi";
}
```
localhost 3000에가보면 hi가 바로 뜨는게 확인된다.

------------------
- 라이브러리 :  개발자로서 내가 사용하는것,

- 프레임워크 : 이렇게 나의 코드를 불러오는것

## 차이점
create-react-app 라이브러리를 생각해보자. 

그안에서 우리는 폴더명을 마음대로 만들수있고, 파일도 마음대로
만들고, 코드도 마음대로 작성한다. 모든게 다 개발자 마음대로이다.

대신 라우터도 직접 설정해줘야한다.

하지만 nextJS와 같은 프레임워크에서는 특정한, 정해진 규칙만을 따라야한다.

이 규칙을 제대로 따랐을 때만 프레임워크가 정상적으로 작동하고,
대신 직접 라우팅을 하거나, 랜더링 해줄필요가 없다.

자리만 맞춰서 잘 넣어주면 프레임워크가 알아서 코드를 불러와 줄것이다. 

## pages

처음에 다 비우고시작했던 pages 폴더.

가장 중요한 폴더인데, 이 pages폴더를 알아보자.

여기에 우리가 index.js를 만드니 바로 3000port에서
작성한 내용이 보였다.

또 pages폴더에 about.js파일을 생성해보면
```js
//pages/about.js
export default function About(){
    return "about us";
}
```
localhost:3000/about 이렇게 3000port뒤에 

about이라는
파일명만 붙여주면 작성한 about us가 보인다.

=> 일반적인 리액트로 했다면, 라우터 폴더를 만들고, 

일일이 path를 지정해줘야 가능했던 일이다.


## 파일 작성법
그렇다면 pages안의 파일은 어떻게 작성해야할까?

about.js 처럼, 파일의 이름을 url로 사용한다.

그렇기 때문에 
1. 파일의 이름이 중요하고, 
2. 이 컴포넌트를 export default해주는 것(export안하면 에러발생)

안의 function About 이 부분(컴포넌트)의 이름은 중요하지 않다.

## 예외사항
 pages 폴더에 넣어도 되는 파일들은 무엇이 있을까?

### 1. index.js를 꼭 넣어줘야한다.

localhost:3000/index 이런 주소는 없고,

index.js가 home기능을 하기때문이다.

### 2. react를 import 하지않아도 된다.

jsx문법을 쓰고있다면, js파일마다 하던 리액트 import를 하지않아도 된다.
```js
import React from 'react';
```
물론 useState나, 리액트에서 다른기능을 써야한다면 그 때 import한다.