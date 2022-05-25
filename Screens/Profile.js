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
import bubble from "../assets/icons/bubble.png"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: '#01BCE4'}}>
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
                            <Text style={{
                                color: 'black',
                                fontSize: 30,
                                fontWeight: '500',
                            }}>
                                Juan Dela Cruz
                            </Text>
                        </View>
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
        width: '95%', 
        alignSelf:'center',
        borderRadius: 20,
        alignContent:'center',
        alignItems:'center',
        
    },
    subInfoContainer: {
       
    },
    nameContainer:{
        justifyContent:'center',
    },  

})
export default Profile;