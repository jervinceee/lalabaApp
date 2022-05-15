import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image
} from "react-native";
import bubble from "../assets/icons/bubble.png"


const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
                <Image 
                    source={bubble}
                    style={{
                        width:100,
                        height: 100

                    }}
                />
                <Text style={{
                    color: 'black',
                    fontSize: 25,
                    }}>
                    This is Home
                </Text>

                  
                       {/* <Button title="Shop1"
                            onPress={() => navigation.navigate('Shop1')}
                        /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        alignContent:'center',
        backgroundColor: 'powderblue',
    },
    
    h1:{
        alignSelf: 'center',
        

    },
    profilePicture: {
        width:100,
        height:100
        
    }










})

export default Home;


