import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home  from "../Screens/Home";
import Chat from "../Screens/Chat";
import Profile from "../Screens/Profile";
import List from "../Screens/List";
import Shop1 from "../Screens/Shop1";
import Shop2 from "../Screens/Shop2";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs";
import Tabs from "../navigation/tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Shop1Menu from "../Screens/Shop1Menu";

const Stack = createStackNavigator ({
      Home:Home,
  },
      {
          initialRouteName: 'Home'
      });

<NavigationContainer>
<StackActions.Navigator>
<Stack.Screen  name="Home" component={Tabs} />
      <Stack.Screen name="Shop1" component={Shop1} />
      <Stack.Screen name="Shop2" component={Shop2} />
      <Stack.Screen name="Chat" component={Chat}/>
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Shop1Menu" component={Shop1Menu} options={{ title: 'Laundry Shop 1' }}/>
     

</StackActions.Navigator>
</NavigationContainer>

Navigator = createAppContainer(Stack)
export default Navigator;