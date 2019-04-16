import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigateButton from '../components/NavigateButton'


class Home extends Component {
  render() {
    return (
      <View style="flex:1">
        <Text>Home screen</Text>
          <NavigateButton Text={'Go to Details Screen'} Link={'Details'} nav={this.props.navigation}/>
          <NavigateButton Text={'Go to Comments Screen'} Link={'Comments'} nav={this.props.navigation}/>
      </View>
    );
  }
}

export { Home };