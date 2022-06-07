import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import bubble from "../assets/icons/bubble.png"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View>
                <View style={styles.header}>
                        <Image source={bubble}
                            style={{
                                height: 50,
                                width: 50,
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
                <View style={styles.titleContainer}>
                    <View style={styles.titleshape}>
                        <Text style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: '600'
                            }}>
                            Shops Available for you!
                        </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 15,
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer. Fusce ut placerat orci nulla
                        </Text>
                    </View>
                </View>
                <View style={styles.container}>
                    <View style={styles.body}>
                        <TouchableOpacity onPress={()=> navigation.navigate('Shop1')}>
                            <View style={styles.buttonContainer1}>
                                <Text style={{
                                        fontSize: 25,
                                        fontWeight:'800',
                                        color: 'white',
                                    }} >
                                    Laundry Shop 1
                                </Text>
                                <Image source={bubble}
                                    style={{
                                        height: 80,
                                        width: 80,
                                    }} 
                                />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Shop2')}>
                            <View style={styles.buttonContainer2}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: '800',
                                    color: 'white',
                                    }} >
                                    Laundry Shop 2
                                </Text>
                                <Image source={bubble}
                                    style={{
                                        height: 80,
                                        width: 80,
                                    }} 
                                />    
                            </View>
                        </TouchableOpacity>
                    </View>    
                </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 50,
        width: '100%',
        backgroundColor: '#01BCE4',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    titleContainer: {
        paddingTop:25,
        alignContent: 'center',
        alignItems:'center',
    },
    titleshape: {
        paddingTop:30,
        paddingHorizontal: 20, 
        width: '90%',
        height: 170,
        borderRadius:20,
        backgroundColor:'#F6F6F6',
    },
    container: {
        paddingTop:75,
        backgroundColor: 'white',
    },
    body: {
        justifyContent:'space-around',
        flexDirection: 'row',
        alignContent:'center',
    },
    buttonContainer1: {
        height:250,
        width: 180,
        borderRadius:20,
        backgroundColor: '#01BCE4',
        justifyContent:'center',
        flexDirection: 'column',
        alignItems:'center',
    },
    buttonContainer2: {
        height:250,
        width: 180, 
        borderRadius:20,
        backgroundColor: '#01BCE4',
        justifyContent:'center',
        flexDirection: 'column',
        alignItems:'center',
    },
    profilePicture: {
        width:100,
        height:100
        
    }










})

export default Home;


