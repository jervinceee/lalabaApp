import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import Forgot from '../Screens/Forgot';
import Verify from '../Screens/Verify';

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
            <authStack.Screen
                options={{headerShown:false}}
                name="Forgot"
                component={Forgot}
            />
            <authStack.Screen
                options={{headerShown:false}}
                name="Verify"
                component={Verify}
            />
        </authStack.Navigator>
    )
}

export default AuthFlow;