import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, FlatList, ScrollView, TouchableHighlight } from 'react-native';
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Icon } from 'native-base';
import Video from 'react-native-video';


export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pausedValue: false,
      data: [
        {
          video: "https://speed.animaker.com/assets/images/landing/videos/youtube-landing-video.mp4",
          title: 'Title of the Ad will be here',
          subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          activeHeart: false,
          count: 12,
        },
        {
          video: "https://speed.animaker.com/assets/images/landing/videos/youtube-landing-video.mp4",
          title: 'Title of the Ad will be here',
          subTitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
          activeHeart: false,
          count: 12,
        }
      ]
    };
  }



  activeHeart = (index) => {
    const { data } = this.state;
    data[index].activeHeart = !data[index].activeHeart;
    data[index].activeHeart ? data[index].count++ : data[index].count--

    this.setState({ data: [...data] });
  }

  renderItem(item, index) {
    const { navigation } = this.props;
    const playAgain = navigation.getParam('playAgain', false);
    return (
      <View style={{ flex: 1 }}>
        <Video source={{ uri: item.video }}
          ref={(ref) => {
            this.player = ref
          }}
          onBuffer={this.onBuffer}
          onError={this.videoError}
          resizeMode="stretch"
          paused={index !== 0 || playAgain}
          // Callback when video cannot be loaded
          onLoad={() => this.player.seek(3)}
          onEnd={() => this.props.navigation.navigate('Feedback')}
          style={{ flex: 1, height: 200, width: '100%' }} />
        <Text style={styles.titleStyles}>
          {item.title}
        </Text>
        <Text style={styles.subTitleStyles}>
          {item.subTitle}
        </Text>
        <View style={styles.cardFooter}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', paddingRight: moderateScale(25) }} >
              <Icon active
                type='Entypo'
                onPress={() => this.activeHeart(index)}
                style={[styles.headerIcon, { color: item.activeHeart ? '#241912' : null }]}
                name={item.activeHeart ? "heart" : "heart-outlined"}
              />
              <Text style={styles.heartCount}>{item.count}</Text>
            </View>
            <Icon type='EvilIcons' disabled style={styles.footerIcon} name="external-link" />
          </View>
          <Icon type='Entypo' disabled style={styles.footerIcon} name='forward' />
        </View>
        <View style={{ backgroundColor: '#241912', height: moderateScale(15) }} />
      </View>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#241912" barStyle="light-content" />
        <View style={styles.headerStyles}>
          <TouchableHighlight
            underlayColor={'rgba(255,255,255,0.1)'}
            onPress={() => this.props.handleMenu()}
            style={styles.skipButton}>
            <Icon name='menu' style={styles.headerIcon} />
          </TouchableHighlight>
          <TouchableOpacity activeOpacity={1} >
            <Image
              style={styles.logoStyles}
              source={require('../../images/logo.png')}
            />
          </TouchableOpacity>
          <Icon disabled type="Entypo" name="dots-three-vertical" style={styles.headerIcon} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff', flexGrow: 1 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item, index }) => this.renderItem(item, index)}
          />
        </ScrollView>

      </View>
    );
  }
}

const styles = ScaledSheet.create({
  headerStyles: {
    paddingHorizontal: '10@ms',
    backgroundColor: '#241912',
    height: '60@vs',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  headerIcon: {
    color: '#fff',
    fontSize: '25@ms'
  },
  logoStyles: {
    width: '33@s',
    height: '33@s'
  },
  videoStyles: {
    flex: 1,
    height: '200@vs',
    width: '100%',
  },
  titleStyles: {
    fontSize: '20@ms',
    padding: '18@ms',
    color: '#000',
  },
  subTitleStyles: {
    fontSize: '13@ms',
    paddingHorizontal: '18@ms',
    color: 'rgba(0,0,0,0.6)',
    paddingTop: '6@ms'
  },
  cardFooter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '16@ms'
  },
  heartIcon: {
    fontSize: '25@ms',
    paddingHorizontal: '3@ms'
  },
  heartCount: {
    color: '#241912',
    fontSize: '18@ms'
  },
  footerIcon: {
    color: '#241912',
    fontSize: '30@ms'
  },
  skipButton: {
    width: '50@s',
    height: '50@s',
    borderRadius: '25@s',
    justifyContent: 'center',
    alignItems: 'center',

  }
})