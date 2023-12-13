# React 파일비교
리액트에는 기본 index.js, App.js, index.html과 같은 기본 파일들이 있다.

html은 기본뼈대라고 생각했지만, ThemeProvider나 무엇가를 렌더링할때,

이 코드를 App.js에 넣어야할지, index.js를 넣어야할지 헷갈렸다.

그래서 이 세가지 파일들이 각각 어떤 역할을 하고, 어떤 차이점이 있는지 알아본다.

### 1. index.html
위치 : public 폴더

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>

  </body>
</html>

```

index.html 은 public폴더 내에 존재하는, html이다.

여기서 중요한것은 body 내부에 있는 root div에 내가 작성한 코드들이 렌더링 될 부분이라는 것.

하지만 여기서 html은 직접 렌더링하진 않는다.

### 2. index.js
위치 : src 폴더

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
    <React.StrictMode>
                <App />
    </React.StrictMode>,
document.getElementById("root")
);
```
이 js 코드에서 중요하게 봐야할 부분은,  ReactDOM.render

react 공식문서를 살펴보면, 문법은 다음과 같다.

```js
render(element, container[, callback])
```

첫번째로 받은 element를 두번째로 받은 container에 렌더링 시키는것, 

세번째 파라미터 자리에 콜백함수를 넣어준다면 렌더링이 끝난 후 실행된다.

그렇기때문에, 현재 index.js의 APP컴포넌트가 뒤에 오는 root 클래스를 가진, div를 찾아, 그곳에 렌더링된다.



### 3. App.js
위치 : src 폴더

현재 나의 App.js 코드는 다음과 같다.

```js
import Router from "./Router";

function App() {
    return (
        <>
            <Router/>
        </>
    );
}

export default App;
``
실제 화면에 보이게 되는 부분이 바로 App.js

내 코드에서 App컴포넌트는 현재 페이지들의 Router 컴포넌트를 리턴하고있다.

