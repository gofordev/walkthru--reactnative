import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { ScaledSheet, moderateScale, scale, verticalScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ImagewithBadge extends Component {

    render() {
     const { placeholderImageSource, imageWidth, badgeWidth  } = this.props;
     const angleRad = 0.785398;
     const radius = imageWidth/2;
     const center = radius;
     const w = badgeWidth != null ? badgeWidth / 2 : imageWidth / 5;
     const x = radius * Math.cos(angleRad) + center - w;
     const y = radius * Math.sin(angleRad) + center -w ;
        return (
            <View>
                <ImageBackground style={{
                    width: imageWidth,
                    height: imageWidth, borderRadius: imageWidth / 2, overflow: 'hidden'
                }}
                    source={placeholderImageSource}>

                   
                </ImageBackground>
                <TouchableOpacity activeOpacity={0.8} style={
                        [styles.badgeImageStyle,
                        {
                            borderRadius: badgeWidth != null ? badgeWidth / 2 : imageWidth / 5,
                            width: badgeWidth != null ? badgeWidth : imageWidth / 2.5,
                            height: badgeWidth != null ? badgeWidth : imageWidth / 2.5,
                            left: x-20,
                            top: 25  ,
                            backgroundColor:'rgba(255,255,255,0.8)',
                            justifyContent:'center',
                            alignItems:'center'
                        }]}>
                    
                    <Icon  name="camera" size={30} color="#000" />
                    </TouchableOpacity>
            </View>
        );
    }
}

 ImagewithBadge.defaultProps = {
    placeholderImageSource: require('../../images/image.png')
   };

const styles = StyleSheet.create({
    badgeImageStyle: {
        position:'absolute',
    }
});