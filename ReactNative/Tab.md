# Tab 

tab은 평소 react.js에서 하는것과 동일하다.

useState를 사용해서 만들면 된다.

## 0.1 useState

먼저 work와 travel 버튼을 왔다갔다할거라,

work에 useState사용한다. 기본값은 true를 넣고,

당연히 반대값(travel)이면 false로 바뀌게 설정.

```js
export default function App() {
  const [ working, setWorking ] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  return (
  )}
 ```


 ## 0.2 onPress로 연결

자바스크립트에서 onClick으로 이벤트를 연결했던것처럼, onPress으로 이벤트를 리슨해준다.

```js
export default function App() {
  const [ working, setWorking ] = useState(true);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```
여기까지 작성하고, 클릭했지만 아무런일도 일어나지않는다.

왜냐하면 아직 클릭시 나타날 이벤트를 작성하지않아서..

 ## 0.3 클릭시 나타날 이벤트(스타일)주기

 원하는 효과는 클릭(활성화)된 버튼만 텍스트가 흰색이고,

 클릭이안된(비활성화) 버튼은 텍스트가 회색이었으면 좋겠다.

```js
  btnText: {
    fontSize: 32,
    fontWeight: "600",
    color: "white",
  },
```
 현재 기본스타일에 컬러가 흰색으로 되어있는데 이걸지우고,

 스타일을 확장해보자 => 확장은 중괄호 두번하고, 스프레드 문법

 ```js
 //App.js
        <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color : working ? "white" : theme.gray}}>Work</Text>
        </TouchableOpacity>
 ```

 ...을 붙여주면, btnText스타일을 전부가지고오고 + 원하는 개별 스타일을 추가가 가능하다.

 travel버튼의 조건은 반대로 작성해주면된다.