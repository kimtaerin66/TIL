# Create React App
리액트를 사용할 때 Create React App을 설치하면 아주 편리하게 작업할 수 있다.

물론 설치않아도 다른방법으로 진행이 가능하지만, 굉장히 번거롭다.
(이것저것 script해줘야함..)
##  설치
 node.js설치 > node -v 입력시 버전나오면 설치완료.

npx create-react-app 내가만들폴더명

(npx는 무엇인가?

npm이 설치하는 프로그램이라면, npx 임시로 설치해서 딱한번만 설치해서 실행하고 지우는 앱

장점 : 한번만쓰고 지우기때문에 용량차지 x, 사용할때마다 새로받기때문에 최신버전 사용가능)

설치가 완료되었다면 npm start(npm run start).
브라우저에 리액트 기본화면이 나오면 셋팅완료.

##  CSS Module 
리액트에서 CSS를 사용하는데에 몇가지 방법이 있다.
1. css파일 연결 

예) style.css 파일을 만들어 index.js에 import한다.

단점 : 프로젝트가 커질수록 굉장히 많은 css 코드가 들어있게되는데, 이 많은 코드가 한번에 전체 적용되어버림.

2. props로 style 받기

예) Button 컴포넌트에 직접 스타일 작성
```js
<Button style={{
    color: white;
    background-color: tomato;
}}>
```
단점 : 일일이 작성해야한다.  html의 인라인으로 들어간다.

**그.래.서 => css module 활용**

3. css module

예) Button.js가 있다면 Button.module.css 생성, css파일 연결이 아닌 스타일을 연결해준다.
```css
//Button.module.css
.btn {
    color: white;
    background-color: tomato;
}
```
```js
// Button.js(index.js가 아닌 해당 js)

import styles from "./Button.module.css"

function Button({text}){
    return <button className={styles.btn}>{text}</button>
}

```
이렇게 작성하고 확인해보면 버튼 태그에 랜덤 클래스가 들어가있다.
//

장점 : 동일한 class이름(btn)을 다른 파일에서도 사용할 수 있음.