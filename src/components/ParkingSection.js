import React, {Component} from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ParkingSpot from './ParkingSpot'

class ParkingSection extends Component{       
    
    createParkingSpot= (spot) =>{

        if(spot.parkingSpotIndex === this.props.requestedSpotId && this.props.sectionId === this.props.requestedSectionId){
            return(
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId={this.props.parkingId}
                                sectionId={this.props.sectionId}
                                spotScale={this.props.spotScale}
                                getRequestedSpot={this.props.getRequestedSpot}
                                isPending={this.props.reserveApproved}/>
                                
            )}
        else
            return(
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId={this.props.parkingId}
                                sectionId={this.props.sectionId}
                                spotScale={this.props.spotScale}
                                getRequestedSpot={this.props.getRequestedSpot}
                                isPending={false}/>
            )

    }
    render(){
    return(
        this.props.isDoubleSectioned?
        <View key = {this.props.key} style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
                {this.props.parkingSpots.map( spot => {
                    if(spot.subSectionIndex == 1){
                    return(
                        this.createParkingSpot(spot)                                    
                    )
                    }}
                    )
                }
            </View> 

            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( spot => {
                if(spot.subSectionIndex == 2){
                return(
                    this.createParkingSpot(spot) 
                )
                }}
                )
            }
            </View> 
        </View>
        :
        <View key = {this.props.key} style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( spot => {
                return(
                    this.createParkingSpot(spot) 
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
        // flex:1,
        flexDirection: 'row',
        margin:10
    },
    parkingHorizontalSubSection : {
        flexDirection : 'row'
    },
    parkingHorizontalSection:{
        // flex:1,
        flexDirection: 'column',
        margin:10
    }
  })


export default ParkingSection