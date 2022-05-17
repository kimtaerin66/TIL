# Realtime
Realtime이란 실시간을 의미한다.

기본적으로 데이터베이스의 변화가 생기면

그걸을 바로바로 캐치하는것이다. 
삭제든 추가든

## 0.1 전제과정
firebase에서 realtime을 사용하려면,
Firestore을 사용해야하고,

Firestore에서 collection까지 사용해야한다.


## 0.2 onSnapshot
collection 매소드중에 onSnapshot을 사용하면 된다.

기존에 작성중이던, 컴포넌트들을 처음에 불러올때,
작성된 트윗을 불러오는 useEffect에 onSnapshot을 추가해보았다.

```js
//Home.js
//기존
    useEffect(()=>{
        getTweets();
    },[]);


//추가

    useEffect(()=>{
        getTweets();
        dbService.collection("tweet").onSnapshot(snapshot => console.log("It's realtime"));
    },[]);
```
이렇게 작성하고, 인풋창에 글을 치고 엔터를 누르면
It's realtime이 계속 출력된다.

감지가 된다는 것!


## 0.3 onSnapshot으로 수정하기

기존에 트윗을 출력할때는 객체를 사용했다.

이 부분을 realtime으로 만들기위해 onSnapshot을 이용한 코드로 바꿔보자.

```js
//기존코드
const [getTweet, setGetTweet ] = useState([]);
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
    useEffect(()=>{
     getTweets();
    },[]);
```

getTweets 이부분을 다 없애고, useEffect에다가 작성할건데,
snapshot은 기본으로 docs을 가지고있다. 

이걸 map할것이다.
```js
    useEffect(()=>{
        dbService.collection("tweet").onSnapshot(snapshot =>{
           const tweetArr = snapshot.docs.map((doc) => ({
               id:doc.id, ...doc.data(),
            }));
        })
    },[]);
```

모든 doc는 id와 data를 가진 객체를 반환한다.



