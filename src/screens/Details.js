import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import PushButton from '../components/PushButton';
import NavigateButton from '../components/NavigateButton';
import BackButton from '../components/BackButton';
import {connect} from 'react-redux';
import styles from '../components/Styles';

class DetailsScreen extends Component {

  static navigationOptions = {
    title: 'جزيیات'
  }

  render() {
    // let name = this.props.navigation.getParam('name','');
    let book_name = 'sdf';
    let author = '';
    let translator = '';
    let pages = '';
    let desc = 'سکیبت سیکنبت ینلت  فهس هت لتقکلث تحختسحهت لهتب نپبرنپ یندقل طیحقت طکنزب پقن لپقسنفت سنیکتلب سکظقثفت سحخق ربی پذطدذسگنت یگقت';
    desc += 'سکیبت سیکنبت ینلت  فهس هت لتقکلث تحختسحهت لهتب نپبرنپ یندقل طیحقت طکنزب پقن لپقسنفت سنیکتلب سکظقثفت سحخق ربی پذطدذسگنت یگقت';
    return (
      <ScrollView style="flex:1">
        {/* <Text>{this.props.book.description}</Text> */}

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{book_name}</Text>
          <Text>نام اثر: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{author}</Text>
          <Text>نویسنده: </Text>
        </View>
        
        <View style={[styles.Row, styles.Padd10]}>
          <Text>{translator}</Text>
          <Text>مترجم: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{pages}</Text>
          <Text>تعداد صفحات: </Text>
        </View>

        <View style={[styles.Row, styles.Padd10]}>
          <Text>{desc}</Text>
          <Text>خلاصه کتاب: </Text>
        </View>
      </ScrollView>
    );
  }
}

let mapStateToProps = (state, ownProps) => ({
  book : state.books[ownProps.navigation.getParam('id',0)]
})

let Details = connect(mapStateToProps)(DetailsScreen);

export { Details };