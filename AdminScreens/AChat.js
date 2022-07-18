import React from 'react';
import { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    Button,
    Dimensions,
} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const AChat = ({navigation}) => { 
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
  return (
    <View style={styles.container}>
    <Text style={{
        color: 'black',
        fontSize: 25,
        }}>
        This is Chat
    </Text>
    <Button title="Home"
            onPress={() => navigation.navigate('AHome')}
    />
</View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    alignContent:'center',
    backgroundColor: 'powderblue',
},

})
export default AChat;