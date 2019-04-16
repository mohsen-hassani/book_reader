import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NavigateButton from '../components/NavigateButton'


class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style="flex:1">
        <Text>Home screen</Text>
          <NavigateButton 
            Text={'Detail of Item 1'} 
            Link={'Details'} 
            nav={this.props.navigation} 
            Params={{
              id:1,
              name:'hello'
            }}/>

            <NavigateButton 
              Text={'Detail of Item 2'} 
              Link={'Details'} 
              nav={this.props.navigation} 
              Params={{
                id:2,
                name:'two'
              }}/>

            <NavigateButton 
              Text={'Detail of Item 3'} 
              Link={'Details'} 
              nav={this.props.navigation} 
              Params={{
                id:3,
                name:'three'
              }}/>
          <NavigateButton Text={'Go to Comments Screen'} Link={'Comments'} nav={this.props.navigation}/>
      </View>
    );
  }
}

export { Home };