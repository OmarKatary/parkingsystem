import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text} from 'react-native';
import ParkingSection from './ParkingSection'

class ParkingLot extends Component{
    state = {   gridRows: 2,
                gridColumns:3,
                pendingSpotExists:false,
                parkingSections:
                [   {parkingSectionID: 1,
                    isParkingSectionHorizontal: false,
                    isParkingSpotHorizontal: false,
                    isDoubleSectioned: true,
                    sectionColumn: 1,
                    sectionRow: 1,
                    },
                    {parkingSectionID: 2,
                    isParkingSectionHorizontal: false,
                    isParkingSpotHorizontal: false,
                    isDoubleSectioned: true,
                    sectionColumn: 2,
                    sectionRow: 2,
                    },
                    {parkingSectionID: 3,
                    isParkingSectionHorizontal: true,
                    isParkingSpotHorizontal: true,
                    isDoubleSectioned: true,
                    sectionColumn: 2,
                    sectionRow: 1,
                    },
                    {parkingSectionID: 4,
                    isParkingSectionHorizontal: false,
                    isParkingSpotHorizontal: false,
                    isDoubleSectioned: true,
                    sectionColumn: 1,
                    sectionRow: 2,
                    }
                ]
    }
    setPendingSpotExists = (value) => {
        this.setState({pendingSpotExists:value})
    }

    sectionGenerator = () => {
        parkingColumns = []
        sectionViewList = []
        for(i=1; i<=this.state.gridColumns; i++){
            this.state.parkingSections.map(section =>{
                if(section.sectionColumn == i){
                    sectionViewList.push(<ParkingSection    key={section.parkingSectionID} 
                                                            isParkingSpotHorizontal={section.isParkingSpotHorizontal} 
                                                            isParkingSectionHorizontal={section.isParkingSectionHorizontal} 
                                                            isDoubleSectioned={section.isDoubleSectioned}
                                                            pendingSpotExists={this.state.pendingSpotExists}
                                                            setPendingSpotExists={this.setPendingSpotExists}/>)
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
        <ScrollView horizontal= {true} maximumZoomScale={5} minimumZoomScale={0.5} scrollEnabled={true}>
            <View style={styles.parkingLot}>
                    {columnsList.map((column)=>{ return column})}

            </View>
        </ScrollView>
    )
    }
}

const styles = StyleSheet.create({

    parkingSection:{
        flex:1,
        margin:20
    },
    parkingLot : {
       flex:1,
       flexDirection: 'row'
    }
  })

export default ParkingLot