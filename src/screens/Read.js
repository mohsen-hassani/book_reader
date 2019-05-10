import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import NavigateButton from '../components/NavigateButton'
import {connect} from 'react-redux';


class ReadComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  // getAllLibraries = () => {
  //   return this.props.bl.map(
  //     book => <NavigateButton
  //               key={book.id}
  //               Text={book.title} 
  //               Link={'Details'} 
  //               nav={this.props.navigation} 
  //               Params={{
  //                 id: book.id,
  //                 name: book.title
  //               }}/>
  //     );
  // }
  render() {
    let page = this.props.navigation.getParam('page',0)
    return (
      <View style={{flex:1}}>
        <Text>Home screen {page} </Text>
        <ScrollView style={{flex: 1, marginBottom:20}}>
            {/* {this.getAllLibraries()} */}
            <NavigateButton
                Text={'Read'} 
                Link={'Read'} 
                nav={this.props.navigation} />
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bl: state.books,
  pid: state.page
});

const Read = connect(myStateToProps)(ReadComp);

export { Read };