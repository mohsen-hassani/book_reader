import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

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


const styles = {
  Button: {
     backgroundColor: '#007aff',
     alignItems: 'center',
     padding:10,
     margin:20
    },
    Text:{
        color:'#fff'
    }
}