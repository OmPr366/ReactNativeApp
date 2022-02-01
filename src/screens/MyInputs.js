import React from 'react';
import {View, StyleSheet,Text, TextInput ,Button } from 'react-native';

const Myinputs = ({navigation}) => {
    
    return (
        <View style={{fontSize:40}} >
            <Text style={{fontSize:40}} >We are handling text inputs</Text>
            <TextInput placeholder="Enter your Name" style={styles.inputStyle} onChangeText={(e)=>{ console.error(e) }}  ></TextInput>
            <TextInput placeholder="Enter your Name" secureTextEntry style={styles.inputStyle} onChangeText={(e)=>{ console.error(e) }}  ></TextInput>
            <Button title='FlatList' onPress={()=>{ navigation.navigate('FlatList') }} ></Button>
            
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

