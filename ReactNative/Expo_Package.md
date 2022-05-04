# Package와 API

App.js를 보면 가장 상단에 import되고있는 StatusBar

```js
//App.js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
```
이 StatusBar는 무엇이고, 다른 컴포넌트는 react-native에서 오는데 왜 얘만 다른데서 불러올까?

---------------------------------------

react native의 옛날버전들을 보면 지금보다 훨씬 많은 컴포넌트들이 존재했다. 

최대한 많은 기능을 제공하려고 했지만,

그 만큼 많은 버그가 발생했다.

그래서 컴포넌트와 api를 줄이고, 중요한것들만 남긴게 지금 상태이다.

## 컴포넌트와 api의 차이점
- 컴포넌트 : 화면에 렌더링할 항목(View)
- API : 운영체제와 소통하는 자바스크립트 코드

=> 그런데, 앱을 만들면서 sns로 로그인을 하거나,

localStorage에 저장을 하는등을 이용하려면,

없는 기능이기 때문에 커뮤니티에서 만든 패키지를 사용해야한다.

## 패키지 다운받기
우리는 더이상 지원하지 않는 기능을 사용하기위해
이곳에 검색을해서 찾아 사용해야한다.

다운받는곳 : https://reactnative.directory/

이곳에서 원하는 패키지를 다운받는데, 오른쪽에 최근에 업데이트가 언제됬는지,

몇명의 유저가 다운받았는지를 확인하면 더 괜찮은 패키지를 찾을 수 있다.


## Expo SDK

아, 그전에 expo는 이렇게 react-native 자체에서 지원하지 않는 패키지가 있다는 것을 안다.
또 그 패키지가 중요하다는 것도 알고있다.

그렇기에 Expo팀이 자체적으로 패키지와 api를 만든걸 Expo SDK라고한다.

react native api에서 찾을 수 없다면 expo sdk에서 찾으면된다.

https://docs.expo.dev/versions/latest/


## StatusBar

맨위에서 질문했던 바로 그 StatusBar.

그 이유는 Expo가 리액트 네이티브의 일부 컴포넌트와 api를 복제하고, 개선했기 때문이다.

그래서 expo에서 import 해온다.

https://docs.expo.dev/versions/v44.0.0/sdk/status-bar/

## Async-Storage 설치하기

우리는 native에서 더이상 지원안하는 Async-Storage를 사용할 것이기 때문에 expo에서 지원하는 패키지를 설치한다.

https://docs.expo.dev/versions/v44.0.0/sdk/async-storage/

```node
expo install @react-native-async-storage/async-storage
```