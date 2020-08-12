import React, {Component} from 'react';
import { StyleSheet, View,Image,TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import {connect} from 'react-redux'
import * as actions from '../actions'


class ParkingSpot extends Component{ 

    render(){
        const width = 2*this.props.spotScale
        const height = this.props.spotScale

        return(
            <View>
            <TouchableOpacity
                disabled={this.props.isOccupied||this.props.pendingSpotExists}
                style =  { [this.props.isPending? [styles.pendingParkingSpot, {borderRadius: 0*0.2*height}]:(this.props.isOccupied? [styles.occupiedParkingSpot, {borderRadius: 0*0.2*height}] : [styles.emptyParkingSpot, {borderRadius: 0*0.2*height}]), 
                            this.props.isParkingSpotHorizontal?{width:width, height:height}: {width:height, height:width} ,
                            this.props.isParkingSectionHorizontal? [styles.horizontalParkingSection]: [styles.verticalParkingSection],
                            this.props.subSectionIndex==2? (this.props.isParkingSpotHorizontal? styles.doubleSectionVertical : styles.doubleSectionHorizontal): null]}
                onPress={() => {
                                    this.props.getRequestedSpot(this.props.id,this.props.sectionId)

                                }}>
                <View style={this.props.isParkingSpotHorizontal? styles.horizontalIconView: styles.verticalIconView}> 
                    {this.props.isOccupied?
                    // <FontAwesome5   style={this.props.isParkingSpotHorizontal? styles.horizontalIcon: styles.verticalIcon}
                    //                 name={"car-side"} 
                    //                 size={0.8*height}
                    //                 color={"#1a1a1a"}
                    //                 />:null}
                    this.props.isParkingSpotHorizontal?
                    <Image   style={styles.image}
                        source={require('../helper/car2horizontal.png')}
                        />:
                    <Image   style={styles.image}
                        source={require('../helper/car2.png')}
                        />:null}
                </View>
            </TouchableOpacity>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    verticalParkingSection :{
        borderTopWidth:2,
        borderBottomWidth:2,
        borderTopColor: 'black', 
        borderBottomColor: 'black',
        
    },
    horizontalParkingSection :{
        borderLeftWidth:2,
        borderRightWidth:2,
        borderLeftColor: 'black', 
        borderRightColor: 'black',
    },
    doubleSectionVertical:{
        borderLeftWidth:4,
        borderLeftColor: 'black',
    },
    doubleSectionHorizontal:{
        borderTopWidth:4,
        borderTopColor: 'black', 

    },
    occupiedParkingSpot : {
    },
    emptyParkingSpot: {
    },
    pendingParkingSpot: {
        backgroundColor: '#BAB4B4',
    },
    image:{
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
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