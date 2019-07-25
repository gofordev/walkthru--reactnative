import React, { Component } from 'react'
import { Container, Header, Content, Item, Icon, Text } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class SideBar extends Component {
  handleHome = () => {
    this.props.closeDrawer();
    this.props.navigator() &&
    this.props.navigator().dispatch(
      NavigationActions.navigate({ routeName: 'Home' })
    );
  }
  handleProfile = () => {
    this.props.closeDrawer();
    this.props.navigator() &&
    this.props.navigator().dispatch(
      NavigationActions.navigate({ routeName: 'Profile' })
    );
  }
  handleSignout = () => {
    this.props.closeDrawer();
    this.props.navigator() &&
    this.props.navigator().dispatch(
      NavigationActions.navigate({ routeName: 'Auth' })
    );
  }

  render() {
    return (
      <Container>
        <Header/>
        <Content>
            <Item>
              <Icon name="man" />
            </Item>
            <Item>
              <Text>
                John Smith
              </Text>
            </Item>
            <Item onPress={this.handleHome}>
              <Text>
                Home
              </Text>
            </Item>
            <Item onPress={this.handleProfile}>
              <Text>
                Profile
              </Text>
            </Item>
            <Item onPress={this.handleSignout}>
              <Text>
                Sign Out
              </Text>
            </Item>
        </Content>

      </Container>
    );
  }
}
