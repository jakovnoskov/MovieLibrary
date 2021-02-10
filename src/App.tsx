/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppContainer from './navigation/navigation'
import store from './redux/store'
import { StatusBar} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppContainer />
      </Provider>
    )
  }
}