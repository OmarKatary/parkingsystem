import React, {Component, useRef} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity, Modal, Animated} from 'react-native';
import ParkingLot from '../components/ParkingLot'
import Header from '../components/Header'
import CountCircle from '../components/CountCircle'
import TextPopUp from '../components/TextPopUp'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


class ParkingPage extends Component{
    state = {isModalVisible: false}

    // fadeAnim = useRef(new Animated.Value(0)).current;
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         fadeAnim: new Animated.Value(0)
    //       }
    // }

    setModalVisibility = (value) =>{
        this.setState({isModalVisible: value})
    }
    // fadeIn = () => {
    //     // Will change fadeAnim value to 1 in 5 seconds
    //     Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 2000
    //     }).start();
    // };

    // fadeOut = () => {
    //     // Will change fadeAnim value to 0 in 5 seconds
    //     Animated.timing(fadeAnim, {
    //     toValue: 0,
    //     duration: 2000
    //     }).start();
    // };
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
                                                // { opacity: fadeAnim }
                                                ]}>
                        <TextPopUp>Please choose a parking spot to be reserved for the following 90 seconds.</TextPopUp>
                    </Animated.View>
                    <ParkingLot setModalVisibility={this.setModalVisibility} parking={this.props.parking}/>
                    <Animated.View style={[styles.animatedView,
                                        //  { opacity: fadeAnim }
                                    ]}>
                        <CountCircle>50</CountCircle>
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