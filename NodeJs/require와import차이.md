# require vs import 차이점

강의를 보다보다보면 어떤 강의에선 require를 쓰고, 어떤 강의에서는 import를 쓴다.

둘다 다른 모듈을 불러오는 역할을 하는데

그 차이점을 알아보자.


## 공통점
기능(역할) : 외부파일, 모듈을 불러올때 사용한다.

### require가 원래있었고, import가 ES6부터 새로도입된 기능.
ES6 변환이 안된다면, require를 사용해야한다.

## 차이점

express사용시의 문법비교

 - require
 ```js
const express = require('express');
 ```

- import 
```js
import express from "express";
```