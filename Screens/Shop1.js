import React from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

const Shop1 = ({navigation}) => {
    return (
        <View>
            <Text>
                Shop1
            </Text>
            <Button 
                title="Shop2"
                onPress={() => navigation.navigate('Shop2')}
            />
        </View>
    )
}
export default Shop1;