import React, {Component} from 'react';
import {
  View, Text
} from 'react-native';
import MapView from 'react-native-maps';

class MainPage extends Component{
    render(){
        return(
      
        <View>
        <MapView
        style = {{height : '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}/>
      </View>
            )
    }
   
}

export default MainPage