import React from 'react';
import {
    View,
    Text,
    Button
} from "react-native";

const Profile = ({navigation}) => {
    return (
        <View>
            <Text>
                This is Profile
            </Text>
            <Button 
                title="Save changes"
            />
        </View>
    )
}
export default Profile;