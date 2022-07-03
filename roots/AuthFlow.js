import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';

const authStack = createNativeStackNavigator();
const AuthFlow = ({navigation}) => {
    return(
        <authStack.Navigator>
            <authStack.Screen
                options={{headerShown:false}}
                name="Login"
                component={Login}
            />
            <authStack.Screen
                options={{headerShown:false}}
                name="SignUp"
                component={SignUp}
            />
        </authStack.Navigator>
    )
}

export default AuthFlow;