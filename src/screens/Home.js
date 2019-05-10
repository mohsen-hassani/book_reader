import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import NavigateButton from '../components/NavigateButton';
import {Details} from './Details';
import styles from '../components/Styles';
import YStar from '../images/Yellow_Star.png';
import GStar from '../images/Gray_Star.png';
import { connect } from 'react-redux';

class HomeComp extends Component {

  displayStars = (score) => {
    let stars = [];
    let i = 5;

    for (i ; i > score ; i--)
      stars.push(<Image source={GStar} style={styles.StarImage} key={i}/>);

    for (i ; i > 0 ; i--)
      stars.push(<Image source={YStar} style={styles.StarImage} key={i}/>);

    return stars;

  }

  render() {
    return (
      <View style={{ flex:1, backgroundColor: '#eee' }}>
        <View style={[styles.Row, styles.Padd10, styles.Card]}>
          <View style={styles.Column}>
              <Text style={styles.Title}>{this.props.book.name}</Text>
              <Text>
                {this.props.book.author} 
              </Text>
              <View style={styles.Row}>
                <View style={[styles.Stars, styles.Padd15]}>
                  {this.displayStars(this.props.book.score)}
                </View>
                <Text style={{marginTop:12}} >امتیاز:</Text>
              </View>
              <NavigateButton Link={'BookIndex'} Text={'شروع'} nav={this.props.navigation}/>
          </View>
          <View style={styles.BookImageView}>
            <Image source={require('../images/book.jpg')} style={styles.BookImage} />
          </View>
        </View>


        <View style={[styles.Card, {alignItems: 'flex-end', flex: 1, marginBottom: 0}]}>
          <Text style={{
            fontSize: 18,
            fontWeight: 'bold',
            margin:10,
            borderBottomColor: '#00A87D',
            borderBottomWidth: 3,
            padding: 10,
            width:150,
          }}>
            مشخصات کتاب
          </Text>
          <ScrollView style={{flex: 1}}>
            <Details />
          </ScrollView>
        </View>


      {/* <NavigatorStack /> */}
  </View>
    );
  }
}

mapStateToProps = (state) => ({
  book : state.books[0].book_details
})

const Home = connect(mapStateToProps)(HomeComp);

export { Home };