import React, {Component} from 'react';
import { StyleSheet, View,TouchableHighlight } from 'react-native';


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
            <TouchableHighlight
            disabled={this.props.pendingSpotExists||this.props.isOccupied}
            style =  { [this.state.isPending? styles.pendingParkingSpot:(this.props.isOccupied? styles.occupiedParkingSpot : styles.emptyParkingSpot), 
                        this.props.isParkingSpotHorizontal? styles.horizontalParkingSpot: styles.verticalParkingSpot]}
            onPress={() => this.chooseParkingSpot(this.state.isPending)}>
                <View> 
                </View>
            </TouchableHighlight>
            
        )
    }
}

const styles = StyleSheet.create({
    horizontalParkingSpot :{
        width: 100,
        height: 50
    },
    verticalParkingSpot :{
        width: 50,
        height: 100
    },
    occupiedParkingSpot : {
        backgroundColor: 'red',
        borderWidth: 1,
        borderColor: "white",
    },
    emptyParkingSpot: {
        backgroundColor: 'green',
        borderWidth: 1,
        borderColor: "white",
    },
    pendingParkingSpot: {
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: "white",
    }
  })

export default ParkingSpot