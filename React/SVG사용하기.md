# SVG사용하기

svg 이미지를 사용해보자.

## 0.1 이미지 가져오기

예제로 airbnb 로고를 사용할것인데, 폰트어썸에서 가져왔다.

폰트어썸 접속 > airbnb 검색 > 클릭후 </>로 카피  

## 0.2 코드 수정하기
코드를 카피해서 가져오면 처음은 이상태가 되는데 필요없는 주석처리들은 지워주기
```js
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224 373.12c-25.24-31.67-40.08-59.43-45-83.18-22.55-88 112.61-88 90.06 0-5.45 24.25-20.29 52-45 83.18zm138.15 73.23c-42.06 18.31-83.67-10.88-119.3-50.47 103.9-130.07 46.11-200-18.85-200-54.92 0-85.16 46.51-73.28 100.5 6.93 29.19 25.23 62.39 54.43 99.5-32.53 36.05-60.55 52.69-85.15 54.92-50 7.43-89.11-41.06-71.3-91.09 15.1-39.16 111.72-231.18 115.87-241.56 15.75-30.07 25.56-57.4 59.38-57.4 32.34 0 43.4 25.94 60.37 59.87 36 70.62 89.35 177.48 114.84 239.09 13.17 33.07-1.37 71.29-37.01 86.64zm47-136.12C280.27 35.93 273.13 32 224 32c-45.52 0-64.87 31.67-84.66 72.79C33.18 317.1 22.89 347.19 22 349.81-3.22 419.14 48.74 480 111.63 480c21.71 0 60.61-6.06 112.37-62.4 58.68 63.78 101.26 62.4 112.37 62.4 62.89.05 114.85-60.86 89.61-130.19.02-3.89-16.82-38.9-16.82-39.58z"/></svg>
```

## 0.3 스타일 설정

svg역시 스타일컴포넌트로 지정하여 스타일을 
줄 수 있다. 

svg에 fill부분이 없어서 기본컬러인 블랙으로 나오는데 fill ="white"
를 추가하거나, 스타일컴포넌트에 컬러로 추가하면 색상을 변경할 수 있다.

```js
const Svg = styled.svg`
width: 100px;
height:100px;
`;
```

## 0.4 응용
애니메이션 효과적용하여, stroke먼저 그려지고, 색 칠해지는 로고효과

```js

const Svg = styled.svg`
  width: 100px;
  height: 100px;
  path {
    stroke: "white";
    stroke-width: "2";
  }
`;

const svg = {
  start: { pathLength: 0, fill: "rgba(255,255,255,0)" },
  end: {
    fill: "rgba(255,255,255,1)",
    pathLength: 1,
  },
};

function App() {
  const x = useMotionValue(0);
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const gradient = useTransform(
    x,
    [-600, 0, 600],
    [
      "linear-gradient(135deg, rgb(147, 188, 246), rgb(65, 62, 250))",
      "linear-gradient(135deg, rgb(238, 0, 153), rgb(221, 0, 238))",
      "linear-gradient(135deg, rgb(239, 172, 251), rgb(66, 0, 71))",
    ]
  );

  return (
    <Wrapper style={{ background: gradient }}>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <motion.path //path > motion.path로변경
          variants={svg}
          initial={"start"}
          animate={"end"}
          //트랜지션 값 따로따로주기
        />
      </Svg>
    </Wrapper>
  );
}

```

