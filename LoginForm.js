import React from 'react'
import {View,Text,StyleSheet,Image,Alert,TouchableOpacity,KeyboardAvoidingView} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import * as firebase from 'firebase'
export default class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            emailID : '',
            password : '',

        }

    }
   /* login  = async(email,password) =>{
      if(email && password){
          try{
              const response = await firebase.auth().signInWithEmailAndPassword(email,password)
              if(response){
                  this.props.navigation.navigate('transaction')

              }
          }
          catch(error){
              switch(error.code){
                  case 'auth/user-not-found': 
                  Alert.alert("User doesn't exist")
                  console.log('doesnt exist')
                  break

                  case 'auth/invalid-email':
                      Alert.alert("incorrect email or password")
                      console.log("invalid")
                      break
              }
          else{
          Alert.alert("Enter emailID and password")
      }
    }
            }
      }*/

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

     
    render(){
        return(
                <KeyboardAvoidingView style = {{alignItems :'center', marginTop: 20}}>
                   <View>
                  
                   <Image source = {require('../assets/booklogo.jpg')}
                   style = {{ width : 200,height : 200}}/>
                   
                   <Text style = {{textAlign : 'center', fontSize:30}}>  Wily  </Text>
                   </View>
                   <View>
                       <TextInput style = {styles.loginBox} 
                       placeholder = "ABC@example.com"
                      keyboardType = 'email-address'
                      onChangeText = {(text) =>{
                          this.setState = ({
                              emailID : text
                          })
                      }}/>
                           <TextInput style = {styles.loginBox} 
                       secureTextEntry = {true}
                       placeholder = "Enter Passord"
                     
                      onChangeText = {(text) =>{
                          this.setState = ({
                              password  : text
                          })
                      }}/>
                      
                   </View>
                   <View>
                       <TouchableOpacity style = {{height:30,width:90,borderWidth:1,marginTop:1,paddingTop:5,borderRadius:7}}
                       onPress = {()=>{this.login(this.state.emailID,this.state.password)}} >
                         <Text style = {{textAlign:'center'}}>Login</Text>
                       </TouchableOpacity>
                   </View>
                   <Text style = {styles.loginBox}> Login Screen </Text>
                </KeyboardAvoidingView>
               
         
        )
    }
}


const styles = StyleSheet.create({
    loginBox:{
        width: 300,
        height:40,
        borderWidth : 1.5,
        fontSize: 20,
        marginTop:100,
        margin: 10,
        padding: 5,
    }
})

















































































































































