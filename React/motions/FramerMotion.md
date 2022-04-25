# FramerMotion 애니메이션 만들기
## 0.1 FramerMotion이란?
애니메이션을 쉽게 만들 수 있게 도와주는 리액트 라이브러리이다.

## 0.2 설치 & import

```node
npm install framer-motion
```

```js
//App.tsx
import { motion } from "framer-motion";
```

## 0.3 사용법
예)div에 애니메이션을 주고싶을때, 

일반적인 div태그를 사용하면 안되고, motion을 붙여 사용해야한다. 다른 태그들도 마찬가지로 앞에 모션을 붙여준다.

```tsx
//App.tsx
function App() {
  return (
    <Wrapper>
      <Box />
      <div></div>  //불가능
      <motion.div></motion.div> //가능
    </Wrapper>
  );
}
```

## 에러가 난다면?  

여기까지 해보고 콘솔창을 확인했을 때,

failed to compile~~~ 의 에러가 날 수 있는데,
그건 create-react-app 4버전과 motion 5 버전을 사용했을 때 발생한다. 

해결법:  create-react-app의 설정사항을 덮어쓰기한다.
1. CRACO(create-react-app의 설정들을 덮어쓰기해주는 라이브러리)를 설치하고, craco.config.js 파일을 생성한다.
```node
npm install @craco/craco --save
```
2. craco.config.js 파일 

이 설정파일은 package.json파일과 같은 위치에있어야한다.
```js
//craco.config.js
module.exports = {
webpack: {
configure: {
module: {
rules: [
{
type: 'javascript/auto',
test: /\.mjs$/,
include: /node_modules/,
},
],
},
},
},
}
```

3. package.json의 scripts수정

start,build,test의 react-scripts를 craco로 바꿔주기
```json
//수정 전
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
//수정 후
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  },
```

## 0.4 컴포넌트에 애니메이션 주기

일반적인 태그앞에는 motion.을 붙이면 사용이 가능했다.

하지만 이미 만들어진 Box와 같은 컴포넌트에
애니메이션을 주려면 어떻게해야할까?
```tsx
//수정 전
const Box = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

//수정후
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
```
motion.Box는 존재하지 않는다.
그러므로 스타일드 컴포넌트의 태그부분(div)을 고쳐준다.

사용을 해보면, Box 컴포넌트에 prop으로 스타일을 주었을 때 바로 동작한다.
```tsx
//App.tsx
function App() {
  return (
    <Wrapper>
      <Box transition={{duration:3}} animate={{ borderRadius: "100px" }} />
    </Wrapper>
  );
}

```
----------------------------------
# 애니메이션 DEMO 만들어보기

https://www.framer.com/motion/

![Alt text](../IMG/motion.JPG)

사이트 아래부분의 이 여섯개 데모를 만들어보자.

## 1. Animation

처음에는 박스가 안보이다가 나타나면서 커진다.

=> 애니메이션의 시작을 prop inital로 scale:0을 준다.

돌면서 박스가 나온다.

=> 애니메이트에 rotate를 준다.

박스가 돌면서 나오는데 튕기는 느낌이 든다.

=> transition의 기본값이 spring인데, tween으로 바꿔준다.
```tsx
//App.tsx
function App() {
  return (
    <Wrapper>
      <Box
        transition={{ type: "tween", delay: 0.5 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1, rotateZ: 360 }}
      />
    </Wrapper>
  );
}

```

## 2. Variants (코드깔끔하게쓰기,상속받기)
Variants는 애니메이션이 작동하는 stage를 말한다. inital,finish,hidden,from,to 등

Variants을 사용하면 코드를 깔끔하게 할 수 있다.

위의 1번에서 만든 애니메이션을 Variants을 이용해 수정해보자.

1. 먼저 Variants 만들기.
```tsx
const myVars = {
   start : { scale : 0 },
   end : {  scale: 1, rotateZ: 360, transition:{ type: "tween", delay: 0.5} }
}
```
변수이름이나, 안에 start,end의 이름은 중요하지 않다.

2. Box 컴포넌트에 원래있던 prop를 다지우고, 새로작성
```tsx
//App.tsx
function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end" />
    </Wrapper>
  );
}
```
variants로 사용할, 방금 만든 변수명을 적어주고, initial와 animate에 start와 end를 적어주면 동일하게 작동한다.



처음 보라색의 큰 사각형이 나타난다.

## 예제만들기
큰 네모가 나오고 그안에 동그라미 4개가 있는 모습

기본 코드
```tsx
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
background-color: white;
height: 70px;
width: 70px;
border-radius: 35px;
box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Box>
    </Wrapper>
  );
}
```
이렇게 작성하면 원이 일자(세로)로 주르륵보이기 때문에
Box와 Circle에 스타일 추가

```css
/* Box에 추가 */
  display: grid;
  grid-template-columns: repeat(2, 1fr);

/* Circle에 추가 */
  place-self: center;
```

[ 현재상태 ]

![Alt text](../IMG/motion2.JPG)

이렇게 기본모습을 다만들고 애니메이션을 만든다.

큰 박스가 먼저 나온다 => 박스애니메이션부터 만들어보자.

```tsx
const boxVar = {
  start : {
    opacity: 0,
    scale : 0.5,
  },
  end: {
    opacity: 1,
    scale : 1,
    transition:{
    type:"spring",
    duration:0.5,
    bounce: 0.5,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVar} initial="start" animate="end">
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Box>
    </Wrapper>
  );
}
```
**기본적으로 부모의 스타일을 전부 상속받게 된다.**
이제 동그라미 4개 자식컴포넌트의 스타일을 줄건데 
동그라미가 하나씩 나오는 걸 볼수있다 =>

 각각
딜레이시간을 0.5, 1, 1.5, 2 로 줄수도 있지만
이를 위한 유틸리티가 존재한다.

https://www.framer.com/docs/transition/
공식문서의 Orchestration를 보면 delayChildren, staggerChildren으로 부모요소에서
자식요소들의 딜레이를 설정할 수 있다.

### delayChildren : 모든 자식요소를 동일하게 딜레이

### staggerChildren : 자식요소 하나씩 설정가능

```tsx
//App.tsx
const boxVar = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
      bounce: 0.5,
      delayChildren: 0.5,
      staggerChildren:0.3,
    },
  },
};
const circleVar = {
  start: {
    opacity: 0,
    y:10,
  },
  end: {
    opacity: 1,
    y:0,
  },
};

function App() {
  return (
    <Wrapper>
      <Box variants={boxVar} initial="start" animate="end">
        <Circle variants={circleVar}/>
        <Circle variants={circleVar}/>
        <Circle variants={circleVar}/>
        <Circle variants={circleVar}/>
      </Box>
    </Wrapper>
  );
}
```

그렇기 때문에 circle의 variants를 만들때, 부모에서 사용한 이름(start,end)을 똑같이 사용해서 변경한다.

circle에 initial="start" animate="end"를 붙여주지않아도, 부모와 이름이똑같으니 상속받음.

## 3. Gestures (마우스 이벤트/ 이벤트 리슨하기)

Box 컴포넌트에 while을 작성하면
whilehover, whileDrag, foucus 등 많은 이벤트를 볼 수 있다.

```tsx
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVar = {
  hover : { scale: 1.5, rotateZ: 90 },
  click : { scale: 1,  borderRadius: "100px" },
};

function App() {
  return (
    <Wrapper>
      <Box
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}

```

## 4. Drag (제한없는 드래그/ 제한있는 드래그)

위에서 만들었던 코드에 drag만 추가하면 브라우저 전체에서
드래그가 가능하다.

```tsx
function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}
```

만약 드래그하면 컬러가 바뀌는 이벤트를 주고싶다면,
 whileDrag에 주면되는데 rgb값으로 줘야한다.

 ```tsx
 //blue가 string이라 트렌지션 작동안함
  whileDrag={{backgroundColor="blue"}}

  //올바른 예
  whileDrag={{backgroundColor :"rgb(46,204,113)"}}
 ```

[ 제한없는 드래그 전체코드 ]
```tsx
const boxVar = {
  hover : { scale: 1.5, rotateZ: 90 },
  click : { scale: 1,  borderRadius: "100px" },
  drag : { backgroundColor :"rgb(46,204,113)", transition : { duration: 5 }},
};

function App() {
  return (
    <Wrapper>
      <Box
        drag
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
        whileDrag="drag"
      />
    </Wrapper>
  );
}

```

[ 제한있는 드래그 ]
지금은 상하좌우로 다 드래그가 가능한데,
drag="x" 하면 x축으로만 y로하면 y축으로만 드래그가 가능하다.

또한 dragConstraints으로 그 범위지정이 가능하다.
```tsx
//범위지정
function App() {
  return (
    <Wrapper>
      <Box
        drag
        dragConstraints={{ top:-50, bottom:50, left:-50, right:50}}
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
      />
    </Wrapper>
  );
}
```

예제처럼 박스안에 넣기 

1. 먼저 더 큰 박스를 만들다.
```tsx
const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
```
2. BiggerBox 컴포넌트로 Box 컴포넌트 감싸기
```tsx
function App() {
  return (
    <Wrapper>
      <BiggerBox>
      <Box
        drag
        dragConstraints={{ top: -200, bottom: 200, left: -200, right: 200 }}
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
      />
      </BiggerBox>
    </Wrapper>
  );
}
```

중요한건 감싸고있는 큰 박스에 overflow: hidden;을
하는것과, dragConstraints에 큰박스 - 움직이는 박스를 해서 이동할수있는 공간을 설정해주는것.

### ref를 이용하면, 간단하게 설정이가능하다.


useRef : 리액트에서 html 엘리먼트 선택할때 사용.

이렇게 useRef를 써주고,
BiggerBox에 연결한다.
```tsx
const biggerBoxRef = useRef<HTMLDivElement>(null);

<BiggerBox ref={biggerBoxRef}>
```
dragConstraints안에 값들도 다지우고 biggerBoxRef를 넣어준다.
```tsx
function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
      <Box
        drag
        dragSnapToOrigin //놓으면 원래자리로 돌아감
        dragConstraints={biggerBoxRef}
        variants={boxVar}
        whileHover="hover"
        whileTap="click"
      />
      </BiggerBox>
    </Wrapper>
  );
}
```
