# Node.js
(HEROPY Tech 참고)

node.js는 구글에서 개발한 서버 환경에서 작동하는 자바스크립트.

Node.js 런타임 환경에서는 모든 종류의 서버 사이드 도구들을 제공하여 자바스크립트로 서버 개발을 할 수 있다.
따라서 프론트와 백 모두 개발가능하여, 추가적인 언어 학습이 필요하지 않다.

node.js 설치시 npm(Node Packaged Manager)이 같이 설치되는데 npm은 세계에서 가장 큰 오픈소스 라이브러리이다.

## 1.설치

- 직접설치

node.js 홈페이지에서 파일을 받아 설치한다(https://nodejs.org/en/)

LTS는 장기적으로 안정되고 신뢰도가 높은버전, Current는 최신 버전.

- 패키지매니저로 설치

macOS - Homebrew
```node
$ brew install node@8
```
Windows - Chocolatey

```node
$ choco install nodejs-lts
```
설치후 여부와 버젼확인
```node
$ node -v
v16.13.2

$ npm -v
8.1.2
```

## 2. NVM

node.js의 새로운 버전이 나오면 업그레이드해야하거나, 
기존의 작업물에 맞춰 다운그레이드 해야하는 경우가 있다.

이렇게 자주 버젼 변경이 필요하므로 버전관리 매니저인
NVM 을 사용한다(윈도우는 nvm-windows나 nodist를 사용한다.)

## NVM 설치 (충돌을 피하기위해 기존 node.js를 제거 후 설치)
``` node
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```


## 사용법

- 현재 설치된 목록보기

ls는 list의 줄임말로 둘다 사용가능하다.

```node
nvm ls 
nvm list
```

- 특정 버전 설치

목록보기에서 변경하고 싶은 버전이 없는 경우 설치를 한다.
```node
//최신버전
nvm install --lts 

//원하는 특정버전
nvm install 12.18.3
```

- 특정 버전으로 전환

원하는 버전을 설치했다면 전환시킨다.
```node
nvm use 12.18.3
```

- 특정 버전 삭제

```node
nvm uninstall 12.18.3
```
참고로 현재사용중인 버전은 삭제불가능, 다른버전으로 전환 후 삭제한다.