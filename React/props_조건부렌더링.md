# props
props는 properties의 줄임말고, 컴포넌트 외부에서 받은 값이다.

state에서 예를 들었던 예시로 다시 말하자면,

사람의 이름, 성별, 나이, 현재 사는 곳, 취업여부, 결혼/연애여부는 어디에 해당될까?

state - 현재 사는 곳, 취업여부, 결혼/연애여부

props - 사람의 이름, 성별, 나이

## 어떤 상황에 사용하는가?
data, 속성, 함수 등을 보낼 때 사용한다.

예) 버튼을 여러개 만드려고 한다. 이 버튼들은 동일한 스타일을 가지고있고,

버튼이름만 다른 형태이다. 이렇게 중복되는 부분 = 넘겨줄부분(props)이 된다.

---------------------

## props 사용법

## 예제) 버튼

버튼들의 틀이 될 컴포넌트(Btn)를 작성한다.

이 컴포넌트에 스타일이 지정되어있다. = 중복될 사항들

1. 렌더링되는 부분(App컴포넌트에)에서 원하는 props의 이름을지어 값을 넘겨준다.

    넘겨줄 데이터를 btn 컴포넌트에 작성하는데 props의 이름을 본인마음대로 써도된다.

    나는 text라는 이름을 사용했다. 대신 text라고 지었으면, text로 받아와야한다.

2. 받아올 컴포넌트(Btn)에서 인자로 props를 받고, 

    실제 버튼의 이름이 들어갈곳에 props.지은이름을 적어준다 {props.text}
```js
//Btn 컴포넌트
function Btn(props){ //text로 받기
       return(
           <button  style={{
               color : "white",
               backgroundColor : "tomato",
               padding : "10px 20px",
               border : 0,
               borderRadius : 10,
           }}>
           {props.text}
           </button>
       )
   }
//App 컴포넌트
   function App (){
        return (
        <div>
         <Btn text="Save Changes"/> //이름지어서 넘겨주기
         <Btn text="Continue" /> //이름지어서 넘겨주기
         </div>
         )}
```
## 예제) 버튼 - 더 쉬운사용법

위의 예제에서 버튼의 이름을 받아올때 props.text로 받아왔는데,

비구조할당, 구조분해를 사용해 더 적은코드로 작성할 수있다.

데이터를 넘겨주는 부분은 동일하고, 그 받을 때 props.text대신, 중괄호를 사용해 {text}로 받는다.


```js
//Btn 컴포넌트

function Btn({text}){ //text로 받기
       return(
           <button  style={{
               color : "white",
               backgroundColor : "tomato",
               padding : "10px 20px",
               border : 0,
               borderRadius : 10,
           }}>
           {text}
           </button>
       )
   }
//App 컴포넌트
   function App (){
        return (
        <div>
         <Btn text="Save Changes"/> //text로 넘겨주기
         <Btn text="Continue" /> //text로 넘겨주기
         </div>
         )}
```


## props 기본값 설정하기

위의 App컴포넌트에서 Btn컴포넌트에 text로 버튼의 이름을 받고있는데,

만약 이름을 적어주지않는다면, 보이게될 기본값을 설정할 수 있다.
```js
//Btn 컴포넌트

function Btn({text}){ //text로 받기
       return(
           <button  style={{
               color : "white",
               backgroundColor : "tomato",
               padding : "10px 20px",
               border : 0,
               borderRadius : 10,
           }}>
           {text}
           </button>
       )
   }

Btn.defaultProps = {
    text :'이름없음'
};
```
이렇게 설정하면, 버튼에 이름을 주지않은 것들은 이름없음 이라는

텍스트가 담긴 버튼으로 생성된다.

<br />

 # 조건부렌더링
 
 삼항연산자를 사용해서 조건부렌더링을 할 수 있다.

 {조건 ? 참일떄 : 거짓일때}

 예) 버튼의 isSpecial이라는 props를 만들어 이값이 true이면, 버튼앞에 별두개(**)를 붙인다.

 ```js
//App.js
 function App() {
  return (
    <div>
    <Btn text="Add" isSpecial/>
    <Btn text="Reset"/>
  </div>
  )
}

//Btn.js
function Btn({text, isSpecial}){
    return(
      <button style={{
          color: "white",
          padding: "10px 20px",
          border : 0,
          borderRadius: "5px",
          background : "skyblue",
          margin : "0px 1px",
          cursor: "pointer"
      }}>
    {isSpecial ? "**" + text : text }
      </button>
    )
}
```

add버튼에만 isSpecial이 true이기때문에 **이 앞에붙게된다.

만약 ture일땐, 값이 나타나고, false일땐 숨기고싶다면 삼항연산자보다는 앤드연산자를 사용한다.

```js
 {isSpecial &&  text  }
 //isSpecial이 true면보이고, false면 숨겨진다.
```

단순히 숨길땐 - 앤드연산자, 랜더링되는 내용이 바뀔때 - 삼항연산자


렌더링 할 때 falsy한 값(false, undefinde 등)은 나타나지않지만, 0은 0숫자그대로 나타난다.