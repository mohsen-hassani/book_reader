import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

class NavigateButton extends Component {
  render() {
    return (
      <View style="flex:1">
        <View>
            <TouchableOpacity
             style={styles.Button}
             onPress={ () => 
              this.props.nav.navigate(this.props.Link)
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

export default NavigateButton ;

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