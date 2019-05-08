import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import NavigateButton from '../components/NavigateButton'
import {connect} from 'react-redux';
import styles from '../components/Styles';

class BookIndexComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Text>Home screen {this.props.pid} </Text>
        <ScrollView style={{flex: 1, marginBottom:20}}>
            <TouchableOpacity
              style={styles.Button}
              onPress={ () => 
                this.props.navigation.navigate('Read')
              }>
                <Text style={styles.Text}>
                  Read in the tab navigator
                </Text>
            </TouchableOpacity>
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bl: state.books,
  pid: state.page
});

const BookIndex = connect(myStateToProps)(BookIndexComp);

export { BookIndex };