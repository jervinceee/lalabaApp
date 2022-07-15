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
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const PendingOrders = ({navigation}) => {
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
{/* Order Instance 1*/}
                <View style={styles.orderShape}>
                    <View style={styles.orderContainer}>
                        <View style={styles.orderName}>
                            <Text style={{
                                fontSize:25,
                                fontWeight:'600',
                                color:'black',
                            }}>
                                CustomerName 1
                            </Text>
                            <Icon name="close" size={40} color={'red'}/>
                        </View>
                        <View style={styles.scheduleShape}>
                            <View style={styles.deliveryMode}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    Pick-Up   {'\n'} 
                                    Delivery
                                </Text>
                            </View>
                            <View style={styles.scheduleDate}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    05/12/22   {'\n'} 
                                    05/12/22
                                </Text>
                            </View>
                            <View style={styles.scheduleTime}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    5:00PM   {'\n'} 
                                    8:00PM
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
                </View>
{/*Order Instance 3 */}
                <View style={styles.orderShape}>
                    <View style={styles.orderContainer}>
                        <View style={styles.orderName}>
                            <Text style={{
                                fontSize:25,
                                fontWeight:'600',
                                color:'black',
                            }}>
                                CustomerName 2
                            </Text>
                            <Icon name="close" size={40} color={'red'}/>
                        </View>
                        <View style={styles.scheduleShape}>
                            <View style={styles.deliveryMode}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    Pick-Up   {'\n'} 
                                    Delivery
                                </Text>
                            </View>
                            <View style={styles.scheduleDate}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    05/12/22   {'\n'} 
                                    05/12/22
                                </Text>
                            </View>
                            <View style={styles.scheduleTime}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    6:00PM   {'\n'} 
                                    9:00PM
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
                                COD
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
                </View>
                {/*Order Instance 2 */}
                <View style={styles.orderShape}>
                    <View style={styles.orderContainer}>
                        <View style={styles.orderName}>
                            <Text style={{
                                fontSize:25,
                                fontWeight:'600',
                                color:'black',
                            }}>
                                CustomerName 3
                            </Text>
                            <Icon name="close" size={40} color={'red'}/>
                        </View>
                        <View style={styles.scheduleShape}>
                            <View style={styles.deliveryMode}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    Pick-Up   {'\n'} 
                                    Delivery
                                </Text>
                            </View>
                            <View style={styles.scheduleDate}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    05/12/22   {'\n'} 
                                    05/12/22
                                </Text>
                            </View>
                            <View style={styles.scheduleTime}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:"600",
                                    color:'white',
                                }}>
                                    5:00PM   {'\n'} 
                                    8:00PM
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
                </View>
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
   

})


export default PendingOrders;
