import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home  from "../Screens/Home";
import Chat from "../Screens/Chat";
import Profile from "../Screens/Profile";
import List from "../Screens/List";
import Shop1 from "../Screens/Shop1";
import Shop2 from "../Screens/Shop2";

const screens = {

    Home: {
        screen: Home
    },
    Chat: {
        screen: Chat
    },
    Profile: {
        screen: Profile
    },
    List: {
        screen: List
    },
    Shop1: {
        screen: Shop1
    },
    Shop2: {
        screen: Shop2
    }
    
}
const HomeStack = createStackNavigator (screens);
Navigator = createAppContainer(HomeStack)
export default Navigator;