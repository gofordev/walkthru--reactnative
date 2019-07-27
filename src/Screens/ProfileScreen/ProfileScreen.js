import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';
import ImagewithBadge from './ImagewithBadge';

export default class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }

  navHomePage = () => {
    this.props.navigation.navigate('Home')
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#241912" barStyle="light-content" />

        <ImageBackground
          source={require('../../images/BG.png')}
          style={styles.backgroundimgStyle}>
          <TouchableOpacity
            onPress={() => this.navHomePage()}
            style={styles.backArrow}>
            <Icon name="md-arrow-round-back" size={25} color='white' />
          </TouchableOpacity>
          <ImagewithBadge
            imageWidth={scale(200)}
            badgeWidth={scale(45)} />

          <View style={styles.InputContainer}>
            <TextInput
              placeholder='John Smith'
              placeholderTextColor='white'
              style={styles.inputstyle} />
          </View>
          <View style={styles.InputContainer}>
            <TextInput
              placeholder='johnsmith@mail.com'
              placeholderTextColor='white'
              style={styles.inputstyle} />
          </View>
          <TouchableOpacity
            onPress={() => this.navHomePage()}
            activeOpacity={0.8}
            style={styles.buttonView} >
            <Text style={[styles.buttonLabel]}>Update</Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>

    );
  }
}


const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  userName: {
    color: '#fff',
    fontSize: '29@ms',
    alignSelf: 'center',
    paddingBottom: '25@ms',

  },
  menuItems: {
    color: '#fff',
    fontSize: '16@ms',
    paddingLeft: '20@ms',
  },
  userImage: {
    height: '160@s',
    width: '160@s',
    borderRadius: '80@s',

  },
  iconStyle: {
    height: '14@s',
    width: '14@s',
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignSelf: 'center',

  },
  backgroundimgStyle: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },
  inputstyle: {
    marginLeft: '10@ms',
    height: '50@ms',
    width: '250@ms',
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: '22@ms'
  },
  InputContainer: {
    height: '40@ms',
    width: '80%',
    borderBottomColor: 'white',
    borderBottomWidth: 1.5,
    marginTop: '25@ms',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  buttonView: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    height: '50@ms',
    width: '300@ms',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5@ms',
    marginTop: '30@ms',
  },
  buttonLabel: {
    fontSize: '25@ms',
    color: 'white',
    fontWeight: 'bold'
  },
  backArrow: {
    position: 'absolute',
    left: 20,
    top: 20
  }
})