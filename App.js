import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './roots/homeStack';
import AuthFlow from './roots/AuthFlow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LogBox } from 'react-native';
import _ from 'lodash';

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = message => {
if (message.indexOf('Setting a timer') <= -1) {
   _console.warn(message);
   }
};
// import ServiceButton from './components/ServiceComponent'
// import ProductButton from './components/DetergentComponent'

const Stack = createNativeStackNavigator();
const App = () => {
  AsyncStorage.clear();
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      {/* <ProductButton cost={30} number={1} buttonName={"Wash, Dry, and Fold"} path={require('./assets/icons/clotheswashing.png')}/>
      <ProductButton cost={25} number={2} buttonName={"Dry Clean"} path={require('./assets/icons/clothes.png')}/>
      <ProductButton cost={30} number={2} buttonName={"Beddings"} path={require('./assets/icons/warmmachine.png')}/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown:false,}}
            name="Auth"
            component={AuthFlow}
          />
          <Stack.Screen
            options={{headerShown:false,}}
            name="HomeFlow"
            component={HomeStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
      
    </View>
  )
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height:'100%'
  },
});

