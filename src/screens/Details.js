import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PushButton from '../components/PushButton';
import BackButton from '../components/BackButton';
class Details extends Component {
  render() {
    return (
      <View style="flex:1">
        <Text>Details screen</Text>
        <PushButton Text={'Push to Details Screen'} Link={'Details'} nav={this.props.navigation}/>
        <BackButton nav={this.props.navigation}/>
      </View>
    );
  }
}

export { Details };