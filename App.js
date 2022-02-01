import react from "react";
import { Text, StyleSheet , View } from "react-native";
import CustomComp from "./src/screens/CustomeComp";
import FlatListDemo from "./src/screens/FlatListDemo";
import MyFlex from "./src/screens/MyFlex";
import Myinputs from "./src/screens/MyInputs";
import Props from "./src/screens/Props";

const App = () => {

  return (
    <View>
    <Text style={styles.textStyle}>
      
      Myself Om Prakash 
    </Text>
    <CustomComp />
    {/* <FlatListDemo/> */}
    <Myinputs/>
    <MyFlex/>

    <Props title="Name" />
    <Props title="Prakash" />


    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "red",
    marginTop:100
  },
  btnStyle:{
    color:"green",
    marginTop:100
  }
});

export default App;
