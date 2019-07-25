import React, { Component } from 'react';
import { Container, Left, Right, Footer, Body, Button, Text, Icon } from 'native-base';
export default class CFooter extends Component {
  render() {
    return (
      <Container>
        <Footer>
          <Left>
            <Button transparent>
              <Icon name='hand' />
              <Text>982</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon name='hand' />
            </Button>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='hand' />
            </Button>
          </Right>
        </Footer>
      </Container>
    );
  }
}
