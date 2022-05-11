# Obj를 이용한 toDos

기존 toDoList를 만들 때는 늘 배열을 사용해왔다.

이렇게 useState를 사용하여, 기본값으로 빈배열을 줬었다.

```js
const [ todos, setTodos ] = useState([]);
```

하지만 이번에는 todo(text)뿐만 아니라, id값과 working의 상태(불린값)까지 받기위해 Object를 사용해보자.

## 0.1 기본값만 다르게 todo state만들기

```js
const [ todos, setTodos ] = useState({});
```

평소에 만들던 state와 동일하지만, 기본값에 빈오브젝트를 넣어준다.

## 0.2 todo를 추가하는 함수만들기
addToDo라는 함수를 하나만드는데,

text에 작성된게 없다면 그대로 return

있다면 object의 assign문법을 사용해준다.
```js
  const addToDo = () => {
    if(text === ""){//작성된게없다면
      return
    }
    const newToDos = Object.assign(
         {},//비어있는 obj 이게 target
         toDos, //기존작성된 todos
        {[Date.now()]:{text, work: working}}) //새로운 todos
        setToDos(newToDos);
        setText("");
  };
```

[ assign문법 ]

```js
Object.assign(target, 기존에작성된 todos, 새로 추가할 todos)
```

target에 비어있는 object를 작성하여, 빈obj에 두개를 합치게되는것이다.  

나중에 id로 사용할 Date.now()를 대괄호를 사용해 변수로 받아준다.

이렇게 id를 받아놓으면, 추가하거나 삭제할때 id를 찾아서 하면되기때문에 훨씬 편리해진다.

## 0.2.1 assign말고 다른 방법을 사용하고 싶다면?

ES6의 마법 => 늘 사용하던 스프레드 문법을 사용하자.

1. 새로운 obj를 만들고
```js
const newToDos = {}
```

2. 스프레드 문법사용하기
```js
//문법 const newToDos = {...기존, newToDos }
const newToDos = {...toDos, [Date.now()]:{text, work: working}};
```

...없이 그냥 toDos를 작성하면, toDos만 가져오게된다.
앞에 ...을 붙여주면 오브젝트를 가져오는거라 

새 오브젝트가 만들어진다.

## 0.3 paint(보여주기)는 어떻게 할까?
배열에서는 map을 사용해서 list를 보여주었다.

하지만 map은 배열에서만 사용이 가능하다.
그럼 obj에서는 무엇을 사용할까?

=> Object.keys()를 사용해서 배열을 만든다.

=> 그 다음 map을 사용

Object.keys(x)를 하면,

//출력 ["12369548948", "121654863132"]

Object.keys(x).map(key => x[key])
//출력 0: {work : false}
//     1: {work : true }   

key가 계속 변하는 id값이니 대괄호를 열어 변수로 작성해준다.


이렇게 각각의 내용을 얻을 수 있게된다.
```js
  {Object.keys(toDos).map(key => toDos[key])}
```
그리고 native의 규칙에따라 view와 text컴포넌트로 감싸준다.

[최종코드]
```js
        <ScrollView>
        {Object.keys(toDos).map(key => 
        <View style={styles.toDo} key={key}>
         <Text style={styles.toDoText}>{toDos[key].text} </Text>
          </View>)}
        </ScrollView>
```
