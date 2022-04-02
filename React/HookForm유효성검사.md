# React Hook Form으로 유효성검사하기
React Hook Form으로 유효성검사하는 부분이
일일이 작성하는것보다

굉장히 효율적이고, 중요하다고 생각해서 따로 작성. 

결과물은 React/mini-app/vaildation

## 0.1 기본셋팅 required
```tsx
//JoinForm.tsx
import React from "react";
import { useForm } from "react-hook-form";

function JoinForm() {
  const { register, watch, handleSubmit } = useForm();
  const onVaild = (data:any) => {
      console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onVaild)}>
        <input {...register("Email", { required : true })} placeholder="Email" />
        <input {...register("firstname", { required : true })} placeholder="firstname" />
        <input {...register("lastname", { required : true })} placeholder="lastname" />
        <input {...register("username", { required : true })} placeholder="username" />
        <input {...register("password", { required : true })} placeholder="password" />
        <input {...register("passwordConfirm", { required : true })} placeholder="password confirm" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default JoinForm;

```
보통 해당인풋이 값을 꼭 필요로 하는것을 나타내기위해
html의 required를 사용하지만, 이를 지원하지않는 브라우저에서 보거나, 소스코드를 수정할수있기에
register함수안에 { required : true }로 넣어준다.

## 0.2 유효조건 달아주기

username이 5글자 이상이어야만 한다고 조건을 달아보자.

기본적으론 if문을 사용해 username.length > 5 ...의 문법을 사용하지만
React Hook Form을 사용하면, minLength : 5 간단하게 이렇게만 적어주면된다.

```tsx
//JoinForm.tsx
//위아래 부분 생략

 <input {...register("username", { required : true, minLength : 5 })} placeholder="username" />
```

## 0.3 에러받기(formState)
formState를 이용해 에러를 받을 수 있다. 
formState.errors를 출력해보면, {} 빈객체가 나온다.

```tsx
//JoinForm.tsx
function JoinForm() {
  const { register, watch, handleSubmit, formState } = useForm();
  const onVaild = (data:any) => {
     console.log(data);
  };
  console.log(formState.errors);

  return ....//생략
```

이때 아무것도 작성하지않고, Add버튼을 클릭하면 새로운 객체가 나오는데 email이 required 조건인데,
채워지지않았다는 에러를 확인할 수 있다.
```
required : true
```
물론 다른 인풋도 required지만 위에서부터 확인한다.

## 0.4 에러에 원하는 메세지 주기
required : true 라는 단순히 조건만 출력하는게 아니라,

메시지를 주고싶다면 true대신 메세지를 작성하면 된다.

```tsx
  return (
    <div>
      <form style={{ display: "flex", flexDirection:"column"}} onSubmit={handleSubmit(onVaild)}>
        <input {...register("Email", { required : "이메일을 입력해주세요" })} placeholder="Email" />
     //생략
      </form>
    </div>
  );
```

### minLength도 마찬가지로 메세지를 줄 수 있는데,
### 객체를 사용하면 최소길이 숫자 + 메세지 둘 다 전할수 있다.

비밀번호 확인 input창에 최소길이와 메세지를 주어보자.

```tsx
 <input {...register("passwordConfirm",
         { required : "비밀번호를 한번 더 입력해주세요",
          minLength : {
              value : 5,
              message : "비밀번호가 너무 짧습니다."
          }  })} placeholder="password confirm" />
```

## 0.5 정규식으로 조건주기

정규식을 이용하여 네이버 메일일때만 사용가능하도록 해보자.(정규식은 따로작성할 예정)

```tsx
 <input
          {...register("Email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver메일만 사용해주세요",
            },
          })}
          placeholder="Email"
        />
```

## 0.6 유저에게 에러메세지 보여주기
지금까지 작성한 에러들은 전부 콘솔창에서만 확인이 가능했다.

콘솔창이아닌 브라우저에 띄워 유저에게 보여주자.

스타일은 본인이 마음에 드는대로 하면되지만, 
보통 인풋창의 아래에 에러가 나오기때문에
span태그로 해당 에러를 불러왔다.
```tsx
 <input
 {...register("Email", {
            required: "이메일을 입력해주세요",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "naver메일만 사용해주세요",
            },
          })}
          placeholder="Email"
        />
        <span>
           {formState.errors?.Email?.message}  
        </span>
```
중간중간 물음표를 넣어준이유는 옵셔널체이닝이라는 문법인데

에러가없을 때도 있기때문에 에러가있으면 ~ 이라는 뜻을 지닌다.

## 0.7 기본값주기

먼저 data 타입을 any라고 주고 작성했는데,
타입스트립트에는 원래 정확한 타입을 알려줘야하니
인터페이스를 만들어 useForm에게 알려준다.
```tsx
interface IForm {
    email : string;
    firstname :string;
    lastname : string;
    username: string;
    password : string;
    passwordConfirm : string;
}

function JoinForm() {
  const { register, watch, handleSubmit, formState } = useForm<IForm>();
  //생략
  };

```

그리고 이메일의 기본값이 naver.com으로 설정을 해보자면,
```tsx
  const { register, watch, handleSubmit, formState } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
```
인터페이스 괄호안에 객체로 작성하면,
타입스크립트가 이미 어떤 값들이 들어올지 알고있기때문에 자동완성으로 알려준다.

그 중 defaultValues값을 설정해주면된다.