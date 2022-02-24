# nodeJs 자동 재시작하기
서버 연결 후 파일을 수정하면 수정사항이 반영되지 않는다.

자바스크립트가 재실행되지 않기때문에, 서버를 종료하고, 다시 재시작을 해야

수정사항이 반영된다.

작업을 하면서 이러한 번거로움을 줄이기위해 수정사항이 발생하면, 
nodeJs를 자동으로 재시작해주는 모듈을 사용한다. 

여러가지가 있는데, 내가 써본 두가지만 정리. (nodemon과 superviser)

## nodemon
### 설치
```node
<!-- nodeJs -->
npm install nodemon -g
```
### 사용법

npm start시 node가 아닌, nodemon이 실행되도록 package.json을 수정해준다.
```node
<!-- package.json 수정 -->
"scripts": {  
	"start": "nodemon ./app.js  
}

<!-- nodeJs -->
npm start
```

## superviser 
### 설치
```node
<!-- nodeJs -->
npm install supervisor -g 
```

### 사용법
```node
<!-- app.js 실행시 -->
supervisor app.js
```