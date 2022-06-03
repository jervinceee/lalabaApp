import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image
} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Bubble from '../assets/icons/bubble.png'




const Shop1Menu = () => {
    return (
        <ScrollView style={{
            backgroundColor:'white',
        }}>
            <View>
                <View style={styles.schedule}>
                    <Text style={{
                            fontSize: 30,
                            fontWeight: '800',
                            color:'black',
                    }}>
                    Schedule:
                    </Text>
                    {/* for the buttons pick up or drop by */}
                    <View style={styles.buttonContainer1}>
                        <TouchableOpacity>
                            <View style={styles.pickupButton1}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                }}>
                                    Pick-up
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dropbyButton1}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                }}>
                                    Drop-by
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                <View style={styles.calendar1}>
                    <Icon name='event' color={'#01BCE4'} size={50} />
                    <Text style={{
                        fontSize:20,
                        fontWeight:'800',
                        color:'black',
                        textAlignVertical: "center",
                        textAlign: "center"
                    }}>
                        Dito lalagay yung calendar
                    </Text>
                </View>
                <View style={styles.buttonContainer2}>
                        <TouchableOpacity>
                            <View style={styles.pickupButton2}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                }}>
                                    Pick-up
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.dropbyButton2}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                }}>
                                    Drop-by
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.calendar2}>
                    <Icon name='event' color={'#01BCE4'} size={50} />
                    <Text style={{
                        fontSize:20,
                        fontWeight:'800',
                        color:'black',
                        textAlignVertical: "center",
                        textAlign: "center"
                    }}>
                        Dito lalagay yung calendar
                    </Text>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color:'black',
                    }}>
                        Services
                    </Text>
                    <ScrollView horizontal={true}>
                        <View style={{
                            flexDirection:'row'
                            }}
                        >
                        {/* items ng mga services */}
                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Wash and Dry
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 80.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Dry Clean
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 120.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Beddings
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 150.00
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color:'black',
                    }}>
                        Detergents
                    </Text>
                    <ScrollView horizontal={true}>
                        <View style={{
                            flexDirection:'row'
                            }}
                        >
                        {/* items ng mga services */}
                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Wash and Dry
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 80.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Dry Clean
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 120.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Beddings
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 150.00
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Text style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        color:'black',
                    }}>
                        Fabric Conditioner
                    </Text>
                    <ScrollView horizontal={true}>
                        <View style={{
                            flexDirection:'row',
                            height:200,
                            }}
                        >
                        {/* items ng mga services */}
                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Wash and Dry
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 80.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Dry Clean
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 120.00
                                </Text>
                            </View>

                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble}
                                        style={{
                                            height:150,
                                            width: 150,
                                        }}
                                    />
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Beddings
                                </Text>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'bold',
                                    color:'black',
                                    backgroundColor:'#f6f6f6',
                                    borderRadius:5
                                    }}
                                > 
                                Php 150.00
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={()=> navigation.navigate('Shop1CheckOut')}>
                            <View style={styles.bookButton}>
                                <Text style={{
                                    fontSize:25,
                                    fontWeight:'bold',
                                    color: 'white',
                                }}>
                                    Book
                                </Text>
                            </View>
                        </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
)}
const styles = StyleSheet.create({
    schedule: {
        marginTop:10,
        marginHorizontal:10,

    },
    buttonContainer1:{
        marginHorizontal:20,
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10,
    },
    pickupButton1: {
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        
    },
    dropbyButton1:{
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        
    },
    calendar1:{
        backgroundColor:'#F6F6F6',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:70,
        width:300,
        marginTop:20,
        borderRadius:35,
        flexWrap:'wrap',
        textAlign:'center',
    },
    buttonContainer2:{
        marginHorizontal:20,
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:10,
    },
    pickupButton2: {
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        
    },
    dropbyButton2:{
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 10,
        
    },
    calendar2:{
        backgroundColor:'#F6F6F6',
        alignContent:'center',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:300,
        marginTop:20,
        borderRadius:35,
        flexWrap:'wrap',
        textAlign:'center',
    },
    mainContainer:{
        marginHorizontal:10,
        height:850,
    },
   itemContainer1:{
       height:200,
       width:170,
       alignContent:'center',
       alignItems:'center',
       justifyContent:'center',
   },
   imageContainer1:{
        backgroundColor:'#f6f6f6',
        borderRadius:20,
        height:150,
        width:150,
   },
   bookButton:{
        backgroundColor: '#01BCE4',
        borderRadius: 20,
        height: 60,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
        marginBottom:20,
   }










})
export default Shop1Menu;