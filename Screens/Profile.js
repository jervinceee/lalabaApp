import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    StatusBar
} from "react-native";
import bubble from "../assets/icons/bubble.png"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { db, auth } from '../core/config';
import { getDoc, doc } from 'firebase/firestore';

const Profile = ({navigation}) => {

    var loggedInId = auth.currentUser.uid;
    const myDoc = doc(db, "users", loggedInId)
    const [userName, setUserName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [phoneNum, setPhoneNum] = React.useState("");

    const signOut = () => {
        auth.signOut().then(()=>{
            navigation.navigate("Login");
        })
    }

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

    return (
        <ScrollView style={{backgroundColor: '#01BCE4'}}>
            <StatusBar barStyle="light-content"/>
           <View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                        <Text style={{
                            color: 'white',
                            fontSize: 25,
                            fontWeight: '500',
                        }}>
                        Edit
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainInfoContainer}>
                    <View style={styles.subInfoContainer}>
                        <View style={styles.nameContainer}>
                            {
                                userName != null &&
                                <Text style={{
                                    color: 'black',
                                    fontSize: 30,
                                    fontWeight: '500',
                                    marginBottom:'5%'
                                }}>
                                    {userName}
                                </Text>
                            }
                        </View>
                        
                        <View style={styles.infoRow}>
                        <Icon name='place' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Address</Text>
                                    {address != null && address != "" ?
                                        <Text style={styles.infoContent}>{address}</Text> : 
                                        <Text style={styles.infoContent}>LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOONG TEXT</Text>
                                    }
                            </View>
                        </View>
                        
                        <View style={styles.infoRow}>
                        <Icon name='smartphone' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Phone Number</Text>
                                    {phoneNum != null && phoneNum != "" ?
                                        <Text style={styles.infoContent}>{phoneNum}</Text> : 
                                        <Text style={styles.infoContent}>Phone Number not set</Text>
                                    }
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                        <MaterialCommunityIcons name="baby-face-outline" size={50} color={'#01BCE4'} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Age</Text>
                                    {phoneNum != null && phoneNum != "" ?
                                        <Text style={styles.infoContent}>{age}</Text> : 
                                        <Text style={styles.infoContent}>Age not set</Text>
                                    }
                            </View>
                        </View>

                        <View style={styles.infoRow}>
                        <Icon name='mail-outline' color={'#01BCE4'} size={50} />
                            <View style={styles.infoContainer}>
                                <Text style={styles.infoTitle}>Email</Text>
                                    {auth.currentUser.email != null ||auth.currentUser.email != "" ?
                                        <Text style={styles.infoContent}>{auth.currentUser.email}</Text> : 
                                        <Text style={styles.infoContent}>Phone Number not set</Text>
                                    }
                            </View>
                        </View>

                        
                        
                        <TouchableOpacity style={styles.signOutBtn} onPress={signOut}>
                            <Text style={{color:'white', fontSize:24}}>
                                Sign Out
                            </Text>
                        </TouchableOpacity>                

                    </View>
                </View>
                <View style={styles.mainShapeContainer}>
                    <View style={styles.shapeContainer}>
                        <View style={styles.imgContainer}>
                            <Icon name='person' color={'#01BCE4'} size={170} 
                            onPress={() => navigation.navigate('Profile')}
                            />
                        </View>
                    </View>
                </View>

                
            </View>
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
        height: 700,
        width: '100%',
        paddingBottom:0
        //alignSelf:'center',
        //borderRadius: 20,
        //alignContent:'center',
        //alignItems:'center',
        
    },
    subInfoContainer: {
       
    },
    nameContainer:{
        justifyContent:'center',
        alignSelf:'center',
    }, 
    infoRow:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'85%',
        height:100,
        marginLeft:'5%',
        marginVertical:1
    },
    infoContainer:{
        marginLeft:'1%'
    },  
    infoTitle:{
        fontSize:25,
        fontWeight:'bold'
    },
    signOutBtn:{
        marginTop:'5%',
        height:60,
        backgroundColor:'#0896B5',
        width:'90%',
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30
    }
})
export default Profile;