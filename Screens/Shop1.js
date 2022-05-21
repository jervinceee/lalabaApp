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
import branch1 from '../assets/image/branch1.png'

const Shop1 = ({navigation}) => {
    return (
        <ScrollView style={{backgroundColor: 'powderblue'}}>
            <View>
                <Text style={{
                    color: 'black',
                    fontSize: 50,
                }}>
                    Laundry Shop 1
                </Text>
                <View style={styles.imgContainer}>
                    <Image style={styles.img} source={branch1}/>
                </View>
                <View style={styles.textContainer}>
                    <Text numberOfLines={50} style={{
                        fontSize: 25,
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>

                    <Text>
                        {"\n"}incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer. Fusce ut placerat orci nulla pellentesque dignissim. Augue lacus viverra vitae congue eu consequat ac felis. Auctor augue mauris augue neque gravida in. Volutpat est velit egestas dui id ornare arcu. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Sit amet dictum sit amet justo donec enim diam vulputate. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi quis hendrerit dolor magna eget est lorem ipsum.

                        Augue interdum velit euismod in pellentesque massa placerat duis ultricies. 
                    </Text>
                    <Text numberOfLines={50} style={{
                        fontSize: 25,
                        
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    </Text>

                    <Text>
                        {"\n"}incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer. Fusce ut placerat orci nulla pellentesque dignissim. Augue lacus viverra vitae congue eu consequat ac felis. Auctor augue mauris augue neque gravida in. Volutpat est velit egestas dui id ornare arcu. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Sit amet dictum sit amet justo donec enim diam vulputate. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Mi quis hendrerit dolor magna eget est lorem ipsum.

                        Augue interdum velit euismod in pellentesque massa placerat duis ultricies. {"\n"}
                        {"\n"}
                    </Text>

                </View>
                <View style={[{ 
                    width: "100%",
                     }]}>
                
                    <Button
                        fontSize="100"
                        color="blue"
                        title="Book"
                        onPress={() => navigation.navigate('Shop1Menu')}
                    />
                </View>
               
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    imgContainer:{
        flex:1,
        justifyContent:'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent:'center',
        

    },
    img: {
       
        width: 300,
        height: 300
    },
    textContainer: {
        marginHorizontal: 15,
    }

})
export default Shop1;