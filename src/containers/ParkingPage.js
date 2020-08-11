import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity, Modal, Animated} from 'react-native';
import ParkingLot from '../components/ParkingLot'
import Header from '../components/Header'
import CountCircle from '../components/CountCircle'
import TextPopUp from '../components/TextPopUp'
import ConfirmationDrawer from '../components/ConfirmationDrawer'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


class ParkingPage extends Component{
    state = {isModalVisible: false,
            fadeTextValue: new Animated.Value(1),
            pendingSpotExists:false,
            requestedSpotId : null,
            requestedSectionId : null,
            reserveApproved:false,
            openDrawer:false
        }

    setPendingSpotExists = (value) => {
        this.setState({pendingSpotExists:value})
    }

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

    reserveConfirmationYesButton = () =>{
        this.setState({reserveApproved:true,
                        pendingSpotExists:true,
                        openDrawer:false})
        setTimeout(()=>{ 
            this.setState({reserveApproved:false,
                          pendingSpotExists:false})
        },90000)
        
    }
    reserveConfirmationNoButton = () => {
        this.setState({openDrawer:false})
    }

    getRequestedSpot = (spotId, sectionId) =>{
        this.setState({
            requestedSpotId : spotId,
            requestedSectionId : sectionId,
            openDrawer: true
        })
    }

    fadeText = (val) => {
        Animated.timing(this.state.fadeTextValue, {
        toValue: val,
        duration: 1000,
        useNativeDriver:true
        }).start();
    };
    
    

    render(){
        return(
            <View style={styles.parkingView}>
                <Header title={this.props.parking.name} backButton={true} backButtonHandler={this.props.backButtonHandler}/>
                <View style={{flex:1}}>
                    {this.state.pendingSpotExists?
                    <View style={[styles.timer,]}>
                        <CountdownCircleTimer       
                            isPlaying
                            size = {47}
                            strokeWidth={8}
                            duration={90}
                            colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
                            // colors={[['#ffc34d']]}
                            >
                                {({ remainingTime, animatedColor }) => (
                                    <Animated.Text style={{ color: animatedColor }}>
                                    {remainingTime}
                                </Animated.Text>)}
                        </CountdownCircleTimer>
                    </View>
                    :
                    <Animated.View       style={[styles.animatedView,
                                                { opacity: this.state.fadeTextValue }]}>
                        <TextPopUp>Choose a parking spot.</TextPopUp>
                    </Animated.View>
                     }
                    <ParkingLot setModalVisibility={this.setModalVisibility} 
                                parking={this.props.parking} 
                                fadeTextFunction ={this.fadeText}
                                pendingSpotExists={this.state.pendingSpotExists}
                                setPendingSpotExists={this.setPendingSpotExists}
                                getRequestedSpot={this.getRequestedSpot}
                                requestedSpotId={this.state.requestedSpotId}
                                requestedSectionId={this.state.requestedSectionId}
                                reserveApproved={this.state.reserveApproved}/>

                    <Animated.View style={[styles.animatedView,
                                        //  { opacity: fadeAnim }
                                    ]}>
                        <CountCircle>{this.countFreeSpots(this.props.parking.parkingSections)}</CountCircle>
                    </Animated.View>
                    <ConfirmationDrawer openDrawer={this.state.openDrawer}
                                        yesButtonFunction={this.reserveConfirmationYesButton}
                                        noButtonFunction={this.reserveConfirmationNoButton}>
                                            Are you sure you want to reserve this spot?
                                            </ConfirmationDrawer>
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
    timer:{
        position: 'absolute',
        top: 0,
        right: 0,
        margin: 20,
        flex:1,
        elevation:5
    }

    
})
export default ParkingPage