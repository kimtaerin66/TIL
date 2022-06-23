# React Native Web
expo는 ios와 안드로이드도 지원하지만, web도 지원한다.

하지만 react.js가 아니라, native 코드를 이용한다.

## 0.1 web으로 열기/버그 수정
Run in web browser을 눌러보자.

http://localhost:19006/ 라는 다른 port로 열리는데,

에러가 생긴다 => 이 버그는 AsyncStorage가 null이기 때문에 생기는 것이다.
(AsyncStorage에 아무것도 저장이 안되어있을 때)

그래서 App.js를 수정해준다.

```js
  const loadToDos = async() => {
   const s = await AsyncStorage.getItem("@toDos");
   if(s){
    setToDos(JSON.parse(s));//다시 obj로 만들기
   }
  }
```
이렇게 if만 넣어서 s가 있을때에만 parse하게 하면된다.

## 0.2 버그고치기 1 - 스타일

work탭과 travel탭 둘다 왔다갔다 잘 움직이지만,

폰트사이즈가 엄청 작다.

스타일이 적용이 안되서 그런것. 고쳐보자.

StyleSheet를 쓰는대신, 두개의 버튼의 스타일을 직접 인라인 스타일로 넣어주자.

(StyleSheet의 btnText는 아예 삭제)

```js
//수정전
const styles = StyleSheet.create({
  btnText: {
    fontSize: 32,
    fontWeight: "600",
  },
  //생략
})
//수정 후
  <TouchableOpacity onPress={work}>
        <Text style={{    
          fontSize: 32,
          fontWeight: "600",
          color : working ? "white" : theme.gray}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={{       
          fontSize: 32,
          fontWeight: "600", color: working ? theme.gray : "white"}}>Travel</Text>
        </TouchableOpacity>


```

## 0.2 버그고치기 2 - platform API

리스트를 삭제하려고 x를 누르면, web에서는 아무것도 작동하지않는다.

바로 alert이 작동하지 않기때문

=> platform이라는 API로 react native를 직접 불러와야한다.

platform API : 우리가 지금 어떤 플랫폼인지 알 수 있다.(IOS인지 웹인지 등등)

### 0.1 import

```js
import { Platform } from "react-native";

```
### 0.2 필요한 곳에서 플랫폼 확인

지금 플랫폼확인이 필요한곳은

지울때! 지울때니까 deleteToDo 함수에서 확인한다.

```js
 if (Platform.OS === "web") {
    const ok = confirm("Do you want to delete this To Do?");
 }
 //전체

   const deleteToDo = async (key) => {
    if (Platform.OS === "web") {
      const ok = confirm("Do you want to delete this To Do?");
      if (ok) {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }
    } else {
      Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancle" },
        {
          text: "I'm Sure",
          style: "destructive",
          onPress: () => {
            const newToDos = { ...toDos }; //복사
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ]);
    }
  };
```

## 0.3 republish

방금 수정하였으니 republish해주자.

처음에 눌렀던 publish or republish project를 다시 누르면된다.




