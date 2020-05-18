import React, {Component} from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


class ParkingSpot extends Component{ 
    state = {
        isDisabled: false,
        isPending:false
    }
    chooseParkingSpot = () =>{
        if(!this.props.pendingSpotExists){
            this.props.setPendingSpotExists(true)
            this.setState({isPending:true})
            setTimeout(()=>{ this.setState({isPending:false})
                             this.props.setPendingSpotExists(false)}, 10000)
            
        }
    }
    render(){
        return(
            <TouchableOpacity
            disabled={this.props.pendingSpotExists||this.props.isOccupied}
            style =  { [this.state.isPending? styles.pendingParkingSpot:(this.props.isOccupied? styles.occupiedParkingSpot : styles.emptyParkingSpot), 
                        this.props.isParkingSpotHorizontal? styles.horizontalParkingSpot: styles.verticalParkingSpot]}
            onPress={() => {this.chooseParkingSpot()
                            this.props.setModalVisibility(true)}}>
                <View style={this.props.isParkingSpotHorizontal? styles.horizontalIconView: styles.verticalIconView}> 
                    {this.props.isOccupied?
                    <FontAwesome5   style={this.props.isParkingSpotHorizontal? styles.horizontalIcon: styles.verticalIcon}
                                    name={"car-side"} 
                                    size={50}
                                    color={"#1a1a1a"}
                                    />:null}
                </View>
            </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    horizontalParkingSpot :{
        width: 120,
        height: 60
    },
    verticalParkingSpot :{
        width: 60,
        height: 120,
    },
    occupiedParkingSpot : {
        backgroundColor: '#b30000',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        elevation:2
    },
    emptyParkingSpot: {
        backgroundColor: '#009933',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        elevation:2
    },
    pendingParkingSpot: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        elevation:2
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

export default ParkingSpot