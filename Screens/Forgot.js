import React from 'react'
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import CheckBox from 'expo-checkbox';
import {db, auth} from '../core/config'
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';


const Forgot = ({navigation}) => {

    const [errorModal, setErrorModal] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("Email Does not exist in the database!");
    const [successModal, setSuccessModal] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const passwordReset = async () => {
        // setSuccessModal(true)
        const emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        
        if(email===""){
            setErrorMsg("Please fill out this field");
        }else if (!emailregex.test(email)){
            setErrorMsg("Please enter a valid email");
        }else{
            setErrorMsg("Email Does not exist in the database!");
        }

        if(errorMsg === "Email Does not exist in the database!"){
            await sendPasswordResetEmail(auth, email, null).then(function () {
                setSuccessModal(!successModal)
              }).catch(function (e) {
                setErrorModal(!errorModal)
              })
        }
        else{
            setErrorModal(!errorModal)    
        }
    }

    
    return(
        <View style={styles.centeredView}>
            
            <StatusBar
                backgroundColor='white'
            />
            <View style={styles.appLogo}>
                <Image style={styles.bubbleLeft} source={require('../assets/icons/foam-bubbles.png')}/>
                <Text style={styles.appLogoText}>LALABA</Text>
                <Image source={require('../assets/icons/foam-bubbles.png')}/>
            </View>
            
            <View>
                <Text style={{fontSize:35,alignSelf:'center'}}>
                    Forgot Password
                </Text>
                
                <TextInput 
                    style={styles.emailInput}
                    placeholder="Enter your email address"
                    placeholderTextColor={"#BDBDBD"}
                    onChangeText={(val)=>{setEmail(val)}}
                />

            </View>

            <TouchableOpacity
                style={styles.confirmButton}
                onPress={() => passwordReset()}
                >
                <Text style={styles.textStyle}>Confirm</Text>
            </TouchableOpacity>
            

            {/* MODALS */}
            {/* error modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={errorModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setErrorModal(!errorModal);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MaterialIcons name="error" size={100} color="red" />
                    <Text style={styles.modalText}>{errorMsg}</Text>
                    <TouchableOpacity
                        style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                        onPress={() => setErrorModal(!errorModal)}
                        >
                        <Text style={styles.textStyle}>Try Again</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>

            {/* success modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={successModal}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setSuccessModal(!successModal);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MaterialIcons name="check-circle" size={80} color="green" />
                    <Text style={styles.modalText}>Mail Sent! Please check your email</Text>
                    <TouchableOpacity
                            style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                            onPress={() => {
                                navigation.navigate('Login')
                                setSuccessModal(!successModal)
                            }}
                        >
                        <Text style={styles.textStyle}>Proceed to Login</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Modal>


        </View>
    );
}

const styles = StyleSheet.create({
    mainBox: {
        height: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    appLogo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    bubbleLeft:{
        transform: [ { scaleX: -1 }]
    },
    appLogoText:{
        fontSize:50,
        fontWeight:'bold'
    },
    
    emailInput:{
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#F6F6F6',
        width:'90%',
        height:50,
        padding:'2%',
        borderRadius:8,
        marginTop:'5%',
        alignSelf:'center'
    },
    confirmButton: {
        padding: 15,
        backgroundColor:'#0896B5',
        marginTop: '5%',
        alignSelf: 'center',
        borderRadius: 20,
    },

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
  });

export default Forgot;