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
import { doc, updateDoc, addDoc, collection } from 'firebase/firestore';
import { sendEmailVerification } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Verify = ({navigation}) => {

    var loggedInId = auth.currentUser.uid;
    const myDoc = doc(db, "users", loggedInId)
    const [errorModal, setErrorModal] = React.useState(false);
    const [errorMsg, setErrorMsg] = React.useState("");
    const [successModal, setSuccessModal] = React.useState(false);
    const [email, setEmail] = React.useState("");

    const [emailModal, setEmailModal] = React.useState(false);
    const [phoneModal, setPhoneModal] = React.useState(false);
    // const [infoMsg, setInfoMsg] = React.useState("");

    const updateUser = async() =>{
        await updateDoc(myDoc, {
            isVerify: true
        });
    }
    
    const sendVerification = async() =>{
        setEmailModal(!emailModal)
        // const user = auth.currentUser;
        setErrorMsg("Error! Please request email verification again.");

        await sendEmailVerification(auth.currentUser)
        .then(() => {
            setEmailModal(!emailModal)
        }).catch((error) => {
            console.log(error)
            setErrorModal(!errorModal)
        });
    }

    const emailVerified = async()=>{
        
        auth.currentUser.reload();
        const isVerified = auth.currentUser.emailVerified;

        if(isVerified){
            setSuccessModal(!successModal)
        }
        
    }

    const signOut = () => {
        auth.signOut().then(()=>{
            navigation.navigate("Login");
        })
    }

    const sendPhoneVerification = async() =>{
        setPhoneModal(!phoneModal)
    }

    const RenderInfoModal =({})=>{
        if(emailModal){
            return <View>
                <Text style={styles.modalText}>Please click the button after you verify your email</Text>
                <TouchableOpacity
                    style={{alignSelf: 'center', width: '100%', padding: 10, backgroundColor: "#0896B5", marginTop: '5%', }}
                    onPress={() => emailVerified()}
                    >
                    <Text style={{color: 'white', fontSize: 18, }}>Email Verified</Text>
                </TouchableOpacity>
            </View>
        }

        return <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={styles.modalText}>Enter Code</Text>
            <TouchableOpacity
                style={{alignSelf: 'center', width: '100%', padding: 10, backgroundColor: "#0896B5", marginTop: '5%', }}
                onPress={() => setPhoneModal(!phoneModal)}
                >
                <Text style={{color: 'white', fontSize: 18, }}>Confirm</Text>
            </TouchableOpacity>
        </View>
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
                <Text style={{fontSize:35,alignSelf:'center', marginBottom: 15}}>
                    Verify by:
                </Text>
                
                <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => sendVerification()}
                    >
                    
                    <AntDesign name="mail" size={30} color="white" style={{marginRight: 15}}/>
                    <Text style={styles.textStyle}>Email</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.confirmButton}
                    onPress={() => sendPhoneVerification()}
                    >

                    <AntDesign name="message1" size={30} color="white" style={{marginRight: 15}}/>
                    <Text style={styles.textStyle}>Phone Number</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style={{marginTop: '10%', alignSelf: 'center'}}
                onPress={signOut}>
                    <Text style={{color: '#0896B5'}}>Sign out</Text>
                </TouchableOpacity>
            
                {/* <TextInput 
                    style={styles.emailInput}
                    placeholder="Enter your email address"
                    placeholderTextColor={"#BDBDBD"}
                    onChangeText={(val)=>{setEmail(val)}}
                /> */}

            </View>


            {/* MODALS */}
            
            {/* Info modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={emailModal || phoneModal}
                onRequestClose={() => {
                    setEmailModal(false);
                    setPhoneModal(false);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.infoModal}>
                    <MaterialIcons name="info" size={100} color="lightblue" />
                    <RenderInfoModal/>
                </View>
                </View>
            </Modal>

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
                    setSuccessModal(!successModal);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MaterialIcons name="check-circle" size={80} color="green" />
                    <Text style={styles.modalText}>Verified! Redirecting to Homepage</Text>
                    <TouchableOpacity
                            style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                            onPress={() => {
                                updateUser();
                                setSuccessModal(!successModal)
                                navigation.navigate('HomeFlow');
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
        alignItems: 'center',
        flexDirection: 'row',
        width: 250,
        maxWidth: 350,
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

      infoModal: {
        // height:"30%",
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
        padding: 15,
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

export default Verify;