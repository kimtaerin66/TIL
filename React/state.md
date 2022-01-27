# state
state란 컴포넌트 내부에서 변할 수 있는 값

좀더 잘 이해하기 위해 사람을 예시로 들면

사람의 이름, 성별, 나이, 현재 사는 곳, 취업여부, 결혼/연애여부는 어디에 해당될까?

state - 현재 사는 곳, 취업여부, 결혼/연애여부

이 값들은 이사를 가거나, 취업을 하거나, 회사를 그만두거나 등 충분히 바뀔 수 있다. >> state

하지만 이름(개명제외), 성별, 나이는 내마음대로 바꿀 수 있는 것이 아니다.

## 어떤 상황에 사용하는가?
값이 바뀌는 state. 값이 변하면 리랜더링이 필요한데.

값이바뀔 때 마다 수동으로 랜더링 할 수 없으니, useState를 사용한다. 

## useState

- useState 살펴보기
```
const data = React.useState();
console.log(data);
 ```
이렇게 출력해보면 [undefined, f] 배열이 출력된다.

배열[0]의 값은 data의 초기값을 나타내고, 배열[1]의 값은 그 초기값을 바꾸는 함수이다.

이 값들을 불러와서 이용할 건데, 일일이 변수에 담아사용하긴 불편함으로 구조분해할당을 한다.


- useState 사용법

1.  [값, 값을 변경시키는 함수] = React.useState(초기값); 
2. 이벤트 연결할 함수생성 > 그안에 값을 변경시키는 함수(변경할 값)

```
예) 
const [data, setData] = React.useState(0);
function onClick = () => {
    setData(data = data + 1);
}
```