# useRouteMatch

useRouteMatch는 react-router-dom의 매서드로 유저가 특정한 url에 있는지 
여부를 확인해 준다.

## 01. 사용법

사용할 파일에 import해주고, 
```tsx
import { useRouteMatch } from "react-router-dom";

function Coin() {
  const priceMatch = useRouteMatch("/:coinId/price");  
  console.log(priceMatch);
    return(
 //생략
    )
};
```
useRouteMatch()괄호안에 확인하고 싶은
url을 작성한다.

그리고 console.log로 출력하면, useRouteMatch가 접속여부를 알려준다. 

콘솔창을 확인해보면 Object를 받아오는데,
```
//Object를 열어보면
{path: '/:coinId/price', url: '/btc-bitcoin/price', isExact: true, params: {…}}
isExact: true
params: {coinId: 'btc-bitcoin'}
path: "/:coinId/price"
url: "/btc-bitcoin/price"
[[Prototype]]: Object
```
여기서 확인할것이 isExact: true

내가 원하는 url에 있다는 것이다.
만약 다른 url에 있으면 null값이 출력된다.