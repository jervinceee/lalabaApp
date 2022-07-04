import React from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import Gcash from '../assets/icons/Gcash.png';
import qr1 from '../assets/image/qr1.png';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const Shop1CheckOut = ({navigation}) => {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });
  const [shouldShow1, setShouldShow1] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);  

  return (
    <ScrollView style={{backgroundColor:'#01BCE4'}}>
      <View style={styles.header}>
        <Text style={{
          fontSize: 45,
          fontWeight: '500',
          color: 'black'
          }}>
          Laundry Shop 1
        </Text>
      </View>
      <View style={styles.shapeContainer}>
          <View style={styles.pricingContainer}>
            <Text style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: 'black',
              }}
            >
              Services:
            </Text>
            <Text style={{
                  fontSize:20,
                  fontWeight: '300',
                  color: 'black',
                  }}
                >
                  {'\t'} {'\t'} {'\t'}Wash, Dry & fold
              </Text>
              <View style={styles.servicesText}>
                <Text style={{
                  fontSize:20,
                  fontWeight: '300',
                  color: 'black',
                  }}
                >
                  {'\t'} {'\t'} {'\t'}8kg
                </Text>
                <Text style={{
                  fontSize:20,
                  color:'black'
                  }}
                >
                  presyo
                </Text>
              </View>
              <Text style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: 'black',
                }}
              >
                Detergents:
              </Text>
              <View style={styles.servicesText}>
                <Text style={{
                  fontSize:20,
                  fontWeight: '300',
                  color: 'black',
                  }}
                >
                  {'\t'} {'\t'} {'\t'} Ariel
                </Text>
                <Text style={{
                  fontSize:20,
                  color:'black'
                  }}
                >
                  Presyo
                </Text>
              </View>
              <Text style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: 'black',
                }}
              >
                Fabric Conditioner:
              </Text>
              <View style={styles.servicesText}>
                <Text style={{
                  fontSize:20,
                  fontWeight: '300',
                  color: 'black',
                  }}
                >
                  {'\t'} {'\t'} {'\t'} Ariel
                </Text>
                <Text style={{
                  fontSize:20,
                  color:'black'
                  }}
                >
                  presyo
                </Text>
              </View>
              <View style={styles.servicesText}>
                <Text style={{
                  fontSize:50,
                  fontWeight:'bold',
                  color:'black'
                  }}
                >
                  Total: 
                </Text>
                <Text style={{
                  fontSize:50,
                  fontWeight:'bold',
                  color:'black'
                  }}
                >
                  presyo
                </Text>
              </View>
          </View>
      </View>
      <View style={styles.paymentShape}>
        <View style={styles.paymentContainer}>
            <Text style={{
              fontSize: 45,
              fontWeight:'400',
              color:'black'
              }}
            >
              Mode of payment:
            </Text>
            
              <View style={styles.logoContainer}>

              <TouchableOpacity onPress={() => {setShouldShow1(!shouldShow1 ), setShouldShow2(shouldShow2 === '')}}>
                <View  style={styles.cashOnDelivery}>
                  <Text style={{
                      color:'white',
                      fontWeight:'800', 
                    }}
                  >
                      Cash On Delivery
                  </Text>
                </View>
                </TouchableOpacity> 
                <TouchableOpacity onPress={() => {setShouldShow2(!shouldShow2), setShouldShow1(shouldShow1 === '')}}>
                <Image style={styles.gcashLogo} source={Gcash}/>
                </TouchableOpacity>
              </View>
        </View>
      </View>
      {shouldShow1 ?
        (
      <View  name='codReminder' style={styles.codReminderShape}>
        <View style={styles.codReminderContainer}>
          <Text style={{
            fontSize:20,
            color:'black',
            fontWeight:'bold',
            }}
          >
            Cash on delivery reminders:
          </Text>
          <Text style={{
            fontSize:15,
            color:'black',
            }}
          >
            As much as possible please use exact amount {'\n'} 
            If using large bills please indicate the amount here.
          </Text>
          <View style={styles.cashInputShape}>
            <Text style={{
              color:'black',
              top:10,
              left:10,
              }}
            > 
              PHP |
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <View style={styles.bookButton}>
              <Text style={{
                fontSize:25,
                fontWeight:'bold',
                color: 'white',
                }}
              >
                Book
              </Text>
          </View>
        </TouchableOpacity>
      </View>
        ) : null }
        {shouldShow2 ? 
          (
          <><View name='gcashReminder' style={styles.gcashReminderShape}>
            <View style={styles.gcashReminderContainer}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight:'bold',
              }}
              >
                Gcash Reminder
              </Text>
            </View>
            <View style={styles.gcashContent}>
              <View style={styles.circle}>
              </View>
              <Text>
                Please wait the laundry personel to confirm the total  {'\n'}amount before sending the payment
              </Text>
            </View>
            <View style={styles.gcashContent}>
              <View style={styles.circle}>
              </View>
              <Text>
                Message the screenshot of Gcash reciept before the {'\n'}delivery schedule
              </Text>
            </View>
            <View>
              <Image source={qr1} style={styles.qrLogo} />
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <View style={styles.bookButton}>
              <Text style={{
                fontSize:25,
                fontWeight:'bold',
                color: 'white',
                }}
              >
                Book
              </Text>
          </View>
        </TouchableOpacity>
          </View>
         
            </> 
      ): null }
        
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({
  header: {
    
    alignItems: 'center',
    marginTop: 20,
  },
  shapeContainer: {
    
    height:350,
    width: '95%',
    alignSelf:'center',
    backgroundColor: 'white',
    borderRadius:20,
  },
  pricingContainer: {
    margin: 30,
  },
  servicesText: {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  paymentShape:{
    
    alignSelf:'center',
    height:175,
    width:'95%',
    backgroundColor:'white',
    margin:20,
    borderRadius:20,
  },
  paymentContainer:{
    margin:20,
  },
  logoContainer: {
    height:100,
    width: '95%',
    flexDirection:'row',
    marginTop:10,
    justifyContent:'space-around',
  },
  cashOnDelivery:{
    height:75,
    width:75,
    backgroundColor: 'blue',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  gcashLogo: {
    height:75,
    width: 75,
  },
  codReminderShape:{
    height:250,
    width:'95%',
    alignSelf:'center',
    backgroundColor:'white',
    marginBottom:20,
    borderRadius:20,
  },
  codReminderContainer: {
    margin:15,
  },
  cashInputShape: {
    marginTop:30,
    marginBottom:10,
    height:40,
    width:300,
    borderRadius:15,
    backgroundColor:'#F6F6F6',
    alignSelf:'center',
    alignContent:'center'
  },
  gcashReminderShape: {
  
    height:550,
    width:'95%',
    backgroundColor:'white',
    alignSelf:'center',
    borderRadius:20,
    marginBottom:20
  },
  gcashReminderContainer: {
    margin:15,
  },
  gcashContent: {
    flexDirection: 'row',
    margin:5
  },
  circle: {
    left:10,
    height:30,
    width:30,
    backgroundColor:'#01BCE4',
    borderRadius: 15,
    marginRight:15,
  },
  qrLogo: { 
    marginTop:10,
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius:20,
  },
  bookButton:{
    backgroundColor: '#01BCE4',
    borderRadius: 20,
    height: 60,
    width:'95%',
    alignItems:'center',
    alignContent:'center',
    justifyContent: 'center',
    marginBottom:20,
    alignSelf:'center',
  },
  

}
)
export default Shop1CheckOut;