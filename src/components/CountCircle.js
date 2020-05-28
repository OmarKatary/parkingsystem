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
        width: 80,
        height: 80,
        backgroundColor: '#ffc34d',
        borderRadius: 80/2,
        margin: 20,
        justifyContent: 'flex-end',
        shadowColor:'#ffc34d'
        
    },
    number:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:45,
    }
})

export default CountCircle