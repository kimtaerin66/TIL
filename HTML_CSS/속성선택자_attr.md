# 속성선택자_attr

속성 attr을 포함한 요소 선택하기

## 예제1. [attr]
세개의 input 중 마지막 input의 컬러 red로 변경하기.

//클래스로 선택
```html
<!-- html -->
<input type="text" value="HEROPY">
<input type="psaaword" value="1234">
<input class="disabled" type="text" value="disabled text" disabled>
```
```css
/*css*/
.disabled { color : red;}
```

보통의 경우라면 선택할 input에 class를 만들어 선택한다. 

하지만 굳이 클래스를 만들지않고도, 다른 속성을 가지고있다면, 그속성으로 선택할 수 있다.

//속성으로 선택

대괄호안에 어떠한 속성으로 찾을 것인지, 속성을 넣어주면 된다.
```html
<!-- html -->
<input type="text" value="HEROPY">
<input type="password" value="1234">
<input type="text" value="disabled text" disabled> 
```
```css
/*css*/
[disabled] { color : red;}
```



## 예제2.  [attr=value]
속성으로 요소를 선택하기엔 동일한 속성을 가진 요소가 많을 수 있다.

속성과 특정값을 지정해보자.

두번째 input 선택하기
```html
<!-- html -->
<input type="text" value="HEROPY">
<input type="psaaword" value="1234">
<input type="text" value="disabled text" disabled> 
```
```css
/*css*/
[type="password"] {
  color : green;
}
```

## 예제3.  [attr^=value]
속성의 값이 해당 값으로 시작하는 요소 찾기

3개의 버튼중에 class가 btn-으로 시작하는 두개의 버튼 선택하기.
```html
<!-- html -->
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```

```css
/*css*/
[class^="btn-"]{
  font-weight : bold;
  color : red;
}
```

## 예제4.  [attr$=value]

속성의 값이 해당 값으로 끝나는 요소 찾기

success는 초록색, danger는 빨강색주기.

```html
<!-- html -->
<button class="btn-success">Success</button>
<button class="btn-danger">Danger</button>
<button>Normal</button>
```

```css
/*css*/
[class$="success"]{
  font-weight : bold;
  color : green;
}
[class$="danger"]{
  font-weight : bold;
  color : red;
}
```