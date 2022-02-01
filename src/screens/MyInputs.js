import React from 'react';
import {View, StyleSheet,Text, TextInput} from 'react-native';

const Myinputs = () => {
    
    return (
        <View style={{fontSize:40}} >
            <Text style={{fontSize:40}} >We are handling text inputs</Text>
            <TextInput placeholder="Enter your Name" style={styles.inputStyle} onChangeText={(e)=>{ console.error(e) }}  ></TextInput>
            <TextInput placeholder="Enter your Name" secureTextEntry style={styles.inputStyle} onChangeText={(e)=>{ console.error(e) }}  ></TextInput>
            
        </View>
    );
}

const styles = StyleSheet.create({
    inputStyle:{
        height:120,
        fontSize:40,
        color:"blue",
        backgroundColor:"#c4c4cd"
    }
})

export default Myinputs;

