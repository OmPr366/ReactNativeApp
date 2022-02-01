import React from "react";
import { View,Text, StyleSheet, FlatList , Button } from "react-native";

const Flatlistdemo = ({navigation}) => {
  const names = [
    {
      name: "Prakash",
    },
    {
      name: "Prakash2",
    },
    {
      name: "Prakash3",
    },
    {
      name: "Prakash4",
    },
    {
      name: "Prakash5",
    },
  ];
  return (
    <View>
      <FlatList
        data={names}
        // horizontal
        // numColumns={2}
        
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return( <Text style={styles.textSyle} >{item.name}</Text>) 
        }}

        
      /><Button title='MyInput' onPress={()=>{ navigation.navigate('MyInput') }} ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textSyle: {
    fontSize: 40,
    padding: 40,
    backgroundColor: "red",
    margin: 20,
    color: "white",
  },
});

export default Flatlistdemo;
