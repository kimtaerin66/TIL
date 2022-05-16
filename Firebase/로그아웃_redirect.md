# 로그아웃

이번엔 반대로 로그아웃을 해보자.

signOut()을 사용하면된다.
```js
const onLogOut = () => authService.signOut();
//버튼에 연결
return (
        <>
        <button onClick={onLogOut}>LogOut</button>
        </>
    );

```

버튼을 누르면, 로그아웃은 됬지만 페이지는 여전히 이전에 보던페이지이다.

로그아웃을 하면 Home으로 돌려보자.

## 방법1 - redirect(v5.3)

이럴 때 사용하는게 바로 react-router-dom의 redirect이다.

(새로운 react-router-dom 6버전에서는 사용할 수 없다고 한다.)

일단 redirect에는 from과 to가 있고,
가장 마지막에 적어주면 된다.

현재 router + 마지막에 추가
```js
 <>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
          <Redirect from="*" to="/" />
          </>
```
이렇게 from과 to를 사용해 어디에서 어디로 갈건지 적어주면된다.

## 방법2 - Navigte Hook (구 useHistory)

```js
//react-router-dom 구버전
import { useHistory } from "react-router-dom";

  const history = useHistory();
  const onLogOut = () => {
    authService.signOut();
    history.push("/");
  };

//Profile.js
import { useNavigate } from "react-router-dom";

  const navigate = useNavigate();
  const onLogOut = () => {
    authService.signOut();
    navigate("/");
  };
```
로그아웃이 되면, / 홈으로 간다.

