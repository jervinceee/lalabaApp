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
        <ScrollView style={styles.scrollcontainer}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={bubble}
                        style={{
                            height: 50,
                            width: 50
                        }}
                    />
                    <Text style={{
                        color: 'black',
                        fontSize: 40,
                        }}>
                        Lalaba
                    </Text>
                    <Icon name='person' color={'white'} size={50} 
                        onPress={() => navigation.navigate('Profile')}
                    />
                
                </View>
                   
                <Text style={{
                        color: 'black',
                        fontSize: 25,
                        }}>
                        Shops Available for you!
                    </Text>

                <View style={styles.body}>
                
                    <Button title="Laundry Shop1"
                            onPress={() => navigation.navigate('Shop1')}
                    />
                    <Button title="Laundry Shop 2"
                            onPress={() => navigation.navigate('Shop2')}
                    />
            </View>    
                  
                       {/* <Button title="Shop1"
                            onPress={() => navigation.navigate('Shop1')}
                        /> */}
        </View>
        </ScrollView>
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
    scrollcontainer: {
        backgroundColor : 'powderblue',

    },

    body: {
        flex: -1,
        justifyContent:'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
    },
    profilePicture: {
        width:100,
        height:100
        
    }










})

export default Home;


