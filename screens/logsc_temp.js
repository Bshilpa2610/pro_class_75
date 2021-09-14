//to create login screen file
import React from 'react';
import {View,Text,StyleSheet,Image,TextInput,TouchableOpacity,Alert,KeyboardAvoidingView} from 'react-native';

export default class LoginScreen extends React.Component {
    render(){
        return(
            <View>
            <Text> Login Screen </Text>
            </View>
        )
   
        }   
        }


        const styles = StyleSheet.create({
            loginBox:
            {
              width: 300,
            height: 40,
            borderWidth: 1.5,
            fontSize: 20,
            margin:10,
            paddingLeft:10
            }
          })      


// in App.js  import switch navigator and import login screen
//create switch navigator and 
import { createAppContainer,createSwitchNavigator } from 'react-navigation';

import LoginScreen from './screens/Loginscreen';

const switchNavigator=createSwitchNavigator({
    LoginScreen:(screen: LoginScreen),
    TabNavigator:(screen: TabNavigator)
  })
  
  const AppContainer =  createAppContainer(switchNavigator);


// book image , wily text, two text input box, one button

<KeyboardAvoidingView style = {{alignItems:'center',marginTop:20}}>
<View>
<Image
  source={require("../assets/booklogo.jpg")}
  style={{width:200, height: 200}}/>
<Text style={{textAlign: 'center', fontSize: 30}}>Wily</Text>
</View>

<View>
<TextInput
style={styles.loginBox}
placeholder="abc@example.com"
keyboardType ='email-address'
onChangeText={(text)=>{
  this.setState({
    emailId: text
  })
}}
/>

<TextInput
style={styles.loginBox}
secureTextEntry = {true}
placeholder="enter Password"
onChangeText={(text)=>{
  this.setState({
    password: text
  })
}}
/>
</View>

<View>
          <TouchableOpacity style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7}}
          onPress={()=>{this.login(this.state.emailId ,this.state.password)}}>
            <Text style={{textAlign:'center'}}>Login</Text>
          </TouchableOpacity>

        </View>

     </KeyboardAvoidingView>

     // on press of login button , we are going to authenticate emailid - password

     login=async(email,password)=>{
        if (email && password){
          try{
            const response = await firebase.auth().signInWithEmailAndPassword(email,password)
            if(response){
              this.props.navigation.navigate('Transaction')
            }
          }


          catch(error){
            switch (error.code) {
              case 'auth/user-not-found':
                Alert.alert("user dosen't exists")
                console.log("doesn't exist")
                break
              case 'auth/invalid-email':
                Alert.alert('incorrect email or password')
                console.log('invaild')
                break
            }
          }

          
        }
        else{
            Alert.alert('enter email and password');
        }
      }



