# CRA와Vite


### CRA

CRA는 페이스북에서 만든 리액트 설치 도구로, 기본 설정사항들이 포함되어있어

셋팅이 어려운 초보 개발자나, 빠르게 프로젝트를 시작할 때
CRA (create-react-app)로 프로젝트를 설치한다.

CRA로 프로젝트 만들기

```bash
npx create-react-app myapp
```

[ 특징 ]
1. 초기 환경설정이 되어있어 빠른 개발 가능


### Vite

![image](https://github.com/kimtaerin66/TIL/assets/85108615/b56f6e2b-2691-4469-8e45-3924a7606585)

Vite는 프랑스어로 빠르다는 의미로 vue.js로 빠른 개발을 하기위해 만들어진 툴인데,

vue.js 뿐만 아니라, react, vanila js등 다른 프론트엔드 개발 어디서나 사용이 가능하다.

또한 CRA와는 다르게, 초기 설정을 개발자가 해야하지만 그만큼 개발자가 필요한 대로 환경 구성이 가능하다.

Vite로 프로젝트 만들기

```bash
npm create vite@latest

//react 프로젝트
npm create vite@latest myapp --template react
```

[ 특징 ]
1. Go로 작성되어, 빠른 서버 구동
2. 디테일한 개발 환경 설정 가능
3. Rollup을 사용한 번들링으로 코드 최적화, 파일 크기 감소
