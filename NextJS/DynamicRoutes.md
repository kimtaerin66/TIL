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