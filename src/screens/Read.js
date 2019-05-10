import React, {Component} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import NavigateButton from '../components/NavigateButton';
import RenderBook from '../components/render_book/RenderBook';
import {connect} from 'react-redux';
import Header from '../components/Header';

class ReadComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }


  renderItem = (item) => {
    return <RenderBook Content={item}  key={item.item.content_id.toString()}/>
  }


  renderBook = (page, count) => {
    let components = [];
    for (let i = page; i < page + count; i++) {
          components.push(
            <View key={i}>
              {
                this.renderPage(i)
              }
            </View>
            );
      }
      return components;
  }

  renderPage = (page) => {
    this.props.bl[0].book_content[page].contents.map(
      i => console.log(i.content_id)
    )
    return <FlatList 
      data={this.props.bl[0].book_content[page].contents}
      renderItem={this.renderItem}
      keyExtractor={item => item.content_id.toString()}
      />
}

  render() {
    let page = this.props.navigation.getParam('page',0);
    let count = this.props.navigation.getParam('count',1);
    let title = this.props.navigation.getParam('text','بدون نام');
    return (
      <View style={{flex:1}}>
        <Header headerText={title} navigation={this.props.navigation} />
        <ScrollView style={{flex: 1, marginBottom:20}}>
          {this.renderBook(page, count)}
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bl: state.books,
  pid: state.page
});

const Read = connect(myStateToProps)(ReadComp);

export { Read };