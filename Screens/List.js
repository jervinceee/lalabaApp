
import React from 'react'
import {
    View,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

//firebase
import { collection, getDocs, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { db, auth, } from '../core/config'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

 const List = ({navigation}) => {
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

  var loggedInId = auth.currentUser.uid;
  const user = doc(db, "users", loggedInId)

  const shopCollectionReference = collection(db, 'shop1orders');

  const goHome =()=>{
    
    navigation.navigate("Home");
  }

  const deleteSchedule =async(ind)=>{
    console.log(orders[ind].id)
    await deleteDoc(doc(db, "shop1orders", orders[ind].id));
    
    setOrders([
      ...orders.slice(0, ind),
      ...orders.slice(ind + 1)
    ]);

  }
  
  const isFocused = useIsFocused();

  React.useEffect(async()=>{

    let email = ''
    getDoc(user).then((snapshot)=>{
      if(snapshot.exists){
        email = snapshot.data().email
      }else{
        console.log("NO DOC FOUND!")
      }
    })

    let item = [];
    let done = [];
    let snapshot = await getDocs(shopCollectionReference)
    snapshot.forEach((doc) => {
        let data = doc.data();
        
        if(data.orderby === email){
          if(data.status == 'Done'){
            done.push(
                { 
                    ...data, id: doc.id
                }
            );
          }
          else{
            item.push(
                { 
                    ...data, id: doc.id
                }
            );
          }
        }
    });

    let sorted = item.sort((a,b)=>{
      const dateA = new Date(a.receiveDate.toDate()).valueOf();
      const dateB = new Date(b.receiveDate.toDate()).valueOf();
      if(dateA > dateB){
        return 1; // return -1 here for DESC order
      }
      return -1 // return 1 here for DESC Order
    });

    for(let i=0; i < done.length; i++){
      sorted.push(done[i]);
    }
      
    setOrders(sorted);
    
  },[isFocused])

  const RenderDeleteButton =({status, ind})=>{
    if(status == 'Pending'){
      return <TouchableOpacity 
        style={{ borderRadius: 5, backgroundColor:'red', paddingHorizontal: 20, paddingVertical: 10, display: 'flex', alignItems:'center', justifyContent:'center', flexDirection: 'row'}}
        onPress={()=>deleteSchedule(ind)}    
      >
          <AntDesign name="delete" size={30} color="white"/>
          <Text style={{color: 'white', marginLeft: 8}}> Delete Schedule </Text>
      </TouchableOpacity>
    }

    return null
  }

  const RenderSchedule =({order, index})=>{
    var minutesRetrieve = new Date(order.retrieveDate.seconds * 1000).getMinutes()
    var minutesReceive = new Date(order.receiveDate.seconds * 1000).getMinutes()
    
    if(order.status == 'Done'){
      return <View key={`v6${order.id}`}  style={{ marginVertical: 8, padding: 8, width: '100%', backgroundColor: '#7F8487'}}>
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
    }
    else{
      return <View key={`v1${order.id}`} style={styles.orderContainer}>
          <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text key={`t1${order.id}`} style={styles.methodText}>{order.retrieveMethod}</Text>
            <Text key={`t5${order.id}`} style={ order.status == 'Pending' ? styles.pendingText : order.status == 'Accepted' ? styles.acceptedText : styles.deletedText  }>{order.status}</Text>
          </View>
          <View key={`v2${order.id}`} style={styles.dateContainer}>
              <AntDesign name="calendar" size={30} color="white" />
              <Text key={`t2${order.id}`} style={styles.dateText}>{
                  months[new Date(order.retrieveDate.seconds * 1000).getMonth()] + " " +
                  new Date(order.retrieveDate.seconds * 1000).getDate() + ", " +
                  new Date(order.retrieveDate.seconds * 1000).getFullYear() + " at " + 
                  new Date(order.retrieveDate.seconds * 1000).getHours() + ":"  
              }{
                minutesRetrieve <=9 ? "0" + minutesRetrieve: minutesRetrieve
              }</Text>
          </View>

          <Text key={`t3${order.id}`} style={styles.methodText}>{order.receiveMethod}</Text>

          <View key={`v3${order.id}`} style={styles.dateContainer}>
              <AntDesign name="calendar" size={30} color="white" />
              <Text key={`t4${order.id}`} style={styles.dateText}>{
                  months[new Date(order.receiveDate.seconds * 1000).getMonth()] + " " +
                  new Date(order.receiveDate.seconds * 1000).getDate() + ", " +
                  new Date(order.receiveDate.seconds * 1000).getFullYear() + " at " + 
                  new Date(order.receiveDate.seconds * 1000).getHours() + ":"  
              }{
                minutesReceive <=9 ? "0"+minutesReceive: minutesReceive
              }</Text>
          </View>
          
        <RenderDeleteButton status={order.status} ind={index}/>
      </View>
    }
  }

  return (
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={{fontSize:40, fontWeight:'bold', marginBottom:20}}>ORDERS</Text>
      <View style={styles.notDoneContainer}>
      <Text style={styles.containerText}>Scheduled: </Text>
          {/* Nothing to see here... */}
<<<<<<< HEAD
          {orders.filter(name=>name.orderby === auth.currentUser.email).map((order, index)=>{
              var minutesRetrieve = new Date(order.retrieveDate.seconds * 1000).getMinutes()
              var minutesReceive = new Date(order.receiveDate.seconds * 1000).getMinutes()
              return(
                  <View key={`v1${order.id}`} style={styles.orderContainer}>
                      <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text key={`t1${order.id}`} style={styles.methodText}>{order.retrieveMethod}</Text>
                        <Text key={`t5${order.id}`} style={ order.status == 'Pending' ? styles.pendingText : order.status == 'Accepted' ? styles.acceptedText : styles.deletedText  }>{order.status}</Text>
                      </View>
                      <View key={`v2${order.id}`} style={styles.dateContainer}>
                          <AntDesign name="calendar" size={30} color="white" />
                          <Text key={`t2${order.id}`} style={styles.dateText}>{
                              months[new Date(order.retrieveDate.seconds * 1000).getMonth()] + " " +
                              new Date(order.retrieveDate.seconds * 1000).getDate() + ", " +
                              new Date(order.retrieveDate.seconds * 1000).getFullYear() + " at " + 
                              new Date(order.retrieveDate.seconds * 1000).getHours() + ":"  
                          }{
                            minutesRetrieve <=9 ? "0" + minutesRetrieve: minutesRetrieve
                          }</Text>
                      </View>

                      <Text key={`t3${order.id}`} style={styles.methodText}>{order.receiveMethod}</Text>

                      <View key={`v3${order.id}`} style={styles.dateContainer}>
                          <AntDesign name="calendar" size={30} color="white" />
                          <Text key={`t4${order.id}`} style={styles.dateText}>{
                              months[new Date(order.receiveDate.seconds * 1000).getMonth()] + " " +
                              new Date(order.receiveDate.seconds * 1000).getDate() + ", " +
                              new Date(order.receiveDate.seconds * 1000).getFullYear() + " at " + 
                              new Date(order.receiveDate.seconds * 1000).getHours() + ":"  
                          }{
                            minutesReceive <=9 ? "0"+minutesReceive: minutesReceive
                          }</Text>
                      </View>
                      <Text style={{fontSize:18, marginLeft:5, marginTop:5}}>Status: {order.status}</Text>
                      
                    <RenderDeleteButton status={order.status} ind={index}/>
                  </View>
=======
          {orders.map((order, index)=>{
              return(
                <RenderSchedule order={order} index={index}/>
>>>>>>> 0a25798dd99a65ed512794d327eaa97d97f857ba
              )
          })}
      </View>

      
      <TouchableOpacity 
        style={{ borderRadius: 5, backgroundColor:'green', paddingHorizontal: 20, paddingVertical: 10, display: 'flex', alignItems:'center', justifyContent:'center', flexDirection: 'row'}}
        onPress={()=>goHome()}    
      >
          <AntDesign name="home" size={30} color="white"/>
          <Text style={{color: 'white', marginLeft: 8}}>Home </Text>
      </TouchableOpacity>
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
      paddingBottom: 10,
  },
  listText: {
    color: 'black',
    fontSize: 25,
  },
  notDoneContainer:{
    width:'90%',
    backgroundColor:'#f6f6f6',
    paddingTop:20,
    paddingHorizontal:20,
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
    width:'25%',
    padding:5,
    borderRadius:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  pendingText:{
    textAlign:'center',
    color:'white',
    backgroundColor:'orange',
    width:'25%',
    padding:5,
    borderRadius:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  acceptedText:{
    textAlign:'center',
    color:'white',
    backgroundColor:'green',
    width:'25%',
    padding:5,
    borderRadius:5,
    marginLeft:10,
    fontWeight:'bold'
  },
  deletedText:{
    textAlign:'center',
    color:'white',
    backgroundColor:'red',
    width:'25%',
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

  export default List;