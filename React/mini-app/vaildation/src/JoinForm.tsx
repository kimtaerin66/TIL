import React from "react";
import { useForm } from "react-hook-form";

interface IForm {
  Email: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  passwordConfirm: string;
  extreError? :string;
}


function JoinForm() {
  const { register, watch, handleSubmit, formState, setError   } = useForm<IForm>({
    defaultValues: {
        Email: "@naver.com",
    },
  });
  const onVaild = (data:IForm) => {
    if(data.password !== data.passwordConfirm){
        setError("passwordConfirm",
        { message : "비밀번호 확인이 다릅니다."},
        { shouldFocus : true }
        );
    }
    setError("extreError", {message : "서버를 확인해주세요"} )
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onVaild)}
      >
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
        <span>{formState.errors?.Email?.message}</span>
        <input
          {...register("firstname", { required: true, validate : (curr) => !curr.includes("RIN"),
         })}
          placeholder="firstname"
        />
        <span>{formState.errors?.firstname?.message}</span>
        <input
          {...register("lastname", { required: true })}
          placeholder="lastname"
        />
        <span>{formState.errors?.lastname?.message}</span>
        <input
          {...register("username", { required: true, minLength: 5 })}
          placeholder="username"
        />
        <span>{formState.errors?.username?.message}</span>
        <input
          {...register("password", { required: true, minLength: 5 })}
          placeholder="password"
        />
        <span>{formState.errors?.password?.message}</span>
        <input
          {...register("passwordConfirm", {
            required: "비밀번호를 한번 더 입력해주세요",
            minLength: {
              value: 5,
              message: "비밀번호가 너무 짧습니다.",
            },
          })}
          placeholder="password confirm"
        />
        <span>{formState.errors?.passwordConfirm?.message}</span>
        <button>Add</button>
        <span>{formState.errors?.extreError?.message}</span>
      </form>
    </div>
  );
}

export default JoinForm;
