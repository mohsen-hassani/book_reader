import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';

class PushButton extends Component {
  render() {
    return (
      <View style="flex:1">
        <View>
            <TouchableOpacity
             style={styles.Button}
             onPress={ () => 
              this.props.nav.push(this.props.Link)
            }>
              <Text style={styles.Text}>
                {this.props.Text}
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PushButton;