/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppContainer from './AppNavigation.js'
import { Provider } from 'react-redux';
import configureStore  from './Redux/Store'


export default class APP extends Component {
  render() {
    return (
      <Provider store={ configureStore }>
        <AppContainer />
      </Provider>
    )
  }
}

