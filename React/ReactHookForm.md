# React Hook Form
### React Hook Form 이란?

리액트에서 form을 관리할 때 사용하는 라이브러리이다.

form과 input을 사용할때, 이를 제어하기위해
onclick이벤트나 onsubmit 이벤트등이 사용되는데

input이 여러개라면, 그 갯수만큼 이벤트를 만들어야한다.

하지만, React Hook Form를 사용하면
굉장히 짧은 코드, 한줄의 코드로도 동일한 기능을 해준다.

## 0.1 사용예

input창이 한두개라면, 직접 일일이 코드를 작성할 수도 있지만 회원가입창 같이 input창이 많을때,

또 유효성검사를 해야할때.

이름, 아이디, 비밀번호, 비밀번호 확인 등 여러개의 인풋창에 유저가 정보를 입력하게 되는데 이때 이 정보가, 적당한지 검사를 하는 것이다.

예를 들어, 이메일 형식이 올바른지, 혹은 특정 이메일만 사용할 수 있는데 그 특정이메일에
해당되는지, 비밀번호의 최소 길이 이상인지 등을 확인한다.

일반 자바스크립트에서는 조건문 등을 이용해
일일이 검사해야했다면, 리액트에서는
react-hook-form을 사용하면 굉장히 편리하게
유효성 검사를 진행할 수 있다.

## 0.2 설치
react-hook-form 공식홈페이지 참고
```node
npm install react-hook-form
````
설치 후 js파일에 import하기


## 0.3 기본예제 
간단한 todolist로 기본 사용법 + 사용전후 비교

[ React Hook Form 사용x 버전 ]
```tsx
//ToDoList.tsx
import React, { ReactEventHandler, useState } from "react";

function ToDoList() {
  const [value, setValue] = useState("");
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setValue(value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(value);
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          placeholder="Write your ToDos"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;

```

[ React Hook Form 사용O ]



React Hook Form에서 여러 함수를 제공하는데 그중 register를 사용하면,

onChange 이벤트 핸들러의 기능도해주고, setState를 하지 않아도 된다.

### register는 뭔데 이런역할을 하는가?
출력해보자.
```tsx
 const { register } = useForm();
 console.log(register("hello"));

 //출력
Object
name: "hello"
onBlur: async event => {…}
onChange: async event => {…}
ref: ref => {…}
[[Prototype]]: Object
```
register는 객체를 생성한다. 그리고 이 객체안에는
name과 onBlur, onChange이벤트 ref가 있다.

많은 것을 가지고있는건 아닌데, 이것만으로 충분하다.
```tsx
//ToDoList.tsx
import React from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const { register } = useForm();
    return (
            <div>
              <form >
                <input {...register("todo")}  placeholder="Write your ToDos" />
                <button>Add</button>
              </form>
            </div>
          );
}

export default ToDoList;

```

register함수를 스프레드문법으로 사용해주면,

그 안에있는 객체들은 하나하나 props로 주게된다.

이 한줄이 onChange와 value,useState를 대신한다.


## 0.4 watch 

react-hook-form에서 제공하는 watch라는 함수를
사용하면, input창에 적은 내용들을 확인할 수 있다.

위와 동일한 코드에, watch를 추가하고, watch를실행한것을
출력하면? 내가 인풋창에 입력한 대로 출력이된다.

```tsx
//ToDoList.tsx
import React from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
    const { register, watch } = useForm();
    console.log(watch());
    return (
            <div>
              <form >
                <input {...register("todo")}  placeholder="Write your ToDos" />
                <button>Add</button>
              </form>
            </div>
          );
}

export default ToDoList;
```






