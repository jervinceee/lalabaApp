import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Bubble from '../assets/icons/bubble.png';
import AsyncStorage from "@react-native-async-storage/async-storage";

//firestore
import {auth, db} from '../core/config'
import {collection, addDoc} from 'firebase/firestore'

//components
import Service from "../components/ServiceComponent";
import Detergent from '../components/DetergentComponent';
import FabCon from '../components/FabConComponent';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const data = [
    {label: "pick-up", value: "pick-up"}, 
    {label: "drop-by", value: "drop-by" }
    ];

    // TO DO:
    // 1. FIX UI
    // 2. OPTIMIZE CODE
    // 3. CALENDAR

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

    const shop1collectionRef = collection(db, "shop1orders")
    //submit order
    const submitOrder = async () =>{
        await addDoc( shop1collectionRef, {
            detergent : detergent,
            detergentVolume : detergentVol,
            fabcon : fabcon,
            fabconVolume : fabconVol,
            serviceName : service,
            maxWeight : maxWeight,
            totalCost, totalCost,
            transactionMethod : 'sample',
            paymentMethod : 'sample',
            orderby : auth.currentUser.email,
            targetDate: 'sample'
        })
    }


    //AsyncStorage Data
    const [service, setService] = React.useState("");
    const [maxWeight, setMaxWeight] = React.useState(0);
    const [serviceCost, setServiceCost] = React.useState(0);
    const [detergent, setDetergent] = React.useState("");
    const [detergentVol, setDetergentVol] = React.useState(0);
    const [detergentCost, setDetergentCost] = React.useState(0);
    const [fabcon, setFabcon] = React.useState("");
    const [fabconVol, setFabconVol] = React.useState(0);
    const [fabconCost, setFabconCost] = React.useState(0);
    const [totalCost, setTotalCost] = React.useState(0);
    const [billModal, setBillModal] = React.useState(false);


    const getStoredDate = async ()=>{
        setDetergent(await AsyncStorage.getItem('detergentname'));
        setDetergentVol( await AsyncStorage.getItem('detergentvolume'));
        setDetergentCost(await AsyncStorage.getItem('detergentcost'));
        setFabcon(await AsyncStorage.getItem('fabconname'));
        setFabconVol(await AsyncStorage.getItem('fabconvolume'));
        setFabconCost(await AsyncStorage.getItem('fabconcost'));
        setService(await AsyncStorage.getItem('servicename'));
        setMaxWeight(await AsyncStorage.getItem('maxweight'));
        setServiceCost(await AsyncStorage.getItem('servicecost'));
        setBillModal(true)
        // console.log(await detergent, await detergentVol);
        // console.log(await fabcon, await fabconVol);
    }

    const [text, setText] = React.useState("")
  
    const switchValue = (text) => {
      setText(text);
    }

    const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    console.log(detergent, detergentVol);
    console.log(fabcon, fabconVol)
    setTotalCost(
        parseInt(fabconCost) + parseInt(detergentCost) + parseInt(serviceCost)
    )
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
                    <Text style={styles.categoryTitle}>
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
                    <Text style={styles.categoryTitle}>Services</Text>


                    <ScrollView horizontal={true}>
                        <View style={styles.categoryContainer}>
                            {/* items ng mga services */}
                            <Service
                                buttonName={"Wash, Dry, and Fold"}
                                path={require('../assets/icons/clotheswashing.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Filler Button"}
                                path={require('../assets/icons/bubble.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Dry Clean"}
                                path={require('../assets/icons/clothes.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Beddings"}
                                path={require('../assets/icons/warmmachine.png')}
                                cost={16.25}
                            />
                        </View>
                    </ScrollView>
                    <Text style={styles.categoryTitle}>Detergents</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.categoryContainer}>
                            {/* items ng mga detergent */}
                            <Detergent
                                buttonName={"Surf"}
                                path={require('../assets/icons/Surf.png')}
                                cost={30}
                            />
                            <Detergent
                                buttonName={"Tide"}
                                path={require('../assets/icons/Tide.png')}
                                cost={20}
                            />
                            <Detergent
                                buttonName={"Ariel"}
                                path={require('../assets/icons/Ariel.png')}
                                cost={25}
                            />
                            <Detergent
                                buttonName={"Sample"}
                                path={require('../assets/icons/bubble.png')}
                                cost={69}
                            />

                        </View>
                    </ScrollView>
                    <Text style={styles.categoryTitle}>Fabric Conditioner</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.categoryContainer}>
                            {/* items ng mga services */}
                            <FabCon
                                buttonName={"Surf"}
                                path={require('../assets/icons/Surf.png')}
                                cost={30}
                            />
                            <FabCon
                                buttonName={"Tide"}
                                path={require('../assets/icons/Tide.png')}
                                cost={20}
                            />
                            <FabCon
                                buttonName={"Ariel"}
                                path={require('../assets/icons/Ariel.png')}
                                cost={25}
                            />
                            <FabCon
                                buttonName={"Sample"}
                                path={require('../assets/icons/bubble.png')}
                                cost={69}
                            />
                        </View>
                    </ScrollView>

                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={billModal}
                        onRequestClose={()=>{
                            setBillModal(false)
                        }}
                    ><View style={styles.billModal}>
                        {
                        (fabcon === null || fabcon === "") &&
                        (detergent === null || detergent === "")&&
                        (service === null || service === "")?
                        <View style={styles.billContainer}>
                            <Text style={styles.billError}>You haven't selected anything</Text>
                        </View>
                        : 
                        (fabcon===null || fabcon === "")?
                        <View style={styles.billContainer}>
                            <Text style={styles.billError}>No Fabric Conditioners were selected</Text>
                        </View>
                        :
                        (detergent===null || detergent === "")?
                        <View style={styles.billContainer}>
                            <Text style={styles.billError}>No Detergents were selected</Text>
                        </View>
                        :
                        (service===null || service === "")?
                            <View style={styles.billContainer}>
                                <Text style={styles.billError}>No Services were selected</Text>
                            </View>
                        :
                            <View style={styles.billContainer}>
                                <Text style={styles.billTitle}>Total:</Text>
                                <View style={styles.billContent}>
                                    <Text style={styles.billText}>{service}, {maxWeight}kg</Text>
                                    <Text style={styles.billText}>Php {serviceCost}.00</Text>
                                </View>
                                <View style={styles.billContent}>
                                    <Text style={styles.billText}>{detergent} x{detergentVol}</Text>
                                    <Text style={styles.billText}>Php {detergentCost}.00</Text>
                                </View>
                                <View style={styles.billContent}>
                                    <Text style={styles.billText}>{fabcon} x{fabconVol}</Text>
                                    <Text style={styles.billText}>Php {fabconCost}.00</Text>
                                </View>
                                <Text style={styles.billTitle}>Select Payment Method</Text>
                                <View style={styles.methodContainer}>
                                    <TouchableOpacity style={styles.methodButton}>
                                        <Image
                                            source={require('../assets/icons/Gcash.png')}
                                            style={styles.methodButtonImage}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.methodButton}>
                                        <Text style={{color:'white'}}>COD</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{alignSelf:'flex-end', marginRight:'5%', fontWeight:'bold', fontSize:24}}>Php {totalCost}.00</Text>
                                <Text style={{alignSelf:'center',color:'red', marginBottom:30}}>
                                    Please check your order thoroughly before proceeding.
                                </Text>
                                <TouchableOpacity
                                    onPress = {submitOrder}
                                    style={styles.submitButton}
                                >
                                    <Text style={{color:'white',fontWeight:'bold'}}>SUBMIT</Text>
                                </TouchableOpacity>
                            </View>
                    }
                    </View>
                    </Modal>
                    {/* Billing codes start here */}
                    
                    <TouchableOpacity onPress={getStoredDate}>
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
   },
   categoryTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'black',
   },
   categoryContainer:{
        flexDirection:'row'
   },

   billModal:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'rgba(0,0,0,0.5)',
   },
   billContainer:{
        width:'100%',
        display:'flex',
        backgroundColor:'white',
        width:'80%',
        padding:10,
        elevation:20,
        borderRadius:10
   },   
   billContent:{
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        justifyContent:'space-between',
        width:'90%'
   },
   billTitle:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'black',
        marginLeft:'5%'
   },
   methodContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly'
   },
   methodButton:{
        height:50,
        width:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2B90FE',
        borderRadius:15
   },
   methodButtonImage:{
        height:50,
        width:50
   },
   submitButton:{ 
        backgroundColor:'#01BCE4',
        width:'50%',
        alignSelf:'center',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
   },
   billError:{
        color:'red',
        fontSize:30,
        alignSelf:'center',
        textAlign:'center'
   }
})
export default Shop1Menu;