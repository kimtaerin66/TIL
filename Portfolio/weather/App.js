import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

//가로사이즈 구하기
const { width: windowSize } = Dimensions.get("window");

const API_KEY = "60d6a4b0aa40cb8c171b15bbaab6e242";

export default function App() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const [days, setDays] = useState([]); //daily저장
  //권한요청
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (granted) {
      //true일때
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 6 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].district);
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await res.json();
    setDays(json.daily);
  };
  useEffect(() => {
    ask();
  }, []);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.date}>{`${year}-${month}-${date}`}</Text>
        <Text style={styles.city}> {city} </Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        contentContainerStyle={styles.weather}
        showsHorizontalScrollIndicator={false}
      >
        {days.length === 0 ? (
          <View style={styles.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
            days.map((day,idx) => 
            <View key={idx} style={styles.day}>
             <Text style={styles.temp}>
               {parseFloat(day.temp.day).toFixed(1)}
             </Text>
             <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
          </View>
            ))}
     
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9ca24",
    alignItems: "center",
  },
  top: {
    flex: 1,
    justifyContent: "center",
    fontSize: 50,
    alignItems: "center",
  },
  day: {
    flex: 2,
    paddingTop: 20,
    alignItems: "center",
    width: windowSize,
    fontSize: 38,
    marginTop: -22,

  },
  date: {
    fontSize: 22,
  },
  city: {
    fontSize: 48,
  },
  temp: {
    fontSize: 120,
  },
  description :{
    fontSize:38,
  },
  tinyText: {
    fontSize:20,
  },
});
