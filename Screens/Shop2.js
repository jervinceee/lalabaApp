import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from "react-native";
import branch2 from '../assets/image/branch2.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Shop2 = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: '#01BCE4'}}>
            <View>
                <View style={{ height: 15, backgroundColor: '#01BCE4'}}>
                </View>
                <View style={styles.imgShape}>
                        <Image style={styles.img} source={branch2}/>
                </View>
                <View style={{ height: 15, backgroundColor: '#01BCE4'}}>
                </View>
                <View style={styles.mainTextContainer}>
                    <View style={styles.shapeTextContainer}>
                        <Text style={{
                            color: 'black',
                            fontSize: 50,
                            fontWeight: '800',
                            }}>
                                Laundry Shop 2
                        </Text>
                        <View style={styles.description}>
                            <View style={{
                                height:80,
                                width: 20,
                                backgroundColor: '#01BCE4',
                                borderRadius:20,
                            }}>
                            </View>
                            <Text style={{left: 10, bottom:10 }}>
                            Lorem ipsum dolor sit amet, consectetur adipi scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer. Fusce ut placerat orci nulla
                            </Text>
                        </View>
                        <View style={{ height: 15, backgroundColor: 'white'}}>
                        </View>
                        <View style={styles.scheduleContainer}>
                            <Icon name='schedule' color={'black'} size={30} />
                                <Text style={{
                                color: 'black',
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}>
                                Opens: Mon-Sun   from 8:00 AM to: 10:00 PM
                            </Text>

                        </View>
                        <View style={{ height: 30, backgroundColor: 'white'}}>
                        </View>
                        {/* For button 'book' */}
                        <TouchableOpacity onPress={()=> navigation.navigate('Shop2Menu')}>
                            <View style={styles.bookButton}>
                                <Text style={{
                                    fontSize:25,
                                    fontWeight:'bold',
                                    color: 'white',
                                }}>
                                    Book
                                </Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imgShape: {
        backgroundColor:'white',
        borderRadius:20,
        alignContent: 'center',
        alignSelf: 'center', 
        paddingTop:30,
        paddingHorizontal: 20,
        width: '95%',
        height: 350,
    },
    img: {
        height:300,
        width: 350,
    },
    mainTextContainer: {
        backgroundColor:'white',
        borderRadius:20,
        alignContent: 'center',
        alignSelf: 'center', 
        paddingTop:30,
       // paddingHorizontal: 20,
        width: '95%',
        height: 375,
    },
    shapeTextContainer: {
        alignContent: 'center',
        paddingHorizontal: 20,
    },
    description: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent:'center',
        paddingHorizontal: 15,
    },
    scheduleContainer: {
        backgroundColor:'#F6F6F6',
        borderRadius: 20,
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center'
    },
    bookButton: {
        backgroundColor: '#01BCE4',
        borderRadius: 20,
        height: 60,
        alignItems:'center',
        alignContent:'center',
        justifyContent: 'center',
    },
    

})
export default Shop2;