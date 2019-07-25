import React, { Component } from 'react'
import { Container, Content, Button, Footer, FooterTab, Left, Right, Body, Icon, Text } from 'native-base';
import CHeader from '../../Components/Header/Header'
import CFooter from '../../Components/Footer/Footer'

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <CHeader openDrawer={this.props.screenProps.openDrawer} />
        <Content>
          <Text>
            This is Home Section
          </Text>
        </Content>
        <CFooter />
      </Container>
    );
  }
}
