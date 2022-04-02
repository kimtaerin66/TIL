# Recoil 
Recoil 리코일은 페이스북에서 만든
리액트 상태관리 라이브러리이다.

[공식사이트](https://recoiljs.org/ko/)

### 왜 상태관리가 필요할까?
![Alt text](../IMG/recoil1.jpg)

리코일 공식사이트에서 설명하듯이 리액트에서 state를 원하는 다른 컴포넌트로

이동시키기, 받기위해서  불필요하게 중간에 거쳐야하는
컴포넌트들이 생기게 된다. 그게 한 두개라면 해볼만하지만.. 

그림에서 보이듯이 가장 위에서 왼쪽 아래 1번까지 전달해야한다면? 그 이상의 갯수를 전달해야한다면?

과정도 복잡하고, 그 사이에있는 모든 컴포넌트들은 오로지 전달만을 위해
state를 받게되는 굉장히 비효율적인일이 발생한다.


이런 문제점을 해결하기 위해 Recoil이 나온것이고,

Recoil은 atom을 이용해 원하는 곳에서 한번에 state에 접근하게 해준다.

### 사용법

### 01. 설치
```node
npm install recoil
```

### 02. import와 RecoilRoot
나의 경우는 index.js에 RecoilRoot를 import하고
App을 감싸주었다.
```js
//index.js
import React from "react";
import App from "./App";
import { RecoilRoot } from "recoil";


ReactDOM.render(
  <React.StrictMode>
        <RecoilRoot>
        <App />
        </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

```

### 03. atom 만들기
state의 역할을 하는 atom을 만든다. 
아톰을 사용할 파일에 같이적어도 되지만, 따로 atom파일을 만들어도된다.

atom.ts파일 생성하고 atom을 import한다.

다크모드/라이트모드를 변환하는 atom을 만들예정
```ts
//atom.ts

import { atom } from "recoil";
export const isDarkAtom = atom({
    key: "isDark", //유일한 이름
    default : false, //초기값
})
```

아톰은 key(유일한값)와 초기값 이 두가지를 필요로 한다.

초기값이 false니 현재는 다크모드가아닌, 라이트모드이다.

### 04. 사용할 파일과 연결하기 = useRecoilValue
useRecoilValue를 사용하여, 연결한다. 

App.js와 isDarkAtom을 연결하고 싶다면?
값을 받아오는 useRecoilValue와 atom파일을 import.
```js
//App.js
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
       <ToDoList />
       </ThemeProvider>
    </>
  );

```

useRecoilValue(사용할아톰)을 적어 값을 받아와서 사용하면 된다.

### 05. 가져온 value(값)를 수정해야한다면? = useSetRecoilState

useSetRecoilState 는 리액트 useState에서 setState와 동일한 역할을 한다.

위에서 만든 isDarkAtom을 버튼에 연결해,
클릭하면 다크모드 또 클릭하면 라이트모드가 되는 toggle버튼으로 만들어보자.

```js
const toggleFn = useSetRecoilState(isDarkAtom);
<button onClick={()=> toggleFn((prev) => !prev)}>toggle</button>
```
버튼을 클릭했을 때 발생하니, onClick이벤트를 써주고, 

현재값의 반대가 되는 값을 가져오도록 설정한다.

