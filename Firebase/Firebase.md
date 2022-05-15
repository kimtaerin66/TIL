# Firebase

## 0.1 Firebase란?

https://firebase.google.com/

Firebase는 원래 데이터베이스였다.

구글에 인수된 이후 기능이 확장 되어, 지금은 웹사이트를 통해 아주 훌륭한 백엔드 기능을 제공해주는 서비스이다.

예를 들어, 데이터베이스 관련코드없이 데이터베이스를 사용할 수 있거나, 사진 업로드, 호스팅 등을 가능하게 해준다. 

단 파이어베이스는 무료가 아니다.

물론 무료로 시작할 수 있지만, 사용자가 많아지거나 
업로드할 파일의 크기가 커지면 비용을 지불해야한다.

경쟁사는 AWS의 amplify인데, firebase보다는 오래되지않아서, 아직 
커뮤니티가 크지않다.

## 0.2 Firebase를 사용해야 하는 경우
백엔드에 대한 진입이 쉽기때문에 많이 사용되는데, 실제 프로젝트 용도는 아니다.

왜냐하면, 모든 서버나 데이터베이스를 구글,파이어베이스에서 빌려쓰는 것이기 때문에 실제로 내것은 존재하지 않는다. 

[ 사용이 적합한 경우 ] 

" 아이디어를 테스트 하고 싶을 때 "

## 0.3 프로젝트 생성
react안에서 사용할 것이기에, npx create-react-app을 해주고,

firebase의 공식문서에 로그인을 하고, 
왼쪽에 go to console 클릭

get started > 프로젝트 추가 > 프로젝트 이름적고 생성 > 계속 클릭

web선택 > 이름써주고 > 호스팅설정 x > 앱등록 


## 0.4 Firebase SDK 추가
다음화면에 바로 코드가 나오는데
우린 리액트식으로 사용할것이라,

그 아랫부분의 Web SDK API 참조를 클릭한다

```node
npm i firebase@9.6.1
```
최근 firebase가 업데이트되면서, 이슈가 생겼다.

이전 버전을 사용하기위해 npm i firebase@9.6.1(이전버전) 사용

그리고 이전페이지의 이부분을 복사해주자.

![Alt text](../IMG/firebase.JPG)

src폴더에 firebase.js파일을 만들고
붙여넣기.

import와 initialize를 해준다.
```js
//src/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTvDgJjdpMkhkAtJJA6W0W0GJA94ZI3U8",
    authDomain: "bluebird-52159.firebaseapp.com",
    projectId: "bluebird-52159",
    storageBucket: "bluebird-52159.appspot.com",
    messagingSenderId: "304131377670",
    appId: "1:304131377670:web:b6e5a829a2fb3008afd187"
  };

export default firebase.initializeApp(firebaseConfig);
```

## 0.5 서버실행하기

```node
npm run start
```

일반 리액트처럼 실행되고, 에러가 없다면 잘 설치가 된것이다.