import React, {Component} from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ParkingSpot from './ParkingSpot'

class ParkingSection extends Component{       
    
    render(){
    return(
        this.props.isDoubleSectioned?
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
                {this.props.parkingSpots.map( spot => {
                    if(spot.subSectionIndex == 1){
                    return(
                    <ParkingSpot    key={spot.parkingSpotIndex} 
                                    id={spot.parkingSpotIndex} 
                                    isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                    isOccupied={spot.isOccupied}
                                    pendingSpotExists={this.props.pendingSpotExists}
                                    setPendingSpotExists={this.props.setPendingSpotExists}
                                    setModalVisibility={this.props.setModalVisibility}
                                    parkingId = {this.props.parkingId}
                                    sectionId = {this.props.sectionId}/>
                    )
                    }}
                    )
                }
            </View> 

            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( spot => {
                if(spot.subSectionIndex == 2){
                return(
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId = {this.props.parkingId}
                                sectionId = {this.props.sectionId}/>
                )
                }}
                )
            }
            </View> 
        </View>
        :
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( spot => {
                return(
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId = {this.props.parkingId}
                                sectionId = {this.props.sectionId}/>
                )
                }
                )
            }
        </View> 
        </View>
    )
    }
}

const styles = StyleSheet.create({

    parkingVerticalSubSection : {
    },
    parkingVerticalSection:{
        flex:1,
        flexDirection: 'row',
        margin:20
    },
    parkingHorizontalSubSection : {
        flexDirection : 'row'
    },
    parkingHorizontalSection:{
        flex:1,
        flexDirection: 'column',
        margin:20
    }
  })


export default ParkingSection