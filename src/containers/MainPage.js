import React, {Component} from 'react';
import {
  View, Text, StyleSheet,TouchableOpacity, Image
} from 'react-native';
import  MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header'
import ParkingPage from './ParkingPage'
import * as actions from '../actions'
import {connect} from 'react-redux'
import Autocomplete from 'react-native-autocomplete-input'
class MainPage extends Component{
  state = {showParking:false,
            query:'',
          shownLatitude:31.195,
          shownLongitude:29.9238,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }
    constructor(props) {
    super(props);
    props.getParkingsActionCreator();
  }

  backButtonHandler = (value) =>{
    this.props.getParkingsActionCreator(); //either this or set parkings in reducer

    this.setState({showParking:value})
  }

  getParkingKey = (key) =>{
    return key
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
      const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
      
      return(
        this.state.showParking?
        <ParkingPage backButtonHandler={this.backButtonHandler} parking={this.props.selectedParking}/>:
          <View style = {styles.container}>
            <Header title={'SPark'} backButton={false} backButtonHandler={this.backButtonHandler}/>
          <View></View>
            <MapView
              style = {styles.map}
              showsUserLocation={true}
              showsMyLocationButton={true}
              // followsUserLocation={true}
              region={{
                latitude: this.state.shownLatitude,
                longitude: this.state.shownLongitude,
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta,
              }}
              onPress={()=>{this.state.query === ''? null:this.setState({query:''})}}
              // onPanDrag={()=>{this.setState({query:''})}}
              >
            {this.props.parkingsMapInfo.map(parking =>{

              return(
                <Marker
                coordinate={{
                latitude: parking.latitude,
                longitude: parking.longitude}}
                title= {parking.name}
                onPress={ e =>{ let parkingKey = this.getParkingKey(parking.key)
                                this.props.getSelectedParkingActionCreator(parkingKey)
                                this.setState({showParking:true})}}
            >
              <Image
                  source={require('../helper/parkingmark.png')}
                  style={styles.markerImage}
              />
            </Marker>
              )
            })}
            
            </MapView>
            <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    inputContainerStyle = {styles.autoCompleteInput}
                    listContainerStyle = {styles.listContainerStyle} 
                    data={parkings.length === 1 && comp(query, parkings[0].name) ? [] : parkings}
                    defaultValue={query}
                    onChangeText={text => this.setState({ query: text })}
                    placeholder="Enter Parking's Name ..."
                    renderItem={({item, i}) => (
                      <TouchableOpacity onPress={() => this.setState({  query: '',
                                                                        shownLatitude: item.latitude,
                                                                        shownLongitude: item.longitude,
                                                                        latitudeDelta: 0.00942,
                                                                        longitudeDelta: 0.00441 })

                                                }>
                        <Text style={styles.itemText}>
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
        />
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
    marginBottom: 1
  },
  markerImage:{
    height: 60, 
    width: 40
  },
  itemText: {
    fontSize: 15,
    margin: 4
  },
  autocompleteContainer: {
    marginHorizontal: 60,
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 90,
    zIndex: 1,
    elevation:5,
  },
  autoCompleteInput:{
  //   flex:1,
  //   alignItems: 'stretch',
  //   height: 100,
    borderWidth: 1,
    borderColor: '#05526c',
    borderRadius: 0
  },
  listContainerStyle:{
    // width:"100%"
  }



})
// selectedParkingActionCreator

const mapStateToProps = (state) =>{
  return {selectedParking: state.selectedParking,
          parkingsMapInfo : state.parkingsMapInfo}
}
export default connect(mapStateToProps, actions)(MainPage)