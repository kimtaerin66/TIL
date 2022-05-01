# ServerSideRendering
NextJS는 pre-render하기 때문에, 
초기화면으로 html을 준다. 그렇기에 인터넷속도가 느려도 최소한의 html을 볼 수 있는 장점이 있는데

예를 들어 api(data)를 받아오기전에 로딩화면도 html에서 찾아 볼 수 있는데, 이걸 유저가 보는게 싫을 수도 있다.

그럼다시 csr로 바꿔준다.

[ SSR의 모습 ]

## 해결법 

getServerSideProps라는 함수를 만들어 export해주면 된다.

여기서 이 함수이름이 굉~장히 중요하다.
다른 이름을 쓰면 절대안됨.
```js
//index.js

export async function getServerSideProps(){
  
}
```

이 함수안에다 작성하는 부분은 client가 아니라 server에서 랜더링이 된다.

그래서 유저가 볼수없다.

유저가 볼 수없으니 이전에 API_KEY숨기기를 배웠는데, 이걸로  API_KEY를 숨겨보자.

## 예제) SSR로 API_KEY숨기기
영화data를 받아오는 fetch부분 가져오고,

return의 object에는 props라고 불리는 key나 property를 가진다.

```js
//index.js
export default function Home() {
  return (
  //생략
  );
}

export async function getServerSideProps(){
 const { results } = await(await fetch(`/api/movies`)).json();
 return {
   props:{
       results,
   }
 };
}
```

이 props에는 원하는 데이터를 아무거나 넣을 수 있다.

그럼 이 데이터를 어디서 가져오는걸까?

=> index.js상단의 Home 컴포넌트에서 props로 results를 받아줘야한다.

```js
//index.js
export default function Home({ results }) {
  return (
    <div className="container">
      <Title title="Home" />
      {movies?.map((movie) => (
        <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
          <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(){
 const { results } = await(await fetch(`http://localhost:3000//api/movies`)).json();
 return {
   props: {
     results,
   },
 };
};
```

여기서 무엇을 return하던지 prop으로 page에게 넘겨주게된다.

## 이 prop은 어디에 쓰일까?
자 page에 prop을 넘겨주면 뭐가좋을까?

이게바로 _app.js에서 pageProps가 필요한 이유다.

```js
//pages/_app.js

function MyApp({ Component, pageProps }) {
  return( 
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp

```

우리가 홈페이지로(즉index.js)갈때, 

nextJS가 Home을 받아서 render를 하기위해 
Component자리에 Home이 들어오게되고,

```js
//과정
function MyApp({ Component, pageProps }) {
  return( 
  <Layout>
  <Home {...pageProps} />
  </Layout>
  )
}
```

그러면 index.js로 가서 우리가 아까 작성한
function getServerSideProps가 호출된다.

getServerSideProps를 사용할걸 알기에
API에서 뭔가를 호출하고,

그 후 우리가 작성한 props를 return하게된다.
여기서 return한 이 props를 바로

{...pageProps} 이 부분에 넣게된다.



※ 주의해야할것.
```js
export async function getServerSideProps(){
 const { results } = await(await fetch(`/api/movies`)).json();
 return {
   props: {
     results,
   },
 };
};
```

이 부분을 작성할때, fetch부분에 원래작성한대로 /api/movies로 넣으면 실행이 되지않는다.

왜냐하면, 이 주소는 front에서만 작동한다(서버에서는 작동하지않음)

프론트엔드에는 이미 브라우저에 url이있음 localhost:3000

그래서 이걸앞에 추가해줘야한다.