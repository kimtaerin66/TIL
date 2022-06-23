# Social Login

이메일이 아닌, 구글이나 깃헙으로 로그인하게 해보자.

firebase.auth의 공식문서에 가보면,

https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?authuser=0&hl=ko#signinwithpopup

signInWithPopup이라는 것을 볼 수 있다.

두가지 옵션이 있는데, 
1. pop-up
2. redirect

redirect은 조금 복잡하기때문에 pop-up으로 해보자.

## 0.1 provider을 만든다.

먼저 현재 버튼이 두개라 name을 주어 구분하자.

```js
//Auth.js
<button name="google">Continue with Google</button>
<button name="github">Continue with Github</button>
```
그리고 함수하나를 만들어, 두 버튼을 클릭했을 때, name을 잘받아오는지 확인하자.

```js
  const onSocialLogin = (e) => {
      console.log(e.target.name);
   }
   return(
       <button onClick={onSocialLogin} name="google">Continue with Google</button>
        <button onClick={onSocialLogin} name="github">Continue with Github</button>
   )
```

출력이 아주 잘됨.
그럼이제, 진짜 만들어보자.

## 0.2 기본 셋팅

fbase.js가 현재 auth로만 되어있기때문에
이부분을 추가해준다.

기본 firebase 부분
```js

export const firebaseOriginal = firebase;
```
그리고 
name을 받아왔을 때, 구글인지 깃헙인지 if문을 만들고
그안에 provider를 만든다.

```js
//Auth.js
import { firebaseOriginal } from './../fbase';

  const onSocialLogin = (e) => {
      const {target : {name}} = e;
      let provider;
      if(name === "google" ){
        provider = new firebaseOriginal.auth.GoogleAuthProvider();
      }else if (name === "github"){
      provider = new firebaseOriginal.auth.GithubAuthProvider();
      }
   };
```

## 0.3 팝업주기

onSocialLogin의 아랫부분에 await로 추가한다.


```js
  const onSocialLogin = async(e) => {
      const {target : {name}} = e;
      let provider;
      if(name === "google" ){
        provider = new firebaseOriginal.auth.GoogleAuthProvider();
      }else if (name === "github"){
      provider = new firebaseOriginal.auth.GithubAuthProvider();
      }
     const data = await authService.signInWithPopup(provider);
   };
```
이제 구글이나 깃헙버튼을 누르면 로그인 팝업이 뜨고,

로그인이 가능하다.

