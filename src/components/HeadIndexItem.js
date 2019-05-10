import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';

class HeadIndexItem extends Component {
  render() {
    return (
      <View style="flex:1">
        <View>
            <TouchableOpacity
             style={styles.HeadIndexButton}
             onPress={ () => 
              this.props.nav.navigate('BookIndex', this.props.Params)
            }>
                <View style={styles.Row}>
                    <Text style={styles.HeadIndexText}>
                        {this.props.Text}
                    </Text>
                    <Text style={styles.HeadIndexNumber}>
                        {this.props.Page}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default HeadIndexItem;