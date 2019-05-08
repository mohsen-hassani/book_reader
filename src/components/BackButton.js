import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';


export default class BackButton extends Component {
  render() {
    return (
      <View style="flex:1">
        <View>
            <TouchableOpacity
             style={styles.Button}
             onPress={ () => 
              this.props.nav.goBack()
            }>
              <Text style={styles.Text}>
                Let's Go Back
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}