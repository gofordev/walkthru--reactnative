import React, { Component } from 'react';
import { Container } from 'native-base';
import { View, Image, StyleSheet, ImageBackground, Text, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScaledSheet, moderateScale } from 'react-native-size-matters';
export default class Feedback extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        checked: 0
    }

    // Feedback messages that used in Radio Box
    radioBoxData = [{ msg: 'Quisque vehicula tincidunt' },
    { msg: 'Curabitur rutrum luctus' },
    { msg: 'Vivamus tristique urna felis' },
    { msg: 'Duis hendrerit volutpat ligula' }]
    // ------------------------------------

    // Change the value of Radio Button
    changeValue = (value) => {
        this.setState({ checked: value })
    }

    // ------------------------------------
    // send checked data when click on submitFeedbackButton
    submitFeedback = () => {
        const { checked } = this.state;
        const isAnswerCorrect = checked === 2;
        checked != 2 ? Alert.alert(
            'Result',
            'The answer is incorrect',
            [
              
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          ) : null
        this.props.navigation.navigate('Home', { playAgain: isAnswerCorrect });

    }
    // ---------------------------------------

    render() {
        const { checked } = this.state;
        return <Container>
            {/* <View style={styles.Container}> */}
            <StatusBar backgroundColor="#241912" barStyle="light-content" />
            {/* backgroundImage Design */}
            <ImageBackground source={require('../../images/BG.png')} style={styles.backgroundimgStyle}>

                {/* back Button Design */}
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <Icon name="md-arrow-round-back" size={25} color='white' />
                    </TouchableOpacity>
                </View>
                {/* ---------------------------- */}

                {/* {Input data Container} */}
                <View style={styles.InputContainer}>
                    <Image source={require('../../images/ad.jpg')} style={{ height: '100%', width: '100%' }} />
                </View>
                {/* ------------------------------------------------ */}
                {/* Main Label Design */}
                <View style={{ alignItems: 'center', width: '100%',marginTop:moderateScale(20) }} >
                    <Text style={styles.Label1Style}>{'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit?'}</Text>
                </View>
                {/* ------------------------------------------------------- */}
                {/* radioBox Container */}
                <View style={styles.Container2}>
                    {/* RadioBox that select only one item */}
                    <View style={styles.radioBox}>
                        {this.radioBoxData.map((item, index) => {
                            return (<TouchableOpacity onPress={() => { this.changeValue(index) }}>
                                <View style={styles.radioItem}>
                                    <Icon name="md-checkmark-circle" size={30} color={checked === index ? 'green' : 'grey'} />
                                    <Text style={styles.radioBoxLabel}>{item.msg}</Text>
                                </View>
                            </TouchableOpacity>
                            )
                        })}
                    </View>
                    {/* ---------------------------------------- */}
                    <TouchableOpacity onPress={() => { this.submitFeedback() }} style={{ marginTop: moderateScale(25), marginBottom: moderateScale(45) }} >
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonLabel}>Submit Feedback</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* --------------------------------------- */}
            </ImageBackground>
            {/* </View> */}
        </Container>
    }
}
const styles = ScaledSheet.create({
    backgroundimgStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        
    },
    backButtonContainer: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%', 
        height: '60@vs',
        paddingLeft: '20@ms',
        paddingTop: 10
    },
    InputContainer: {
        height: '90@vs',
        width: '320@ms',
        borderColor: '#878781',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        // marginTop: 90
    },
    inputstyle: {
        height: '80@ms',
        width: '200@ms',
        color: '#878781'
    },
    Label1Style: {
        fontSize: '22@ms',
        lineHeight: '30@ms',
        color: 'white',
        marginTop: '30@ms',
        textAlign: 'center'
    },
    Container2: {
        height: '320@vs',
        width: '100%',
        borderTopLeftRadius: '20@ms',
        borderTopRightRadius: '20@ms',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.1)',
        marginTop: '30@ms',
        bottom: 0,
        position: 'absolute',
        alignSelf: 'flex-end',
        paddingTop: 10
    },
    radioBox: {
        height: '190@ms',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioItem: {
        flexDirection: 'row',
        height: '40@ms',
        width: '320@ms',
        alignItems: 'center',
        marginVertical: '5@ms'
    },
    radioBoxLabel: {
        fontSize: '20@ms',
        lineHeight: '30@ms',
        color: 'white',
        textAlign: 'center',
        marginLeft: '20@ms'
    },
    buttonView: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        height: '50@ms',
        width: '320@ms',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '5@ms',
    },
    buttonLabel:
    {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    },
})