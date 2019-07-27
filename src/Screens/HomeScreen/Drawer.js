import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
import OffCanvasReveal from '../../Components/offcanvasReveal';
import HomeScreen from './HomeScreen'
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';


export default class OffCanvasMenu extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false
    }
  }

  handleMenu() {
    const { menuOpen } = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }

  render() {
    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="#222222"
        animated={true}
      />
      : null

    return (
      <View style={{ flex: 1 }}>

        {statusBar}

        <OffCanvasReveal
          active={this.state.menuOpen}
          onMenuPress={this.handleMenu.bind(this)}
          backgroundColor={'#222222'}
          menuTextStyles={{ color: 'white' }}
          handleBackPress={true}
          menuItems={[{
            title: '',
            icon: <View style={styles.profileStyle}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
              <Image source={require('../../images/image.png')} style={styles.userImage} />
              </TouchableOpacity>
              <Text style={styles.userName}>John Smith</Text>
              <View style={{flexDirection:'row',paddingLeft:moderateScale(45), paddingBottom:moderateScale(25)}}>
              <Image resizeMode='stretch' source={require('../../images/total_earnings.png')} style={styles.iconStyle} />
              <Text style={styles.menuItems}>Total Earnings</Text>
              </View>
              <View style={{flexDirection:'row',paddingLeft:moderateScale(45)}}>
              <Image resizeMode='stretch' source={require('../../images/saved_ads.png')} style={styles.iconStyle} />
              <Text style={styles.menuItems}>Saved Ads</Text>
              </View>
              
            </View>,
            renderScene: <HomeScreen {...this.props} handleMenu={this.handleMenu.bind(this)} />
          }]} />

      </View>
    )
  }
}

const styles = ScaledSheet.create({
  profileStyle: {
    marginTop: '20@ms',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '65%'
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
    height: '140@s',
    width: '140@s',
    borderRadius: '70@s',
    alignSelf: 'center'
  },
  iconStyle: {
    height: '14@s',
    width: '14@s',
    resizeMode: 'stretch',
    justifyContent: 'center', 
    alignSelf: 'center',
    
  }
})