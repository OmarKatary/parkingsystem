import React, {Component} from 'react';
import {
  View, Text, StyleSheet
} from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import ParkingPage from './ParkingPage'

class MainPage extends Component{
  state = {showParking:false}

  backButtonHandler = (value) =>{
    this.setState({showParking:value})
  }

    render(){
        return(
        this.state.showParking?
        //Parking page is to be called with selected parking
        <ParkingPage backButtonHandler={this.backButtonHandler}/>:
          <View style = {styles.container}>
            <Header title={'Find.Navigate.Park'} backButton={false} backButtonHandler={this.backButtonHandler}/>
            {/* Map view is to be called with selected parking coordibated */}
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
                onPress={ e =>{ this.setState({showParking:true})}}
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