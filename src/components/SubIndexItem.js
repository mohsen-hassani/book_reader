import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './Styles';

class SubIndexItem extends Component {
  render() {
    return (
      <View style="flex:1">
        <View>
            <TouchableOpacity
             style={styles.SubIndexButton}
             onPress={ () => 
              this.props.nav.navigate(this.props.Link, {
                  'page': this.props.Page - 1,
                  'count' : this.props.Count,
                  'text': this.props.Text
              })
            }>
                <View style={styles.Row}>
                    <Text style={styles.SubIndexText}>
                        {this.props.Text}
                    </Text>
                    <Text style={styles.SubIndexNumber}>
                        {this.props.Page}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SubIndexItem;