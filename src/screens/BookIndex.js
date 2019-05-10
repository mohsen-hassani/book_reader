import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity} from 'react-native';
import HeadIndexItem from '../components/HeadIndexItem';
import SubIndexItem from '../components/SubIndexItem';
import {connect} from 'react-redux';
import styles from '../components/Styles';

class BookIndexComp extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView style={{flex: 1, marginBottom:20}}>
              <HeadIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={1}
                Text={'فصل اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={3}
                Text={'قسمت اول'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={7}
                Text={'قسمت دوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={12}
                Text={'قسمت سوم'} />
              <SubIndexItem
                nav={this.props.navigation}
                Link={'Read'}
                Page={18}
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