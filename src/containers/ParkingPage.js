import React, {Component} from 'react';
import {View, Text, StyleSheet,ScrollView,TouchableOpacity, Modal} from 'react-native';
import ParkingLot from '../components/ParkingLot'
import Header from '../components/Header'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


class ParkingPage extends Component{
    state = {
        isModalVisible: false
    }
    setModalVisibility = (value) =>{
        this.setState({isModalVisible: value})
    }
    render(){
        return(
            <View style={styles.parkingView}>
                <Modal visible={this.state.isModalVisible} animationType='slide' transparent={true} > 
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
                </Modal>
                <Header title={"Parking Carrefour"} backButton={true} backButtonHandler={this.props.backButtonHandler}/>
                <View style={{flex:1}}>
                    <ParkingLot setModalVisibility={this.setModalVisibility} />
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
    }
    
})
export default ParkingPage