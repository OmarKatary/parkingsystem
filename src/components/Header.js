import React, {Component} from 'react';
import {View, Text,TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
 
const Header = (props)=>{
    return(
        <View style={styles.headerView}>
            {props.backButton?
            <TouchableOpacity   onPress={ e => { props.backButtonHandler(false)}}
                                style={{flex:1}}>
                <Text style={{fontSize:12, padding:8}}> {"BACK"}</Text>
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
        height:'10%',
        width:'100%',
        backgroundColor:'#ffc34d',
        paddingTop: 0,
        justifyContent:"space-between",
        alignItems:"center",
        // shadowColor: '#232344',
        // shadowOffset:{width:20, height:50},
        // shadowOpacity:0.5,
        // shadowRadius: 5,
        // elevation:2,
        // position:'relative'

    },
    headerText:{
        fontSize:25,
        flex:3,
        textAlign:'center'
    },
    iconStyle:{

    }
})
 export default Header