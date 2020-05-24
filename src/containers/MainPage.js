import React, {Component} from 'react';
import {
  View, Text, StyleSheet,TouchableOpacity
} from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import ParkingPage from './ParkingPage'
import * as actions from '../actions'
import {connect} from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input'
class MainPage extends Component{
  state = {showParking:false,
            query:'',
          shownLatitude:31.1683,
          shownLongitude:29.9316
        }

  backButtonHandler = (value) =>{
    this.setState({showParking:value})
  }

  getParkingId = (id) =>{
    return id
  }

  findParking = (query) => {
    if (query === '') {
      return [];
    }

    const parkings = this.props.parkingsMapInfo
    const regex = new RegExp(`${query.trim()}`, 'i');
    return parkings.filter(parking => parking.name.search(regex) >= 0);
  }
    render(){
      const { query } = this.state;
      const parkings = this.findParking(query);
      console.log("PARKINGSSS:", parkings)
      const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

        return(
        this.state.showParking?
        <ParkingPage backButtonHandler={this.backButtonHandler} parking={this.props.selectedParking}/>:
          <View style = {styles.container}>
            <Header title={'Find.Navigate.Park'} backButton={false} backButtonHandler={this.backButtonHandler}/>
            {/* Map view is to be called with selected parking coordibated */}
          
            <MapView
              style = {styles.map}
              region={{
                latitude: this.state.shownLatitude,
                longitude: this.state.shownLongitude,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}>
            {this.props.parkingsMapInfo.map(parking =>{
              return(
                <Marker
                    coordinate={{
                    latitude: parking.latitude,
                    longitude: parking.longitude}}
                    title= {parking.name}
                    onPress={ e =>{ let parkingId = this.getParkingId(parking.id)
                                    this.props.getSelectedParkingActionCreator(parkingId)
                                    this.setState({showParking:true})}}
                />
              )
            })}
            
            </MapView>
            <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={parkings.length === 1 && comp(query, parkings[0].name) ? [] : parkings}
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    placeholder="Enter parking's name"
                    renderItem={({item, i}) => (
                      <TouchableOpacity onPress={() => this.setState({  query: item.name,
                                                                        shownLatitude: item.latitude,
                                                                        shownLongitude: item.longitude })

                                                }>
                        <Text style={styles.itemText}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
        />
            {/* <SearchBar style = {styles.searchBar}/> */}
          </View>
            )
    }
   
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  map : {
    height:'100%' ,
  },
  itemText: {
    fontSize: 15,
    margin: 4
  },
  autocompleteContainer: {
    margin: 10,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: '11%',
    zIndex: 1,
    elevation:5
  },



})
// selectedParkingActionCreator
const mapStateToProps = (state) =>{
  return {selectedParking: state.selectedParking,
          parkingsMapInfo : state.parkingsMapInfo}
}
export default connect(mapStateToProps, actions)(MainPage)