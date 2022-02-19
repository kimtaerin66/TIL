# SASS/SCSS 
(생활코딩 참조)
## 1.SASS/SCSS란?

css의 단점(불필요한 선택자가 많음, 유지보수가 어려움 등)을 보완한 
css의 확장형이 SASS. SASS를 더 편리하게 수정한 버전이 SCSS
확장자는 .scss이며, 브라우저는 이 sass문법을 이해하지 못하기 때문에
sass로 작성하고 css로 컴파일 해줘야한다.


## 2. 컴파일 방법
간단한 코드는 https://www.sassmeister.com/ 사용

그외 코드들은 설치필요.

node-sass 설치
```node
$ npm install -g node-sass

//출력경로 설정
$ node-sass [옵션] <입력파일경로> [출력파일경로]
$ node-sass scss/main.scss public/main.css
```


## 3.CSS/SCSS/SASS 비교

동일한 코드를 가지고 css,scss,sass 비교해보자.
```html
<!-- html -->
<nav>
 <ul>
  <li>회사소개</li>
  <li>제품</li>
  <li>고객지원</li>
</ul>
</nav>
```

```css
/* 기본css  */
nav {
   width: 1000px;
   height: 50px;
}

nav ul{
    list-style: none;
}

nav ul li {
    display: inline-block;
    padding: 5px 10px;
}

```

```scss
//SCSS
//중첩해서 사용이 가능해서, 계속해서 부모선택자를 써줄필요가없다.
nav {
    width: 1000px;
    height: 50px;
  ul{
    list-style: none;
  }
  
  li{
    display: inline-block;
    padding: 5px 10px;
  }
}

```

```scss
//SASS
//SCSS모습에서 중괄호}와 세미콜론;이 사라졌다.
nav {
    width: 1000px
    height: 50px
  ul
    list-style: none
  
  li
    display: inline-block
    padding: 5px 10px;
  
}
```

## 3. SCSS 장점
위에서 보았듯이 SCSS를 사용하면, 중첩이 가능해 부모선택자를
계속해서 써주지 않아도 된다. 그밖에도 여러 장점이 있다.

- 변수

변수로 자주쓰이는 컬러나, 스타일을 지정해놓고 쓸 수 있다.
```scss
$color : #2080f9;
$width : 100px;
$height : 100px;
$borderRadius: 50%;


div{
    background-color :$color;
    width : $width;
    height : $height;
    border-radius : $borderRadius;
}
```
- 중첩

nav , nav ul, nav ul li가 아니라 nav를 작성 후 그 안에서 작성할 수 있다.
```scss
nav {
    width: 1000px;
    height: 50px;
  ul{
    list-style: none;
  }
  
  li{
    display: inline-block;
    padding: 5px 10px;
  }
}
```

- 부모 엘리먼트 참조

hover와 같은 경우 특수기호 &를 사용해 부모 엘리먼트를 참조할 수 있다.
```scss
div {
  color: #red;
  &:hover {
       color: #blue;  }
}
```
- 연산자와 함수

연산자와 함수를 이용해서 엘리먼트의 크기나 좌표 또는 색상을 동적으로 변경할 수 있다.
```scss
$color : #2080f9;
$width : 100px;
$height : 100px;


div{
    background-color :$color;
    width : $width -100px;  //변수 width로 값을 불러와 변경가능.
}
```

- Mixins(재사용)

 선택자와 속성을 재사용 하는법. 선언할 때는 '@mixin'으로 시작, 호출할 때는 '@include'.
 ```scss
@mixin rounded-top {
  $side: top;
  $radius: 10px;
 
  border-#{$side}-radius: $radius;
  -moz-border-radius-#{$side}: $radius;
  -webkit-border-#{$side}-radius: $radius;
}
#navbar li { @include rounded-top; }
#footer { @include rounded-top; }

//생활코딩 코드 참조

 ```

 - import(불러오기)

 @import로 다른 css파일을 불러와서 사용할 수 있다.

 Sass는 import를 위한 이름규칙이 있다.
 
불러지는 파일은 partials라고 불리고, 이 파일은 '_'로 이름이 시작된다. (_rounded.scss)

 
 이 파일을 불러올 때 Sass에서는 @import 'rounded'를 사용한다.
 ```scss
@import "rounded";
 ```