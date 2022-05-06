import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Settings from './Settings';




export default function DetailsScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
    <Button
      title="go to Settings"
      onPress={() => navigation.navigate('Settings')}

    />
  </View>
);
}
