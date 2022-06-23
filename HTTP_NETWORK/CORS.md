# CORS
## 01. CORS란?

Cross-Origin Resource Sharing의 약자로, 

옛날에는 하나의 오리진에서만 리소스를 요청했는데, 요즘은 유튜브나 깃헙등의 다른 서버의 리소스가 필요한 경우가 많아지게 되면서 다른 오리진=cross origin이 필요하게 되었다.

그/러/나 보안상의 이유로 cross-origin을 제한한다

## 02. cross-origin의 기준
cross-origin은 다음 중 1가지라도 다른 경우엔 해당이 된다.

1. 프로토콜 http or https (둘은 다르다.) 
2. 도메인 
3. 포트번호 

## 03. preflight request

그럼 여러개의 리소스가 필요할때는?

서버가 허락한 범위내에서만 사용가능하기때문에 

"서버에서 허락하는 조건들을 다 맞추고 있는가 "

 사전확인 요청(preflight request)을 한다.

 preflight request는 body(내용)없이 헤더만 보내

 이 헤더가 유효한 요청인지 확인한다.

 유효하지 않다면 에러가 발생하고, 유효하다면 원래 보내려던 요청을 다시 보내 응답을 받게된다.

 -----------------------

 # 리액트에서 cors문제 해결하기

 방법 1 : node.js로 다른 서버를 만들어 그 서버를 중간에 두고 요청을 보낸다.

 방법 2 : 리액트 라이브러리로 프록시를 구축한다.

 ## [ 방법1 ]

 node express로 서버를 구축해보자.

 ```js
//main.js 서버기초셋팅
const express = require('express')
const app = express();
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

```

CORS 미들웨어 사용하기

작성중인 js에 추가로 작성해주면된다.

```js
const cors = require('cors')
app.use(cors()) // 모든 요청에 대해 CORS 허용
```