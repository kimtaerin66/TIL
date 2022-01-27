# useEffect (특정코드 실행제한)
리액트에서는 일반적으로 state가 변화할 때, 

모든 컴포넌트가 다시 실행되고 모든코드들도 다시 실행된다. => 그래서 업데이트된 값을 볼수있음

예) 버튼을 클릭할 때마다 카운터 값이 올라가는 경우
```js
import { useState} from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all th time');

  return (
    <div>
    <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;

```

하지만 이때, 카운터 값만 올라가길 바라는데 

버튼을 누를 때 마다 콘솔에 'i run all th time'가 계속 출력된다.
이 부분은 처음 딱 한번만 실행되고 재실행되지 않길 바란다면 => useEffect 


## 사용법1
useEffect는 두가지 argument를 받는다. 첫번째- 재실행을 막을 함수, 두번째는 배열(기본적으로 빈배열)

```js
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log('i run all th time');
  const iRunOnlyOnce = () =>{ 
    console.log("i run only once");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
    <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
```
이렇게 실행하면, 처음 버튼클릭시(첫랜더링) i run all th time과 i run only once이

둘다 출력되지만, 두번째 버튼 클릭부터는 i run all th time만 출력된다.

```
//더 간단하게 익명의 함수로도 표현가능
useEffect(() => {
   console.log("i run only once")
  },[]);

```

## 사용법2 
클릭할 때마다 수가 증가하는 카운터 버튼과, search input이 있다고 할때. 

```js
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('i run all the time');
 useEffect(()=>{
   console.log("call the api")
  },[]);
   useEffect(()=>{
    console.log("search for", keyword)
  }, []);
  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} 
      type ="text"
       placeholder="Search here..." />
    <h1>{counter}</h1>
     <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
```

이렇게 작성하고 실행하면, 버튼을 클릭할 때도 "search for", keyword이 출력된다. 

이걸 막는게 바로 useEffect의 두번째 argument 빈배열!

이곳에 원하는 상황을 넣어주면 된다.

예) keyword가 변화할때만 실행 + if문으로 컴포넌트 첫생성시 함수 실행되는것 막기

```js
   useEffect(()=>{
     if(keyword !== "" && keyword.length > 2)//컴포넌트 생성시 막기
    console.log("search for", keyword)
  }, [keyword]);
```
