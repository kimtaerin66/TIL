# Static Pre Rendering
nextJS의 큰 장점이 Static(정적) Pre Rendering 된다는것.

예를 들면,

일반적으로 create-react-app으로 만든 사이트는 CSR(Client Side Rendering)렌더링이다. 

CSR렌더링은 유저가 보는 모든 UI, 로고, 네이게이션 바, 검색 창 등 모든것을 만든다.

유저가 보는 html 소스코드 (비어있는 div(root)만 보인다)에는 보이지 않고,
모두 자바스크립트다.

=> 그렇게 때문에 빠른환경이 아닐때(모바일이나)자바스크립트를 다 받아올때까지 유저는 흰화면만 보고있게된다.

이 사이트를 NextJS로 만들면, 초기상태의 html을 미리 렌더링하기때문에, 적어도 유저는
흰화면이 아닌 HTML을 볼 수 있다.

# Routing

리액트에서도 다른페이지로 이동할 때 a태그를 사용하면, 전체가 새로고침 되기때문에 a태그를 사용하지 않았는데

 NextJS에서는 a태그는 사용하고 link로 감싸줘야한다.


NextJS용 link를 import한다.

```js
//변경 전
export default function NavBar() {
  return (
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  );
}

//변경 후 
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

//a태그가 없어도 작동가능 
import Link from "next/link";
export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/about">
        About
      </Link>
    </nav>
  );
}

```
물론 여기서 a태그를 빼고도 사용이 가능하지만,

style이나 class를 줄때 Link에는 줄 수 없기때문에 a태그를 사용해준다.


# Location얻기
nextJS에서 제공하는 useRouter를 사용하면,
우리가 어느 url에있는지 확인할 수 있다.

```js
const router = useRouter();
console.log(router)

//pathname="about"
```

```js
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a style={{ color : router.pathname === "/" ? "red" : "blue"}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color : router.pathname === "/about" ? "red" : "blue"}}>About</a>
      </Link>
    </nav>
  );
}

```

그래서 이렇게 작성해주면,

별도의 라우터설정없이 해당 url과 일치할때 텍스트컬러가 red로 변경된다.
