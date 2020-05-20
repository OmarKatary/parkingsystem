/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/reducers'
import MainPage from './src/containers/MainPage'
import ParkingPage from './src/containers/ParkingPage'
import ParkingSection from './src/components/ParkingSection'
import ParkingLot from './src/components/ParkingLot'
const App= () => {
  return (
    <Provider store={createStore(reducers)}>
      <MainPage/>
    </Provider>
  );
};


export default App;
