import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView
} from "react-native";
import bubble from "../assets/icons/bubble.png"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
    return (
     
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={bubble}
                    style={{
                        height: 50,
                        width: 50
                    }}
                />
                <Icon name='person' color={'white'} size={50}/>
                
            </View>

            <View style={styles.body}>
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
            </View>    
                  
                       {/* <Button title="Shop1"
                            onPress={() => navigation.navigate('Shop1')}
                        /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'powderblue',
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#46829e',
        flex: -1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        
    },

    body: {
        flex: -1,
        justifyContent:'center',
        alignItems: 'center',
        alignContent:'center',
    },
    profilePicture: {
        width:100,
        height:100
        
    }










})

export default Home;


