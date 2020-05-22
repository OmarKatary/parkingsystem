import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import ParkingSection from './ParkingSection'
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';

class ParkingLot extends Component{
    state = {  pendingSpotExists:false}
    
    setPendingSpotExists = (value) => {
        this.setState({pendingSpotExists:value})
    }

    sectionGenerator = () => {
        parkingColumns = []
        sectionViewList = []
        for(i=1; i<=this.props.parking.gridColumns; i++){
            this.props.parking.parkingSections.map(section =>{
                if(section.sectionColumn == i){
                    sectionViewList.push(<ParkingSection    parkingId = {this.props.parking.id}
                                                            sectionId = {section.parkingSectionId}
                                                            parkingSpots = {section.parkingSpots}
                                                            key={section.parkingSectionID} 
                                                            isParkingSpotHorizontal={section.isParkingSpotHorizontal} 
                                                            isParkingSectionHorizontal={section.isParkingSectionHorizontal} 
                                                            isDoubleSectioned={section.isDoubleSectioned}
                                                            pendingSpotExists={this.state.pendingSpotExists}
                                                            setPendingSpotExists={this.setPendingSpotExists}
                                                            setModalVisibility={this.props.setModalVisibility}/>)
                }
            })
         
            parkingColumns.push(<View style={styles.parkingSection}>{sectionViewList.map(section =>{return(section)})}</View>)
            sectionViewList = []
        }
        return parkingColumns
    }

    render(){
    columnsList = this.sectionGenerator()
    return(
        <ReactNativeZoomableView
            maxZoom={1.5}
            minZoom={0.5}
            zoomStep={0}
            initialZoom={0.8}
            bindToBorders={false}
            style={{flex:1}}>
            {/* <ScrollView>
                <ScrollView horizontal= {true}> */}
                    {/* <View style={{margin:100, justifyContent:'center'}}> */}
                    <View style={styles.parkingLot}>
                            {columnsList.map((column)=>{ return column})}
                    </View>
                    {/* </View> */}
                {/* </ScrollView>
            </ScrollView> */}
        </ReactNativeZoomableView>
    )
    }
}

const styles = StyleSheet.create({

    parkingSection:{
        // flex:1
    },
    parkingLot : {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center'
    }
  })

export default ParkingLot