import React from 'react'
import {
  View,
  Button,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';


const Login = () => {

    const [secure, setSecure] = React.useState(true);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [emailError, setEmailError] = React.useState("initial");
    const [passwordError, setPasswordError] = React.useState("initial");

    const submitHandler = () => {
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
            console.log("LOGIN INITIATED")
        }
    }

    // TO DO:
    // 1 regex for email = done
    // 2 conditions for password = done
    // 3 login handler = done
    // 4 regi page

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
                        <Text style={styles.showHideBtn}>SHOW</Text>
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
                    <Text>Don't have an account?</Text><TouchableOpacity>
                        <Text style={styles.toRegiBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      display:'flex',
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center'
    },
    appLogo:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginTop:'40%'
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
    }
  });

export default Login;