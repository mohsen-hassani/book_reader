import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';

class Par extends Component {
    content = this.props.content;
    render(){
        return(
            <View style={{flex: 1}}>
                <Text style={Styles.Par}>
                    {this.content}
                </Text>
            </View>
        );
    }
} 

export { Par }; 