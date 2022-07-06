import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import ActiveOrders from '../AdminScreens/ActiveOrders';
import PendingOrders from '../AdminScreens/PendingOrders';
import SummarySales from '../AdminScreens/SummarySales';
import ShopProfile from '../AdminScreens/ShopProfile';

const adminStack = createNativeStackNavigator();
const AdminFlow = ({navigation}) => {
    return(
        <adminStack.Navigator>
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
        </adminStack.Navigator>
    )
}

export default AdminFlow;