# gh-pages로 작업물 올리기
gh-pages은 github에서 제공하는 무료 배포 라이브러리이다.

결과물을 gh-pages로 배포하면, 유료호스팅없이
배포가 되는것이다.


### 0.1 설치
```node
npm i gh-pages 
```

### 0.2 build
package.json을 확인해보면 scripts에 build라는
명령어가 있는데 이명령어를 사용하면, 

우리가 배포하려는 프로젝트 코드가 압축되고 최적화된다.완료가되면, build라는 폴더가 생긴다.

!!npm run build 여기서하지말고 아래에서 한번에하자!!

### 0.3 홈페이지추가
build한것을 깃헙에 배포해야하는데 그전에 다시 
package.json에 돌아와 가장 마지막 부분에 홈페이지를 추가해준다.
```package.json
//package.json
  "devDependencies": {
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.24"
  },
  "homepage": "https://kimtaerin66.github.io/thecoin"
}
```
homepage 주소를 쓰는법은
https:// + 내깃헙아이디 + github.io + 코드가들어있는 repository

### 0.4 deploy

홈페이지를 쓰고, script부분에 deploy적기
```
//package.json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy" :"gh-pages -d bulid",
    "predeploy" : "npm run build"
  },
```

방금설치한 gh-pages가 디렉토리(-d)bulid를 deploy한다

!! 중요한건 npm run bulid를 하고, deploy할것!
이것을   "predeploy" : "npm run build"한줄만 추가하면 자동으로 먼저 실행한다.

지금 폴더위치는 git renote -v로 알수있고,
새 레포지토리를 원하면 git remote remove한다음
새 주소를 추가한다.

실행
```node
npm run deploy
```
### 0.5 배포확인하기

우리가 아까 홈페이지에 적은 주소
https://kimtaerin66.github.io/thecoin
에서 확인할 수 있는데 올라가는데 조금시간이 걸린다.
5~10분후 확인가능.

### 0.6 수정하기

배포후에 수정하고 다시올리고싶다면,

수정한 후 npm run deploy만 다시해주면 된다.


...와 배포만 10번넘게한것같다 계속 에러가나서
따로 til에있는 전체파일이 올라가길래 바탕화면에 올릴파일만따로 빼주고,

브런치도바꾸고,, ㅠㅠ
