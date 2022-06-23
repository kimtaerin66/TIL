# public폴더다루기

NextJs설치시 기본으로 있는 public 폴더

이 폴더에대해 알아보자.

## 0.1 폴더안의 이미지 끌어오기

public폴더안에 vercel.svg라는 이미지가 있는데 이 파일을 끌어와보자.

기본적으로 다른폴더에 있는 컴포넌트에서 끌어오려면 경로를 이렇게 
가져와야한다. 

하지만
public에 있다면 그냥 가져오면 된다.
```js
//기본경로
 <img src="../public/vercel.svg" />

 //public 경로
  <img src="/vercel.svg" />
```





