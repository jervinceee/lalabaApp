import react from "react";
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import Chat from "../Screens/Chat";
import Home from "../Screens/Home";
import List from "../Screens/List";
import Icon from 'react-native-vector-icons/MaterialIcons';


const Tab = createBottomTabNavigator();

/*{const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/> 
            <Tab.Screen name="Chat" component={Chat}/> 
            <Tab.Screen name="List" component={List}/>
        </Tab.Navigator>
    )
}}*/
const screenOptions = (route, color) => {
    let iconName;
  
    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Chat':
        iconName = 'chat';
        break;
      case 'List':
        iconName = 'receipt';
        break;
      default:
        break;
    }
  
    return <Icon name={iconName} color={color} size={24} />;
  };
  
  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOptions(route, color),
          headerShown: false
        })}>
            <Tab.Screen name="Home" component={Home}/> 
            <Tab.Screen name="Chat" component={Chat}/> 
            <Tab.Screen name="List" component={List}/>
      </Tab.Navigator>
    );
  };
export default Tabs;