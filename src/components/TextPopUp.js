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
        top: 0,
        left: '0%',
        height: 40,
        width: '100%',
        backgroundColor: '#f1f1f1',
        borderRadius:0,
          
    },
    text:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:16,
        padding:4
    }
})
export default TextPopUp