import React, {Component} from 'react';
import { StyleSheet, View,ScrollView,Text, Dimensions,PanResponder, Animated } from 'react-native';
import ParkingSection from './ParkingSection'
import {
    PanGestureHandler,
    PinchGestureHandler,
    RotationGestureHandler,
    State,
  } from 'react-native-gesture-handler';

class ParkingLot extends Component{
    state = {   pendingSpotExists:false,
                // allowPan:false  
            }

    panRef = React.createRef();
    pinchRef = React.createRef();

    constructor(props) {
      super(props);
  
      /* Pinching */
      this._baseScale = new Animated.Value(1);
      this._pinchScale = new Animated.Value(1);
      this._scale = Animated.multiply(this._baseScale, this._pinchScale);
      this._lastScale = 1;
      this._onPinchGestureEvent = Animated.event(
        [{ nativeEvent: { scale: this._pinchScale } }],
        { useNativeDriver: true }
      );
      /* Paning */
      this._translateX = new Animated.Value(0);
      this._translateY = new Animated.Value(0);
      this._lastOffset = { x: 0, y: 0 };
      this._onGestureEvent = Animated.event(
        [
          {
            nativeEvent: {
              translationX: this._translateX,
              translationY: this._translateY,
            },
          },
        ],
        { useNativeDriver: true }
      );
    }

    _onPinchHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE ) {
            this.props.fadeTextFunction(0)
            this._lastScale *= event.nativeEvent.scale
            this._baseScale.setValue(this._lastScale)
            this._pinchScale.setValue(1)
          if(this._lastScale <  1){
            this.props.fadeTextFunction(1)
            this._lastScale = 1
            this._baseScale.setValue(this._lastScale )
            this._pinchScale.setValue(1)
            this._translateX.setOffset(0);
            this._translateX.setValue(0);
            this._translateY.setOffset(0);
            this._translateY.setValue(0);
            this.setState({allowPan:false})
    
          }else {
            if(this._lastScale > 2 ){
                this._lastScale = 2
                this._baseScale.setValue(this._lastScale)
                this._pinchScale.setValue(1)
              }
              this.setState({allowPan:false})
          }
          
      }
    }
      _onHandlerStateChange = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const screenWidth = Math.round(Dimensions.get('window').width);
            const screenHeight = Math.round(Dimensions.get('window').height);

                this._lastOffset.x += (event.nativeEvent.translationX);
                this._lastOffset.y += (event.nativeEvent.translationY);
                if(this._lastOffset.x < -1* screenWidth * ((this._lastScale-1)*0.25)){
                    this._lastOffset.x =  -1* screenWidth * ((this._lastScale-1)*0.25)+1
                    
                }else if(this._lastOffset.x > screenWidth * ((this._lastScale-1)*0.25)){
                    this._lastOffset.x =  screenWidth * ((this._lastScale-1)*0.25)+1

                }

                if(this._lastOffset.y < -1* screenHeight * ((this._lastScale-1)*0.25)){
                    this._lastOffset.y =  -1* screenHeight * ((this._lastScale-1)*0.25)+1

                }else if(this._lastOffset.y > screenHeight * ((this._lastScale-1)*0.25)){
                    this._lastOffset.y =  screenHeight * ((this._lastScale-1)*0.25)+1
                }
             
                this._translateX.setOffset(this._lastOffset.x);
                this._translateX.setValue(0);
                this._translateY.setOffset(this._lastOffset.y);
                this._translateY.setValue(0);

        }
      };

    setPendingSpotExists = (value) => {
        this.setState({pendingSpotExists:value})
    }

    sectionGenerator = () => {
        let parkingColumns = []
        let sectionViewList = []
        let scale = this.getWidthRatio(this.props.parking)
        for(let i=1; i<=this.props.parking.gridColumns; i++){
            this.props.parking.parkingSections.map((section, index) =>{
                if(section.sectionColumn == i){
                    sectionViewList.push(<ParkingSection    parkingId = {this.props.parking.key}
                                                            sectionId = {index}
                                                            parkingSpots = {section.parkingSpots}
                                                            key={section.parkingSectionID} 
                                                            isParkingSpotHorizontal={section.isParkingSpotHorizontal} 
                                                            isParkingSectionHorizontal={section.isParkingSectionHorizontal} 
                                                            isDoubleSectioned={section.isDoubleSectioned}
                                                            pendingSpotExists={this.state.pendingSpotExists}
                                                            setPendingSpotExists={this.setPendingSpotExists}
                                                            setModalVisibility={this.props.setModalVisibility}
                                                            spotScale={scale} />)
                }
            })
         
            parkingColumns.push(<View style={styles.parkingSection}>{sectionViewList.map(section =>{return(section)})}</View>)
            sectionViewList = []
        }
        return parkingColumns
    }

    render(){
    let columnsList = this.sectionGenerator()
    return( 
        <PanGestureHandler
        // enabled={this.state.allowPan}
        // minDeltaX ={5}
        shouldCancelWhenOutside={true}
        maxPointers={1}
        ref={this.panRef}
        {...this.props}
        onGestureEvent={this._onGestureEvent}
        simultaneousHandlers={this.pinchRef}
        onHandlerStateChange={this._onHandlerStateChange}>
            <Animated.View style={styles.wrapper}>
                <PinchGestureHandler
                    minPointers={2}
                    ref={this.pinchRef}
                    simultaneousHandlers={this.panRef}
                    onGestureEvent={this._onPinchGestureEvent}
                    onHandlerStateChange={this._onPinchHandlerStateChange}>
                    
                        <Animated.View style={[{
                                transform: [
                                { scale: this._scale },
                                { translateX: this._translateX },
                                { translateY: this._translateY },
                                ],
                            },]}>

                    <View style={styles.parkingLot}>
                            {columnsList.map((column)=>{ return column})}
                    </View>

                    </Animated.View>
              </PinchGestureHandler>
            </Animated.View>
    </PanGestureHandler>    
        )
    }

    getWidthRatio = (parking)=>{
       if(Object.keys(parking).length!==0){
        const screenWidth = Math.round(Dimensions.get('window').width);
        const screenHeight = Math.round(Dimensions.get('window').height);

        let {parkingSections, gridRows, gridColumns} = parking
        let scaleWidth, scaleHeight

        let rows = []
        let colHeight = []
        let colWidth = []
        for(let r=0; r<gridRows; r++){
            rows.push(0)
        }
        for(let c=0; c<gridColumns; c++){
            colHeight.push(0)
            colWidth.push(0)
        }

        for(let i=0; i< parkingSections.length; i++){
            let numberOfSpots = parkingSections[i].parkingSpots.length
            
            let r = parkingSections[i].sectionRow-1
            let c = parkingSections[i].sectionColumn-1

            if(parkingSections[i].isDoubleSectioned){
                numberOfSpots = numberOfSpots/2
            }

            if(parkingSections[i].isParkingSectionHorizontal){
                if(parkingSections[i].isParkingSpotHorizontal){
                    rows[r] += numberOfSpots * 2
                    if(parkingSections[i].isDoubleSectioned){
                        colHeight[c] += 2*1
                    }else{
                        colHeight[c] += 1*1
                    }
                    
                }
                else{
                    rows[r] += numberOfSpots * 1
                    if(parkingSections[i].isDoubleSectioned){
                        colHeight[c] += 2*2
                    }else{
                        colHeight[c] += 1*2
                    }
                }
            }
            else{
                if(parkingSections[i].isParkingSpotHorizontal){
                    colHeight[c] += numberOfSpots * 1
                    if(parkingSections[i].isDoubleSectioned){
                        rows[r] += 2 * 2
                    }else{
                        rows[r] += 2
                    }
                }
                else{
                    colHeight[c] += numberOfSpots * 2
                    if(parkingSections[i].isDoubleSectioned){
                        rows[r] += 2 * 1
                    }else{
                        rows[r] += 1
                    }
                }
            }
        }
        let maxWidth = 1
        let maxHeight = 1
        for(let r=0; r<gridRows; r++){
            if(maxWidth < rows[r])
                maxWidth = rows[r]
        }
        for(let c=0; c<gridColumns; c++){
            if(maxHeight < colHeight[c])
                maxHeight = colHeight[c]
        }
        scaleWidth = (screenWidth-gridColumns*25)/maxWidth
        scaleHeight = (screenHeight-320)/maxHeight
        let smallerScale = scaleWidth<=scaleHeight? scaleWidth:scaleHeight
        // console.log("maxWidth: ",maxWidth)
        // // console.log("rows: ",rows)
        // scale = (screenWidth-gridColumns*25)/maxWidth
        // console.log("scale: ",scale)
        return smallerScale
        
        }
    }
        
}


const styles = StyleSheet.create({

    parkingSection:{
        // margin:20
        
    },
    parkingLot : {
        // flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        width : '100%',
        height : '100%',
        // backgroundColor:'#f1f1f1',
        paddingHorizontal:20,
        paddingTop: 80,
        paddingBottom: 20,
    }
  })

export default ParkingLot