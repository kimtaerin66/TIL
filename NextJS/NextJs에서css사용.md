# 모듈 / style jsx / 전역스타일
css를 사용하는 법에는 여러가지가 있다.
이전 예제처럼 인라인 스타일로 작성하는 법도 있지만 NextJs에서 추천하는 가장 좋은 방법은

모듈을 만드는것.


## 01. 모듈만들기
NavBar.js 라는 파일의 css모듈파일을 만들고 싶다면, 

파일명을 이렇게하면된다.

NavBar.module.css  

이름을 지을때가장 중요한건

module.css로 끝나야한다.

## css파일안에선

원하는 class를 지어 사용하면된다.

```css
/* NavBar.module.css  */
.nav {
    display: flex;
    justify-content: space-between;
    background-color: palevioletred;
}
```

## 02. css모듈 사용하기
먼저 NavBar.js에서 사용할 것이기에 
css파일을 import해온다.
```js
//NavBar.js

import Link from "next/link";
import { useRouter } from "next/router";
import style from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={style.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}
```

그리고 원하는 태그옆에 class가 아닌 

className으로 준다. 모듈은 className으로 작동한다.

또 일반 텍스트가 아닌 프로퍼티로 줘야한다.

nav가아니라 {style.nav}

----------------------

=>왜냐하면 개발자모드로 실제 해당css가 적용된 부분을 확인하면,

class="NavBar_nav__OBiyO"
이렇게 랜덤한 클래스이름이 들어가게된다.

그러므로 우리가 클래스이름을 nav로 작성했지만 중복을 걱정하지않고 계속 써도 상관이없다.

## 03. 두개의 class를 같이쓰려면?
NavBar.module.css가 active와 link 두가지 스타일을 가지고있다.

이 스타일을 a에 적용하려고 한다.
```css
/* NavBar.module.css  */
.active {
    color: tomato;
}
.link {
    text-decoration: none;
}
```
active하나만 적용했을 때는 이렇게 적을 수 있다.
```js
//NavBar.js
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? style.active : "" }>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? style.active : "" }>About</a>
      </Link>
    </nav>
    </nav>
  );
}
```
그렇다면, link까지 적으려면, style.link 하고 컴마를 찍으면 될까?

아니 안된다. 백틱을 이용해 각각 써줘야한다.

```js
//잘못된 예
  <Link href="/">
     <a className={style.link ,router.pathname === "/" ? style.active : "" }>Home</a>
    </Link>

//올바른 예
  <Link href="/">
     <a className={`${style.link} ${router.pathname === "/" ? style.active : "" }`}>Home</a>
    </Link>
```
--------------------------------------------
# 모듈만들기가 싫다면? Styles JSX

Styles JSX은 css를 추가하는 또다른방법이다.

작성법
1. 스타일 태그를 만든다.

```js
//NavBar.js
<style> </style>
```
2. 스타일에 jsx prop을 넣는다.

```js
//NavBar.js
<style jsx> </style>
```
3. 중괄호를 열고 백틱을 적어준다.
```js
//NavBar.js
<style jsx>{``}</style>
```
4. 백틱안에 평범한 css를 작성한다.
```js
//NavBar.js
export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
      `}</style>
    </nav>
  );
}
```

이렇게 작성하면 nav에 토마토컬러의 스타일이 들어가고, a에 밑줄이 없어진다.

그.리.고 개발자모드로 클래스를 확인하면 이또한
랜덤으로 클래스를 변경해준다.

---------------------------------------------
# 작성한 스타일을 다른곳에도 적용하려면?
```js
//NavBar.js
export default function NavBar() {
  const a = useRouter();
  return (
    <nav>
      <Link href="/">
             <a className={a.pathname === "/" ? "active" : ""} >Home</a>
      </Link>
      <Link href="/about">
       <a className={a.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
        a {
          text-decoration: none;
        }
         .active {
          color : yellow;
      }
      `}</style>
    </nav>
  );
}
```
style태그의 제일마지막 .active부분을 추가하여, pathname이 일치할때 컬러가 노랑색으로 바뀌게했다.

이 .active를 index.js의 hello부분에도 줘보자.

```js
//index.js
import NavBar from "../components/NavBar";
export default function Home(){

    return (
        <div>
            <NavBar />
              <h1 className="active"> Hello </h1>
        </div>
    );
}
```
Home과 About은 노란색으로 잘바뀌는데

이 Hello는 노란색으로 바뀌지 않는다.

왜 일까?

=> 개발자모드로 확인시 Hello도 active라는 className을 가지고있지만,
 
style.jsx의 특징으로, jsx가 직접 작성된 그 컴포넌트 내에서만 해당 className이 작동한다.

---------------------------------------------
# Global Style을 만들려면?

reset-css처럼 내 프로젝트 전체에 사용하고 싶은
스타일을 작성하려면?

=> 방법1 style jsx에 global을 추가한다.

```js
//index.js
export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="active">Hello</h1>
      <style jsx global>{`
        a {
          color: yellow;
        }
      `}</style>
    </div>
  );

```
[ 현재모습 ]

![Alt text](../IMG/nextJs1.JPG)

왜 Home의 컬러는 변하지 않는걸까?

=> NextJs에서는 페이지별로 생각해야한다.
NavBar.js에서 이미 콕 찝어 Home Link에 블루 컬러를 지정했고, About은 /about일때 컬러가 변하는거지 홈일때는 아무것도 지정되어 있지 않다.

그래서 아무것도 지정되어있지 않는 about만 변하고,
이역시 다른페이지로 넘어가면 다시 다른색이된다.

이러한 문제를 없애려면 모든페이지에 스타일을 복붙..
이게 싫으니 방법2


## 방법2 이게 진짜방법 Custom App

1. pages폴더에 _app.js 파일을 생성한다.(무조건 이 이름쓰기)

다른 파일(about.js,index.js를 보기전에 app.js를 먼저 보기때문)

2. _app.js에 Custom App을 만든다.

Custom App은 두개의 props을 받는데,
첫번째는 Component, 두번째는 pageProps
```js
//_app.js
export default function App({Component, pageProps}){
    return  ()
}
```

이렇게 작성하는데,

만약 전체가 아니라, about페이지에만 적용하고 싶다면, 첫번째prop Component대신 about페이지의 컴포넌트 About을 적어주면된다.
```js
//_app.js
//전체 적용
export default function App({Component, pageProps}){
    return (
        <div>
        <Component {...pageProps}/>
        <span>Hello</span>
        </div>
    )
}
```
어떤 페이지를 가든 Hello가 나온다.

```js
//실제코드
export default function App({Component, pageProps}){
    return  <Component {...pageProps}/>;
}

//글로벌 css까지 적용하면
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: yellow;
        }
      `}</style>
    </>
  );
}
```

이제 어디서든 a태그는 노란색이다.

## 주의사항
NextJS는 style폴더에 globals.css라는 css파일을 가지고있는데,

이 css파일을 일반 파일이나 내 컴포넌트에 import가 불가능하다.

 =>css모듈로 사용하거나,   _app 파일에서만 가능하다.