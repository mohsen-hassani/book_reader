import React, {Component} from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import NavigateButton from '../components/NavigateButton';
import NavigatorStack from '../NavigatorStack';
import styles from '../components/Styles';
import img from '../images/book.jpg';
import YStar from '../images/Yellow_Star.png';
import GStar from '../images/Gray_Star.png';

class Home extends Component {
  render() {
    return (
      <View style={{ flex:1 }}>
        <View style={[styles.Row, styles.Padd10]}>
          <View style={styles.Column}>
              <Text style={styles.Title}>نبرد من</Text>
              <Text>آدولف هیتلر</Text>
              <View style={styles.Row}>
                <View style={[styles.Stars, styles.Padd15]}>
                  <Image source={GStar} style={styles.StarImage} />
                  <Image source={YStar} style={styles.StarImage} />
                  <Image source={YStar} style={styles.StarImage} />
                  <Image source={YStar} style={styles.StarImage} />
                  <Image source={YStar} style={styles.StarImage} />
                </View>
                <Text style={{marginTop:12}} >امتیاز:</Text>
              </View>
              <NavigateButton Link={'BookIndex'} Text={'شروع'} nav={this.props.navigation}/>
          </View>
          <View style={styles.BookImageView}>
            <Image source={img} style={styles.BookImage} />
          </View>
        </View>





      <NavigatorStack />
  </View>
    );
  }
}

export { Home };