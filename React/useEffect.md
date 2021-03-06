# useEffect (원하는 상황에만 실행하기)
리액트에서는 일반적으로 state가 변화할 때, 

모든 컴포넌트가 다시 실행되고 모든코드들도 다시 실행된다. => 그래서 업데이트된 값을 볼수있음

하지만 이렇게 전체가 아니라, useEffect를 사용해 특정상황, 원하는 경우에만 실행되게 만들 수 있다.

## 사용법

useEffect(재실행을 막을 함수, [특정상황]);

useEffect는 두가지 argument를 받는데, 첫번째는 재실행을 막을 함수, 두번째는 배열

이 배열안에 넣은 값들이 바뀔때 useEffect가 실행된다.

빈배열 [ ]을, 즉 값이 없는 경우 처음 딱한번 랜더링 될 때 실행되고 다시는 실행되지 않는다.



예시) 처음에만 Hello를 출력하고, 버튼을 클릭할 때마다 카운터 값만 올리고 싶은데, 

Hello도 클릭한 수 만큼 계속 출력되는 경우.
```js
//기본 코드
import { useState} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('Hello');

  return (
    <div>
    <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

```


```js
// Hello를 함수로만들고, useEffect사용,첫 한번만 실행하고싶어 빈배열을 넣어줬다.
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  const Hello = () =>{ 
    console.log("Hello");
  }
  useEffect(Hello, []);
  return (
    <div>
    <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
```

 


예시) 원하는 특정상황이 있는 경우(keyword가 변화할때만 실행하고 싶다)

```js
   useEffect(()=>{
     if(keyword !== "" && keyword.length > 2)//컴포넌트 생성시 막기
    console.log("search for", keyword)
  }, [keyword]);

```

**주의할점**

값만 넣으면 안되고, 꼭 배열을 넣어야 리액트가 인식한다.


## Memo
React에는 memorize(기억하기)기능이 있다.

이 기능은 props를 받아올 때 컴포넌트가 전체 re-rendering되는데,

전체를 다시받게되면 어플이 느려질 수 있기때문에, **state 변경이 없는 것은 re-rendering하지않게 하는 기능이다.**

예시) Save Changes버튼 클릭시 Revert Change로 버튼명 변경됨/ Continue버튼은 계속 그대로

사용법 

const MemorizedBtn = React.memo(Btn); 변수만들고 괄호안에 메모할 컴포넌트(Btn) 적기,

랜더되는 App.js에 Btn컴포넌트대신 MemorizedBtn 사용.

이렇게하면 변경되지 않는 Continue는 한번만 받아온다.

```js
  function Btn({text, changeValue}){ 
       return(
           <button 
           onClick={changeValue}
           style={{
               color : "white",
               backgroundColor : "tomato",
               padding : "10px 20px",
               border : 0,
               borderRadius : 10,

           }}>
           {text}
           </button>
       )
   }

    const MemorizedBtn = React.memo(Btn);
    function App (){
        const [value, setValue] = React.useState("Save Changes");
        const changeValue = () => setValue("Revert Change");
        return (
        <div>
         <MemorizedBtn text={value} changeValue={changeValue}/> 
         <MemorizedBtn text="Continue" />
         </div>
         )}
    const root = document.querySelector("#root");
    ReactDOM.render(<App />, root);

```

 **onClick={changeValue}를 html button에다 작성하면 이벤트리스너, 컴포넌트에 작성하면 props보내기**

