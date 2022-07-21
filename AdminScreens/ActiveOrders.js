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
import { collection, getDocs, doc, getDoc, deleteDoc, updateDoc } from 'firebase/firestore';
import { db, auth, } from '../core/config'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const ActiveOrders = ({navigation}) => {
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
            
            if(data.status === 'Accepted'){
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
        return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    }

    const timeFormat =(date)=>{
        return `${date.getHours() == 12 ? 12 : date.getHours() % 12}:${date.getMinutes()}${date.getHours() >= 12 ? 'PM' : 'AM'}`
    }

    const RenderCashPayment =(method, payment)=>{
        if(method.method == 'cod'){
            return <View style={styles.totalNDoneButton}>
                <Text style={{
                    fontSize:20,
                    fontWeight:'600',
                    color:'black',
                }}>
                    {`Payment: PHP ${method.payment}.00`}
                </Text>
            </View> 
        }
        return null
    }

    const updateStatus =async(id, status, ind)=>{
        
        await updateDoc(doc(db, "shop1orders", id), {
            status: status,
        });
        
        setOrders([
          ...orders.slice(0, ind),
          ...orders.slice(ind + 1)
        ]);
    }

    return (
        <ScrollView style={{backgroundColor: 'white', marginTop:50, padding: 10, }}>
            <View>
                <View style={styles.titleHolder}>
                    <Text style={{
                        fontSize:40,
                        fontWeight:'800',
                        color:'white',
                    }}>
                        Active Orders:
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

                            {/* <Icon name="close" size={40} color={'red'}/> */}
                            <View style={styles.serviceModeContainer}>
                                <Text style={{
                                    marginTop: 5,
                                    fontSize:15,
                                    fontWeight:'bold',
                                    color:'black',
                                }}>
                                    {`${order.serviceName} ${order.maxWeight}kg`}
                                </Text>
                                <Text style={{
                                    fontSize:15,
                                    fontWeight:'bold',
                                    color:'black',
                                }}> 
                                    {`${order.detergent} x${order.detergentVolume}`}
                                </Text>
                                <Text style={{
                                    fontSize:15,
                                    fontWeight:'bold',
                                    color:'black',
                                }}> 
                                    {`${order.fabcon == 'I will provide my own ml' ? 'I will provide my own' : order.fabcon} ${order.fabcon == 'I will provide my own ml' ? '' : 'x'+order.fabconVolume}`}
                                </Text>

                                <Text style={{
                                    marginTop: 15,
                                    marginBottom: 10,
                                    fontSize:20,
                                    fontWeight:'600',
                                    color:'black',
                                }}>
                                    {`Mode of Payment: ${order.modeOfPayment.toUpperCase()}`}
                                </Text>
                                <View style={styles.totalNDoneButton}>
                                    <Text style={{
                                        fontSize:20,
                                        fontWeight:'600',
                                        color:'black',
                                    }}>
                                        {`Total Cost: PHP ${order.totalCost}.00`}
                                    </Text>
                                </View> 
                                <RenderCashPayment method={order.modeOfPayment} payment={order.cashPrepared}/>

                                <TouchableOpacity 
                                    onPress={()=>updateStatus(order.id, 'Done', index)}
                                    style={{ marginRight: 12, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: '#4caf50', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Icon name="check" size={30} color={'white'}/> 
                                    <Text style={{fontSize:15, fontWeight:'bold', color:'white',}}>Done</Text>
                                </TouchableOpacity>
                                {/* <View style={{ marginTop: 10, width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    
                                    <TouchableOpacity 
                                        onPress={()=>updateStatus(order.id, 'Rejected', index)}
                                        style={{paddingHorizontal: 8, paddingVertical: 5, backgroundColor: 'red', flexDirection: 'row', alignItems: 'center' }}>
                                        <Icon name="close" size={30} color={'white'}/>
                                        <Text style={{fontSize:15, fontWeight:'bold', color:'white',}}>Reject</Text>
                                    </TouchableOpacity>
                                </View>  */}
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
    },  
   

})

export default ActiveOrders;
