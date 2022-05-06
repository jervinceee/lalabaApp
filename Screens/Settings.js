import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';
import HomeScreen from './HomeScreen';
import Detailscreen from './DetailsScreen';



export default function Settings({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Settings</Text>
    <Button
        title="Go to home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button 
          title="go to details"
          onPress={() => navigation.navigate('Details')}
      /> 
  </View>
);
}
