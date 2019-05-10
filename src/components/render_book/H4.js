import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';

class H4 extends Component {
    content = this.props.content;
    render(){
        return(
            <View style={{flex: 1}}>
                <Text style={Styles.H4}>
                    {this.content}
                </Text>
            </View>
        );
    }
} 

export { H4 }; 