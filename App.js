import * as React from 'react';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import DrawerNavigator from './navigations/drawerNavigator'


export default function App() {
  return (
     <NavigationContainer>
       <DrawerNavigator/>
     </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
