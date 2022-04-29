# react-helmet
react-helmet이란 만든 프로젝트, 사이트의 타이틀을 나타내준다.

일반적으로 한번 타이틀을 적으면 그 타이틀로 계속 유지되지만 react-helmet을 이용해서 적으면, 변수를 이용할 수 도 있어 원하는 페이지마다 다른 타이틀을 적용하는 효과를 낼 수 있다.

## 0.1 설치 & import

```node
//기본설치
npm install --save react-helmet

//타입스크립트
 npm i --save-dev @types/react-helmet 
```

```js
//Home.tsx
import {Helmet} from "react-helmet";
```
## 0.2 Helmet컴포넌트로 작성

나의 겨우엔 HOME의 Wrapper안에 넣어주었다.
Helmet 컴포넌트를 만들고, 안에 title태그로 써준다.

```tsx
//Home.tsx
return (
     <Wrapper>
       <Helmet>
        <title>The Contents</title>
      </Helmet>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
...
//생략

```

이렇게 하면 바로 타이틀이 The Contents로 바뀐다.

# favicon 설정하기

그럼 타이틀을 더 돋보이게 꾸미기위해서 favicon을 설정해보자.

나의 경우 원하는 png파일을 다운받아 icon.png라고 저장하여,

index.html파일이 있는 public폴더에 넣어주었다.

그리고 index.html을 이렇게 link부분을 수정해주면 된다.

```html
//public/index.html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description"content="Web site created using create-react-app"/>
    ///
    <link rel="icon" href="%PUBLIC_URL%/icon.png" />
    
    
```