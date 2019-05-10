import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import styles from '../components/Styles';

class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'جزيیات'
  }
  render() {

    let book = this.props.book;

    let book_name = book.name;
    let author = book.author;
    let translator = book.translator;
    let pages = book.pages;
    let desc = book.description;
    let publisher = book.publisher;
    let year = book.year;
    let website = book.publisher_website;

    return (
      <ScrollView style="flex:1">
        <View style={[styles.Row, styles.Padd10]}>
          <Text>{book_name}</Text>
          <Text style={styles.BoldText}>نام اثر: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{author}</Text>
          <Text style={styles.BoldText}>نویسنده: </Text>
        </View>
        
        <View style={[styles.Row, styles.Padd10]}>
          <Text>{translator}</Text>
          <Text style={styles.BoldText}>مترجم: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{pages}</Text>
          <Text style={styles.BoldText}>تعداد صفحات: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{publisher}</Text>
          <Text style={styles.BoldText}>ناشر: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{website}</Text>
          <Text style={styles.BoldText}>وب سایت ناشر: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{year}</Text>
          <Text style={styles.BoldText}>سال انتشار: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text style={{marginLeft: 70}}>{desc}</Text>
          <Text style={styles.BoldText}>خلاصه کتاب: </Text>
        </View>
      </ScrollView>
    );
  }
}

let mapStateToProps = (state, ownProps) => ({
  // book : state.books[ownProps.navigation.getParam('id',0)]
  book : state.books[0].book_details
})

let Details = connect(mapStateToProps)(DetailsScreen);

export { Details };