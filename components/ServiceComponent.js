import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ShopServiceComponent = (props) =>{

    const [selected, setSelected] = React.useState(false);
    const [volume, setVolume] = React.useState(8);
    const [disableBtn, setDisableBtn] = React.useState(false);
    const [cost, setCost] = React.useState(130);
    const [prodName, setpProdName] = React.useState(props.buttonName);


    const add = async() => {
        setVolume(volume+8);
        await AsyncStorage.setItem('servicecost', JSON.stringify(volume * props.cost + 130));
        await AsyncStorage.setItem('maxweight', JSON.stringify(volume+8));
        
    }

    const subtract = async() => {
        setVolume(volume-8);
        await AsyncStorage.setItem('servicecost', JSON.stringify(volume * props.cost - 130));
        await AsyncStorage.setItem('maxweight', JSON.stringify(volume-8));
        
    }

    const itemSelect = async() =>{
        setSelected(!selected);
        if(selected !== true){
            await AsyncStorage.setItem('servicename', prodName);
            await AsyncStorage.setItem('maxweight', JSON.stringify(volume));
            await AsyncStorage.setItem('servicecost', JSON.stringify(cost));
        }
    }
    
    React.useEffect(()=>{
        if(volume < 9){
            setDisableBtn(true);
        }else{
            setDisableBtn(false);
        }
        setCost(props.cost * volume)
        setpProdName(props.buttonName);
    },[volume]);

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={selected === true? styles.btnContainerSelected : styles.btnContainer}
                onPress={itemSelect}
            >
                <Image
                    style={styles.buttonImage}
                    source={props.path}
                />
            </TouchableOpacity>
            <Text style={styles.buttonText}>{props.buttonName}</Text>
            <View style={selected === true? styles.volumeContainer : {display:'none'}}>
                <TouchableOpacity
                    style={disableBtn === true? styles.volumeButtonDisabled: styles.volumeButton}
                    onPress={subtract}
                    disabled={disableBtn}
                >
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.volumeText}>{volume} kg</Text>
                <TouchableOpacity
                    style={styles.volumeButton}
                    onPress={add}
                >
                    <Text style={styles.volumeButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        height:150,
        width:100,
        marginHorizontal:10,
        marginVertical:2
    },
    btnContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'#f6f6f6',
        borderRadius:10,
        padding:10,
        marginBottom:5,
    },
    btnContainerSelected:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        backgroundColor:'#01BCE4',
        borderRadius:10,
        padding:10,
        marginBottom:5,

        shadowColor: "#000", shadowOffset:{ width: 0,
            height: 2,
            },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonImage:{
        height:80,
        width:80,
    },
    buttonText:{
        fontSize:18
    },
    volumeContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:5
    },
    volumeButton:{
        height:20,
        width:20,
        backgroundColor:'#01BCE4',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    volumeButtonDisabled:{
        height:20,
        width:20,
        backgroundColor:'#f6f6f6',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10
    },
    volumeButtonText:{
        fontWeight:'bold'
    },
    volumeText:{
        marginHorizontal:5,
        fontSize:14,
        fontWeight:"bold"
    }
})

export default ShopServiceComponent;