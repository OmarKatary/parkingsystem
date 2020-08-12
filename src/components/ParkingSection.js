import React, {Component} from 'react';
import {connect} from 'react-redux'
import { StyleSheet, View } from 'react-native';
import ParkingSpot from './ParkingSpot'

class ParkingSection extends Component{       
    
    createParkingSpot= (spot, spotId) =>{

        if(spotId === this.props.requestedSpotId && this.props.sectionId === this.props.requestedSectionId){
            return(
                <ParkingSpot    key={spotId} 
                                id={spotId} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId={this.props.parkingId}
                                sectionId={this.props.sectionId}
                                spotScale={this.props.spotScale}
                                getRequestedSpot={this.props.getRequestedSpot}
                                isPending={this.props.reserveApproved}
                                subSectionIndex={spot.subSectionIndex}
                                isParkingSectionHorizontal={this.props.isParkingSectionHorizontal} />
                                
            )}
        else
            return(
                <ParkingSpot    key={spotId} 
                                id={spotId} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}
                                parkingId={this.props.parkingId}
                                sectionId={this.props.sectionId}
                                spotScale={this.props.spotScale}
                                getRequestedSpot={this.props.getRequestedSpot}
                                isPending={false}
                                subSectionIndex={spot.subSectionIndex}
                                isParkingSectionHorizontal={this.props.isParkingSectionHorizontal}/>
            )

    }
    render(){
    return(
        this.props.isDoubleSectioned?
        <View key = {this.props.key} style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
                {this.props.parkingSpots.map( (spot,index) => {
                    if(spot.subSectionIndex == 1){
                    return(
                        this.createParkingSpot(spot,index)                                    
                    )
                    }}
                    )
                }
            </View> 

            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( (spot,index) => {
                if(spot.subSectionIndex == 2){
                return(
                    this.createParkingSpot(spot,index) 
                )
                }}
                )
            }
            </View> 
        </View>
        :
        <View key = {this.props.key} style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.props.parkingSpots.map( (spot,index) => {
                return(
                    this.createParkingSpot(spot,index) 
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
        margin:20,
        borderTopWidth:2,
        borderBottomWidth:2,
        borderTopColor: 'black', 
        borderBottomColor: 'black',     
    },
    parkingHorizontalSubSection : {
        flexDirection : 'row'
    },
    parkingHorizontalSection:{
        // flex:1,
        flexDirection: 'column',
        margin:20,
        borderLeftWidth:2,
        borderRightWidth:2,
        borderLeftColor: 'black', 
        borderRightColor: 'black',         
    }
  })


export default ParkingSection