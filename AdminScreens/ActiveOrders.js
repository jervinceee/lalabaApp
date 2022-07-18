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
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db, auth } from '../core/config'
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const ActiveOrders = ({navigation}) => {
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
        <ScrollView style={{backgroundColor: 'white', marginTop:50 }}>
            <View>
                <View style={styles.titleHolder}>
                    <Text style={{fontSize:40,fontWeight:'800',color:'black',}}>
                        Active Orders:
                    </Text>
                </View> 
                {orders.filter(status => status.status === "active").map((order, index)=>{
                    var minutesRetrieve = new Date(order.retrieveDate.seconds * 1000).getMinutes()
                    var minutesReceive = new Date(order.receiveDate.seconds * 1000).getMinutes()
                    return(
                        <View style={styles.orderShape}>
                            <View style={styles.orderContainer}>
                                <View style={styles.orderName}>
                                    <Text style={styles.textOrderBy}>
                                        {order.orderby}
                                    </Text>
                                    <Icon name="close" size={40} color={'red'}/>
                                </View>
                                <View style={styles.scheduleShape}>
                            <View style={styles.deliveryMode}>
                                <Text style={styles.scheduleText}>
                                    {order.retrieveMethod}   {'\n'} 
                                    {order.receiveMethod}
                                </Text>
                            </View>
                            <View style={styles.scheduleDate}>
                                <Text style={styles.scheduleText}>
                                {
                                    months[new Date(order.retrieveDate.seconds * 1000).getMonth()] + " " +
                                    new Date(order.retrieveDate.seconds * 1000).getDate() + ", " +
                                    new Date(order.retrieveDate.seconds * 1000).getFullYear() + " at " + 
                                    new Date(order.retrieveDate.seconds * 1000).getHours() + ":"  
                                }{
                                    minutesRetrieve <=9 ? "0" + minutesRetrieve: minutesRetrieve
                                }   {'\n'} 
                                {
                                    months[new Date(order.receiveDate.seconds * 1000).getMonth()] + " " +
                                    new Date(order.receiveDate.seconds * 1000).getDate() + ", " +
                                    new Date(order.receiveDate.seconds * 1000).getFullYear() + " at " + 
                                    new Date(order.receiveDate.seconds * 1000).getHours() + ":"  
                                }{
                                    minutesReceive <=9 ? "0"+minutesReceive: minutesReceive
                                }
                                </Text>
                            </View>
                            
                        </View>
                        <View style={styles.serviceModeContainer}>
                            <Text style={styles.serviceText}>
                                {order.serviceName}
                            </Text>
                                <Text style={styles.productText}> 
                                {order.maxWeight}kg {'\n'} 
                                {order.detergentVolume} x {order.detergent}{'\n'}
                                {order.fabconVolume} x {order.fabcon}
                                </Text>
                            <Text style={styles.serviceText}>
                                Mode of Payment
                            </Text>
                            <Text style={styles.productText}> 
                                {order.modeOfPayment}
                            </Text>
                            <View style={styles.totalNDoneButton}>
                                <Text style={styles.totalText}>
                                    PHP {order.totalCost}.00
                                </Text>
                                <TouchableOpacity style={{
                                    left:35
                                }}>
                                    <Icon name="check" size={40} color={'green'}/>
                                </TouchableOpacity>
                            </View> 
                        </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({
    titleHolder: {
        alignSelf:'flex-start',
        backgroundColor:'#01BCE4',
        height:60,
        width:'65%',
        borderRadius:20,
        margin:20,
        alignItems:'center',
        justifyContent:'center'
    },
    orderShape: {
        backgroundColor:'#F6F6F6',
        height:290,
        width:'95%',
        borderRadius:20,
        alignSelf:'center',
        marginVertical:10,
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
        width:'80%',
        backgroundColor:'#01BCE4',
        flexDirection:'row',
        borderRadius:15,
        justifyContent:'center'
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
   textOrderBy:{
    fontSize:25,
    fontWeight:'600',
    color:'black',
    },
    scheduleText:{
        fontSize:20,
        fontWeight:"600",
        color:'white',
    },
    serviceText:{
        fontSize:22,
        fontWeight:'600',
        color:'black',
    },
    productText:{
        fontSize:15,
        fontWeight:'bold',
        color:'black',
        left:180,
    },
    totalText:{
        fontSize:40,
        fontWeight:'600',
        color:'black',
        alignSelf:'center'
    }


})

export default ActiveOrders;