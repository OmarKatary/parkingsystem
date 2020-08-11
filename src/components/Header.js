import React, {Component} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 
const Header = (props)=>{
    return(
        <View elevation={5} style={styles.headerView}>
            {props.backButton?
            <TouchableOpacity   onPress={ e => { props.backButtonHandler(false)}}
                                style={{flex:1}}>
                <Text style={{fontSize:12, margin:8, color: '#ffffff' }}> {"BACK"}</Text>
            </TouchableOpacity>:<View style={{flex:1}}></View>}
            <Text style={styles.headerText}>{" "+props.title}</Text>
            <View style={{flex:1}}></View>
        </View>
    )
    
 }

const styles = StyleSheet.create({
    headerView:{
        // flex:1,
        flexDirection:'row',
        height:60,
        width:'100%',
        backgroundColor:'#05526c',
        // backgroundColor:'#136786',
        paddingTop: 0,
        justifyContent:"space-between",
        alignItems:"center",
        elevation:5,
        position:'relative'

    },
    headerText:{
        fontSize:25,
        flex:3,
        textAlign:'center',
        color: '#ffffff'
        
    },
    iconStyle:{

    }
})
 export default Header