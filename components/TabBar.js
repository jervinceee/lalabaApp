//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TabBar = () => {
    return (
        <View style={styles.container}>
            <Text>TabBar</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#01BCE4',
    },
});

//make this component available to the app
export default TabBar;
