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
                  presyo
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
    height:310,
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
    height:200,
    width:'95%',
    backgroundColor:'powderblue',
    margin:10,
    borderRadius:20,
  },
  paymentContainer:{
    margin:15,

  },
}
)
export default Shop1CheckOut;