import React, { useState, useEffect } from "react";
import {  Text, View, StyleSheet } from "react-native";
import * as Location from "expo-location";


const HandleLatLng = () => {
  const [location, setLocation] = useState(null);
  const [lat, setLat] = useState()
  const [lng, setLng] = useState()
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        console.log("User cancelled");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
    //   console.log(location.coords.latitude);
      setLat(location.coords.latitude);
    //   console.log(location.coords.longitude);
      setLng(location.coords.longitude);
      setLocation(location);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      {
        errorMsg != null ?
        <Text>{errorMsg}</Text>  :

        <Text style={styles.paragraph}>
          lat : {lat} and  long: {lng}
        </Text>
    }
    </View>
  );
};

export default HandleLatLng;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
