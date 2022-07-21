import Home  from "../Screens/Home";
import Chat from "../Screens/Chat";
import Profile from "../Screens/Profile";
import List from "../Screens/List";
import Shop1 from "../Screens/Shop1";
import Shop2 from "../Screens/Shop2";
import Tabs from "../navigation/tabs";
import Edit from "../Screens/Edit";
import Shop1Menu from "../Screens/Shop1Menu";
import Shop2Menu from "../Screens/Shop2Menu";
import Shop1CheckOut from "../Screens/Shop1CheckOut";
import Shop2CheckOut from "../Screens/Shop2CheckOut";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AHome from "../AdminScreens/AHome";
import ActiveOrders from "../AdminScreens/ActiveOrders";
import PendingOrders from "../AdminScreens/PendingOrders";
import AdminFlow from '../roots/AdminFlow';
const homeStack = createNativeStackNavigator();
const HomeFlow = ({navigation}) => {
    return(
        <homeStack.Navigator>
            <homeStack.Screen
                options={{headerShown:false,gestureEnabled:false}}
                index={0}
                name="HomeTabs"
                component={Tabs} // AdminFlow
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Chat"
                component={Chat}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Profile"
                component={Profile}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="List"
                component={List}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop1"
                component={Shop1}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop2"
                component={Shop2}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Edit"
                component={Edit}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop1Menu"
                component={Shop1Menu}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop2Menu"
                component={Shop2Menu}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop1CheckOut"
                component={Shop1CheckOut}
            />
            <homeStack.Screen
                options={{headerShown:false}}
                name="Shop2CheckOut"
                component={Shop2CheckOut}
            />
        </homeStack.Navigator>
    )
}

export default HomeFlow;