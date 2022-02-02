// In App.js in a new project

import * as React from "react";
import { View, Text, Button, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import myFlex from "./src/screens/MyFlex";
import Myinputs from "./src/screens/MyInputs";
import Flatlistdemo from "./src/screens/FlatListDemo";
import MyUseState from "./src/screens/MyUseState";
import Validation from "./src/screens/Validation";

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      {/* <TextInput
        maxLength={5}
        style={{ borderColor: "skyblue", margin: 15, borderWidth: 2 }}
      ></TextInput> */}

      {/* <MyUseState/> */}
      <Validation/> 
      {/* <ScrollView horizontal={true} >
        <View style={{width:200, height:200, backgroundColor:"red" }}/>
        <View style={{width:200, height:200, backgroundColor:"green" }}/>

        <View style={{width:200, height:200, backgroundColor:"orange" }}/>

        <View style={{width:200, height:200, backgroundColor:"blue" }}/>
        <View style={{width:200, height:200, backgroundColor:"#c4c4cd" }}/>

        <View style={{width:200, height:200, backgroundColor:"blue" }}/>
        <View style={{width:200, height:200, backgroundColor:"#2247af" }}/>
        <View style={{width:200, height:200, backgroundColor:"#40b4b4" }}/>



      </ScrollView> */}
      {/* <Button title='My Flex' onPress={()=>{ navigation.navigate('MyFlex') }} ></Button>
      <Button title='MyInput' onPress={()=>{ navigation.navigate('MyInput') }} ></Button>
      <Button title='FlatList' onPress={()=>{ navigation.navigate('FlatList') }} ></Button> */}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MyFlex" component={myFlex} />
        <Stack.Screen name="MyInput" component={Myinputs} />
        <Stack.Screen name="FlatList" component={Flatlistdemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
