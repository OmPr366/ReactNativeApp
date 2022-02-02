import React from 'react';
import {View, StyleSheet,TextInput , Button} from 'react-native';

const Validation = () => {
    return (
        <View  >

            <TextInput maxLength={5}
            style={{borderColor:'skyblue', margin:15,borderWidth:2}} />
            <TextInput maxLength={5} keyboardType={'name-phone-pad'}
            style={{borderColor:'skyblue', margin:15,borderWidth:2}} />
            <TextInput maxLength={10}
            keyboardType={'numeric'}
            style={{borderColor:'skyblue', margin:15,borderWidth:2}} />

            <Button title="Submit"/>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default Validation;
