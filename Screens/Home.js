import React from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

const Home = ({navigation}) => {
    return (
        <View style ={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>
               
               This is homme
            </Text>
            <Button title="Shop1"
            onPress={() => navigation.navigate('Shop1')}
        />
        </View>
    )
}
export default Home;


