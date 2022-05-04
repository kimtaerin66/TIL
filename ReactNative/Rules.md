# Rules of Native 
리액트 네이티브를 사용하기위해 지켜야하는 규칙들이 몇가지있다.

## 0.1 리액트 네이티브는 웹사이트가 아니다!
그래서 HTML이 아니기 때문에 div를 사용할 수 없다.

=> 대신 View를 사용한다.
(그래서 항상 View를 import)

## 0.2 모든 text는 Text 컴포넌트안에 들어가야한다.

p,span 또한 없기때문에 모든 text를 Text 컴포넌트안에

작성한다. 그렇지 않으면 오류발생.

## 0.3 모든 스타일을 사용할 수는 없다.
웹에서 사용하는 대부분의 css를 사용할 수 있지만
몇몇은 사용이 불가능하다.

예)border

## StyleSheet은 무엇인가?

App.js 아래부분에 style을 StyleSheet로 주었는데, 

이것은 무엇일까?

=> StyleSheet.create은 style Object를 만드는데 사용된다.

사용하는 이유는?

=> css 자동완성기능을 제공한다./ 스타일을 정리하는데 유용하다. 하지만 필수사용은 아니다.

[ 사용법 ]
text부분 작성.

class처럼 원하는 이름을 주고, 스타일을 작성
```js
//App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text : {
    fontSize : 28,
    color: "red",
  }
});
```
그리고 text컴포넌트에서 style.text로 받아준다.

```js
//App.js
export default function App() {
  return (
    <View style={styles.container}  >
      <Text style={styles.text}> Hello!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
```
[ Expo앱으로 보이는 화면(핸드폰) ]

![Alt text](../IMG/expo1.jpg)

