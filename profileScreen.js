import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default class ProfileScreen extends React.Component{
  render(){
    return(
      <View style = {{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text> Create Story</Text>
      </View>
    )
  }
}