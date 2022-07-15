import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ActiveOrders from '../AdminScreens/ActiveOrders';
import PendingOrders from '../AdminScreens/PendingOrders';
import SummarySales from '../AdminScreens/SummarySales';
import ShopProfile from '../AdminScreens/ShopProfile';
import AHome from '../AdminScreens/AHome';
import AChat from '../AdminScreens/AChat';
import AList from '../AdminScreens/AList';

const adminStack = createNativeStackNavigator();
const AdminFlow = ({navigation}) => {
    return(
        <adminStack.Navigator>
            <adminStack.Screen
                options={{headerShown:false}}
                name="AHome"
                component={AHome}
            />
            <adminStack.Screen
                options={{headerShown:false}}
                name="ActiveOrders"
                component={ActiveOrders}
            />
            <adminStack.Screen
                options={{headerShown:false}}
                name="PendingOrders"
                component={PendingOrders}
            />
            <adminStack.Screen
                options={{headerShown:false}}
                name="SummarySales"
                component={SummarySales}
            />
            <adminStack.Screen
                options={{headerShown:false}}
                name="ShopProfile"
                component={ShopProfile}
            />
             <adminStack.Screen
                options={{headerShown:false}}
                name="AChat"
                component={AChat}
            />
            <adminStack.Screen
                options={{headerShown:false}}
                name="AList"
                component={AList}
            />
        </adminStack.Navigator>
    )
}

export default AdminFlow;