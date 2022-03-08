# Styled-Components2

알아두면 더 편리한 Styled-Components 문법들

## 1. Selectors

Styled-Components인 Box안에, 
span이 있다. 

이 스타일 컴포넌트가 아닌 이 span을 선택하려면?

Box안에서 span {} 이렇게 열어준다.

비슷한 방법으로 hover도 가능한데,

span:hover로 따로 작성하는게 아니라,

&(앤퍼샌드)를 사용해 span 스타일안에 &:hover로 작성해준다.

```js
const Box = styled.div`
  width:200px ;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items:center;
  span{
    font-size: 36px;
    &:hover{
      font-size: 46px;
  }
`;

function App() {
  return (
  <Father>
    <Box>
      <span>😍</span>
    </Box>
  </Father>
   );
}
```

## 2. 나만의 Selectors

위에서 span의 스타일을 지정해줬는데,

span이 아니라 p로 바꾼다면, 당연히 전부다 동작하지 않는다.

태그가 바뀌더라도 계속 동작하게 만들려면 내가 컴포넌트를 만들어 사용하면된다.

```js
//이모티콘 크기를 변경하기위해 새로 작성한 컴포넌트

//기존 span대신 ${Emoji}작성
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  width:200px ;
  height: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items:center;
  ${Emoji}{ /
    &:hover{
      font-size: 90px;
  }
`;

function App() {
  return (
  <Father>
    <Box>
      <Emoji as="p">😍</Emoji> 
    </Box>
  </Father>
   );
}

```
이렇게 작성한다면, 스타일이 span에 묶여있는 것이 아니기때문에

다른 태그로 바꾸더라도 여전히 적용된다.

