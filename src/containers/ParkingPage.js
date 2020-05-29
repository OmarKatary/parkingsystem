import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity, Modal, Animated} from 'react-native';
import ParkingLot from '../components/ParkingLot'
import Header from '../components/Header'
import CountCircle from '../components/CountCircle'
import TextPopUp from '../components/TextPopUp'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


class ParkingPage extends Component{
    state = {isModalVisible: false,
            fadeValue: new Animated.Value(1) }

    setModalVisibility = (value) =>{
        this.setState({isModalVisible: value})
    }

    countFreeSpots = (sections) =>{
        let count = 0
        if(sections !== undefined){
        sections.forEach(section => {
            section.parkingSpots.forEach(parking =>{
                if(!parking.isOccupied){
                    count++
                }
            })
        
        });
    }
        return count
    }

    fadeOut = (val) => {

        Animated.timing(this.state.fadeValue, {
        toValue: val,
        duration: 1000,
        useNativeDriver:true
        }).start();
    };

    render(){
        return(
            <View style={styles.parkingView}>
                {/* <Modal visible={this.state.isModalVisible} animationType='slide' transparent={true} > 
                    <View style={styles.modalBlurBackground}>
                        <View style={styles.modalContainer}>
                            <FontAwesome5   name={"times"} 
                                            size={25}
                                            color={"#1a1a1a"}      
                                            onPress={()=>{this.setModalVisibility(false)}}/>
                            <Text>Are you sure you want to temporarily reserve this spot?</Text>
                            <View style={styles.buttonsView}>
                                <TouchableOpacity style={styles.button}
                                                  onPress={()=>{this.setModalVisibility(false)}}>
                                    <Text>Yes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity   style={styles.button}
                                                    onPress={()=>{this.setModalVisibility(false)}}>
                                    <Text>No</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> */}

                <Header title={this.props.parking.name} backButton={true} backButtonHandler={this.props.backButtonHandler}/>
                <View style={{flex:1}}>
                    <Animated.View       style={[
                                                styles.animatedView,
                                                { opacity: this.state.fadeValue }
                                                ]}>
                        <TextPopUp>Please choose a parking spot to be reserved for the following 90 seconds.</TextPopUp>
                    </Animated.View>
                    <ParkingLot setModalVisibility={this.setModalVisibility} parking={this.props.parking} fadeTextFunction ={this.fadeOut}/>
                    <Animated.View style={[styles.animatedView,
                                        //  { opacity: fadeAnim }
                                    ]}>
                        <CountCircle>{this.countFreeSpots(this.props.parking.parkingSections)}</CountCircle>
                    </Animated.View>
         
                </View> 
            </View>
            
        )
    }
}
const styles = StyleSheet.create({
    parkingView :{
        height:'100%'
    },
    modalBlurBackground:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#000000aa'
    },
    modalContainer:{
        backgroundColor:'#ffffff',
        margin: 50,
        padding: 30,
        borderRadius:10,
    },
    buttonsView:{
        flexDirection : 'row',
        justifyContent: 'space-around',
        marginTop:20
        
    },
    button:{
        borderRadius:10,
        elevation:2,
        paddingVertical:5,
        paddingHorizontal:35
    },
    animatedView:{
        flex:1,
        elevation:5
    },

    
})
export default ParkingPage