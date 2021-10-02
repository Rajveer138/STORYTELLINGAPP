import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {createDrawerNavigator} from '@react-navigation/drawer'
import ProfileScreen from '../screens/profileScreen'
import BottomTabNavigator from './tabNavigator'

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component = {BottomTabNavigator}/> 
            <Drawer.Screen name = "Profile" component = {ProfileScreen}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator
