import React from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

const Shop2 = ({navigation}) => {
    return (
        <View>
            <Text>
                Shop2
            </Text>
            <Button 
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
        
        

        
    )
}
export default Shop2;