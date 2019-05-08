import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NavigateButton from '../components/NavigateButton'
import {connect} from 'react-redux';


class SendCommentComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  getAllLibraries = () => {
    return this.props.bl.map(
      book => <NavigateButton
                key={book.id}
                Text={book.title} 
                Link={'Details'} 
                nav={this.props.navigation} 
                Params={{
                  id: book.id,
                  name: book.title
                }}/>
      );
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Home screen {this.props.pid} </Text>
        <ScrollView style={{flex: 1, marginBottom:20}}>
            {this.getAllLibraries()}
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bl: state.books,
  pid: state.page
});

const SendComment = connect(myStateToProps)(SendCommentComp);

export { SendComment };