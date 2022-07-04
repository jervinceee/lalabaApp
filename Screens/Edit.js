import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'; 
import { db, auth } from '../core/config';
import { getDoc, doc, setDoc } from 'firebase/firestore';

const Edit = ({navigation}) => {

    var loggedInId = auth.currentUser.uid;
    const myDoc = doc(db, "users", loggedInId)
    const [userName, setUserName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState("");
    const [phoneNum, setPhoneNum] = React.useState("");

    //new variables
    const [newName, setNewName] = React.useState("");
    const [newAddress, setNewAddress] = React.useState("");
    const [newAge, setNewAge] = React.useState(0);
    const [newNum, setNewNum] = React.useState("");

    // error handlers
    const [nameError, setNameError] = React.useState("initial");
    const [ageError, setAgeError] = React.useState("initial");
    const [addressError, setAddressError] = React.useState("initial");
    const [phoneError, setPhoneError] = React.useState("initial");
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalMsg, setModalMsg] = React.useState("");

    React.useEffect(()=>{
        getDoc(myDoc).then((snapshot)=>{
            if(snapshot.exists){
                setAge(snapshot.data().age);
                setAddress(snapshot.data().address);
                setPhoneNum(snapshot.data().phoneNum);
                setUserName(snapshot.data().userName)
            }else{
                console.log("NO DOC FOUND!!")
            }
        })
    },[])

    const Update = (value, merge) =>{
        setDoc(myDoc, value, {merge:merge}).then(()=>{
            console.log("Success");
        }).catch((error)=>{
            console.log(error);
        })
    }

    const saveChanges = () => { 
        const phoneregex = /^(09|\+639)\d{9}$/; 
        
        if(newAddress!="" && newAddress.length < 8){
            setAddressError("Address must have at least 8 characters.")
        }else{
            setAddressError("")
        }

        if(newAge!="" && newAge < 0){
            setAgeError("Invalid Age Input.")
        }else{
            setAgeError("")
        }

        if(newName!= "" && newName.length < 8){
            setNameError("Username must have at least 8 characters.")
        }else{
            setNameError("")
        }

        if(newNum!="" && !phoneregex.test(newNum)){
            setPhoneError("Invalid Phone Number Format.")
        }else{
            setPhoneError("")
        }

        if ((userName === newName) && (address === newAddress) && (phoneNum === newNum) && (age === newAge)){
            console.log("NOTHING CHANGED");
            setModalMsg("Input data were same as previous data.");
            setModalVisible(true)
        }else if(newAddress==="" && newAge === 0 && newName==="" && newNum===""){
            console.log("WALANG NAGBAGO BIATCH")
            setModalMsg("No changes has been made.");
            setModalVisible(true)
        }else if(nameError==="" && ageError==="" && addressError==="" && phoneError===""){
            console.log("NO ERRORS");
            setModalMsg("Changes will take effect on relogin.")
            setModalVisible(true)
            //dito yung modal para isubmit yung changes
            // Update({
            //     "userName": `${newName===null || newName===""? userName : newName}`,
            //     "age":`${newAge===null || newAge===0? age : newAge}`,
            //     "phoneNum": `${newNum===null || newNum===""? phoneNum : newNum}`,
            //     "address":`${newAddress===null || newAddress==="" ? address : newAddress}`,
            //     "email" : auth.currentUser.email
            // })
        }
    }

    return (
        <ScrollView style={{backgroundColor: '#01BCE4'}}>
           <View>
                <View style={styles.headerContainer}>
                </View>
                <View style={styles.mainInfoContainer}>
                    <View style={styles.subInfoContainer}>
                        <View style={styles.nameContainer}>
                            <Text style={{
                                color: 'black',
                                fontSize: 30,
                                fontWeight: '500',
                            }}>
                                {userName}
                            </Text>
                        </View>
                        
                        <View style={styles.infoRow}>
                        <Icon name='place' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Address</Text>
                                <TextInput 
                                    style={styles.infoInput}
                                    placeholder={address!=null && address!= ""? address : "Address"}
                                    placeholderTextColor={"#BDBDBD"}
                                    onChangeText={(val)=>{setNewAddress(val)}}
                                />
                            </View>
                        </View>

                        {
                            addressError === "initial" || addressError === ""?
                            null: <Text style={styles.errorText}>{addressError}</Text>
                        }

                        <View style={styles.infoRow}>
                        <Icon name='smartphone' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Phone Number</Text>
                                <TextInput 
                                    style={styles.infoInput}
                                    placeholder={phoneNum!=null && phoneNum!= ""? phoneNum : "Phone Number"}
                                    keyboardType='numeric'
                                    placeholderTextColor={"#BDBDBD"}
                                    onChangeText={(val)=>{setNewNum(val)}}
                                />
                            </View>
                        </View>

                        {
                            phoneError === "initial" || phoneError === ""?
                            null: <Text style={styles.errorText}>{phoneError}</Text>
                        }

                        <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="baby-face-outline" size={50} color={'#01BCE4'} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Age</Text>
                                <TextInput 
                                    style={styles.infoInput}
                                    keyboardType='numeric'
                                    placeholder={age!=null && age!= ""? age: "Age"}
                                    placeholderTextColor={"#BDBDBD"}
                                    onChangeText={(val)=>{setNewAge(val)}}
                                />
                            </View>
                        </View>

                        {
                            ageError === "initial" || ageError === ""?
                            null: <Text style={styles.errorText}>{ageError}</Text>
                        }

                        <View style={styles.infoRow}>
                        <Icon name='person' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Username</Text>
                                <TextInput 
                                    style={styles.infoInput}
                                    placeholder={userName}
                                    placeholderTextColor={"#BDBDBD"}
                                    onChangeText={(val)=>{setNewName(val)}}
                                />
                            </View>
                        </View>

                        {
                            nameError === "initial" || nameError === ""?
                            null: <Text style={styles.errorText}>{nameError}</Text>
                        }

                        <TouchableOpacity onPress={saveChanges}>
                            <View style={styles.saveButton}>
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
                <View style={styles.mainShapeContainer}>
                    <View style={styles.shapeContainer}>
                        <View style={styles.imgContainer}>
                            <Icon name='person' color={'#01BCE4'} size={170} />
                        </View>
                    </View>
                </View>
            </View>
            
            {/* MODALS */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MaterialIcons name="error" size={100} color="red" />
                    <Text style={styles.modalText}>{modalMsg}</Text>
                    {
                        modalMsg==="Changes will take effect on relogin."?
                        <TouchableOpacity
                            style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                            onPress={() => {
                                Update({
                                    "userName": `${newName===null || newName===""? userName : newName}`,
                                    "age":`${newAge===null || newAge===0? age : newAge}`,
                                    "phoneNum": `${newNum===null || newNum===""? phoneNum : newNum}`,
                                    "address":`${newAddress===null || newAddress==="" ? address : newAddress}`,
                                    "email" : auth.currentUser.email
                                })
                                setModalVisible(!modalVisible);
                                navigation.navigate("Login");
                            }}
                            >
                            <Text style={styles.textStyle}>OK</Text>
                        </TouchableOpacity>:
                        <TouchableOpacity
                            style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                            <Text style={styles.textStyle}>Try Again</Text>
                        </TouchableOpacity>
                    }
                </View>
                </View>
            </Modal>
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    headerContainer: {
       left: '85%',
       marginTop:'10%'
    },
    mainShapeContainer:{
        height:150,
    },
    shapeContainer: {
        top: -700,
        position:'absolute',
        backgroundColor:'white',
        alignSelf: 'center',
        height: 200,
        width: 200,
        borderRadius: 125,
        borderColor: '#01BCE4',
        borderWidth: 10,
    },
    imgContainer: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems:'center',
        alignContent:'center',
        alignSelf: 'center',
        paddingBottom: 70,
    },
    mainInfoContainer:{
        top: 100,
        position:'relative',
        backgroundColor:'white',
        paddingTop: 120,
        height: 720,
        width: '100%', 
        //alignSelf:'center',
        //borderRadius: 20,
        //alignContent:'center',
        //alignItems:'center',
        
    },
    nameContainer:{
        justifyContent:'center',
        alignSelf:'center',
        marginTop:10
    },  
    saveButton: {
      backgroundColor: '#01BCE4',
      borderRadius: 30,
      height: 50,
      width:'70%',
      alignItems:'center',
      alignContent:'center',
      justifyContent: 'center',
      alignSelf:'center',
      marginVertical:'2%'
  },
  infoRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    height:100,
    marginLeft:'3%',
    marginTop:'2%'
},
infoContainer:{
    marginLeft:'1%'
},  
infoTitle:{
    fontSize:25,
    fontWeight:'bold'
},
infoInput:{
    borderWidth:1,
    borderColor:'#EBEBEB',
    backgroundColor:'#F6F6F6',
    marginTop:10,
    paddingHorizontal:10,
    width:300,
    height:50,
    borderRadius:8,
    alignSelf:'center'
},
errorText:{
    color:'red',
    marginLeft:'20%'
},

//modal styles
centeredView: {
    flex: 1,
    marginTop: 22,
    justifyContent:'center'
  },
  modalView: {
    height:"30%",
    width:'80%',
    display:'flex',
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf:'center',
    alignItems: "center",
    justifyContent:'space-evenly',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  mdlErrBtn: {
    borderRadius: 20,
    width:'80%',
    padding: 10,
    elevation: 2,
  },
  mdlErrBtnOpen: {
    backgroundColor: "#0896B5",
  },
  mdlErrBtnClose: {
    backgroundColor: "#0896B5",
    height:'20%',
    display:'flex',
    justifyContent:'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize:24,
    textAlign: "center"
  }
})
export default Edit;
