# 구문 오류와 예외

프로그래밍 언어의 오류는 크게 2가지가 있다.

1. 프로그램 실행 전에 발생하는 오류 - 구문 오류
2. 프로그램 실행 중에 발생하는 오류 - 예외,런타임 오류

## 구문 오류
구문오류는 문법이 틀렸을 때, 괄호의 짝을 맞추지 않았을 때 발생하는 오류로,

웹 브라우저가 코드를 분석조차 하지못해 실행되지 않는다.

콘솔을 확인하면 SyntaxError라고 뜨는것이 확인된다.

예시) console.log 출력시에 마지막 괄호를 닫지 않았을때

![image](https://github.com/kimtaerin66/TIL/assets/85108615/2ba031c0-cbb5-41e2-bb33-7b064bb7b585)


콘솔탭을 확인하면 어떠한 에러가 발생했는지 오류메세지를 확인가능하고,

우측 끝부분에 오류가 발생한 파일명과 위치를 알려준다.

소스 탭에도 오류가 발생한 파일명과 코드를 확인할 수 있다.

![image](https://github.com/kimtaerin66/TIL/assets/85108615/2f5d829b-1156-4d38-8a2d-97ab263ba42c)


## 예외, 런타임 오류
예외 또는 런타임 오류는 실행중에 발생하는 오류이다.

예시) console.log대신 console.rog로 오타가 났을때

![image](https://github.com/kimtaerin66/TIL/assets/85108615/68638389-2db6-4c0a-a937-23392ee34479)


구문 오류와 런타임 오류의 차이점은 코드가 "실행되었느냐?"이다.

구문 오류는 아예 실행조차 못하고, 런타임 오류는 오류가 발생한 지점 전(위)코드까지 실행이 된다.


## 예외 처리

예외가 발생하지않도록 마드는 것을 예외 처리라고 하는데, 예외처리에는 기본 예외 처리와, 고급 예외 처리가 있다.

* 기본 예외 처리 : 조건문 사용

  if문을 사용해 로직을 수행하고, 해당 로직이 실행되지 않을 경우를 else로 뺀다.

* 고급 예외 처리 : try-catch-finally 구문 사용,finally는 생략가능하다.
```js
  //고급 예외 처리
    
    try {
       //예외가 발생할 가능성이 있는 코드
    } catch (exception) {
      //예외가 발생했을 때 실행할 코드
    } finally {
      //무조건 실행할 코드 

    }
```

## 예외 객체
예외가 발생했을때, 예외와 발생된 정보를 확인 할 수 있게해주는 것을 예외 객체라고한다.

이 예외객체를 확인하려면, catch문에서 확인할 수 있는데

try-catch문을 사용할때, catch뒤에 오는 괄호에 아무 식별자나 입력해도되지만,

일반적으로 e나 exception 식별자를 사용한다.

이 식별자를 출력해보면 발생한 예외에 대해 알 수 있다.
```js
  try {
      const arr = new Array(9999999999999999);
    } catch (exception) {
      console.log(exception);
    } 
```
![image](https://github.com/kimtaerin66/TIL/assets/85108615/65ad1d8f-a77c-407c-a9d7-99c24445f060)


또는 브라우저마자 예외 객체의 속성이 조금씩 다르지만, 모든 웹 브라우저가 공통으로 갖고있는

name과 message로 출력을 해볼 수 있다.

```js
  try {
      const arr = new Array(9999999999999999);
    } catch (exception) {
      console.log(exception.name);
      console.log(exception.message);
    } 
```

![image](https://github.com/kimtaerin66/TIL/assets/85108615/d4764ce0-4798-4cdd-ae42-a476cda900cd)


## 예외 강제 발생

예외를 강제로 발생하게하는 경우가 있는데, 이때에 throw를 사용한다.

예시) 0으로 나눌 경우, 예외 발생키시기
```js
function divide(a, b) {
      if (b === 0) {
        throw "0으로 나눌 수 없습니다.";
      }
      return a / b;
    }
/*
단순하게 예외를 발생시킬 경우
throw 문자열

조금더 자세히 예외를 발생시킬 경우
throw new Error(문자열)
*/

```



예외를 강제로 발생시키는 이유는, 내가 의도하지 않는 형태로 코드를 사용할때

주의를 주고 의도한대로 처리하도록 유도할 수 있게 한다.

(참고도서 : 혼자 공부하는 자바스크립트)




