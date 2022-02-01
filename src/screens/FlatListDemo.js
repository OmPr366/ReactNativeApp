import React from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";

const Flatlistdemo = () => {
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
      />
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
