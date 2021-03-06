# nodeJS Express
nodeJS는 브라우저가 아닌 환경에서도 자바스크립트를 사용할 수 있게하는 자바스크립트 런타임이다.

nodeJS는 웹서버가 아니라, nodeJS로 무언가 할 수 없다. 그 대신에 http서버를 직접 구현해야한다.

## 0.1 Express란?

http를 직접 구현해야한다고 했는데, Express는 웹서버에서 필요한 기능이 이미 구현되어있는 프레임워크이다.

## 0.2 설치
먼저 node와 npm이 설치되어있으면 되고,
최신버전이 아니면 업그레이드한다
```node
업그레이드하기
npm install -g npm
```

1. 프로젝트를 할 폴더를 하나만들기

2. 해당폴더에 npm init

3. express 설치 (save로)
```node
npm install --save express
```

## 0.3 실행하기

1. main.js 생성
```js
//main.js
const express = require('express'); //모듈불러오기
const app = express(); //express생성하여 app에 담기


app.get('/', (req, res) => {  //get요청을 받으면
    res.send('Hello world'); //hello world 보내기
});

app.listen(3000, //기본설정 3000번 port로 연결하고,
() => console.log('App is listening on port 3000!')); //연결이되면 실행할 콜백함수
```

2. 실행
```node
node main.js
```

문제가 없다면 내가 작성한
App is listening on port 3000!이 

터미널에 출력될것이다. 따로 브라우저가 열리지 않아서
직접 열어야한다. 

[ 브라우저 확인시 ]
Hello world 가 보임

## 0.4 기본 라우팅해보기

express의 문법은 

app.METHOD(PATH, HANDLER)

이렇게 생겼다.

METHOD : get, phst, delete, put 등

PATH: 라우트 경로

HANDLER : 실행될 콜백 함수

main.js에 이 코드들을 추가해보자.
```js
//main.js
app.get('/user/:id', (req, res)=> {
    res.send('Received a GET request, param:' + req.params.id);
});

app.post('/user', (req,res) => {
    res.json({success:true})
});

app.put('/user', (req,res) => {
    res.status(400).json({message:'Hey, you. Bad Request!'})
});

app.delete('/user', (req,res) => {
    res.send('Received a DELETE request');
});
```

서버를 껏다가 재시작해보면, 첫화면에는
Hello world, 

[get요청]
```js
app.get('/user/:id', (req, res)=> {
    res.send('Received a GET request, param:' + req.params.id);
});
```
그리고 get요청으로 보낸것을 확인해보면

url에 localhost:3000/user/12345 
이런식으로 작성하면

브라우저에 

Received a GET request, param:12345 가 보인다.

param뒷부분은 내가 작성한 그대로를 불러오는것.

그외의 다른 요청 post,put등은 브라우저에서 확인할수가 없어 API 테스팅 도구인 POSTMAN을 사용해보자.

## 0.5 POSTMAN

POSTMAN을 설치하고, workspace를 만든다.

먼저 브라우저로 확인한 get요청이 잘보이나 확인해보자.

get으로 설정하고, 

http://localhost:3000/ 를 입력후

send를 누르면 

하단에 Hello world가 출력된다.

![Alt text](../IMG/postman1.JPG)

두번째 get요청 /user/param도 역시

http://localhost:3000/user/12345 으로
출력이 잘된다.

- post 요청 확인

![Alt text](../IMG/postman2.JPG)

- put 요청 확인

![Alt text](../IMG/postman3.JPG)

- delete 요청 확인

![Alt text](../IMG/postman4.JPG)

요청이 전부 잘 작동한다. 그럼 이제 모듈화해서
내보내보자.

## 0.6 모듈화하기
모듈화하는 이유: 한파일이 너무 커지는 것을 방지, 가독성, 유지보수성 높이기

router폴더생성 > user.js파일만들기

```js
//user.js
const express = require('express'); 
const router = express.Router();

router.get('/:id', (req,res)=> {
    res.send('Received a GET request, param:' + req.params.id);
});

router.post('/', (req, res) => {
    res.json({success : true});
});

router.put('/', (req,res)=>{
    res.status(400).json({message:'Hey, you. Bad Request!'});
});

router.delete('/',(req,res)=> {
    res.send('Received a DELETE request');
});

module.exports = router;
```

## 0.7 모듈화한 파일 불러와 사용하기

main.js에서 user.js(모듈화한파일)를 불러온다.
```js
//main.js
//추가된 코드
const user = require('./routes/user');
app.use('/user',user);
```

그리고 서버를 재시작

## 0.8 미들웨어

일종의 플러그인과 같은 역할을 한다.

express에 없는 것도 만들거나, 다른사람이 이미 만들어 놓은것을 사용하면된다.

[ 직접만들기 ]

미들웨어는request, response 그리고 다음에 실행할 콜백함수 next를 받는다.

작성 후 app.use에 넣어주면 된다.

```js
//main.js
const myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};

app.use(myLogger);
```

[ 전체코드 ]
```js
//main.js
const express = require("express"); //모듈불러오기
const app = express(); //express생성하여 app에 담기
const user = require("./routes/user"); //모듈화된것 불러오기

app.use("/user", user); //모듈화 사용

//미들웨어 만들기
const myLogger = (req, res, next) => {
  console.log(req.url);
  next();
};
app.use(myLogger);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => console.log("App is listening on port 3000!"));

```

get요청으로 http://localhost:3000/user/rin로 접속하니

=> Received a GET request, param:rin이 출력된다.

console.log(req.url);에 의해 url이 출력된것이다.


## 0.9 이미 만들어진 미들웨어 설치(바디파서)

morgan : 로깅 미들웨어
body-parser : JSON 형태 데이터 파싱

설치법
```node
npm install --save morgan body-parser
```

[ morgan사용하기 ]

main.js에 설정하기

사용법을 알고싶으면 구글링이나,

터미널창에 npm repo morgan 치면 바로 연결됨.

morgan을 쓰면 좀더 상세한 정보를 얻을 수 있다. dev, short,common,combined 등

```js
//main.js
const morgan = require('morgan');

app.use(morgan('dev'));
```

[ body-parser 사용하기 ]

json형태의 body를 읽을 수 있게 해준다.

body-parser가 없다면 req의 body에 접근할수없다.

```js
//main.js
const bodyParser = require('body-parser');
app.use(bodyParser.json());

```

bodyParser를 사용해보기위해,
user.js의 post부분을 수정해보자.

```js
//router/user.js

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body,null,2));
    res.json({
        success:true,
        user:req.body.username //특정값불러오기
    });
});
```

그리고 postman에서 post요청으로 
http://localhost:3000/user/에 body를 보내보자.

Body선택 => JSON선택 => 객체로 보내기

보낼내용
```
{
    "username" : "rin",
    "othervalue" : "asdfgdgds"
}
```

console에도 작성한 내용이 출력된다.

## 10. 정적(static)파일 제공하기

html,css 등을 브라우저에서 접근할 수 있도록 제공하기.

방법: express에 내장된 static을 이용하면된다.

```js
//main.js
//문법
app.use('/', express.static('public'));
```
앞쪽에 있는 경로 (/)로 들어왔을때, 
public이라는 폴더 안의 내용을 제공해줘.
라는 뜻이다.

출력을 확인하기위해 public폴더를 생성하고,
index.html을 만들자.

```html
<!--public/index.html  -->
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Hello</title>
</head>
<body>
    Hello Express World
</body>
</html>
```

```js
//main.js
const express = require("express"); 
const app = express(); 
const user = require("./routes/user"); 
const bodyParser = require('body-parser')

app.use(bodyParser.json());

//static제공
app.use('/', express.static('public'));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/user', user);

app.listen(3000, () => console.log("App is listening on port 3000!"));

```

출력은 index.html을 읽어 

Hello Express World이 출력된다.

그 이유는 
static 코드가 app.get코드보다 위에있기 때문에!

아래쪽에 작성하면 app.get요청의 기존 Hello world가 출력된다.
