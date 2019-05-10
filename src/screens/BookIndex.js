import React, {Component} from 'react';
import {FlatList, View, ScrollView, TouchableOpacity, Text} from 'react-native';
import HeadIndexItem from '../components/HeadIndexItem';
import SubIndexItem from '../components/SubIndexItem';

import {connect} from 'react-redux';
import styles from '../components/Styles';
import Header from '../components/Header';

class BookIndexComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  renderSubChapterIndexItems = (subChapter) => {
    return <SubIndexItem
      nav={this.props.navigation}
      Link={'Read'}
      Count={subChapter.item.pages}
      Page={subChapter.item.start}
      Text={subChapter.item.name} />
  }

  renderSubChapterIndex = (ChapterContent) => {
    return (
      <FlatList
        data={ChapterContent}
        renderItem={this.renderSubChapterIndexItems}
        keyExtractor={i => i.id.toString()} 
        listKey={indexItem => indexItem.id.toString()}/>
    )}

  renderIndexItem = (indexItem) => {
    console.log(indexItem);
    return (
      <View>
        <HeadIndexItem
          nav={this.props.navigation}
          Link={'Read'}
          Page={indexItem.item.Chapter_id}
          // ChapterContent={indexItem.item.Chapter_content} 
          Text={indexItem.item.Chapter_name} />
          
        {this.renderSubChapterIndex(indexItem.item.Chapter_content)}
        
      </View>
    )}

  renderBookIndex = (bookIndex) => {
    return <FlatList 
      data={bookIndex}
      renderItem={this.renderIndexItem}
      keyExtractor={i => i.Chapter_id.toString()}
       />
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'فهرست کتاب'} navigation={this.props.navigation} />
        <ScrollView style={{flex: 1}}>
          {this.renderBookIndex(this.props.bookIndex)}              
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bookIndex: state.books[0].book_index,
  pid: state.page
});

const BookIndex = connect(myStateToProps)(BookIndexComp);

export { BookIndex };