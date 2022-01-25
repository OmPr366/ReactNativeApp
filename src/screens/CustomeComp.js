import react from "react";
import { Text,StyleSheet } from "react-native"

const CustomComp =  ()=>{
  return <Text style={styles.textStyle} > This is Custom Component</Text>
}

const styles =  StyleSheet.create({
  textStyle: {
    color: "blue",
  },
});


export default CustomComp;