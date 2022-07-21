import * as React from 'react'
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Modal
} from 'react-native';
import { auth, db } from '../core/config';
import { MaterialIcons } from '@expo/vector-icons';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({navigation}) => {

    const [secure, setSecure] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("initial");
    const [passwordError, setPasswordError] = React.useState("initial");
    const [errorMsg, setErrorMsg] = React.useState("");
    const [errorModal, setErrorModal] = React.useState(false);
    const [users, setUsers] = React.useState([]);
    const usersCollectionRef= collection(db, 'users');

    React.useEffect(()=>{
        const getUsers = async() =>{
            const data = await getDocs(usersCollectionRef);
        
            setUsers(data.docs.map((doc)=>({
            ...doc.data(), id: doc.id,
            })));
        }

        getUsers();
        console.log(email, password);

        // const unsubscribe = auth.onAuthStateChanged( async user=>{
        //     if(user){
        //         users.map(async userMap=>{
        //         if(user.uid === await userMap.id && userMap.isAdmin === false){
        //             //console.log(userMap.id);
        //             navigation.navigate('HomeFlow');
        //         }
        //         else if (user.uid === await userMap.id && userMap.isAdmin === true){
        //             //console.log(userMap.id);
        //             navigation.navigate('AdminFlow');
        //         }})
        //     }
        // })

        // return unsubscribe();
    }, [])

    const submitHandler = async () => {
        console.log(email, password);
        const emailregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

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
        
        if(passwordError === "" && emailError === ""){
            await signInWithEmailAndPassword(auth, email, password).then((credentials)=>{
                const user = credentials.user;
                console.log("Logged in with", user.uid);
                users.map(async userMap =>{
                    if(user.uid === userMap.id && userMap.isAdmin === false){
                        //console.log(userMap.id);
                        await AsyncStorage.setItem('useraddress', userMap.address);
                        await AsyncStorage.setItem('usernumber', userMap.phoneNum);
                        await AsyncStorage.setItem('username', userMap.userName);
                        navigation.navigate('HomeFlow');
                        
                    }
                    else if (user.uid === userMap.id && userMap.isAdmin === true){
                        //console.log(userMap.id);
                        navigation.navigate('AdminFlow')
                    }
                })
                //navigation.navigate('HomeFlow')
            }).catch(error=>{
                setErrorModal(true)
                setErrorMsg(error.message.slice(22, -2));
                console.log(error);
            })
            //navigation.navigate('HomeFlow')
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
                    Log In
                </Text>

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

                <TouchableOpacity>
                        <Text style={styles.forgotPass}>Forgot your password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={submitHandler}
                >
                        <Text style={styles.loginBtn}>Log In</Text>
                </TouchableOpacity>

                <View style={styles.toRegi}>
                    <Text>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> {navigation.navigate('SignUp')}}>
                        <Text style={styles.toRegiBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
                    <Text style={styles.modalText}>Login Failed! {errorMsg}</Text>
                    <TouchableOpacity
                        style={[styles.mdlErrBtn, styles.mdlErrBtnClose]}
                        onPress={() => setErrorModal(!errorModal)}
                        >
                        <Text style={styles.textStyle}>Try Again</Text>
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
    emailInput:{
        borderWidth:1,
        borderColor:'#EBEBEB',
        backgroundColor:'#F6F6F6',
        width:'90%',
        height:50,
        padding:'2%',
        borderRadius:8,
        marginTop:'12%',
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

    //modal styles
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

export default Login;