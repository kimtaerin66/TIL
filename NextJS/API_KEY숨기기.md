# API_KEY숨기기
내 api key가 다른사람에게 코드를 통해 다른사람에 공개되는 일이 없도록 숨겨보자.

먼저 예시로 https://www.themoviedb.org/settings/api에 가입해 내 api key를 가져왔다.

## 0.1 api key찾기

먼저 index.js에

const API_KEY = "1111111111111111111";

이렇게 적어두고 프로젝트를 만들었다.
그럼 어디서 이 api key를 볼 수 있을까?

개발자모드(우클릭>검사) > network > repuest중에 찾기

이렇게 내 api_key가 다 공개된다.

## 0.2 redirect
request에 mask를 씌우는것과같은

redirecs와 rewrites를 배워보자.

먼저 redirects는 말그대로 방향을 지정해준다.

next.config.js 파일에서 redirects 부분을 다른쪽으로 설정해주면된다.

[작성법]
1. async를 사용해 redirect함수만들기
```js
//next.config.js
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        
      }
    ]
  }
}

```
2. source와 destination설정

유저가 어디론가 이동하면, 어디어디로 보낸다

ex) contact로 이동하면, form으로 보낸다.
```js
//next.config.js
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source : "/contact",
        destination : "/form",
      }
    ]
  }
}
```
3. permanent 설정
브라우저나, 검색엔진이 이 정보를 기억하는지

여부(불린) 결정하기

4. 재시작

설정파일을 수정했기때문에 저장 후 서버를 재시작한다.

5. 확인하기

재시작했다면 주소에 /contact를 넣어보자.

엔터를 치자마자 /form으로 이동된다.

※계속 redirects이 안되서 자세히보니,
redirect라고 s를 빼먹어서 안되는거였다.

s까지 필수이다.

6. 활용
사용하지 않는 old-blog주소를 new-blog로 이동시켜주기.

중요한건 동일한 path받기

```js
module.exports  = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source : "/old-blog/:path",
        destination : "/new-sexy-blog/:path",
        permanent : false,
      },
    ];
  },
};
//http://localhost:3000/old-blog/123454라고
//입력하고 엔터를 치면
//http://localhost:3000/new-sexy-blog/123454로 이동된다.
```
만약 path가 너무 길다면 *를 붙여주면 그뒤에오는 모든것을 catch한다.
```js
module.exports  = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source : "/old-blog/:path*",
        destination : "/new-sexy-blog/:path*",
        permanent : false,
      },
    ];
  },
};
```


## 0.3  rewrites
rewrites는 redirects와 다르다.
redirects는 특정 url에 접속하면, 다른 url로
이동되면서  url이 변하는걸 유저가 볼 수 
있지만, 

rewrites은 이동은 되지만, url은 변하지않는다.
[작성법]

1. async를 사용해 rewrites함수만들기

redirects와 동일하게 형태로 작성한다.
```js
//next.config.js
const API_KEY = "111111111";

module.exports  = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source : "/old-blog/:path*",
        destination : "/new-sexy-blog/:path*",
        permanent : false,
      },
    ];
  },
      async rewrites(){
        return [
          {
            source: "/api/movies",
            destination: `http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
        },
      ];
      },
};
```
2. fetch부분주소를 source와 동일하게 바꿔주기

기존 index.js에 영화 정보를 받아오는 fetch주소가 

http://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}
였는데, 

이렇게 작성하면 api_key가 보이니, source에 작성한 것과 같이 고쳐준다.
```js
//index.js
 useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch( `/api/movies` )
      ).json();
```

3. 원래의 fetch주소(api가 보이는)를 destination에 넣어주기

이렇게작성하면 fetch에 의해 `/api/movies`로
이동되고,

rewrites에의해 원래 우리가 처음에 작성한 주소로 이동된다. 그러나 유저에게는 이 바뀐url이 보이지 않는다.

물론 개발자모드의 network에서도 api key를 찾을 수 없게된다.

## 다른방법 env이용

1. api를 이렇게작성하고,
```js
const API_KEY = process.env.API_KEY;
```
2. .env파일 생성

동일한 이름으로 작성해준다.
```env
//.env
API_KEY = 1111111111111
```

3. git ignore파일에 .env가 포함되게한다 (github에 안올라가게)

```
//gitignore

# vercel
.vercel
.env (추가한부분)
```

제일마지막부분에 .env만 추가해주면된다.

