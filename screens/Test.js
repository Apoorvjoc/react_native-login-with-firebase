import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from "axios";

const Test = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  // const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErr("Permission to access location was denied");
        console.log("User cancelled");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLng(location.coords.longitude);
    })();
    //  restaurantsApiCall();
  }, []);

  useEffect(() => {
    if (lat == "" || lng == "") {
      return;
    }
    //  restaurantsApiCall();
  }, [lat, lng]);

  let restaurantsApiCall = async () => {
    console.log("lat:", lat);
    console.log("lng:", lng);
    try {
      let response = await axios.get(
        `https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=${lat}&longitude=${lng}`,
        {
          headers: {
            "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
            "x-rapidapi-key":
              "09fae9ce1bmshf7bdf80b1a74cd8p19f251jsn84fb0c99a13c",
          },
        }
      );
      if (response.data.data == undefined) {
        setLoading(false);
        throw new Error();
      }
      setData(response.data.data);
      setLoading(false);
      console.log(response.data.data);
      //  console.log(response.data.data);
    } catch (err) {
      setErr("Server Error");
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text>
        lat : {lat} and lng : {lng}
      </Text>
      {/** Method 1 to handle the  */}
      {loading == true ? (
        <Text>Loading.....</Text>
      ) : err != "" ? (
        <Text>{err}</Text>
      ) : (
        data.map((item, idx) => item.name && <Text key={idx}>{item.name}</Text>)
      )}
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
