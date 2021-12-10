import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginScreen from './screens/loginScreen';
import HomeScreen from './screens/HomeScreen';
import ApiCall from './screens/ApiCall';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //      <Stack.Screen options={{headerShown:false}} name="login" component={loginScreen} />
    //      <Stack.Screen name="home" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <ApiCall/>
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
