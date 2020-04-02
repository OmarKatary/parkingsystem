import React from 'react';
import { StyleSheet, Text,TextInput, View, ShadowPropTypesIOS } from 'react-native';

const SearchBar = (props) =>{
    return (<View style={styles.searchBar}>
                <TextInput value='Search...'/>
            </View>)
}

const styles = StyleSheet.create({

    searchBar : {
        flex:1,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        backgroundColor: "white",
        position: 'absolute',
        width: '80%',
        height: 50,
        alignSelf: 'center',
        marginTop: 30
    }
  })
  
export default SearchBar