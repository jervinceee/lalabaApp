import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity,
    TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { db, auth } from '../core/config';
import { getDoc, doc } from 'firebase/firestore';
import { add } from 'react-native-reanimated';

const Edit = ({navigation}) => {

    var loggedInId = auth.currentUser.uid;
    const myDoc = doc(db, "users", loggedInId)
    const [userName, setUserName] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [age, setAge] = React.useState("");
    const [phoneNum, setPhoneNum] = React.useState("");
    const [newName, setNewName] = React.useState("");
    const [newAddress, setNewAddress] = React.useState("");
    const [newAge, setNewAge] = React.useState("");
    const [newNum, setNewNum] = React.useState("");

    // error handlers
    const [nameError, setNameError] = React.useState("initial");
    const [ageError, setAgeError] = React.useState("initial");
    const [addressError, setAddressError] = React.useState("initial");
    const [phoneError, setPhoneError] = React.useState("initial");

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

    const saveChanges = () => { 
        const phoneregex = /^(09|\+639)\d{9}$/; 

        if ((userName === newName) && (address === newAddress) && (phoneNum === newNum) && (age === newAge)){
            console.log("NOTHING CHANGED");
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
                                    placeholder={address!=null && address!= ""? phoneNum : "Address"}
                                    placeholderTextColor={"#BDBDBD"}
                                    onChangeText={(val)=>{setNewAddress(val)}}
                                />
                            </View>
                        </View>

                        <Text style={styles.errorText}>ERROR TEXT</Text>

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

                        <Text style={styles.errorText}>ERROR TEXT</Text>

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

                        <Text style={styles.errorText}>ERROR TEXT</Text>

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

                        <Text style={styles.errorText}>ERROR TEXT</Text>

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
        </ScrollView>
    )   
}

const styles = StyleSheet.create({
    headerContainer: {
       left: '85%',
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
}
})
export default Edit;
