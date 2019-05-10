import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import HeadIndexItem from '../components/HeadIndexItem';
import SubIndexItem from '../components/SubIndexItem';
import {connect} from 'react-redux';
import styles from '../components/Styles';
import Header from '../components/Header';

class BookIndexComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Header headerText={'فهرست کتاب'} navigation={this.props.navigation} />
        <ScrollView style={{flex: 1}}>
              <HeadIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={1}
                Text={'فصل اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={1}
                Text={'قسمت اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={2}
                Text={'قسمت دوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={3}
                Text={'قسمت سوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={4}
                Text={'قسمت چهارم'} />

              <HeadIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={2}
                Text={'فصل دوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={27}
                Text={'قسمت اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={29}
                Text={'قسمت دوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={36}
                Text={'قسمت سوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={44}
                Text={'قسمت چهارم'} />

              <HeadIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={3}
                Text={'فصل سوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={51}
                Text={'قسمت اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={74}
                Text={'قسمت دوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={89}
                Text={'قسمت سوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={103}
                Text={'قسمت چهارم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={117}
                Text={'قسمت پنجم'} />
        </ScrollView>   
      </View>
    );
  }
}

myStateToProps = state => ({
  bl: state.books,
  pid: state.page
});

const BookIndex = connect(myStateToProps)(BookIndexComp);

export { BookIndex };