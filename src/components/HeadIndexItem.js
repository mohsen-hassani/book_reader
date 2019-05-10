import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList} from 'react-native';
// import SubIndexItem from '../components/SubIndexItem';
import styles from './Styles';

class HeadIndexItem extends Component {


  // renderSubChapterIndexItems = (subChapter) => {
  //   return <SubIndexItem
  //     nav={this.props.nav}
  //     Link={'Read'}
  //     Count={subChapter.item.pages}
  //     Page={subChapter.item.start}
  //     Text={subChapter.item.name} />
  // }

  // renderSubChapterIndex = () => {
  //   return (
  //     <FlatList
  //       data={this.props.ChapterContent}
  //       renderItem={this.renderSubChapterIndexItems}
  //       keyExtractor={i => i.id} />
  //   )}

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
        {/* {this.renderSubChapterIndex()} */}
      </View>
    );
  }
}

export default HeadIndexItem;