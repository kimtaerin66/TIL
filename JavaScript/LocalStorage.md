# LocalStorage 저장하기
유저가 입력한 닉네임이나, 설정 등을 매번 다시 입력하지 않도록 저장하는 API이다.

 LocalStorage는 브라우저에서 제공하는 API라 따로 설치할 필요가 없다.
 ## 01. LocalStorage
 개발자모드(F12)또는 마우스 우클릭 후 검사에서
Application탭을 보면 여러가지 저장방법 (쿠키,sql 등)이 있는데
그 중 로컬스토리지를 찾을 수 있다.


 ## 02. 저장하기(setitem) 
 로컬스토리지는 키와 value로 이루어져있어서 저장할 때 순서대로 입력해주어야 한다.
 콘솔창에 이렇게 입력하고
```js
localStorage.setItem("username","rin");
```
다시 개발자모드 Application탭 - localstorage를 보면 key에 username, value에 rin이 들어가있는 것을 확인할 수 있다.

## 여러개 저장하기
여러개의 값을 넣으려면 배열로 넣게되는데 localStorage는 배열 저장이 불가능하다. 오직 텍스트만 가능하기때문에 배열을 JSON.stringify하여 저장해야한다.

```js
//넣고자 하는배열
const todos = ["a","b","c","d","e"];
localStorage.setItem("todos",JSON.stringify(todos);

```

 ## 03. 불러오기(getitem)
저장된 값을 불러올때는 그 값의 키값을 입력해주면 된다.
 ```js
localStorage.setItem("username");
```

 ## 04. 삭제하기(removeitem)
  ```js
localStorage.removeItem("username");
```
