# module

웹팩을 알기전에 모듈이라는 개념을 알아야하는데,

모듈 : 프로그램을 구성하는 코드가 기능별로 나누어져있는 형태를 말한다.

이렇게 기능별로 나누어 프로그래밍하는걸 모듈화 프로그래밍 이라고 하는데

모듈화 프로그래밍은 이러한 장점들을 가지고 있다.

1. 효율적인 관리 및 성능 향상
2. 모듈의 재사용 가능으로 유지보수 용이
3. 기능 분리가 가능 > 인터페이스 단순
4. 오류의 범위 최소화

이렇게 다른 모듈을 참조하거나, 자신의 모듈을 다른 곳에서 사용하도록 열어주기위해서는

모듈을 인식하는 "module system" 과 "키워드"가 제공되어야한다.

### 모듈 시스템

모듈을 사용하기위해선 두가지 실행환경이 있다.

1. CommonJS(Node.js)
2. ESM 

### 키워드

모듈을 다루는 키워드는 크게 두가지이다.

1. 내보내기 (전체내보내기, 부분 내보내기)
2. 가져오기 (객체 참조하기)

### CommonJS에서 가져오기 / 내보내기

CommonJS에서는 모듈을 가져올때 : require 

내보낼때 : module.export

### 예제 

원의 넓이를 구하는 index.js파일을 하나만들어보자.

```js

const PI = 3.14;
const getCircleArea = r => r* PI;

const result = getCircleArea(2);
console.log(result); //6.28 출력
```

이 파일을 모듈화하자면, 원을 구하는 공식을 따로 분리해보자.

mathUtil.js라는 새파일을 만들고 코드를 이동시켰다.

```js
const PI = 3.14;
const getCircleArea = r => r* PI;


module.exports = {
    PI,
    getCircleArea
}
```

이제 index.js에서 이 모듈을 불러서 사용해보자.

```js
//index.js
const mathUtil = require('./mathUtil');

const result = mathUtil(2);
console.log(result); //6.28 출력
```


