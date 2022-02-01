import React from 'react';
import {View, StyleSheet} from 'react-native';

const myFlex = () => {
    return (
        <View style={{flex:1,  flexDirection:"row" ,
        alignItems:"center",  flexWrap:"wrap" ,
        justifyContent:"center" 
         }} >
            <View style={{width:400, height:400 , backgroundColor:"red" }}  ></View>
            <View style={{width:400, height:400 , backgroundColor:"orange" }}  ></View>

            <View style={{width:400, height:400 , backgroundColor:"blue" }}  ></View>

            <View style={{width:400, height:400 , backgroundColor:"green" }}  ></View>

            {/* <View style={{flex:1,backgroundColor:red}} ></View> */}
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default myFlex;
