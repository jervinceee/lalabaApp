import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
    Modal,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import DateTimePicker from '@react-native-community/datetimepicker';
import Login from "../Screens/Login";

//firestore
import {auth, db} from '../core/config'
import {collection, addDoc, serverTimestamp, FieldValue} from 'firebase/firestore'

//components
import Service from "../components/ServiceComponent";
import Detergent from '../components/DetergentComponent';
import FabCon from '../components/FabConComponent';
import { FontAwesome } from '@expo/vector-icons';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const ShopProfile = ({navigation}) => {

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
            retrieveMethod : retrieveMethod,
            receiveMethod: receiveMethod,
            orderby : auth.currentUser.email,
            retrieveDate : retrieveTimestamp,
            receiveDate: receiveTimestamp,
            modeOfPayment: payment,
            cashPrepared: cashAmount
        }).then(()=>{
            navigation.navigate("List");
            console.log("done")
        })
    }
  

    //UI Variables
    const [retrieveMethod, setRetrieveMethod] = React.useState('');
    const [receiveMethod, setReceiveMethod] = React.useState('')

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

    //bill modal stuff
    const [totalCost, setTotalCost] = React.useState(0);
    const [billModal, setBillModal] = React.useState(false);
    const [billModalError, setBillModalError] = React.useState("error");
    const [submissionError, setSubmissionError] = React.useState("error")
    const [payment, setPayment] = React.useState('');
    const [cashAmount, setCashAmount] = React.useState(0);
    const [submitDisable, setSubmitDisable] = React.useState(true);

    // date and time picker variables
    const [dateRetrieve, setDateRetrieve] = React.useState(new Date());
    const [dateReceive, setDateReceive] = React.useState(new Date());
    const [mode, setMode] = React.useState('');
    const [showRetrieve, setShowRetrieve] = React.useState(false);
    const [showReceive, setShowReceive] = React.useState(false);
    const [retrieveTimestamp, setRetrieveTimestamp] = React.useState();
    const [receiveTimestamp, setReceiveTimestamp] = React.useState();

    const RenderBillModal = () =>{
        if(retrieveMethod === ""){
            setBillModalError("Please tell us how to retrieve your Labada.")
        }else if(retrieveTimestamp === undefined || retrieveTimestamp === null){
            setBillModalError("You haven't specified a Date/Time for us to retrieve your Labada.")
        }else if(receiveMethod === ""){
            setBillModalError("Please tell us how you would like to receive your Labada back.")
        }else if(receiveTimestamp === undefined || receiveTimestamp === null){
            setBillModalError("You haven't specified a Date/Time for us to retrieve your Labada.")
        }else if((fabcon === null || fabcon === "") && (detergent === null || detergent === "")&& (service === null || service === "")){
            setBillModalError("You haven't selected anything.");
        }else if(fabcon===null || fabcon === ""){
            setBillModalError("No Fabric Conditioners were selected.");
        }else if(detergent===null || detergent === ""){
            setBillModalError("No Detergents were selected.");
        }else if(service===null || service === ""){
            setBillModalError("No Services were selected.");
        }else{
            setBillModalError("");
        }

        return (
            <View style={styles.billContainer}>
                <Text style={styles.billError}>{billModalError}</Text>
                <TouchableOpacity
                    onPress = {()=>{setBillModal(false)}}
                    style={styles.submitButton}
                >
                <Text style={{color:'white',fontWeight:'bold'}}>OK</Text>
                </TouchableOpacity>
            </View>
        )
    }

    //storing dates to timestamp variable
    const onChangeRetrieveDate = (event, selectedDate)=>{
        const currentDate = selectedDate || dateRetrieve;
        setShowRetrieve(false);
        setDateRetrieve(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime =  'Hours: ' + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();

        console.log(fDate + " (" + fTime + ")");
        console.log(tempDate);
        setRetrieveTimestamp(tempDate);
    }

    const onChangeReceiveDate = (event, selectedDate)=>{
        const currentDate = selectedDate || dateReceive;
        setShowReceive(false);
        setDateReceive(currentDate);

        let tempDate = new Date(currentDate);
        let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
        let fTime =  'Hours: ' + tempDate.getHours() + "| Minutes: " + tempDate.getMinutes();

        console.log(fDate + " (" + fTime + ")");
        console.log(tempDate);
        setReceiveTimestamp(tempDate);
    }

    const showModeRetrieve = (currentMode) =>{
        setShowRetrieve(true);
        setMode(currentMode);
    }
    const showModeReceive = (currentMode) =>{
        setShowReceive(true);
        setMode(currentMode);
    }

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
        setBillModal(true);
    }

    const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    console.log(detergent, detergentVol);
    console.log(fabcon, fabconVol);
    console.log("Amount Entered: ", cashAmount )
    setTotalCost(
        parseInt(fabconCost) + parseInt(detergentCost) + parseInt(serviceCost)
    );

    if(payment === ''){
        setSubmissionError("Please select payment method.");
    }else if(payment === 'cod' && cashAmount < 0){
        setSubmitDisable(true)
    }else if(payment === 'cod' && cashAmount < totalCost){
        setSubmitDisable(true)
        setSubmissionError("Cash prepared must be larger than the total service cost.")
    }else{
        setSubmissionError("");
        setSubmitDisable(false)
    }
    

    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

    return (
        <ScrollView style={{backgroundColor:'white',marginTop:45}}>
            <View>
                <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:40, marginRight:10,}}>
                    <Text style={{ fontSize:30, color:'black', fontWeight:'bold', marginLeft:10}}>Schedule</Text>
                    <Icon name='logout' color={'red'} size={50}  
                                onPress={() => navigation.navigate({/*login na ulit */})}
                            />
                </View>
                
                <View style={styles.retrieveContainer}>
                    <Text style={styles.scheduleQ}>Edit shop schedule </Text>
                    {/* retrieving schedule */}
                    <View style={styles.scheduleButtonsContainer}>
                    {/*<TouchableOpacity 
                            style={retrieveMethod === 'Pick-up'? styles.scheduleButtonsSelected:styles.scheduleButtons}
                            onPress={()=>setRetrieveMethod('Pick-up')}    
                        >
                            <Text
                                style={retrieveMethod==='Pick-up'?{color:'white'}:{color:'black'}}
                            >Pick-up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={retrieveMethod === 'Drop-by'? styles.scheduleButtonsSelected:styles.scheduleButtons}
                            onPress={()=>setRetrieveMethod('Drop-by')}    
                        >
                            <Text
                                style={retrieveMethod==='Drop-by'?{color:'white'}:{color:'black'}}
                            >Drop-by</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{alignSelf:'center'}}>Please select Date and Time</Text>
                    <View style={styles.calendar}>
                        <TouchableOpacity
                            onPress={()=> showModeRetrieve('date')}
                        >
                            <Icon name='event' color={'#01BCE4'} size={50} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>showModeRetrieve('time')}
                        >
                            <FontAwesome name="clock-o" size={48} color="#01BCE4" />
                        </TouchableOpacity>
                        {
                            showRetrieve===true && (
                                <DateTimePicker
                                    testID="dateTimePickerRetrieve"
                                    value={dateRetrieve}
                                    mode={mode}
                                    is24Hour={true}
                                    display='default'
                                    onChange={onChangeRetrieveDate}
                                    onTouchCancel={()=>setShowRetrieve(false)}
                                />
                            )
                        } */}   
                    
                    </View>
                </View>

                <View style={styles.retrieveContainer}>
                   {/*  <Text style={styles.scheduleQ}>How would you like to receive your Labada back?</Text>*/}
                    {/* sending schedule  
                    <View style={styles.scheduleButtonsContainer}>
                        <TouchableOpacity 
                            style={receiveMethod === 'Delivery'? styles.scheduleButtonsSelected:styles.scheduleButtons}
                            onPress={()=>setReceiveMethod('Delivery')}   
                        >
                            <Text
                                style={receiveMethod==='Delivery'?{color:'white'}:{color:'black'}}
                            >Delivery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={receiveMethod === 'Pick-up'? styles.scheduleButtonsSelected:styles.scheduleButtons}
                            onPress={()=>setReceiveMethod('Pick-up')}   
                        >
                            <Text
                                style={receiveMethod==='Pick-up'?{color:'white'}:{color:'black'}}
                            >Pick-up</Text>
                        </TouchableOpacity>
                    </View>*/}
                    
                    <Text style={{alignSelf:'center'}}>Shop Open Monday - Sunday</Text>
                    <Text style={{alignSelf:'center'}}>8:00 AM - 10:30 PM</Text>
                    <View style={styles.calendar}>
                        <TouchableOpacity
                            onPress={()=> showModeReceive('date')}
                        >
                            <Icon name='event' color={'#01BCE4'} size={50} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>showModeReceive('time')}
                        >
                            <FontAwesome name="clock-o" size={48} color="#01BCE4" />
                        </TouchableOpacity>
                        {
                            showReceive===true && (
                                <DateTimePicker
                                    testID="dateTimePickerReceive"
                                    value={dateReceive}
                                    mode={mode}
                                    is24Hour={true}
                                    display='default'
                                    onChange={onChangeReceiveDate}
                                    onTouchCancel={()=>setShowReceive(false)}
                                />
                            )
                        }
                    </View>
                </View>
                <View style={styles.mainContainer}>
                        <View>
                            <Text>
                                Edit prices
                            </Text>
                        </View>
                    <Text style={styles.categoryTitle}>Services</Text>


                    <ScrollView horizontal={true}>
                       
                        <View style={styles.categoryContainer}>
                            {/* items ng mga services */}
                            <Service
                                buttonName={"Wash, Dry and Fold"}
                                buttonPrice={" Php 130.00 per 8kg"}
                                path={require('../assets/icons/clotheswashing.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Wash, Dry and Iron"}
                                buttonPrice={" Php 130.00 per 8kg"}
                                path={require('../assets/icons/bubble.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Dry Clean"}
                                buttonPrice={'\nPhp 130.00 per 8kg'}
                                path={require('../assets/icons/clothes.png')}
                                cost={16.25}
                            />

                            <Service
                                buttonName={"Beddings"}
                                buttonPrice={'\nPhp 130.00 per 8kg'}
                                path={require('../assets/icons/washing machine.png')}
                                cost={16.25}
                            />
                        </View>
                    </ScrollView>
                    <Text style={styles.categoryTitle}>Detergents</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.categoryContainer}>
                            {/* items ng mga detergent */}
                            <Detergent
                                buttonName={"Surf powder Cherry Blossom 75g"}
                                buttonPrice={" Php 30.00 each"}
                                path={require('../assets/icons/DSurf.png')}
                                cost={30}
                            />
                            <Detergent
                                buttonName={'Tide Original Scent\n80g'}
                                buttonPrice={" Php 20.00 each"}
                                path={require('../assets/icons/DTide.png')}
                                cost={20}
                            />
                            <Detergent
                                buttonName={"Ariel powder with downy\n66g"}
                                buttonPrice={" Php 25.00 each"}
                                path={require('../assets/icons/DAriel.png')}
                                cost={25}
                            />
                            <Detergent
                                buttonName={'Laundry shop choice \n 80g'}
                                buttonPrice={" Php 10.00 each"}
                                path={require('../assets/icons/bubble.png')}
                                cost={69}
                            />
                             <Detergent
                                buttonName={'I will provide my own'}
                                buttonPrice={" \n Php 0.00"}
                                path={require('../assets/icons/bubble.png')}
                                cost={0}
                            />

                        </View>
                    </ScrollView>
                    <Text style={styles.categoryTitle}>Fabric Conditioner</Text>
                    <ScrollView horizontal={true}>
                        <View style={styles.categoryContainer}>
                            {/* items ng mga services */}
                            <FabCon
                                buttonName={'Surf \n Blossom Fresh \n 40ml'}
                                buttonPrice={" Php 30.00 each"}
                                path={require('../assets/icons/FSurf.png')}
                                cost={30}
                            />
                            <FabCon
                                buttonName={'Del Gentle Protect\n26ml'}
                                buttonPrice={" Php 20.00 each"}
                                path={require('../assets/icons/FDel.png')}
                                cost={20}
                            />
                            <FabCon
                                buttonName={"Downey Sunrise Fresh\n38ml"}
                                buttonPrice={" Php 30.00 each"}
                                path={require('../assets/icons/FDowny.png')}
                                cost={25}
                            />
                            <FabCon
                                buttonName={'Laundry shop choice \n 100ml'}
                                buttonPrice={" Php 30.00 each"}
                                path={require('../assets/icons/bubble.png')}
                                cost={69}
                            />
                            <FabCon
                                buttonName={'I will provide my own'}
                                buttonPrice={" \n Php 0.00"}
                                path={require('../assets/icons/bubble.png')}
                                cost={0}
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
                            billModalError !== ""?
                                <RenderBillModal/>
                            :
                            <View style={styles.billContainer}>
                                <Text>Our rider will retrieve your Labada on:</Text>
                                <Text style={styles.billTitle}>{
                                    retrieveTimestamp.getMonth()+1 + '/' + 
                                    retrieveTimestamp.getDate() + '/' + 
                                    retrieveTimestamp.getFullYear() + ' at ' + 
                                    retrieveTimestamp.getHours() + ':' + 
                                    retrieveTimestamp.getMinutes()}</Text>
                                <Text>And you will receive your Labada back on:</Text>
                                <Text style={styles.billTitle}>{
                                    receiveTimestamp.getMonth()+1 + '/' + 
                                    receiveTimestamp.getDate() + '/' + 
                                    receiveTimestamp.getFullYear() + ' at ' + 
                                    receiveTimestamp.getHours() + ':' + 
                                    receiveTimestamp.getMinutes()}</Text>
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
                                    <TouchableOpacity style={styles.methodButton} onPress={()=>setPayment('gcash')}>
                                        <Image
                                            source={require('../assets/icons/Gcash.png')}
                                            style={styles.methodButtonImage}
                                        />
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.methodButton} onPress={()=>setPayment('cod')}>
                                        <Text style={{color:'white'}}>COD</Text>
                                    </TouchableOpacity>
                                </View>

                                <Text style={{alignSelf:'flex-end', marginRight:'5%', fontWeight:'bold', fontSize:24}}>Php {totalCost}.00</Text>
                                <Text style={{alignSelf:'center',color:'red', marginBottom:10}}>
                                    Please check your order thoroughly before proceeding.
                                </Text>
                                    {
                                        payment === 'gcash'?
                                        <View style={styles.remindersContainer}>
                                            <Text style={styles.remindersTitle}>GCash Payment Reminders:</Text>
                                            <Text style={styles.remindersText}>
                                                Please wait for the laundry personnel to confirm the total amount before sending the payment.
                                            </Text>
                                            <Text style={styles.remindersText}>
                                                Kindly send a screenshot of the receipt before the laundry schedule.
                                            </Text>
                                        </View>
                                        : payment === 'cod'?
                                        <View style={styles.remindersContainer}>
                                            <Text style={styles.remindersTitle}>Cash on Delivery Payment Reminders:</Text>
                                            <Text style={styles.remindersText}>
                                                As much as possible please use exact amount.
                                            </Text>
                                            <Text style={styles.remindersText}>
                                                If using large bills please indicate the amount here.
                                            </Text>
                                            <TextInput
                                                keyboardType="numeric"
                                                style={styles.cashAmount}
                                                onChangeText={(e)=>{
                                                    setCashAmount(e)
                                                }}
                                            />
                                            {
                                                cashAmount < 100? 
                                                    <Text style={{color:'red', alignSelf:'center'}}>
                                                        Please enter valid amount.
                                                    </Text> 
                                                :   null   
                                            }
                                        </View>:
                                        null
                                    }
                                <Text style={{color:'red', alignSelf:'center'}}>
                                    {submissionError}
                                </Text>
                                <TouchableOpacity
                                    onPress = {submitOrder}
                                    style={submitDisable? styles.submitButtonDisabled :styles.submitButton}
                                    disabled={submitDisable}
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
                                    Save
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
        flexDirection:'row',
        backgroundColor:'#F6F6F6',
        alignSelf:'center',
        justifyContent:'space-evenly',
        alignItems:'center',
        height:50,
        width:300,
        marginVertical:10,
        borderRadius:35,
        flexWrap:'wrap',
        textAlign:'center',
    },
    mainContainer:{
        marginHorizontal:10,
        height:950,
    },
   itemContainer1:{
       height:150,
       width:120,
       alignContent:'center',
       alignItems:'center',
   },
   imageContainer1:{
        backgroundColor:'#f6f6f6',
        borderRadius:20,
        height:100,
        width:100,
        justifyContent:'center',
   }, 
   itemImage: {
        height:100,
        width: 100,
        alignSelf:'center',
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
   scheduleQ:{
        marginLeft:10,
        fontSize:16
   },
   scheduleButtonsContainer:{
        width:'90%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:10,
        alignSelf:'center'
   },
   scheduleButtons:{
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:'#f6f6f6',
        marginHorizontal:20,
        borderRadius:10
   },  
   scheduleButtonsSelected:{
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:'#01BCE4',
    marginHorizontal:20,
    borderRadius:10
},  


// Latter Styles
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
   billError:{
        color:'red',
        fontSize:30,
        alignSelf:'center',
        textAlign:'center'
   },
   remindersTitle:{
        fontSize:20,
        fontWeight:'bold',
   },
   remindersText:{
        fontSize:14
   },
   cashAmount:{
        marginTop:10,
        height:40,
        width:200,
        backgroundColor:'#f6f6f6',
        paddingVertical:2,
        paddingHorizontal:10,
        borderRadius:10,
        alignSelf:'center'
   },
   submitButton:{ 
        marginTop:10,
        backgroundColor:'#01BCE4',
        width:'50%',
        alignSelf:'center',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
    submitButtonDisabled:{ 
        marginTop:10,
        backgroundColor:'#f6f6f6',
        width:'50%',
        alignSelf:'center',
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
})
export default ShopProfile;