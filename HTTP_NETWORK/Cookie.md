# Cookie

http는 기본적으로 무상태이다.

따라서 http로 사이트에 접속을해서, 로그인을 하거나 상품을 장바구니에 담아도

기억을 하지못하고, 다음 접속시에는 초기상태로 돌아간다. 이게 굉장히 불편하기때문에

정보를 기억할 수 있게 "쿠키"라는 것을 이용해 정보를 저장해둔다.

## 1.설치하기

express에선 쿠키기능을 기본적으로 제공하지 않기때문에,

cookie-parser 모듈을 설치한다.

[express-cookie관련 공식문서](https://expressjs.com/ko/4x/api.html#req.cookies)


```
$ npm install cookie-parser
```

## 2.셋팅하기
```js
//app.js
const cookieParser = require('cookie-parser');

app.use(cookieParser());
```

## 3.사용하기

개발자모드 > network탭에서 리로드> Headers > Response Headers에서 set-cookie 확인


