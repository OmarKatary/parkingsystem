import React, {Component} from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import * as actions from '../actions'


class ParkingSpot extends Component{ 
    state = {setPending:false}
    chooseParkingSpot = (parkingId, sectionId, spotId) =>{
        if(!this.props.pendingSpotExists){
            this.props.setPendingSpotExists(true)
            this.setState({setPending:true})
            this.props.reserveParkingSpotActionCreator({parkingId, sectionId, spotId, isPending: true})
            setTimeout(()=>{ this.setState({setPending:false})
                             this.props.setPendingSpotExists(false)
                             this.props.reserveParkingSpotActionCreator({parkingId, sectionId, spotId, isPending: false})
                            }, 5000)
            
        }
    }
    render(){
        const width = 2*this.props.spotScale
        const height = this.props.spotScale

        return(
            <TouchableOpacity
                disabled={this.props.isOccupied}
                style =  { [this.state.setPending? styles.pendingParkingSpot:(this.props.isOccupied? styles.occupiedParkingSpot : styles.emptyParkingSpot), 
                            this.props.isParkingSpotHorizontal? {width:width, height:height}: {width:height, height:width}]}
                onPress={() => {this.chooseParkingSpot(this.props.parkingId, this.props.sectionId, this.props.id)
                            this.props.setModalVisibility(true)}}>
                <View style={this.props.isParkingSpotHorizontal? styles.horizontalIconView: styles.verticalIconView}> 
                    {this.props.isOccupied?
                    <FontAwesome5   style={this.props.isParkingSpotHorizontal? styles.horizontalIcon: styles.verticalIcon}
                                    name={"car-side"} 
                                    size={0.8*height}
                                    color={"#1a1a1a"}
                                    />:null}
                </View>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    horizontalParkingSpot :{
        width: 58,
        height: 29
    },
    verticalParkingSpot :{
        width: 29,
        height: 58,
    },
    occupiedParkingSpot : {
        backgroundColor: '#b30000',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,

    },
    emptyParkingSpot: {
        backgroundColor: '#009933',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
    },
    pendingParkingSpot: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
    },
    verticalIcon:{
        transform: [ {rotate: '90deg'}]
    },
    horizontalIcon:{
        transform: [{rotate: '0deg'}]
    },
    verticalIconView: {
        flex:1,
        justifyContent: 'center'
    },
    horizontalIconView: {
        flex:1,
        flexDirection:'row',
        justifyContent: 'center'
    }
  })

export default connect(null, actions)(ParkingSpot)