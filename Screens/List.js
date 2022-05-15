import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';


 const List = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Text style={{
        color: 'black',
        fontSize: 25,
        }}>
        This is List
    </Text>
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

  export default List;