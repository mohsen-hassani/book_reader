import React, {Component} from 'react';
import {Text, View} from 'react-native';
import PushButton from '../components/PushButton';
import NavigateButton from '../components/NavigateButton';
import BackButton from '../components/BackButton';
import {connect} from 'react-redux';

class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'Details'
  }

  render() {
    let id = this.props.navigation.getParam('id',0);
    let name = this.props.navigation.getParam('name','');
    return (
      <View style="flex:1">
        <Text>Details screen</Text>
        <Text>{id}</Text>
        <Text>{this.props.book.description}</Text>
        <PushButton Text={'Push to Details Screen'} Link={'Details'} nav={this.props.navigation}/>
        <NavigateButton Text={'Go to Comments Screen'} Link={'Comments'} nav={this.props.navigation}/>
        <BackButton nav={this.props.navigation}/>
      </View>
    );
  }
}

let mapStateToProps = (state, ownProps) => ({
  book : state.books[ownProps.navigation.getParam('id',0)]
})

let Details = connect(mapStateToProps)(DetailsScreen);

export { Details };