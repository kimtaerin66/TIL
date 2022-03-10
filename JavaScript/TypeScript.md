## interface

TypeScript에게 props 타입을 설명해주는 것. 


```js
const x = (a:number, b:number) => a + b;
```

이렇게 받는 인자가 어떤타입인지 설명해주는 것처럼,

styled-component에서 props를 받을때도 타입 설명이필요하다.

## ※  props-type과 다른점은, props-type은 실행 후에 에러가 확인되지만, interface 방법은 실행전에 에러를 확인할 수 있다.

Circle 컴포넌트가 bgColor를 받고있는데, 이 bg컬러에 빨간줄이 쳐지면서, 에러가 난다.
```js
//App.js
function App() {
  return(
   <div>
    <Circle bgColor="teal" />
    <Circle bgColor="tomato" />
  </div>
  );
}

//Circle.js

const Container = styled.div`
width : 200px;
height : 200px;
background-color: ${props =>props.bgColor};
border-radius: 100px;
`;

function Circle({ bgColor } ){
    return <Container/>;
}

```
이럴때 interface는 사용해, 어떠한 props를 받는지 설명해줘야한다.

```tsx

const Container = styled.div<CircleProps>` 
width : 200px;
height : 200px;
background-color: ${props =>props.bgColor};
border-radius: 100px;
`;

interface CircleProps {
    bgColor : string;
} //어떤 타입을 받는지 설명해주기.


function Circle({ bgColor } : CircleProps) {
    return <Container bgColor={bgColor} />;
}
```

CircleProps은 bgColor를 받고, 이 bgColor는 string타입이다.

그리고, bgColor를 받는 Circle 어떤 타입을 받는지 적어주고

styledComponent에도 CircleProps를 전달한다.

## Optional Props

지금까지는 props가 전부 required라 적지않으면, 오류가 발생했다.

props가 있어도되고, 없어도 되는 선택사항으로 받아보자.

예) 어떤 원은 border은 가지고있고, 어떤 어떤 원은 가지고 있지 않다.

```js
interface CircleProps {
    bgColor : string;
    borderColor : string;
}
```
이렇게 borderColor를 추가하면, 아직 props 전달을 하지않았기에,

또 빨간줄이 뜬다. 아주 간단하게 borderColor뒤에 ? 만 붙여주면 해결이 가능하다.

```js
interface CircleProps {
    bgColor : string; //required
    borderColor? : string; //optional
}
```