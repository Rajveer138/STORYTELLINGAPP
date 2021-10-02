import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView,Platform,StatusBar,Image, ScrollView } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import DropDownPicker from 'react-native-dropdown-picker'
import {RFValue} from 'react-native-responsive-fontsize'


let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
}


export default class CreateStory extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fontsLoaded:false,
      previewImage:"image_1", 
      dropDownHeight :40,
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
  render(){
    if(!this.state.fontsLoaded){
      return <AppLoading/>
    }else{
      var previewImage_images = {
        "image_1":require("../assets/story_image_1.png"),
        "image_2":require("../assets/story_image_2.png"),
        "image_3":require("../assets/story_image_3.png"),
        "image_4":require("../assets/story_image_4.png"),
        "image_5":require("../assets/story_image_5.png"),
      }
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
            <Text style = {styles.appTitleText}>New story</Text>
          </View>
        </View>
        <View style = {styles.fieldsContainer}><ScrollView>
          <Image style = {styles.previewImage}>source={previewImage_images[this.state.previewImage]}</Image>
          <View style = {{height:RFValue(this.state.dropDownHeight)}}>
            <DropDownPicker items = {[{label:"image_1",value:"image_1"},
          {label:"image_2",value:"image_2"},
          {label:"image_3",value:"image_3"},
          {label:"image_4",value:"image_4"},
          {label:"image_5",value:"image_5"}]}
          
          defaultValue = {this.state.previewImage}
          containerStyle={{height:40,borderRadius:20,marginBottom:10,}}
          onOpen={()=>this.setState({
            dropDownHeight :170,
          })}
          onClose={()=>this.setState({
            dropDownHeight :40,
          })}
          arrowStyle = {{color:"white",fontFamily:"Bubblegum-Sans"}}
          
          style={{backgroundColor:"transparent"}}
          itemStyle = {{justifyContent:"flex-start"}}
          dropDownStyle={{ backgroundColor: "#2f345d" }} 
          labelStyle={{ color: "white", fontFamily: "Bubblegum-Sans" }}
          onChangeItem = {item=>this.setState({
            previewImage:item.value,
          })}>
         

            
            </DropDownPicker>
            </View>
            <TextInput style= {styles.inputFont} placeholder ={"title"} onChangeText = {title=>this.setState({
              title
            })} />
             <TextInput style= {[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]} placeholder ={"description"} onChangeText = {description=>this.setState({
              description
            })}multiline={true} numberOfLines = {4}/>
              <TextInput style= {[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]} placeholder ={"story"} onChangeText = {story=>this.setState({
              story
            })}multiline={true} numberOfLines = {20}/>
             <TextInput style= {[styles.inputFont, styles.inputFontExtra, styles.inputTextBig]} placeholder ={"moral of the story"} onChangeText = {moral=>this.setState({
              moral
            })}multiline={true} numberOfLines = {4}/>
          </ScrollView></View>
          <View style = {{flex:0.08}}></View>
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
  fieldsContainer: {
    flex: 0.85
  },
  previewImage: {
    width: "93%",
    height: RFValue(250),
    alignSelf: "center",
    borderRadius: RFValue(10),
    marginVertical: RFValue(10),
    resizeMode: "contain"
  },
  inputFont: {
    height: RFValue(40),
    borderColor: "white",
    borderWidth: RFValue(1),
    borderRadius: RFValue(10),
    paddingLeft: RFValue(10),
    color: "white",
    fontFamily: "Bubblegum-Sans"
  },
  inputFontExtra: {
    marginTop: RFValue(15)
  },
  inputTextBig: {
    textAlignVertical: "top",
    padding: RFValue(5)
  }
});
