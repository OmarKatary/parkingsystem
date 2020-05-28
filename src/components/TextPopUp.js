import React, {Component} from 'react';
import { StyleSheet, View,Text } from 'react-native';

class TextPopUp extends Component{ 
    render(){
        return(
            <View style={styles.popUp}>
                <Text style={styles.text}>{this.props.children}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    popUp:{
        position: 'absolute',
        top: 100,
        left: '10%',
        width: '80%',
        backgroundColor: '#f1f1f1aa',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',        
    },
    text:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:18,
    }
})
export default TextPopUp