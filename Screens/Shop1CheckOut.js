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
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Gcash from '../assets/icons/Gcash.png';

const Shop1CheckOut = ({navigation}) => {
  return (
    <ScrollView>
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
              <View style={styles.cashOnDelivery}>
                <Text style={{
                    color:'white',
                    fontWeight:'800', 
                  }}
                >
                    Cash On Delivery
                </Text>
              </View>
                  <Image style={styles.img} source={Gcash}/>
            </View>
        </View>
      </View>
      <View style={styles.codReminderShape}>
        <View style={styles.codReminderContainer}>
          <Text style={{
            fontSize:20,
            color:'black',
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
          <View style={styles.cashInput}>
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
      </View>
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
    backgroundColor: 'red',
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
    height:175,
    width:'95%',
    backgroundColor:'powderblue',
    margin:10,
    borderRadius:20,
  },
  paymentContainer:{
    margin:15,
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
  img: {
    height:75,
    width: 75,
  },
  codReminderShape:{
    height:150,
    width:'95%',
    backgroundColor:'lightblue',
    margin:10,
    borderRadius:20,
  },
  codReminderContainer: {
    margin:15,
  },
  cashInput: {
    top:10,
    height:40,
    width:300,
    borderRadius:15,
    backgroundColor:'gray',
    alignSelf:'center',
    alignContent:'center'
  },

}
)
export default Shop1CheckOut;