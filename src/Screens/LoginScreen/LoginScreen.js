import React, { Component } from 'react';
import { Container, Header, Icon, Content, Form, Item, Input, Right, Button, Text } from 'native-base';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Icon name="logo" />
            </Item>
            <Item>
              <Text>Welcome</Text>
            </Item>
            <Item>
              <Icon name="man" />
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Icon name="lock" />
              <Input placeholder="Password" />
            </Item>
          </Form>
          <Button full primary onPress={() => this.props.navigation.navigate('App')}>
            <Text>Log In</Text>
          </Button>
          <Right>
            <Text>forgot password?</Text>
            <Text>New User? Register here</Text>
          </Right>
        </Content>
      </Container>
    );
  }
}
