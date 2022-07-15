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
import { JumpingTransition } from 'react-native-reanimated';
import Gcash from '../assets/icons/Gcash.png';
import qr1 from '../assets/image/qr1.png';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const SummarySales = ({navigation}) => {
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
    <ScrollView style={{backgroundColor:'white',marginTop:45}}>
      <View style={{ alignItems:'center'}}>
        <Text style={{
            fontSize:45,
            color:'black',}}>
            Daily Sales
        </Text>
      </View>
      <View style={styles.dailySalesShape}>
            <View style={styles.dailySalesContainer}>
                <View style={styles.timeAndDate}>
                    <Text style={{
                            fontSize:20
                        }}>
                    JULY 16 2022
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                    5:30 AM
                    </Text>
                </View>
                <View style={styles.servicesRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Services
                        </Text>
                    </View>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Quantity
                        </Text>
                    </View>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Sales
                        </Text>
                    </View>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            WDF
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        11
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 2090
                    </Text>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Dry Clean
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        11
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 2090
                    </Text>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Beddings
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        11
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 2090
                    </Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={{
                        fontSize:30,
                        left:20
                    }}>
                        Total
                    </Text>
                    <Text style={{
                        fontSize:30,
                        left:40
                    }}>
                        21
                    </Text>
                    <Text style={{
                        fontSize:30,
                        left:15
                    }}>
                        Php 5290
                    </Text>
                </View>

            </View>

      </View>
      <View style={{ alignItems:'center'}}>
        <Text style={{
            fontSize:45,
            color:'black',}}>
            Monthly Sales
        </Text>
      </View>
      <View style={styles.dailySalesShape}>
            <View style={styles.dailySalesContainer}>
                <View style={styles.timeAndDate}>
                    <Text style={{
                            fontSize:20
                        }}>
                    June
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                    5:30 AM
                    </Text>
                </View>
                <View style={styles.servicesRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Services
                        </Text>
                    </View>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Quantity
                        </Text>
                    </View>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Sales
                        </Text>
                    </View>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            WDF
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        110
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 20900
                    </Text>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Dry Clean
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        110
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 20900
                    </Text>
                </View>
                <View style={styles.washRow}>
                    <View style={styles.tagShapes}>
                        <Text style={{
                            fontSize:20
                        }}>
                            Beddings
                        </Text>
                    </View>
                    <Text style={{
                            fontSize:20
                        }}>
                        110
                    </Text>
                    <Text style={{
                            fontSize:20
                        }}>
                        Php 20900
                    </Text>
                </View>
                <View style={styles.totalRow}>
                    <Text style={{
                        fontSize:30,
                        left:20
                    }}>
                        Total
                    </Text>
                    <Text style={{
                        fontSize:30,
                        left:40
                    }}>
                        210
                    </Text>
                    <Text style={{
                        fontSize:30,
                        left:15
                    }}>
                        Php 52900
                    </Text>
                </View>

            </View>

      </View>
        
    </ScrollView>
    
  )
}

const styles = StyleSheet.create({

 dailySalesShape: {
    height:350,
    width:'90%',
    backgroundColor:'#f6f6f6',
    alignSelf:'center',
    borderRadius:20,
    margin:10
 },
 dailySalesContainer: {
    margin:10
 },
 timeAndDate: {
    flexDirection:'row',
    justifyContent:'space-around',
    margin:5
},
tagShapes: {
    backgroundColor:'#01BCE4',
    borderRadius:10,
    margin:10,
    height:30,
    width:85,
    justifyContent:'center',
    alignItems:'center'
},
 servicesRow: {
    flexDirection:'row',
    justifyContent:'space-around',
    margin:10
 },
 washRow: {
    flexDirection:'row',
    justifyContent:'space-around',
 },
 totalRow: {
    flexDirection:'row',
    justifyContent:'space-around',
    
 },
}
)
export default SummarySales;