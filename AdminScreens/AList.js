import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

//firebase
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { db, auth } from '../core/config'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

 const AList = ({navigation}) => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  const [orders, setOrders] = React.useState([]);
  const [dates, setDates] = React.useState([])
  const shopCollectionReference = collection(db, 'shop1orders');

  React.useEffect(()=>{
    const getOrders = async () =>{
      let item = [];
      let snapshot = await getDocs(shopCollectionReference)
      snapshot.forEach((doc) => {
          let data = doc.data();
          
          if(data.status == 'Done'){
            item.push(
                { 
                    ...data, id: doc.id
                }
            );
          }
      });

      setOrders(item)
    }

    getOrders();
  },[])

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={{fontSize:40, fontWeight:'bold', marginBottom:20}}>ORDERS</Text>
      <View style={styles.notDoneContainer}>
      <Text style={styles.containerText}>Scheduled: </Text>
          {/* Nothing to see here... */}
          {orders.map((order, index)=>{
              var minutesRetrieve = new Date(order.retrieveDate.seconds * 1000).getMinutes()
              var minutesReceive = new Date(order.receiveDate.seconds * 1000).getMinutes()
              return(
                  <View key={`v6${order.id}`}  style={{ marginVertical: 8 ,padding: 8, width: '100%', backgroundColor: '#7F8487'}}>
                  <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    
                    <AntDesign name="calendar" size={30} color="white" />
                    <Text key={`t6${order.id}`}  style={{color: 'white', fontSize: 15}}>
                        { months[new Date(order.receiveDate.seconds * 1000).getMonth()] + " " +
                              new Date(order.receiveDate.seconds * 1000).getDate() + ", " +
                              new Date(order.receiveDate.seconds * 1000).getFullYear() + " at " + 
                              new Date(order.receiveDate.seconds * 1000).getHours() + ":"  }{
                                
                            minutesReceive <=9 ? "0"+minutesReceive: minutesReceive
                              }
                    </Text>
                  </View>
                  <Text key={`t8${order.id}`}  style={{color: 'white', fontSize: 15, textAlign: 'center', marginTop: 8}}>
                      {`PHP ${order.totalCost}, ${order.modeOfPayment.toUpperCase()}, ${order.receiveMethod}`}
                  </Text>
                </View>
              )
          })}
      </View>
      
</View>
</ScrollView> 
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'white',
      paddingTop:40,
  },
  listText: {
    color: 'black',
    fontSize: 25,
  },
  notDoneContainer:{
    width:'90%',
    backgroundColor:'#f6f6f6',
    padding:20,
    borderRadius:20,
    marginBottom:20
  },
  containerText:{
    fontSize:25,
    fontWeight:'bold'
  },  
  orderContainer:{
    display:'flex',
    marginVertical:20
  },
  methodText:{
    textAlign:'center',
    color:'white',
    backgroundColor:'#01BCE4',
    width:'20%',
    padding:5,
    borderRadius:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  dateContainer:{
    width:'80%',
    height:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    marginVertical:5,
    backgroundColor:'#01BCE4',
    paddingLeft:20,
    paddingVertical:10,
    alignSelf:'center',
    borderRadius:10
  },
  dateText:{
    marginLeft:20,
    color:'white'
  }
})

  export default AList;