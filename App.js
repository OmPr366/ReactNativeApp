import react from "react";
import { Text,StyleSheet } from "react-native"

const App =  ()=>{
  return <Text style={styles.textStyle} > Myself Om Prakash</Text>
}

const styles =  StyleSheet.create({
  textStyle: {
    color: "red",
  },
});


export default App;