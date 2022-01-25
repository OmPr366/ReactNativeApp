import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

const Flatlistdemo = () => {
    const names = [
        {
            name:"Prakash"
        },
        {
            name:"Prakash2"
        },
        {
            name:"Prakash3"
        },
        {
            name:"Prakash4"
        },
        {
            name:"Prakash5"
        },
    ]
    return (
        <View>
            <FlatList data={names} renderItem={(element)=> {return element.item.name} } />
        </View>
    );
}

const styles = StyleSheet.create({})

export default Flatlistdemo;
