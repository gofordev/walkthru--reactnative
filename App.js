/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Drawer } from 'native-base';
import SideBar from './src/Components/SideBar/SideBar';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import HomeScreen from './src/Screens/HomeScreen/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen/ProfileScreen';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
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
    initialRouteName:  "Auth"
  }
));

export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
  render() {
    return (
        <Drawer
          ref={(ref) => { this.drawer = ref; }}
          content={<SideBar navigator={() => this.navigator} closeDrawer={() => this.closeDrawer()}/>}
          onClose={() => this.closeDrawer()}
        >
          <AppContainer screenProps={{
            openDrawer: this.openDrawer
          }} ref={nav => {
            this.navigator = nav;
          }}/>
        </Drawer>
    );
  };
}

