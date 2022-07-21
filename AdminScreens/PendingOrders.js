import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { collection, getDocs, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db, auth, } from '../core/config'


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PendingOrders = ({navigation}) => {
    const [dimensions, setDimensions] = useState({ window, screen });

    const [orders, setOrders] = React.useState([]);
    const shopCollectionReference = collection(db, 'shop1orders');
    const usersColleciton = collection(db, 'users');


    useEffect(async()=>{
        let dict = {};
        let snapshot = await getDocs(usersColleciton)
        snapshot.forEach((doc) => {
            let data = doc.data();
            dict[data.email] = data.userName
        });

        let item = [];
        snapshot = await getDocs(shopCollectionReference)
        snapshot.forEach((doc) => {
            let data = doc.data();
            
            if(data.status === 'Pending'){
              item.push(
                  { 
                      ...data, id: doc.id, userName: dict[data.orderby]
                  }
              );
            }
        });
        
        setOrders(item);
        console.log('hahaha')
    },[]);

    useEffect(() => {
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
          setDimensions({ window, screen });
        }
      );
      return () => subscription?.remove();
    });
    
    const dateFormat =(date)=>{
        console.log(date.getDay())
        return `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`
    }

    const timeFormat =(date)=>{
        return `${date.getHours() == 12 ? 12 : date.getHours() % 12}:${date.getMinutes()}${date.getHours() >= 12 ? 'PM' : 'AM'}`
    }

    return (
        <ScrollView style={{backgroundColor: 'white', marginTop:50 }}>
            <View>
                <View style={styles.titleHolder}>
                    <Text style={{
                        fontSize:40,
                        fontWeight:'800',
                        color:'white',
                    }}>
                        Pending Orders:
                    </Text>
                </View>
                
                {orders.map((order, index)=>{
                    return <View key={`${order.id}`} style={styles.orderShape}>
                            <Text style={{
                                fontSize:25,
                                fontWeight:'600',
                                color:'black',
                            }}>
                                {order.userName}
                            </Text>
                                {/* <Icon name="close" size={40} color={'red'}/> */}
                            <View style={styles.scheduleShape}>
                                <View style={styles.deliveryMode}>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:"600",
                                        color:'white',
                                    }}>
                                        {`${order.retrieveMethod}\n${order.receiveMethod}`}
                                    </Text>
                                </View>
                                <View style={styles.scheduleDate}>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:"600",
                                        color:'white',
                                    }}>
                                        {`${ dateFormat(new Date(order.retrieveDate.toDate())) }\n${ dateFormat(new Date(order.receiveDate.toDate())) }`}

                                    </Text>
                                </View>
                                <View style={styles.scheduleTime}>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:"600",
                                        color:'white',
                                    }}>
                                    {`${ timeFormat(new Date(order.retrieveDate.toDate())) }\n${ timeFormat(new Date(order.receiveDate.toDate())) }`}
                                    </Text>
                                </View>
                            </View>
                            <View style={styles.serviceModeContainer}>
                                <Text style={{
                                    fontSize:22,
                                    fontWeight:'600',
                                    color:'black',
                                }}>
                                    Wash Dry Fold
                                </Text>
                                    <Text style={{
                                    fontSize:15,
                                    fontWeight:'bold',
                                    color:'black',
                                    left:180,
                                }}> 
                                    8kg {'\n'} 1 x detergent 1 {'\n'} 1 x Fabcon 1
                                    </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'600',
                                    color:'black',
                                }}>
                                    Mode of Payment
                                </Text>
                                <Text style={{
                                    fontSize:15,
                                    fontWeight:'bold',
                                    color:'black',
                                    left:180
                                }}> 
                                    Gcash
                                </Text>
                                <View style={styles.totalNDoneButton}>
                                    <Text style={{
                                        fontSize:40,
                                        fontWeight:'600',
                                        color:'black',
                                        alignSelf:'center'
                                    }}>
                                        PHP 130.00
                                    </Text>
                                    <TouchableOpacity style={{
                                        left:35
                                    }}>
                                        <Icon name="check" size={40} color={'green'}/>
                                    </TouchableOpacity>
                                </View> 
                            </View>
                    </View>
                })}
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    titleHolder: {
        alignSelf:'center',
        backgroundColor:'#01BCE4',
        height:60,
        width:'65%',
        borderRadius:20,
        margin:20,
        alignItems:'center'

    },
    orderShape: {
        backgroundColor:'#F6F6F6',
        height:290,
        width:'95%',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:10,
        padding: 15,
    },
    orderContainer: {
        height:290,
        flexDirection:'column',
    },  
    orderName: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        marginTop:10,
    },
    scheduleShape: {
        width:'100%',
        backgroundColor:'#01BCE4',
        flexDirection:'row',
        borderRadius:5,
        justifyContent:'center',
        marginTop: 10,

    },
    deliveryMode: {
        flexDirection:'column',
    },
    scheduleDate: {
        flexDirection:'column',
    },
    scheduleTime: {
        flexDirection:'column',
    }, 
    serviceModeContainer: {
        marginHorizontal:20,
        marginTop:10,
    },
    totalNDoneButton: {
        flexDirection:'row',
        justifyContent:'space-around'
    },  
   

})


export default PendingOrders;
