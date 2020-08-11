/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import {Component} from 'react';
import MainPage from './src/containers/MainPage'
import ParkingPage from './src/containers/ParkingPage'
import ParkingSection from './src/components/ParkingSection'
import ParkingLot from './src/components/ParkingLot'
import configureStore from './src/reducers/index'

class App extends Component{

  
  render(){
    const store = configureStore()
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <MainPage/>
      </Provider>
    );
  }
}


export default App;
