import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/loginScreen';
import HomeScreen from './screens/HomeScreen';
import ApiCall from './screens/ApiCall';
import HandlingRapidAPI from './screens/HandlingRapidAPI';
import HandleLatLng from './screens/HandleLatLng';
// import {LatAndLngContext} from "./screens/Context/LatAndLngContext";
import Test from './screens/Test';

const Stack = createNativeStackNavigator();

export default function App() {

    const [lat, setLat] = useState()
    const [lng, setLng] = useState()

  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //      <Stack.Screen options={{headerShown:false}} name="login" component={loginScreen} />
    //      <Stack.Screen name="home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    // <ApiCall/>
    // <HandlingRapidAPI/>
      // <HandleLatLng />
      <Test/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
