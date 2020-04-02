import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import SearchBar from '../components/SearchBar'

class MainPage extends Component{
    render(){
        return(
      
        <View style = {styles.container}>
          <MapView
          style = {styles.map}
          initialRegion={{
            latitude: 31.1683,
            longitude: 29.9316,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}>
          <Marker
            coordinate={{
              latitude: 31.1683,
              longitude: 29.932}}
              title="Carrefour's Parking"
          />
          </MapView>
          <SearchBar style = {styles.searchBar}/>
        
        </View>
            )
    }
   
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  map : {
    flex: 1,
    height : '100%'
  },


})

export default MainPage