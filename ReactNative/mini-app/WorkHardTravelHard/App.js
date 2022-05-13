import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView,Text, View,TouchableOpacity,TextInput, Alert } from "react-native";
import { theme } from "./colors";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons'; 

export default function App() {
  const [ working, setWorking ] = useState(true);
  const [ text, setText ] = useState("");
  //보통 기본값으로 빈배열을 쓰지만, 오브젝트 사용
  const [ toDos, setToDos ] = useState({});
   //앱이 실행될때 바로실행
   useEffect(()=>{
    loadToDos();
  },[]);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);
  const onChangeText = (e) => setText(e);
  const saveToDos = async(toSave) => {
    //현재가지고있는 todo를 string으로만들고 저장
   await AsyncStorage.setItem("@toDos", JSON.stringify(toSave));
  };
  const loadToDos = async() => {
   const s = await AsyncStorage.getItem("@toDos");
   setToDos(JSON.parse(s));//다시 obj로 만들기
  }
  const addToDo = async() => {
    if(text === ""){//작성된게없다면
      return;
    }
    const newToDos = {
         ...toDos,
        [Date.now()]: { text , working },
  };
  setToDos(newToDos);
  await saveToDos(newToDos);
  setText("");
};
const deleteToDo = async(key) => {
  Alert.alert("Delete To Do",
   "Are you sure?",[
   {text : "Cancle" },
   {text : "I'm Sure",
   style:"destructive",
   onPress: () => {
    const newToDos = {...toDos}//복사
    delete newToDos[key]
    setToDos(newToDos);
   saveToDos(newToDos);
   }},
   ]);
};
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
        <Text style={{...styles.btnText, color : working ? "white" : theme.gray}}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
        <Text style={{...styles.btnText, color: working ? theme.gray : "white"}}>Travel</Text>
        </TouchableOpacity>
      </View>
        <TextInput
        onSubmitEditing={addToDo}
        value={text} 
        returnKeyType="done"
        onChangeText={onChangeText}
        placeholder={working ? "Add a To Do" : "Where do you wanna go?"} style={styles.input} />
        <ScrollView>
        {Object.keys(toDos).map(key => 
        toDos[key].working === working ? (
        <View style={styles.toDo} key={key}>
            <Text style={styles.toDoText}>{toDos[key].text}</Text>
         <TouchableOpacity onPress={()=> deleteToDo(key)}>
           <Text><FontAwesome name="close" size={20} color={theme.gray} /></Text>
           </TouchableOpacity>
          </View>
          ) : null
        )}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:theme.bg,
    //일반css에는 없는 padding속성
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 100,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  btnText: {
    fontSize: 32,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal : 20,
    borderRadius:30,
    marginTop: 20,
    fontSize: 18,
    marginVertical : 20,
  },
  toDo: {
    backgroundColor : theme.toDoBg,
    marginBottom : 10,
    paddingVertical : 20,
    paddingHorizontal : 40,
    borderRadius: 15,
    flexDirection:"row",
    alignItems: "center",
    justifyContent: "space-between",
   },
  toDoText : {
   color:  "white",
   fontSize : 17,
   fontWeight : "500",
  },
})
