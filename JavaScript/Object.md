# Object 객체
데이터를 일반 변수에 담는 것보다 편리하게 저장하려고 배열을 쓴다고했다.

배열은 값만 보고도 그 데이터가 무엇인지 알 수 있을 경우엔 가능하다.

``` js
const dayOfWeek = ["월","화", "수", "목", "금", "토", "일" ] 
```

그러나, 사용자의 정보를 담는다면 어떻게 될까?

```js
const user = ["rin", 123456, true, "design"];
```

값만 보게된다면 이것이 무엇을 의미하는지 정확히 알 수가 없다.

이럴 때 사용하는것이 객체이다.
## 객체로 표현하면?
```js
const user = {
    name : "rin",
    point : 123456,
    hasACat : true,
    job : "design"
}
```
앞쪽에 있는 name,point .. 를 key라고 하고, 그에 해당하는 값을 value라고 한다.

## 객체의 값 가져오기
객체이름.key or 객체이름['key']
```js
//point값을 가지고 오고싶다면 두가지 방법 모두 가능.
user.point 
user['point']
```

**주의해야할점 **

객체이름['key']의 방법으로 값을 가져올때 키값에 ''나 ""를 쓰지않으면,

그것은 키값이아닌 변수를 의미한다.

## 객체의 값 추가하기
객체이름.새로운key = 값 or 객체이름['key'] = 값
```js
//user가 사는 지역 seoul을 추가하고 싶다면 두가지 방법 모두 가능.
user.place = "seoul";
user["place"]  = "seoul";
```

## 객체의 값 삭제하기

delete 객체이름['key'] or delete 객체이름.key
```js
//위에서 추가한 place를 다시 삭제해보자.
delete user['place'];
delete user.place
```


