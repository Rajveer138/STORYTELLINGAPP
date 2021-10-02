import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Platform,StatusBar,Image } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import StoryCard from './storyCard.js'
import {RFValue} from 'react-native-responsive-fontsize'
import {FlatList} from 'react-native-gesture-handler'
var stories = require("./temp_stories.json")
let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
}


export default class Feed extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded:false,
    }
  }
  
  async loadFonts(){
    await Font.loadAsync(customFonts)
    this.setState({
      fontsLoaded:true,
    })
  }
  componentDidMount(){
    this.loadFonts()
  }
  renderItem=({item:story})=>{
    return <StoryCard story = {story}></StoryCard>
  }

  render(){
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }
    else{
    return(
      <View style = {styles.container}>
        <SafeAreaView style = {styles.androidSafeArea} />
        <View style = {styles.appTitle}>
          <View style = {styles.appIcon}>
            <Image style = {styles.iconImage}
            source = {require("../assets/logo.png")}>

            </Image>

          </View>
          <View style = {styles.appTitleTextContainer}>
            <Text style = {styles.appTitleText}>StoryTellingApp</Text>
          </View>
        </View>
        <View style = {styles.cardContaier}>
          <FlatList data = {stories} keyExtractor={(item,index)=>index.toString()} renderItem={this.renderItem}></FlatList>
        </View>
      </View>
      
    )
  }
  }
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appTitle: {
    flex: 0.07,
    flexDirection: "row"
  },
  appIcon: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(28),
    fontFamily: "Bubblegum-Sans"
  },
  cardContainer: {
    flex: 0.85
  }
});
