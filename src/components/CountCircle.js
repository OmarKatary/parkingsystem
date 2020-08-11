import React, {Component} from 'react';
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native';

class CountCircle extends Component{ 
    render(){
        return(
            <View style={styles.circle}>
                <Text style={styles.number}>{this.props.children}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    circle:{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        backgroundColor: '#05526c',
        // borderWidth: 2,
        borderRadius: 60/2,
        margin: 20,
        justifyContent: 'flex-end',
        shadowColor:'#05526c'
        
    },
    number:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:27,
        color: '#ffffff'
    }
})

export default CountCircle