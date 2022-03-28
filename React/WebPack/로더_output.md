# 로더
웹팩은 js파일뿐만아니라, jpg, css까지 번들링을 해주는데 

그 역할을 하는것이 바로 로더 이다.

기본적인 css사용방법은 html에 link로 css파일을 연결하는것

문제점 : 개발자모드의 네트워크탭으로 살펴보면,

js파일은 번들링되어 한번에 받아오지만, 번들링되지않은

css파일은 또 서버에서 따로 받아온다.

이 css파일까지 번들링해보자.

## 01. css 로더설치
(공식사이트 참고)
```node
$ npm install --save-dev style-loader css-loader
```

## 02. config.js파일에 모듈추가
```js
const path = require('path');
module.exports ={
    mode : "development",
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:'index_bundle.js'
    },
    //이하 추가된부분
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'css-loader'
                ]
            }
        ]
    }
}
```
이렇게 정규식을 이용해 작성을 하면, css파일을 만나면

css로더로 처리한다는 뜻이 된다.

## 03. 사용

기존에는 index.html 상단에 link로 css를 불러왔지만,

이제는 index.js에 import해준다.

(기존css는 번들링대상이 아니어서 퍼블릭폴더에있었지만,
번들링할거라 index.js파일과 같은 위치로 옮겨준다)
```html
<!-- 기존 index.html -->
 <link rel="stylesheet" href="public/style.css">
```
css파일을 번들링하기위해 옮긴 모습
```js
//index.js
import hello_word from "./hello.js"
import world_word from "./world.js"
import css from "./style.css"
document.querySelector('#root').innerHTML = hello_word + ' ' + world_word;
console.log(css); //출력해보면
```
npx webpack으로 webpack을 실행하면

css스타일은 적용되지 않고, 콘솔창에 자바스크립트의 형태로 출력만된다.


```console
//console
css 
[Array(3), toString: ƒ, i: ƒ]
0: (3) ['./style.css', 'body {\r\n    background-color: powderblue;\r\n    color: tomato;\r\n}', '']
i: ƒ i(modules, media, dedupe, supports, layer)
toString: ƒ toString()
length: 1
[[Prototype]]: Array(0)

```
이 코드를 자바스크립트를 이용해서 사용하면되겠지만,

더 편리하게 style-loader를 이용하면된다.
```js
//config.js
const path = require('path');
module.exports ={
    mode : "development",
    entry:"./index.js",
    output:{
        path:path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    'style-loader' //추가된 부분
                    'css-loader'
                ]
            }
        ]
    }
}
```

다시 npx webpack을하면,

css가 적용된다.

이렇게 로더라는 것은 우리가 지정한 파일을 발견하면,

파일에 따라 지정한 가공을 통해 우리가 원하는 결과를 만들어준다.

-----------------------------------------
# OUTPUT 

로더를 이용해서 작업까지 완료했다면 이 결과물을 어떻게 최종적으로 원하는대로 만들어낼것인가.

하나로 합칠것이, 쪼갤건지, 이름은 무엇으로 할것인지 등.

예) index.html과 about.html이 있고, 서로를 a태그로 연결.

```html
<!-- index.html -->
<body>
    <h1>Hello, Index</h1>
    <div id="root"> </div>
    <script src="./public/index_bundle.js"></script>
    <a href="./about.html">about</a>
</body>
</html>

<!-- about.html -->
<body>
    <h1>Hello, About</h1>
    <div id="root"> </div>
    <script src="./public/about_bundle.js"></script>
    <a href="./index.html">index</a>
</body>
</html>

```
world hello를 출력하게하는 about.js도 생성한다.  
```js
//about.js
import hello_word from "./hello.js"
import world_word from "./world.js"
import css from "./style.css"
document.querySelector('#root').innerHTML = world_word+ ' '+ hello_word ;
console.log('css',css);
```


 ## Q. about_bundle.js 파일을 public 폴더에 만들어야하는데 이때, 엔트리파일은 about.js고,

## 이 파일이 사용하는 여러파일을 번들링하는 작업을 웹팩에게 시키려고한다. 어떻게 해야할까?


1. webpack.config.js 파일을 열고, entry를 살펴보자.

index.js와 about.js를 번들링하고 싶다. 

> 여러개를 표현할땐, 이름을 지어(index,about) 객체로 표현

```js
//webpack.config.js
//기존
const path = require('path');
module.exports ={
    mode : "development",
    entry: {
       entry:"./index.js", 
    }

//수정
const path = require('path');
module.exports ={
    mode : "development",
    entry: {
        index : "./index.js",
        about : "./about.js"
    },
```
2. output 수정

기존대로 작성하면, 두개의 파일을 번들링하여 하나의 파일로
합쳐버린다. 그렇기에 각각으로 나눠줘야하는데

해당파일이름_bundle.js로 출력하기위해 약속된 문법

[name]을 사용한다.

```js
//webpack.config.js
//기존
 output:{
        path:path.resolve(__dirname, "public"),
        filename:'index_bundle.js'
    },

//수정
   output:{
        path:path.resolve(__dirname, "public"),
        filename:'[name]_bundle.js'
    },
```

3. npx webpack으로 실행.

public폴더에 about_bunble.js/ index_bundle.js파일이

생성된 것을 확인할 수 있다.

