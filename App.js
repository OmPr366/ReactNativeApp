import react from "react";
import { Text, StyleSheet , View } from "react-native";
import CustomComp from "./src/screens/CustomeComp";

const App = () => {
  return (
    <View>
    <Text style={styles.textStyle}>
      
      Myself Om Prakash 
    </Text>
    <CustomComp />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop:100
  },
});

export default App;
