import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    Image,
    ScrollView,
    TouchableOpacity
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Edit = ({navigation}) => {
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
                                Juan Dela Cruz
                            </Text>
                        </View>
                        
                        <View style={styles.addressContainer}>
                            <View style={styles.addressTitle}>
                                <Icon name='place' color={'#01BCE4'} size={50} />
                                <Text style={{
                                        fontSize: 25,
                                        color: 'black',
                                        fontWeight:'300',
                                    }}>
                                    Address
                                    </Text>
                            </View>
                                <View style={styles.addressShape}>
                                    <Text style={{
                                      color:'#D3D3D3',
                                      fontSize: 15,
                                    }}>
                                        input na magseset ng item name or key or id para auto na ma lalagay dito
                                    </Text>
                                </View>
                        </View>
                        
                        <View style={styles.numberContainer} >
                            <View style={styles.numberTitle}>
                                <Icon name='smartphone' color={'#01BCE4'} size={50} />
                                <Text style={{
                                        fontSize: 25,
                                        color: 'black',
                                        fontWeight:'300',
                                    }}>
                                    Number
                                    </Text>
                            </View>
                            <View style={styles.numberShape}>
                                <Text style={{
                                      color:'#D3D3D3',
                                      fontSize: 15,
                                    }}>
                                input na magseset ng item name or key or id para auto na ma lalagay dito
                                </Text>
                            </View>
                        </View>
                        <View style={styles.emailContainer}>
                            <View style={styles.emailTitle}>
                                <Icon name='mail-outline' color={'#01BCE4'} size={50} />
                                <Text style={{
                                        fontSize: 25,
                                        color: 'black',
                                        fontWeight:'300',
                                    }}>
                                    Email
                                    </Text>
                            </View>
                            <View style={styles.emailShape}>
                                <Text style={{
                                      color:'#D3D3D3',
                                      fontSize: 15,
                                    }}>
                                input na magseset ng item name or key or id para auto na ma lalagay dito
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
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
       paddingBottom: 80,
       
    },
    mainShapeContainer:{
        height:150
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
    addressContainer:{
        paddingTop: 50,
       // alignItems:'center'
    },
    addressTitle: {
        flexDirection:'row',
        alignItems:'center',
    },
    addressShape:{
        backgroundColor:'#F6F6F6',
        height:70,
        width: '95%',
        borderRadius: 30,
       // alignSelf:'center',
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal: 15,
    },
    numberContainer: {
        paddingTop: 20,
    },
    numberTitle: {
        flexDirection:'row',
        alignItems:'center',
    },
    numberShape: {
        backgroundColor:'#F6F6F6',
        height:70,
        width: '95%',
        borderRadius: 30,
       // alignSelf:'center',
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:15,
    },
    emailContainer: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    emailTitle: {
        flexDirection:'row',
        alignItems:'center',
    },
    emailShape: {
        backgroundColor:'#F6F6F6',
        height:70,
        width: '95%',
        borderRadius: 30,
       // alignSelf:'center',
        alignContent: 'center',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        paddingHorizontal:15,
    },
    saveButton: {
      backgroundColor: '#01BCE4',
      borderRadius: 20,
      height: 60,
      width:'70%',
      alignItems:'center',
      alignContent:'center',
      justifyContent: 'center',
      alignSelf:'center',
  },

})
export default Edit;
