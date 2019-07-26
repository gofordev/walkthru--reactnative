import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import OffCanvasReveal from '../../Components/offcanvasReveal';
import HomeScreen from './HomeScreen'
import { ScaledSheet } from 'react-native-size-matters';


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
            icon: <View style={styles.imageBackground}>
              <Image source={require('./image.png')} style={styles.userImage} />
              <Text style={styles.userName}>John Smith</Text>
              <Text style={styles.menuItems}><Image source={require('../../images/total_earnings.png')} style={styles.iconStyle} />{'   Total Earnings'}</Text>
              <Text style={styles.menuItems}><Image source={require('../../images/saved_ads.png')} style={styles.iconStyle} />{'   Saved Ads'}</Text>
            </View>,
            renderScene: <HomeScreen {...this.props} handleMenu={this.handleMenu.bind(this)} />
          }]} />

      </View>
    )
  }
}

const styles = ScaledSheet.create({
  imageBackground: {
    width: '100%',
    marginTop: '60@ms',
    justifyContent: 'center',
    alignItems: 'center',
    flex: .55
  },
  userName: {
    color: '#fff',
    fontSize: '25@ms',
    padding: '20@ms'
  },
  menuItems: {
    color: '#fff',
    fontSize: '18@ms',
    padding: '10@ms',
    width: 200,
    textAlign: 'left'
  },
  userImage: {
    height: '120@ms',
    width: '120@ms',
    borderRadius: '60@ms'
  },
  iconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  }
})