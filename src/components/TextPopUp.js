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
        top: 20,
        left: '10%',
        width: '80%',
        backgroundColor: '#f1f1f1aa',
        borderRadius:10,
          
    },
    text:{
        flex:1,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize:18,
        padding:4
    }
})
export default TextPopUp