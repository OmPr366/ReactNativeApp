import React from "react";
import { View, StyleSheet, Button } from "react-native";

const Props = ({ title }) => {
  return (
    <View style={styles.btnStyle}>
      <Button title={title} color="#4dced8" onPress={()=> console.warn("Pressed") } touchSoundDisabled="false"   />
    </View>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    color: "red",
    marginTop: 10,
  },
});

export default Props;
