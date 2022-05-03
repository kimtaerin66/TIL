# DynamicRoutes

NextJS에선 평범한 기본페이지는 따로 라우팅을 해주지 않아도, pages폴더에 넣으면

그 파일의 이름으로 라우팅이 되었다.

하지만 영화를 클릭하면, 그 영화의 id를 받아와
해당 영화정보페이지로 이동하게 하려면 어떻게 해야할까?

## 리액트에서는
/movies/:id 
이렇게 표현해주면 뒤에 id부분을 받아올 수 있었다.

## NextJS 기본 중첩라우팅
만약 /movies/all 이라는 url을 만들고 싶다면

1. pages에 movies 폴더를 만든다.
2. all.js 파일을 생성한다.

그렇다면 /movies url을 만들고 싶다면?

1. movies폴더에 index.js 파일을 만든다.

(index.js는 index가 url로가지않고, home을 의미한다.)

## NextJS 변수받기
/movies/:id url을 만들려면,
movies폴더를 만들고, 파일명에 대괄호를 열고 변수를 써준다.

파일명 : [id].js

변수명은 마음대로 작성해도 된다.

```js
//pages/movies/[id].js

export default function Detail(){
    return "detail";
}
```

localhost3000/movies/123 접속하니

detail이 잘보인다.

이제 이id를 가져오기위해서 router를 사용해보면, query부분에서 우리가 지어준 변수명id로 확인할수있다.

```js
import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    console.log(router);
    return "detail";
}

//출력
asPath: "/movies/123"
back: ƒ ()
basePath: ""
beforePopState: ƒ ()
components: {/movies/[id]: {…}, /_app: {…}}
defaultLocale: undefined
domainLocales: undefined
events: {on: ƒ, off: ƒ, emit: ƒ}
isFallback: false
isLocaleDomain: false
isPreview: false
isReady: true
locale: undefined
locales: undefined
pathname: "/movies/[id]"
prefetch: ƒ ()
push: ƒ ()
query: {id: '123'}
reload: ƒ ()
replace: ƒ ()
route: "/movies/[id]"
[[Prototype]]: Object
﻿

```

## 영화 detail page 보여주기
자 id까지 받아올 수 있다면, 영화를 클릭시 

해당 영화의 detail정보를 보여주자.

### 방법1 Link
먼저 Link를 이용해서 detail페이지를 보여주자.

```js
//pages/index.js
import Link from "next/link";

export default function Home({ results }) {
 return (
     <div className="container">
      <Title title="Home" />
      {results?.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          <a>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
          </a>
        </Link>
      ))}
          </div>
  );
}
```
이렇게 작성하면, 영화 클릭시 url이 movies/12345 이렇게 된다.

근데 html 문법상 a태그안에 div를 사용하면 안된다.

### 방법2 router hook
두번째 방법은 router hook을 사용하는 것이다.

useRouter를 import해주고,
const router = useRouter();해준다.

그리고 div에 onClick이벤트를 주는데,

이 onClick이벤트는 id를 받고, 이 id를 push매서드로
url에 추가해준다.

※  <div onClick={()=>onClick(movie.id)}

클릭이 된 후 실행해야하기때문에 익명함수를 사용한다.
```js
//pages/index.js

import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id) => {
    router.push(`/movies/${id}`);
  };
    return (
         <div className="container">
      <Title title="Home" />
      {results?.map((movie) => (
            <div onClick={()=>onClick(movie.id)} className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie.original_title}</h4>
            </div>
      ))}
          </div>
  );
}
```

둘중 원하는 방식을 사용한 다음 

영화의 detail페이지에도 api_key가 보일테니 rewrites를 해주자.

## detail rewrites

```js
//next.config
async rewrites(){
        return [
          {
            //생략
        },
        {
          source:"/api/movies/:id",
          destination: `http://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
        }
      ];
      },
};

```

여기서 중요한것은 source에 id라고 받아왔으면,
destination에서도 id라고 써줘야한다.

## URL에서 URL로 state넘겨주기

물론 유저에게는 보이지않게, home에서 이미받아온,

영화 이미지나 타이틀을 detail페이지로 넘겨주자.

router hook을 이용한 방법에서
```js
  const onClick = (id) => {
    router.push(`/movies/${id}`);
  };
```
지금은 push를 이용해 string으로 url을 보내고있는데,

객체로도 보낼 수 있다.
또한 필수는 아니지만, as를 사용하면 브라우저의 url을 마스킹한다.

[방법]
1. 객체를 만들어 pathname지정하기
pathname은 이동할 url

```js
  const onClick = (id) => {
    router.push({
      pathname:`/movies/${id}`,
    });
  };
```

2. query로 정보얹어서 보내기
```js
  const onClick = (id) => {
    router.push({
      pathname:`/movies/${id}`,
      query: {
        title: "lalala"
      },
    });
  };
```

여기까지 작성했다면 홈에 들어가 영화를 클릭하면,

http://localhost:3000/movies/335787?title=lalalala

url이 이렇게나온다.

보기에도 좋지않고, 유저에게 불필요한 정보이니 as를 사용해 숨겨준다.

3. as로 불필요한 정보 유저한테 숨기기

마지막 소괄화앞에 콤마를 찍고,
보이길원하는 url을 써준다.

```js
  const onClick = (id) => {
    router.push({
      pathname:`/movies/${id}`,
      query: {
        title: "lalala"
      },
    },`/movies/${id}`);
  };
```

다시 홈에서 영화를 클릭하면
url이 http://localhost:3000/movies/335787 까지만
보이는걸 확인할 수 있다.

하.지.만 유저에게만 안보일뿐 우리는 영화title을 받고있는 것이다.

4. 정보(title)넘기기
click시 id만 받았었는데 title을 prop으로 주고,(진짜 title을 받으니 이전에 적어준 lalala지움)
return아래 onClick부분에도 movie.original_title을 추가해준다.

```js
//index.js
export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id,title) => {
    router.push({
      pathname:`/movies/${id}`,
      query : {
        title
      }
    },`/movies/${id}`
    );
  };
  return (
    <div className="container">
      <Title title="Home" />
      {results?.map((movie) => (
            <div onClick={()=>onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>
                <Link href={`/movie/${movie.id}`}>
                <a>{movie.original_title}</a>
                </Link>
                </h4>
            </div>
      ))}

```

5. detail page 수정
```js
//[id].js
import { useRouter } from "next/router";

export default function Detail(){
    const router = useRouter();
    return (
        <div>
            <h4>{router.query.title || "Loading..." }</h4>
        </div>
    );
}
```

당연히 이 타이틀은 홈을 방문한 뒤 받아오는거라, 
바로 detail페이지로 오면 Loading.. 문자가 보이게 된다.