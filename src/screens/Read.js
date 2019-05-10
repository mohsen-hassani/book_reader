import React, {Component} from 'react';
import {Text, View, ScrollView, FlatList} from 'react-native';
import NavigateButton from '../components/NavigateButton';
import RenderBook from '../components/render_book/RenderBook';
import {connect} from 'react-redux';

class ReadComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }


  renderItem = (item) => {
    return <RenderBook Content={item} />
  }


  renderBook = (page) => {
      return <FlatList 
        data={this.props.bl[0].book_content[page].contents}
        renderItem={this.renderItem}
        keyExtractor={item => item.content_id.toString()}
        />
  }

  render() {
    let page = this.props.navigation.getParam('page',0);
    return (
      <View style={{flex:1}}>
        <ScrollView style={{flex: 1, marginBottom:20}}>
          {this.renderBook(page)}
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