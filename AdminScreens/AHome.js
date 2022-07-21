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
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db, auth } from '../core/config'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const AHome = ({navigation}) => {
    const [dimensions, setDimensions] = useState({ window, screen });
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    const [orders, setOrders] = React.useState([]);
    const shopCollectionReference = collection(db, 'shop1orders');

    useEffect(() => {

        const getOrders = async () =>{
            const data = await getDocs(shopCollectionReference);
            
            setOrders(data.docs.map((doc)=>({
              ...doc.data(), id: doc.id,
            })));
        }
    
        getOrders();

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
               {/* <View style={styles.titleContainer}>
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
                </View>*/} 
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
                        <TouchableOpacity onPress={()=>navigation.navigate('PendingOrders')}>
                            <Text style={{top:3,}}>
                                View all
                            </Text>
                        </TouchableOpacity>
                    </View>
                        <View style={styles.orderContent}>
                            <View style={styles.customerOrders}>
                                <View style={styles.orderCustomerShape}>
                                        <Text style={styles.nameText}>
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
                            {/* {
                                orders.filter((filter)=> filter.status==='pending' ).map((order, index)=>{
                                    return(
                                        <View style={styles.customerOrders}>
                                            <View style={styles.orderCustomerShape}>
                                                    <Text style={styles.nameText}>
                                                        {order.orderby}
                                                    </Text>
                                            </View>
                                            <View style={styles.acceptButton}>
                                            <Icon name="done" size={45} color={'green'}/>
                                            </View>
                                            <View style ={styles.declineButton}>
                                            <Icon name="close" size={45} color={'red'}/>
                                            </View>
                                        </View>
                                    )
                                })
                            } */}
                            <View style={styles.customerOrders}>
                                <View style={styles.orderCustomerShape}>
                                        <Text style={styles.nameText}>
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
                        <TouchableOpacity onPress={()=> navigation.navigate('SummarySales')}>
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
                    <View style={styles.body2}>
                        <TouchableOpacity onPress={()=> navigation.navigate('AChat')}>
                            <View style={styles.buttonContainer1}>
                                <Text style={{
                                        fontSize: 25,
                                        fontWeight:'800',
                                        color: 'white',
                                    }} >
                                    Chat
                                </Text>
                                <Icon name="chat" size={80} color={'white'}/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> navigation.navigate('AList')}>
                            <View style={styles.buttonContainer2}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: '800',
                                    color: 'white', 
                                    alignSelf:'center'
                                    }} >
                                    Order History
                                </Text>
                                <Icon name="receipt" size={80} color={'white'}/>
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
        height: 150,
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
        margin:10,
        justifyContent:'space-around',
        flexDirection: 'row',
        alignContent:'center',
    },
    body2: {
        margin:10,
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
    },
    nameText:{ 
        fontSize:20,
        fontWeight:'400',
        color:'white',
        alignSelf:'center',
    }
})


export default AHome;
