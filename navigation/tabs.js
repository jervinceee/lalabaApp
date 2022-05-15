import react from "react";
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import Chat from "../Screens/Chat";
import Home from "../Screens/Home";
import List from "../Screens/List";
import { COLOR, icons } from "../assets/constants";
import bubble from "../assets/icons/bubble.png"


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
        headerShown: false
      }}
        >
        <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image
                            source={bubble}
                            resizeMode="contain"
                            style={{
                               width: '100%',
                               height:'100%',
                               

                            }}

                        />
                    }
                }}
            /> 

        
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image
                            source={bubble}
                            resizeMode="contain"
                            style={{
                               width: '100%',
                               height:'100%',
                               

                            }}

                        />
                    }
                }}
            /> 

            <Tab.Screen
                name="List"
                component={List}
                options={{
                    tabBarIcon: ({focused}) => {
                        <Image
                            source={bubble}
                            resizeMode="contain"
                            style={{
                               width: '100%',
                               height:'100%',
                               

                            }}

                        />
                    }
                }}
            />

           
        </Tab.Navigator>
    )
}
export default Tabs;