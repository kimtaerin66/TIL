# Styled-Components

## 1. Styled-Components
Styled-Components는 리액트에서 css를 더욱 편리하게 사용할 수 있도록 도와주는 라이브러리.

리액트에서 css를 사용하려면, 세가지 방법이있는데
1. 인라인 스타일로 작성 (단점 - 전체코드량 증가, 가독성 떨어짐)
2. css파일 import (단점 - 전체파일에 css적용)
3. css module로 작성 (단점 - className 계속 붙여야함)

이 세가지 방법의 단점들을 보완하고, 더 쉽게 사용하고자하는 것이 Styled-Components이다.

## 2. 설치
사용하기 위해선 먼저 설치 후 import를 해야한다.

```node
$ npm i styled-components
```
js파일 상단에 import
```js
import styled from "styled-components";
```
## 3. 기본 사용법
[ 기본문법 ]

컴포넌트를 만드는것이므로, 대문자로 시작해야한다.(box(x) Box(o))

styled.뒤에 만드려는 태그를 적는다.

백틱안에 원하는 스타일을 css로 작성한다.
```js
const 변수명 = styled.태그`
//이 안에 css를 작성한다.
`;
```
예제) div에 style 주기.

```js
const Box = styled.div`
width: 100px;
height : 100px;
background-color : yellow;
`;

//사용
<Box />
```

[ 중복코드제거 > props ]

예제) 가로, 세로 길이는 같고, 배경컬러만 다른 두개의 div만들기.

```js
const Box1 = styled.div`
width: 100px;
height : 100px;
background-color : yellow;
`

const Box2 = styled.div`
width: 100px;
height : 100px;
background-color : tomato;
`;

<Box1 />
<Box2 />
```
이렇게 만들면, 중복되는 코드가 너무 많다. 그래서 props를 이용해서

컬러만 (다른부분)받아 준다.

```js
const Box = styled.div`
width: 100px;
height : 100px;
background-color : ${props.bgColor};
`;

<Box bgColor="yellow"/>
<Box bgColor="tomato"/>
```

## 4. 확장
Styled-Components에서 확장이란,

기존에 만들어놓은 스타일 컴포넌트의 css속성 + 추가의 스타일을 말한다.

예) Box와 Circle이라는 두 컴포넌트가 있다.

두 컴포넌트는 css가 단한줄 빼고 전부 동일하다.
```js
const Box = styled.div`
background-color :${props =>props.bgColor};
width: 100px;
height : 100px;
`;

const Circle = styled.div`
background-color :${props =>props.bgColor};
width: 100px;
height : 100px;
border-radius:50px ;
```
이렇게 작성하면 중복이 너무 많다.

[ 올바른 방법 ]

태그대신(div) 기존컴포넌트(Box) 작성하기,

기능이 추가되는 컴포넌트(Circle)에, 중복되는 부분을 전부지우고,
추가되는 부분만 작성
```js
const Box = styled.div`
background-color :${props =>props.bgColor};
width: 100px;
height : 100px;
`;

const Circle = styled(Box)`
border-radius:50px ;
```

## 5. 태그를 바꾸고 싶을때 as

버튼에 준 스타일을 그대로 가지고와, 다른 태그에 주고 싶을때는
어떻게할까?

확장을 하게되면, 또 다른 버튼이 생기는것.

이때는 확장이 아닌 as를 사용한다.

예제) Btn의 스타일을 a태그에 주기

as 다음에 사용하고 싶은 태그를 작성해주면된다.

```js
const Btn = styled.button`
background-color :tomato;
border :0;
color: white ;
border-radius: 15px ;
`;

  <Btn>Log in</Btn>
  <Btn as="a" href="/">Log in</Btn>
```

## 6. 컴포넌트에 속성주기 attrs

여러개의 input이 있을때, 모두 required 속성을 가지려고한다. 

```js
const Input = styled.input.attrs({ required : true,  placeholder :"write down"})`
background-color :tomato;
`;

function App() {
  return (
  <Father ad="header">
   <Input />
   <Input />
   <Input />
   <Input />
   <Input />
  </Father>
   );
}
```
이렇게 전부 작성하지말고, 컴포넌트를 생성할때
attr로 작성해주면, 속성이 추가된채로 생성된다.

