import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import ParkingSpot from './ParkingSpot'

class ParkingSection extends Component{
    state = {
                parkingSpots:
                [   {parkingSpotID: 1,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotID: 2,
                    isOccupied: true,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotID: 3,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotID: 4,
                    isOccupied: true,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotID: 5,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotID: 6,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    }
                ]
            }
            
    render(){
    return(
        this.props.isDoubleSectioned?
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
                {this.state.parkingSpots.map( spot => {
                    if(spot.subSectionIndex == 1){
                    return(
                    <ParkingSpot    key={spot.parkingSpotID} 
                                    id={spot.parkingSpotID} 
                                    isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                    isOccupied={spot.isOccupied} isPending={spot.isPending}
                                    pendingSpotExists={this.props.pendingSpotExists}
                                    setPendingSpotExists={this.props.setPendingSpotExists}/>
                    )
                    }}
                    )
                }
            </View> 

            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.state.parkingSpots.map( spot => {
                if(spot.subSectionIndex == 2){
                return(
                <ParkingSpot    key={spot.parkingSpotID} 
                                id={spot.parkingSpotID} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}/>
                )
                }}
                )
            }
            </View> 
        </View>
        :
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSection:styles.parkingVerticalSection}>
        <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.state.parkingSpots.map( spot => {
                return(
                <ParkingSpot    key={spot.parkingSpotID} 
                                id={spot.parkingSpotID} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}/>
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
    },
    parkingHorizontalSubSection : {
        flexDirection : 'row'
    },
    parkingHorizontalSection:{
        flex:1,
        flexDirection: 'column',
    }
  })

export default ParkingSection