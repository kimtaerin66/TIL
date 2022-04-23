# Redux
Redux는 자바스크립트 상태관리 라이브러리이다. 리액트 라이브러리가 아닌, 자바스크립트.

따라서 자바스크립트가 사용된다면 리액트가 아닌 다른곳에서도 사용이 가능하다.

나는 Recoil을 먼저 배워서 사용하고있었는데
그럼 리코일과 어떤차이가 있을까?

# Redux의 특징 3가지

## 1. 단 한개의 store를 사용한다.

(Flux에서는 여러개의 store 사용)

## 2. state는 읽기전용이다. 직접 변경할 수 없다

(변경하기위해서는 action이 dispatch 되야한다.)

## 3. reducer는 순수함수로 작성되야한다.

(비동기처리를 하면안된다.)


# 0.1 설치 & import

```node
npm install redux

//react용 추가설치
 npm install react-redux
 npm install react-router-dom
```

# 0.2 Action
Redux에서 액션이란 작업에 대한 정보를 가지고있는 객체를 말한다.

예로 +버튼을 누르면 값이증가하고, -버튼을 누르면 값이 감소하고,

컬러변경버튼을 누르면 배경색이 랜덤으로 바뀌는 어플리케이션을 만들때, 필요한 action은 이렇게 된다.

[ 필요한 action ]

aciton1. 값을 증가시키기

aciton2. 값을 감소시키기

aciton3. 색상변경하기

[ action 만들기 ]

액션을 만드는 법은 변수를 선언하여, 담아주면 되는데 이름은 대문자와 언더스코어만 가능하다.

```js
//actions/ActionTypes.js

//증가시키는 action
export const INCREMENT = "INCREMENT";
//감소시키는 action
export const DECREMENT = "DECREMENT";
//색상변경하는 action
export const SET_COLOR = "SET_COLOR";
```

action은 객체이기 때문에 console.log로 출력을 해보면,

```js
console.log(INCREMENT);
console.log(DECREMENT);
console.log(SET_COLOR);

//{ type : "INCREMENT" } 
//{ type : "DECREMENT" } 
//{
//type : "SET_COLOR" ,
//color : [ 200, 200, 200 ]
//} 

```

type이 필수이다.

SET_COLOR는 추가로 어떠한 컬러로 바뀌어질지 컬러를 더 받는다.

=> 매번 이러한 action객체를 만들수 없으니 "액션 생성자"를 이용한다

=> =>actions/index.js
actions안에 index.js를 하나더 만들기
(index라는 이름을 쓰면 가장먼저 읽기때문)

주의 : action들을 export default로 내보낸게 아니라 export만 했기때문에 import할때 중괄호가 필요하다.

# 0.3 Reducer
Reducer란 변화를 일으키는 함수를 말한다.

이전 상태와 액션을 받아서 다음상태를 반환한다.

특징 : 이 함수는 순수함수여야 한다

(1. 비동기 작업x,
 2.인수 변경x
 3.동일한 인수 = 동일한 결과 Date.now나 random 같은거 쓰면안된다는 얘기
)

여기서 가장 중요한건 이전상태(state)를 변경하는게 아니라!!
새로운 state를 리턴하는것 => 방법: 기존 상태를 복사하고, 변화를 준다음에 return 

[ Reducer 만들기 ]

counter에 쓰이는 Reducer를 만들어보자.

1. counter.js생성

2. 만든 action들 불러오기 (import)

3. 함수를 만들어 state와 action받기

4. 만든 함수에 switch문을 사용해 type에 따라 다른 결과 리턴

5. 초기값주기 state = 0

```js
//counter.js
import { INCREMENT, DECREMENT, SET_COLOR } from "../actions/ActionTypes";

export default function counter(state = 0, action) {
  switch (action.type) {
    case type.INCREMENT:
      return state + 1;
    case type.DECREMENT:
      return state - 1;
  default:
      return state;
}
```

두번째,  배경컬러를 바꾸는 reducer만들기

1. ui.js생성 (새 js파일생성) //동일

2. 만든 action들 불러오기 (import) //동일

3. 함수를 만들어 state와 action받기 //동일

4. 만든 함수에 switch문을 사용해 type에 따라 다른 결과 리턴

5. 초기값주기, 초기값이 단순한 숫자나 스트링이아니라 변수로 따로 선언해주었다.

```js
//ui.js
import * as types from "../actions/ActionTypes";

const initialState = {
  color: [255, 255, 255],
};

export default function ui(state = initialState, action) {
  if (action.types === types.SET_COLOR) {
    return {
      color: action.color,
    };
  } else {
    return state;
  }
}
```

마지막으로 이렇게 여러개의 reducer가 있다면,

[ 하나로 합치기 = combineReducers사용]

1. reducers/index.js 생성

2. combineReducers import

3. 만든 reducer들 전부 import

4. combineReducers 선언

```js
//reducers/index.js
import { combineReducers } from "redux";
import counter from "./counter";
import ui from "./ui";

const reducer = combineReducers({
  counter,ui,
});

export default reducer;

```

# 0.4 Store
Store란 어플리케이션의 "현재상태"를 지니고 있는것

어플리케이션은 단 하나의 store만 가지고 있어야한다.

[ Store가 하는일 ]

1. dispatch(action)
dispatch가 실행되면 전달받은 action으로 현재상태를 변경한다.

2. getState()
현재 상태를 반환한다.

3. subscribe(listener)
상태가 바뀔때마다 실행할 함수(listener)를 등록한다.


[ Store 만들기 ]

1. src/index.js에 createStore와 reducer import

2. createStore로 store만들고 reducer 받기

```js
//src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { createStore } from "redux";
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```

-------------------
예제1) 현재 상태를 기록하게 해보자.

현재상태 출력 => getState();

```js
console.log(store.getState());
```

예제2) 변화가 있을 때마다, 특정함수 실행하기

 변화=>subscribe 특정함수=>listener(콜백함수)

```js
store.subscribe(() => console.log(store.getState()));
```

그런데, 변화를 주려면 action이 필요하고,

action을 사용하려면 dispatch로 사용해야한다.

1. actions들 불러오기 (이름정의 말고 )
```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./reducers";
import * as actions from "./actions/index"
const store = createStore(reducers);

store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
//SET_COLOR는 파라미터(바꿀 컬러색)필요
store.dispatch(actions.setColor([200,200,200]));

ReactDOM.render(<App />, document.getElementById("root"));
```

예제3) 더이상 그만 출력하고 싶다면 

unsubscribe를 실행하면 되는데,

위에서 만든 subscribe를 변수에 담고 호출하면

unsubscribe가 되어 그 후엔 출력이 되지않는다.
```js
const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(actions.increment());
store.dispatch(actions.increment());
store.dispatch(actions.decrement());
//SET_COLOR는 파라미터(바꿀 컬러색)필요
store.dispatch(actions.setColor([200,200,200]));

unsubscribe();

store.dispatch(actions.increment()); //출력안됨
store.dispatch(actions.increment()); //출력안됨


```

# 0.5 컴포넌트에서 redux쓰기 (연결하기)
react-redux : 뷰 레이어 바인딩을 사용한다.

react-redux는 리액트 컴포넌트에서 redux를 사용할때,
복잡한 작업을 대신해준다.

[ Provider, connect 사용법 ]

Provider

1. index.js에서 Provider import 
2. App컴포넌트를 Provider컴포넌트로 감싸기
3. Provider props로 store설정

```js
//index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import reducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

connect(옵션함수)

:컴포넌트를 redux에 연결하는 함수를 반환한다.

옵션함수 4종류 :
mapStateToProps //state를 해당컴포넌트로 불러옴
mapDispatchToProps
mergeProps
options

이 옵션함수들을 잘 사용하면,
보다 편하게 값들을 가지고오고,
변화시킬 수 있다.

```js
//components/Counter.js
import React from "react";
import Value from "./Value";
import Control from "./Control";
import counter from "../reducers/counter";
import { connect } from "react-redux";
import * as actions from '../actions';

function Counter() {
  return (
    <div>
      <Value />
      <Control />
    </div>
  );
}

//mapStateToProps 작성
const mapStateToProps = (state) => {
   return {//값을 연결  
   state : state.counter.state,
   color : state.ui.color
   };
}

const mapDispatchToProps = (dispatch) => {
  // action을 dispatch하는 함수를 props로 연결
   return {
        handleIncrement : () => { dispatch(actions.increment())},
        handleDecrement : () => { dispatch(actions.decrement())},
        handleColor : (color) => { dispatch(actions.setColor(color))}  
   };
};

export default connect(mapStateToProps,mapDispatchToProps) (Counter);

```

mapDispatchToProps를 더 쉽게하려면

=> bindActionCreators
```js
import React from "react";
import Value from "./Value";
import Control from "./Control";
import counter from "../reducers/counter";
import { connect, bindActionCreators } from "react-redux";
import * as actions from '../actions';

function Counter() {
  return (
    <div>
      <Value />
      <Control />
    </div>
  );
}

//mapStateToProps 작성
const mapStateToProps = (state) => {
   return {//값을 연결  
   state : state.counter.state,
   color : state.ui.color
   };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
  //action들이 들어있는 객체, dispatch 받음
};

export default connect(mapStateToProps,mapDispatchToProps) (Counter);

```
