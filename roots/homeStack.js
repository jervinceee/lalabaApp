import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home  from "../Screens/Home";
import Chat from "../Screens/Chat";
import Profile from "../Screens/Profile";
import List from "../Screens/List";
import Shop1 from "../Screens/Shop1";
import Shop2 from "../Screens/Shop2";
import Tabs from "../navigation/tabs";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import Shop1Menu from "../Screens/Shop1Menu";
import Edit from "../Screens/Edit";
import Shop2Menu from "../Screens/Shop2Menu";
import Shop1CheckOut from "../Screens/Shop1CheckOut";
import Shop2CheckOut from "../Screens/Shop2CheckOut";

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
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="List" component={List}/>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="Shop1Menu" component={Shop1Menu} />
      <Stack.Screen name="Shop2Menu" component={Shop2Menu} />
      <Stack.Screen name="Shop1CheckOut" component={Shop1CheckOut} />
      <Stack.Screen name="Shop2CheckOut" component={Shop2CheckOut} />
     

</StackActions.Navigator>
</NavigationContainer>

Navigator = createAppContainer(Stack)
export default Navigator;