import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ActiveOrders from '../AdminScreens/ActiveOrders';
import AHome from '../AdminScreens/AHome';
import PendingOrders from '../AdminScreens/PendingOrders';

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
        </adminStack.Navigator>
    )
}

export default AdminFlow;