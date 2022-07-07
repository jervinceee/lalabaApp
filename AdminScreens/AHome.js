import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import bubble from "../assets/icons/bubble.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const AHome = ({navigation}) => {
    const [dimensions, setDimensions] = useState({ window, screen });

    useEffect(() => {
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
          setDimensions({ window, screen });
        }
      );
      return () => subscription?.remove();
    });
    return (
        <ScrollView style={{backgroundColor: 'white', marginTop:50}}>
            <View>
                <View style={styles.header}>
                        <Image source={bubble}
                            style={{
                                height: 50,
                                width: 50,
                            }}
                        />
                        
                        <Icon name='shopping-cart' color={'white'} size={50}  
                            onPress={() => navigation.navigate('ShopProfile')}
                        />
                </View>
                <View style={styles.titleContainer}>
                    <View style={styles.titleshape}>
                        <Text style={{
                            color: 'black',
                            fontSize: 25,
                            fontWeight: '600'
                            }}>
                            Hello Shop Owner!
                        </Text>
                        <Text style={{
                            color: 'black',
                            fontSize: 15,
                            }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer. Fusce ut placerat orci nulla
                        </Text>
                    </View>
                </View>
                <Text style={{
                    fontSize:50,
                    color:'black',
                    fontWeight:'800'
                }}>
                    Laundry Shop 1
                </Text>
                <View style={styles.orderShape}>
                    <View style={styles.orderContainer}>
                        <Text style={{
                            fontSize:25,
                            fontWeight:'500',
                            color:'black',
                        }}>
                            Pending Orders
                        </Text>
                        <Text style={{top:3,}}>
                            View all
                        </Text>
                    </View>
                        <View style={styles.orderContent}>
                            <View style={styles.customerOrders}>
                                <View style={styles.orderCustomerShape}>
                                        <Text style={{ 
                                            fontSize:20,
                                            fontWeight:'400',
                                            color:'white',
                                            alignSelf:'center',
                                            
                                        }}>
                                            Customer 1
                                        </Text>
                                </View>
                                <View style={styles.acceptButton}>
                                <Icon name="done" size={45} color={'green'}/>
                                </View>
                                <View style ={styles.declineButton}>
                                <Icon name="close" size={45} color={'red'}/>
                                </View>
                            </View>
                            <View style={styles.customerOrders}>
                                <View style={styles.orderCustomerShape}>
                                        <Text style={{ 
                                            fontSize:20,
                                            fontWeight:'400',
                                            color:'white',
                                            alignSelf:'center',
                                        }}>
                                            Customer 2
                                        </Text>
                                </View>
                                <View style={styles.acceptButton}>
                                <Icon name="done" size={45} color={'green'}/>
                                </View>
                                <View style ={styles.declineButton}>
                                <Icon name="close" size={45} color={'red'}/>
                                </View>
                            </View>
                         </View>
                </View>
                
                <View style={styles.container}>
                    <View style={styles.body}>
                        <TouchableOpacity onPress={()=> navigation.navigate('ActiveOrders')}>
                            <View style={styles.buttonContainer1}>
                                <Text style={{
                                        fontSize: 25,
                                        fontWeight:'800',
                                        color: 'white',
                                    }} >
                                    Active Orders
                                </Text>
                                <Icon name="format-list-bulleted" size={80} color={'white'}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('Shop2')}>
                            <View style={styles.buttonContainer2}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: '800',
                                    color: 'white',
                                    alignSelf:'center'
                                    }} >
                                    Summary Sales
                                </Text>
                                <Icon name="donut-large" size={80} color={'white'}/>
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
    orderShape: {
        backgroundColor:'#F6F6F6',
        height:150,
        width:'90%',
        borderRadius:20,
        alignSelf:'center',
        paddingHorizontal:20,
        marginVertical:20,
    },
    orderContainer: {
        flexDirection:'row',
        justifyContent:'space-between'
    },
    orderContent: {
        flexDirection:'column',
        justifyContent:'center',


    },
    customerOrders:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    orderCustomerShape: {
        height:45,
        width:220,
        backgroundColor:'#01BCE4',
        borderRadius:15,
        justifyContent:'center',
    },
    acceptButton: { 
        height: 45,
        width: 50,
    },
    declineButton:{
        height: 45,
        width: 50,
    },
    container: {
        paddingTop:10,
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

export default AHome;


