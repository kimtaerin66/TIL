# Event
자바스크립트에서 이벤트란 어떠한 일이 발생했음을 의미한다.

예를 들어 사용자가 마우스를 클릭하거나, 키보드를 치거나,
또 와이파이가 연결되거나, 끊기거나 등


## 이벤트 타입
발생한 이벤트의 종류를 말한며 키보드, 마우스, html, dom, window 등이 있다.

## 이벤트 리스너, 이벤트 핸들러

이러한 이벤트를 만들기위해선 이벤트를 등록하고(이벤트리스너), 해당 이벤트가 발생될 때

실행될 함수를 만들어야한다(이벤트 핸들러). 

# 이벤트 만들기
이벤트 만들기에는 두 가지 방법이있다.  
- addEventListener 사용하기

    이벤트대상.addEventListener('이벤트명', 실행할 함수명);
- on 사용하기

    이벤트대상.on이벤트명 = 실행할 함수명;


예) h1을 클릭했을 때 title의 내용이 바뀌는 이벤트를 만들어보자.
```html
//html 예시
<body>
    <div class="container">
      <h1>Hello</h1>
    </div>

</body>
```
```js
const title = document.querySelector('h1');

function handleTitleClick (){    //click이라는 이벤트 발생시, handleTitleClick 함수 실행
    title.innerText = ""I'm event!;
}

//addEventListener 사용
title.addEventListener("click", handleTitleClick);
//on 사용
title.onclick = handleTitleClick;
```

## 사용할 수 있는 이벤트 찾기
MDN을 검색하거나, console.dir로 찾을 수 있다. (console.dir(title))

mdn을 검색할때 api가 붙은 자료를 보면.
자바스크립트의 관점에서의 정보들을 알 수 있다.
https://developer.mozilla.org/en-US/docs/Web/API/Element

## toggle 사용하기
toggle을 사용하면 동일한 이벤트를 굉장히 짧은 코드로 만들 수 있다.

예) title을 클릭하면 글자의 색깔이 파랑으로 바뀌고, 다시 클릭하면 빨강으로 바뀐다. (반복)

```js
//if-else만 사용했을 때
const title = document.querySelector('h1');
title.style.color = "red";

function handleTitleClick(){
    if(title.style.color === "red"){
        title.style.color = "blue"
    } else if(title.style.color === "blue") {
        title.style.color = "red"
    }
    
}

title.addEventListener("click", handleTitleClick);
```
```js
//toggle을 사용할 때
//css로 변경할 내용을 미리 만들어 준다.
//css
.title {
    color: red;

} 
.active {
    color: blue;
}

//js
//toggle기능은 클래스가 없으면 붙이고, 있으면 떼주는 액션을 반복한다.
const title = document.querySelector('h1');
function handleTitleClick(){
   title.classList.toggle("active");
    
}

title.addEventListener("click", handleTitleClick);
```

## 기본이벤트 막기
가끔 기본 이벤트 동작을 막아야 할때가 있는데, 
실행되는 함수에 argument를 넣어 preventDefault를 실행해 기본동작을 막는다.

```js
function onLoginSubmit(event){ 
   event.preventDefault(); //기본동작 막기
}
```
argument는 다른 단어를 사용해도되지만, 관습적으로 event나 e를 사용.
해당 함수안에서 console.dir(event)를 해보면, 발생한 이벤트에 대한 정보를 확인할 수 있다.

click이벤트인 경우 유저가 어느 부분을 클릭했는지
submit의 경우 언제 제출이 되었는지 등

