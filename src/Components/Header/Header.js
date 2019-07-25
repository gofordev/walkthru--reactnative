import React, { Component } from 'react';
import { Container, Header, Text, Button, Left, Right, Body, Icon } from 'native-base';

export default class CHeader extends Component {
  constructor(props) {
    super(props);
  }
  handleClick = () => {
    this.props.openDrawer()
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={this.handleClick}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Text>
              Logo Image
            </Text>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='property' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }
}
