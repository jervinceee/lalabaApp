import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetergentComponent = (props) =>{

    const [selected, setSelected] = React.useState(false);
    const [volume, setVolume] = React.useState(1);
    const [disableBtn, setDisableBtn] = React.useState(false);
    const [cost, setCost] = React.useState(props.cost);
    const [prodName, setpProdName] = React.useState(props.buttonName);
    //const [storedName, setStoredName] = React.useState("")
    const add = async () => {
        setVolume(volume+1);
        await AsyncStorage.setItem('detergentvolume', JSON.stringify(volume+1));
        await AsyncStorage.setItem('detergentcost', JSON.stringify(volume * props.cost + props.cost));
    }

    const subtract = async () => {
        setVolume(volume-1);
        await AsyncStorage.setItem('detergentvolume', JSON.stringify(volume-1));
        await AsyncStorage.setItem('detergentcost', JSON.stringify(volume * props.cost - props.cost));
    }

    const itemSelect = async () =>{
        setSelected(!selected);
        if(selected !== true){
            await AsyncStorage.setItem('detergentname', prodName);
            await AsyncStorage.setItem('detergentvolume', JSON.stringify(volume));
            await AsyncStorage.setItem('detergentcost', JSON.stringify(cost));
        }
    }

    React.useEffect(()=>{
        if(volume < 2){
            setDisableBtn(true);
        }else{
            setDisableBtn(false);
        }
        setCost(props.cost * volume);
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
            <Text style={styles.buttonTextPrice}>{props.buttonPrice}</Text>
            <View style={selected === true? styles.volumeContainer : {display:'none'}}>
                <TouchableOpacity
                    style={disableBtn === true? styles.volumeButtonDisabled: styles.volumeButton}
                    onPress={subtract}
                    disabled={disableBtn}
                >
                    <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.volumeText}>{volume}</Text>
                <TouchableOpacity
                    style={styles.volumeButton}
                    onPress={add}
                >
                    <Text style={styles.volumeButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={selected===true? 
                {
                    fontWeight:'bold',
                    fontSize:18,
                    marginVertical:5
                } : 
                {display:'none'}}>
            Php {cost}.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        height:150,
        width:100,
        marginHorizontal:10,
        marginVertical:5
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
        fontSize:15
    },
    buttonTextPrice:{
        fontSize:14,
        fontWeight:'bold',
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

export default DetergentComponent;