import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Bubble from '../assets/icons/bubble.png';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const data = [
    {label: "pick-up", value: "pick-up"}, 
    {label: "drop-by", value: "drop-by" }
    ];

    const Chip = ({isSelected, label, selectedColor, defaultColor,  onPress}) => {
        return (
          <TouchableOpacity onPress={onPress} >
            <View style={{height:35, width:100, backgroundColor : isSelected ? selectedColor : defaultColor }} > 
              <Text style={{
                    fontSize: 25,
                    fontWeight: '800',
                    color:'black',
                    alignSelf:'center',
                    }}
                >
                    {label}
                </Text>
            </View>
          </TouchableOpacity>
        )
      }
const Shop1Menu = ({navigation}) => {
    const [text, setText] = React.useState("")
  
    const switchValue = (text) => {
      setText(text);
    }

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
        <ScrollView style={{backgroundColor:'white',}}>
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
                    <View style={styles.schedButtonContainer}>
                        {
                            data.map((item, index) => (
                            <React.Fragment key={index}> 
                                <Chip label={item.label} onPress={() => switchValue(item.value)} isSelected={text === item.value} selectedColor={'red'} />
                            </React.Fragment>
                            ))
                        }
                    </View>
                <View style={styles.calendar}>
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
                <View style={styles.schedButtonContainer}>
                        <TouchableOpacity>
                            <View style={styles.deliverButton}>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                }}>
                                    Deliver
                                </Text>
                            </View>
                        </TouchableOpacity>
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
                    </View>
                </View>
                <View style={styles.calendar}>
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
                                    <Image source={Bubble} style={styles.itemImage}/>
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
                                    <Image source={Bubble} style={styles.itemImage}/>
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
                                    <Image source={Bubble} style={styles.itemImage}/>
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
 {/* items ng mga detergent */}
                            <View style={styles.itemContainer1}>
                                <View style={styles.imageContainer1}>
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Ariel
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
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Tide
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
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Surf
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
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Downey
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
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Surf
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
                                    <Image source={Bubble} style={styles.itemImage}/>
                                </View>
                                <Text style={{
                                    fontSize:20,
                                    fontWeight:'500',
                                    color:'black',
                                    }}
                                > 
                                Dell
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
        marginHorizontal:10,
        marginTop:'10%',
    },
    schedButtonContainer:{
        justifyContent:'space-around',
        flexDirection:'row',
        borderRadius:10,
    },
    pickupButton1a: {
        backgroundColor:'white',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    pickupButton1b: {
        backgroundColor:'blue',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    pickupButton2: {
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    dropbyButton1b:{
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    dropbyButton1a:{
        backgroundColor:'blue',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    deliverButton:{
        backgroundColor:'#F6F6F6',
        height:30,
        width: 80,
        borderRadius:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
    },
    calendar:{
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
        marginBottom:20,
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
   },
   imageContainer1:{
        backgroundColor:'#f6f6f6',
        borderRadius:20,
        height:150,
        width:150,
        justifyContent:'center',
   }, 
   itemImage: {
    height:100,
    width: 100,
    alignSelf:'center'
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