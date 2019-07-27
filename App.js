/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './src/Components/SideBar/SideBar';
import { createSwitchNavigator, createAppContainer, SafeAreaView } from "react-navigation";

import HomeScreen from './src/Screens/HomeScreen/Drawer';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';
import Feedback from './src/Screens/Feedback/Feedback';

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Feedback: Feedback,
    Profile: ProfileScreen,

  }
);
const AuthNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
  }
)

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: "Auth"
  }
));

const Navigation = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#241912' }}>
      <AppContainer />
    </SafeAreaView>
  );
}
export default Navigation;
