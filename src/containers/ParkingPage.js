import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import ParkingLot from '../components/ParkingLot'
import Header from '../components/Header'

class ParkingPage extends Component{
    render(){
        return(
            <View style={styles.parkingView}>
                <Header title={"Parking Carrefour"} backButton={true} backButtonHandler={this.props.backButtonHandler}/>
                <View style={{flex:1}}>
                    <ParkingLot/>
                </View>
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    parkingView :{
        height:'100%'
    }
})
export default ParkingPage