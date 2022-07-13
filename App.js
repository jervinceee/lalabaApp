import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './roots/homeStack';
import AuthFlow from './roots/AuthFlow'
import AdminFlow from './roots/AdminFlow';
import PendingOrders from './AdminScreens/PendingOrders';
import ActiveOrders from './AdminScreens/ActiveOrders';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown:false,}}
            name="Auth"
            component={ActiveOrders}
          />
          <Stack.Screen
            options={{headerShown:false,}}
            name="HomeFlow"
            component={HomeStack}
          />
          <Stack.Screen
            options={{headerShown:false,}}
            name="AdminFLow"
            component={AdminFlow}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="light-content"/>
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

