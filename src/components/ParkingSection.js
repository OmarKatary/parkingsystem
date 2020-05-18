import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import ParkingSpot from './ParkingSpot'

class ParkingSection extends Component{
    state = {
                parkingSpots:
                [   {parkingSpotIndex: 1,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotIndex: 2,
                    isOccupied: true,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotIndex: 3,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotIndex: 4,
                    isOccupied: true,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotIndex: 5,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotIndex: 6,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotIndex: 7,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotIndex: 8,
                    isOccupied: true,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 1
                    },
                    {parkingSpotIndex: 9,
                    isOccupied: false,
                    isPending:false,
                    isParkingSpotHorizontal: true,
                    subSectionIndex: 2
                    },
                    {parkingSpotIndex: 10,
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
                    <ParkingSpot    key={spot.parkingSpotIndex} 
                                    id={spot.parkingSpotIndex} 
                                    isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                    isOccupied={spot.isOccupied} isPending={spot.isPending}
                                    pendingSpotExists={this.props.pendingSpotExists}
                                    setPendingSpotExists={this.props.setPendingSpotExists}
                                    setModalVisibility={this.props.setModalVisibility}/>
                    )
                    }}
                    )
                }
            </View> 

            <View style={this.props.isParkingSectionHorizontal? styles.parkingHorizontalSubSection:styles.parkingVerticalSubSection}>
            {this.state.parkingSpots.map( spot => {
                if(spot.subSectionIndex == 2){
                return(
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}/>
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
                <ParkingSpot    key={spot.parkingSpotIndex} 
                                id={spot.parkingSpotIndex} 
                                isParkingSpotHorizontal={this.props.isParkingSpotHorizontal} 
                                isOccupied={spot.isOccupied}
                                pendingSpotExists={this.props.pendingSpotExists}
                                setPendingSpotExists={this.props.setPendingSpotExists}
                                setModalVisibility={this.props.setModalVisibility}/>
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