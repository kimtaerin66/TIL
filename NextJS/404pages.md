# 404 page 만들기

데이터를 받아오지 못했거나, 에러가 났을 때 유저에게 보일 404 페이지 만들기

아주 간단하게 일반 페이지를 만들듯이 하면된다.

1. pages폴더에 404.js파일을 만든다

```js
//pages/404.js
export default function NotFound() {
  return "What are u doing here?";
}

```

유저가 지정되지않은 url로 접속할 경우 보여줄 메세지를 적는다.

2. 확인해보자.
http://localhost:3000/123456 접속시

What are u doing here?

이라는 문구가 보인다.



