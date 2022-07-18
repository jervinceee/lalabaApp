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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';


const SignUp = ({navigation}) => {

    const [secure, setSecure] = React.useState(true);
    const [isChecked, setIsChecked] = React.useState(false);
    const [name,setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [nameError, setNameError] = React.useState("initial");
    const [emailError, setEmailError] = React.useState("initial");
    const [passwordError, setPasswordError] = React.useState("initial");
    const [checkError, setCheckError] = React.useState("initial");
    const [errorMsg, setErrorMsg] = React.useState("sdadad");
    const [errorModal, setErrorModal] = React.useState(false);
    const [successModal, setSuccessModal] = React.useState(false);

    // const register = async () => {
    //     try{
            
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    const submitHandler = async () => {
        const emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

        if(name===""){
            setNameError("Please fill out this field")
        }else if(name.length < 4){
            setNameError("Username must have at least 4 characters")
        }

        if(email===""){
            setEmailError("Please fill out this field");
        }else if (!emailregex.test(email)){
            setEmailError("Please enter a valid email");
        }else{
            setEmailError("");
        }

        if(password===""){
            setPasswordError("Please fill out this field");
        }else if(password.length < 8){
            setPasswordError("Password must have at least 8 characters");
        }else{
            setPasswordError("");
        }

        if(isChecked === false){
            setCheckError("Please check the checkbox");
        }else{
            setCheckError("");
        }
        
        if(passwordError === "" && emailError === ""){
            console.log("Registered");
            console.log(email, password);
            createUserWithEmailAndPassword(auth, email, password).then((nUser)=>{
                console.log(nUser.user.uid);
                setSuccessModal(true);
                    setDoc(doc(db,"users",nUser.user.uid),{
                    userName:name,
                    age:null,
                    email:email,
                    address:"",
                    phoneNum:"",
                    isAdmin:false
                });
                
            }).catch((err)=>{
                setErrorModal(true);
                console.log(err.message);
                setErrorMsg(err.message.slice(22, -2));
            });
        }
    }

    return(
        <View style={styles.container}>
            <StatusBar
                backgroundColor='white'
            />
            <View style={styles.appLogo}>
                <Image style={styles.bubbleLeft} source={require('../assets/icons/foam-bubbles.png')}/>
                <Text style={styles.appLogoText}>LALABA</Text>
                <Image source={require('../assets/icons/foam-bubbles.png')}/>
            </View>

            <View style={styles.mainContainer}>
                <Text style={{fontSize:50,alignSelf:'center'}}>
                    Sign Up
                </Text>

                <TextInput 
                    style={styles.nameInput}
                    placeholder="Name"
                    placeholderTextColor={"#BDBDBD"}
                    onChangeText={(val)=>{setName(val)}}
                />

                <Text style={nameError==="" || nameError==="initial"?{display:'none'}:styles.error}>{nameError}</Text>

                <TextInput 
                    style={styles.emailInput}
                    placeholder="Email"
                    placeholderTextColor={"#BDBDBD"}
                    onChangeText={(val)=>{setEmail(val)}}
                />

                <Text style={emailError==="" || emailError==="initial"?{display:'none'}:styles.error}>{emailError}</Text>

                <View style={styles.passwordView}>
                    <TextInput 
                        style={styles.passwordInput}
                        placeholder="Password"
                        placeholderTextColor={"#BDBDBD"}
                        secureTextEntry={secure}
                        icon={<Text>SHOW</Text>}
                        onChangeText={(val)=>{setPassword(val)}}
                    />
                    <TouchableOpacity
                        onPress={(e)=>{setSecure(!secure)}}
                    >
                        {
                            secure?<Text style={styles.showHideBtn}>SHOW</Text>:<Text style={styles.showHideBtn}>HIDE</Text>
                        }
                    </TouchableOpacity>
                </View>

                <Text style={passwordError==="" || passwordError==="initial"?{display:'none'}:styles.error}>{passwordError}</Text>

                <View style={styles.checkBoxView}>
                    <CheckBox
                        value={isChecked}
                        onValueChange={() => setIsChecked(!isChecked)}
                        color={isChecked ? "#0896B5" : undefined}
                    />
                    <Text style={{marginLeft:'2%'}}>
                        I would like to receive your newsletter and other promotional information.
                    </Text>
                </View>

                <Text style={checkError==="" || checkError==="initial"?{display:'none'}:styles.error}>{checkError}</Text>
                
                <TouchableOpacity>
                        <Text style={styles.forgotPass}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={submitHandler}
                >
                        <Text style={styles.loginBtn}>Sign Up</Text>
                </TouchableOpacity>

                <View style={styles.toRegi}>
                    <Text>Already have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
                        <Text style={styles.toRegiBtn}>Sign In</Text>
                    </TouchableOpacity>
                    <Text style={{marginLeft:-12.5}}>instead.</Text>
                </View>
            </View>




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
                    <Text style={styles.modalText}>Registration failed! {errorMsg}</Text>
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
                    <Text style={styles.modalText}>Registration Successful!</Text>
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
    container: {
      display:'flex',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
      height:'100%'
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
    mainContainer:{
        display:'flex',
        width:'100%',
        marginTop:'5%',
    },  
    nameInput:{
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#F6F6F6',
        width:'90%',
        height:50,
        borderRadius:8,
        marginTop:'12%',
        alignSelf:'center',
        padding:'2%'
    },
    emailInput:{
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#F6F6F6',
        width:'90%',
        height:50,
        padding:'2%',
        borderRadius:8,
        marginTop:'2%',
        alignSelf:'center'
    },
    passwordView:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:'2%',
    },
    passwordInput:{
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#F6F6F6',
        width:'75%',
        height:50,
        padding:'2%',
        borderRadius:8,
        marginLeft:'5%'
    },
    showHideBtn:{
        marginLeft:'15%',
        color:'#0896B5'
    },
    checkBoxView:{
        display:'flex',
        flexDirection:'row',
        width:'90%',
        marginLeft:'5%',
        marginTop:'5%',
        alignItems:'center'
    },
    forgotPass:{
        alignSelf:'center',
        color:'#0896B5',
        fontSize:24,
        marginTop:'2%'
    },
    loginBtn:{
        backgroundColor:'#0896B5',
        width:'90%',
        alignSelf:'center',
        borderRadius:100,
        height:50,
        textAlign:'center',
        textAlignVertical:'center',
        color:'white',
        fontSize:18,
        marginTop:'5%'
    },
    toRegi:{
        display:'flex',
        flexDirection:'row',
        marginTop:'5%',
        alignSelf:'center',
    },
    toRegiBtn:{
        color:'#0896B5',
        marginLeft:'5%'
    },
    error:{
        color:'red',
        marginLeft:'8%',
        marginTop:'1%'
    },

    // modal styles
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

export default SignUp;