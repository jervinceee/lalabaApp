import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Screens/Home';
import Shop1 from './Screens/Shop1';
import Shop2 from './Screens/Shop2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Shop1" component={Shop1} />
      <Stack.Screen name="Shop2" component={Shop2} />
    </Stack.Navigator>
  </NavigationContainer>
  )
};
export default App;
