# Touchables 

버튼을 클릭시, 즉 활성화가 되어있는 여부에 따라

텍스트나, 버튼 컬러가 바뀌게하기하려면 어떻게 해아할까? 

Touchable~이 들어간 컴포넌트를 사용하면 된다.

Touchable은 view의 한종류인데, 클릭이벤트를 감지하고,(listen) 종류가 여러개있다.

(다시말하지만, native는 브라우저가아니라, 일반적으로 사용하는 html 사용불가능)

## 0.1 TouchableOpacity

이름뒤에 Opacity가 붙는이유는, 투명해지는 애니메이션 효과가 있기때문.

[ 사용법 ]

import하고, 원하는 컴포넌트를 감싸준다.

예) work 버튼을 감싼다

```js
//App.js
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <Text style={styles.btnText}>Travel</Text>
      </View>
    </View>
  );
}
```

이렇게 작성하고 핸드폰으로 보이는 work를 클릭하면, 텍스트가 잠시 투명해졌다가 원래대로 돌아온다.

속성을 통해 투명도의 값을 조절할 수 있다.

반면에 Travel은 여전히 그대로.

## 0.2 TouchableHighlight

TouchableHighlight은 opacity보다 더 많은 속성을 가지고있다.

opacity는 투명도의 정도만 조절이 가능했지만,
Highlight는 배경색이 바뀌도록 할 수 있다.

이번엔 Travel버튼의 배경색을 바꿔보자.

[ 사용법 ]

import하고, 원하는 컴포넌트를 감싸준다. + onPress + 바꿀배경컬러


```js
//App.js
import { StyleSheet, Text, View, TouchableHighlight,TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableHighlight >
        <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

```

이렇게 감싸고 끝나는것이아니라, 언제 무엇을할건지 알려줘야한다. 
가장많이 쓰이는게 onPress 눌렀을때이다.

그외에도 onPressOut,onPressIn 등,

그 버튼에위치하는지, 나갔는지에 따라 이벤트를 발생시킬 수도 있다.

또 어떤색으로 배경을 바꿀건지, 
underlayColor 로 알려줘야한다.

```js
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableHighlight 
        underlayColor="yellow"
        onPress={()=>console.log("hello")}>
        <Text style={styles.btnText}>Travel</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
```

## 0.3 TouchableWithoutFeedback

이 컴포넌트는 화면의 가장 위에서일어나는 이벤트를
리슨한다. 즉 ui에 바뀌는게없다 = 화면이 안바뀐다

그래서 방금 2번에해서한걸 Feedback으로 바꿔보면

```js
//App.js
        <TouchableWithoutFeedback 
        underlayColor="yellow"
        onPress={()=>console.log("hello")}>
        <Text style={styles.btnText}>Travel</Text>
        </TouchableWithoutFeedback>
```
hello만 출력될뿐 배경컬러는 노란색으로 바뀌지않는다.



## 0.4 Pressable
Pressable은 Touchable~과 비슷하지만 더많은 속성을 줄 수 있다.

상세하게 속성을 설정할수있어서, Touchable에서는
없었던 것들이 필요하다면 여기서 설정할 수 있다.

예) 터치부분을 어디까지 인식할것인지.
