import React, {Component} from 'react';
import { StyleSheet, View,Text,TouchableOpacity,Animated,Dimensions } from 'react-native';

class ConfirmationDrawer extends Component{ 

    state = {animatedLeftValue: new Animated.Value(0),
            isDrawerOpen:false}
       

    componentDidUpdate(){
        if(this.props.openDrawer){
            if(!this.state.isDrawerOpen)
                this.openDrawer()
        }
    }
    openDrawer = () => {
        let width = Math.round(Dimensions.get('window').width)
        let val =  Math.round(0.7*width)
        this.setState({isDrawerOpen:true})
        Animated.timing(this.state.animatedLeftValue, {
                toValue: val,
                duration: 1500,
                useNativeDriver:true
            }).start();
    }

    closeDrawer = () =>{
        let width = Math.round(Dimensions.get('window').width)
        let val =  Math.round(-0.7*width)
        this.setState({isDrawerOpen:false})
        Animated.timing(this.state.animatedLeftValue, {
                toValue: val,
                duration: 2000,
                useNativeDriver:true
            }).start();
    }
    render(){
        return(
            <Animated.View style={[styles.drawer, {translateX: this.state.animatedLeftValue}]}>
                <Text style={styles.text}>{this.props.children}</Text>
                <View style={styles.buttonsView} >
                    <TouchableOpacity style={styles.button} onPress={()=>{this.props.yesButtonFunction() 
                                                                            this.closeDrawer()}}>
                            <Text style={styles.text}>Yes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{ borderBottomRightRadius: 80/4,} ]}
                                            onPress={()=>{this.props.noButtonFunction() 
                                                    this.closeDrawer()}}>
                        <Text style={styles.text}>No</Text>
                    </TouchableOpacity>
                </View>   
            </Animated.View>
        )
    }
}
const styles = StyleSheet.create({
    drawer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        position: 'absolute',
        left: '-70%',
        bottom: 0,
        width: '70%',
        height: 120,
        backgroundColor: '#0B6C8E',
        borderTopRightRadius: 80/4,
        borderBottomRightRadius: 80/4,
        marginVertical: 20,
        
    },
    text:{
        flex:2,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:16,
        marginHorizontal:10,
        color: '#ffffff',
    },
    button:{
        flex:2,
        alignSelf: 'center',
        height: '100%',
        // width: '15%',
        backgroundColor:'#0A8AB5',
        borderLeftWidth:1
    },
    buttonsView:{
        flex:1,
        flexDirection:'row',
    }
})
 
export default ConfirmationDrawer