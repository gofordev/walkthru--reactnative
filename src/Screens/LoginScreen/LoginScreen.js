import React, { Component } from 'react';
import { View, Image, ImageBackground, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={styles.Container}>

      {/* backgroundImage */}
      <ImageBackground source={require('../../images/BG.png')} style={styles.backgroundimgStyle}>
        <StatusBar translucent backgroundColor="#241912" barStyle="light-content" />

        {/* main logo on top screen */}
        <Image source={require('../../images/logo.png')}
          style={{ width: moderateScale(70), height: moderateScale(70), marginTop: moderateScale(30) }} />
        {/* ----------------------- */}

        <Text style={styles.welStyle}> Welcome</Text>

        {/* UserInput Container */}
        <View style={styles.InputContainer}>
          <Image source={require('../../images/user.png')} 
          style={{ width: moderateScale(20), height: moderateScale(20) }}
          resizeMode='center' />
          <TextInput placeholder='User name'
            placeholderTextColor='white'
            fontSize={22}
            style={styles.inputstyle}></TextInput>
        </View>
        {/* ----------------------------------------- */}

        {/* PasswordInput Container */}
        <View style={styles.InputContainer}>
          <Image source={require('../../images/password.png')} 
          style={{ width: moderateScale(20), height: moderateScale(20) }}
          resizeMode='center' />
          <TextInput placeholder='Password'
            placeholderTextColor='white'
            fontSize={22}
            secureTextEntry
            style={styles.inputstyle}></TextInput>
        </View>
        {/* --------------------------------------------- */}

        {/* Login Button Design */}
        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.navigate('Home')} style={{ marginTop: moderateScale(30) }} >
          <View style={styles.buttonView}>
            <Text style={[styles.welStyle, { fontSize: 25, marginTop: 0,fontWeight:'bold' }]}> Log In</Text>
          </View>
        </TouchableOpacity>
        {/* ---------------------------------------- */}

        {/* Forgot Password Container */}
        <TouchableOpacity style={{ marginTop: moderateScale(15),marginLeft: moderateScale(175) }}>
          <Text style={[styles.welStyle,
          { fontSize: 15, marginTop: 0,fontStyle:'italic' }]}> forgot password ?</Text>
        </TouchableOpacity>
        {/* ------------------------------------------ */}

        {/* New User and Register Container */}
        <View style={styles.userRegisterContainer}><Text style={[styles.welStyle,
          { fontSize: 22, marginTop: 0 }]}> New User ? </Text>
           <TouchableOpacity >
          <Text style={[styles.welStyle,
          { fontSize: 22, marginTop: 0,fontStyle:'italic' }]}>Register here</Text>
        </TouchableOpacity>
          </View>
       
        {/* ------------------------------------------ */}
      </ImageBackground>
    </View>
  }
}
const styles = ScaledSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundimgStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welStyle: {
    fontSize: '35@ms',
    color: 'white',
    marginTop: '20@ms'
  },
  InputContainer: {
    height: '50@ms',
    width: '300@ms',
    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
    marginTop: '25@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  inputstyle: {
    marginLeft: '10@ms',
    height: '50@ms',
    width: '250@ms',
    backgroundColor: 'transparent',
    color:'white'
  },
  buttonView: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: '50@ms',
    width: '300@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5@ms'
  },
  userRegisterContainer:{
    flexDirection:'row',
    marginTop: '50@ms'
  }

})
