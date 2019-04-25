/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import TStack from './src/TStack';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers';
import AIO from './AIO';


export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}><TStack /></Provider>
      //<AIO />
    );
  }
}