# tweet 가져오기
text를 입력하여, firebase에 저장까지 되었다면, 이 트윗을 어떻게 가져올까?

※collection를 사용할땐 promise를 사용해야한다. 그래서 async await사용

document를 추가할때, add를 썼다면,
```js
//추가할때
   const onSubmit = async(e) => {
        e.preventDefault();
       await dbService.collection("tweet").add({
            tweet:tweet,
            createdAt : Date.now(),
        });
        setTweet("")//비우기
    };
```

=> 가
## 0.1 가져올 트윗을 담을 state만들기
```js
const [getTweet, setGetTweet ] = useState([]);

```

## 0.2 get으로 가져오기
(처음 랜더링될때 가져오기위해 useEffect를 사용)
```js
    useEffect(()=>{
    dbService.collection("tweet").get();
    },[]);
```

# 0.3 비동기로 바꿔주기
```js
    const getTweets = async() => {
        const newT = await dbService.collection("tweet").get();
        console.log(newT);
    };
    useEffect(()=>{
        getTweets();
    },[]);
```

이 newT를 console.log해보면 QuerySnapshot라는 것이 출력되는데,

그안에는 docs,empty, metadata, foreach..등등의
많은 데이터들이 들어있다.

이중에 forEach를 사용해 우리가 작성한 data를 출력해보자.


# 0.4 data 찾기
```js
    const getTweets = async() => {
        const newT = await dbService.collection("tweet").get();
            newT.forEach(document => console.log(document.data()));
    };
    useEffect(()=>{
        getTweets();
    },[]);
    
    //출력 {createdAt: 1652703992205, tweet: 'hello'}
```

이제야 내가 작성한 시간과, 트윗이 출력된다.

확인했다면 이제 이 트윗을 getTweet에 담아주자.
```js
 newT.forEach(document => setGetTweet(prev => [document.data(), ...prev]));
```
새로받은 트윗 + 이전 트윗들을 합친 배열

 하지만 여기서 더 나아가, 객체로 만들면
 더 많은 정보를 줄 수 있다.
 newTObj를 만들어, 위와 동일하게 배열로 만들었다.
```js
     const getTweets = async() => {
        const newT = await dbService.collection("tweet").get();
        newT.forEach(document => {
            const newTObj = {
                ...document.data(),
                id : document.id,
            };
            setGetTweet(prev => [newTObj, ...prev]);
        });
    };
```

# 0.5 작성자 나타내기

누가 트윗을 올렸는지 알려주는 기능을 제공하고있다.
authService 를 작성한 App.js로 돌아가, user를 받아오는 state를 만들고

```js
//App.js
 const [ userObj, setUserObj ] = useState(null);
```

이 전에 작성해놓은 onAuthStateChanged는 유저가 바뀔때마다 감지를 하는 함수였다.

여기에 setUserObj로 현재 유저값을 저장한다.
```js
  useEffect(()=> {
  authService.onAuthStateChanged((user) =>{
    if(user){
      setIsLoggedIn(true);
      setUserObj(user);//현재의 user
    }else {
      setIsLoggedIn(false);
    }
    setInit(true)
  });
    },[]);
```

그리고 이걸, Home컴포넌트로 보내야하는데, 바로 보낼수없으니,

1차로 AppRouter로 보낸다  userObj={userObj}
```js
//1차 prop보내기
//App.js
  return (
    <>
   {init ? <AppRouter isLoggenIn={isLoggenIn} userObj={userObj}/> :
   "Initializing.. " }
   <footer>&copy;  {new Date().getFullYear()} bluebird </footer>
   </>
  );
```

```js
//Router.js
//prop을 받아, Home으로 전달하기  userObj={userObj}
const AppRouter = ({ isLoggenIn, userObj }) => {
  return (
       <Router>
      {isLoggenIn && <Navigation /> }
      <Switch>
        {isLoggenIn ? (
          <>
            <Route path="/">
              <Home userObj={userObj} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          </>
          ..//
          //생략

```

드디어 Home에서  userObj={userObj} 받기

```js
//Home.js
const Home = ({userObj}) => //생략 

console.log(userObj)
```
어떤식으로 받아오는지 출력해보자.

user라는 객체가 출력되고, 그안에는 displayname, phoneNumber, ,
email, uid 등등이 출력되는데, 

uid로 작성자를 표시해주자.

트윗이 작성될때 => submit될때이기때문에 onsubmit에 넣어준다
```js
//Home.js
 const onSubmit = async(e) => {
        e.preventDefault();
       await dbService.collection("tweet").add({
            text:tweet,
            createdAt : Date.now(),
            createdId : userObj.uid,
        });
        setTweet("")//비우기
    };
```
