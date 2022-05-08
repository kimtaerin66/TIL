import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Fontisto } from "@expo/vector-icons";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const API_KEY = "60d6a4b0aa40cb8c171b15bbaab6e242";

const icons = {
  "Clear": "day-sunny",
  "Rain" : "rains",
  "Clouds":"cloudy",
  "Snow":"snow",
  "Atmosphere":"fog",
  "Drizzle":"day-rain",
  "Thunderstorm":"lightning",
};

export default function App() {
  const [city, setCity] = useState("Loading...");
  //daily weather
  const [daily, setDaily] = useState([]);
  const [ok, setOk] = useState(true);
  //권한요청
  const getWeather = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      //false일때 허락하지않을때
      setOk(false);
    }
    //위치가져오기
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 6 });
    //변환
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].district);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDaily(json.daily);
  };
  useEffect(() => {
    getWeather();
  }, []);
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const date = String(today.getDate()).padStart(2, "0");
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.date}>
          {year}-{month}-{date}
        </Text>
        <Text style={style.cityName}>{city}</Text>
      </View>
      <ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.weather}
      >
        {daily.length === 0 ? (
          <View style={style.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          daily.map((day, idx) => (
            <View key={idx} style={style.day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  width: "100%",
                  justifyContent:"space-between"
                }}
              >
                <Text style={style.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto name={icons[day.weather[0].main]} size={70} color="white" />
              </View>

              <Text style={style.main}>{day.weather[0].main}</Text>
              <Text style={style.desc}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    color: "white",
    flex: 1,
    backgroundColor: "#FF4546",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 50,
    fontWeight: "500",
    color: "white",
  },
  day: {
    //하나의 day가 전체화면이 되야함
    width: SCREEN_WIDTH,
    padding: 20 
  },
  temp: {
    marginTop: 30,
    fontSize: 90,
    color: "white",
  },
  main: {
    marginTop: -10,
    fontSize: 35,
    color: "white",
  },
  date: {
    fontSize: 27,
    color: "white",
  },
  desc: {
    marginTop: -5,
    fontSize: 19,
    color: "white",
  },
});
