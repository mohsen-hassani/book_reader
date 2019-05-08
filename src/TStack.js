import { createStackNavigator,createMaterialTopTabNavigator, createAppContainer } from "react-navigation";
import {BookIndex, Read, SendComment, Details, Comments} from './screens/index';
import NavigatorStack from './NavigatorStack';
import {Text, View, ScrollView} from 'react-native';
import NavigateButton from './components/NavigateButton';
import React, {Component} from 'react';


class txts extends Component {
    render() {
      return (
          <View style={{ flex:1 }}>
              <Text>
                  Hi
              </Text>
              <NavigateButton
                Text={'Read'} 
                Link={'BookIndex'} 
                nav={this.props.navigation} />
              <NavigatorStack />
          </View>
      );
    }
  }
  
const StackNav = createStackNavigator({
    Home: txts,
    BookIndex: BookIndex,
    Read: Read
},
{
    initialRouteName: "Home",
    headerMode: 'none'
});


const TStack = createAppContainer(StackNav);
export default TStack;