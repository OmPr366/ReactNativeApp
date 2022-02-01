// In App.js in a new project

import * as React from 'react';
import { View, Text ,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import myFlex from './src/screens/MyFlex';
import Myinputs from './src/screens/MyInputs';
import Flatlistdemo from './src/screens/FlatListDemo';

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='My Flex' onPress={()=>{ navigation.navigate('MyFlex') }} ></Button>
      <Button title='MyInput' onPress={()=>{ navigation.navigate('MyInput') }} ></Button>
      <Button title='FlatList' onPress={()=>{ navigation.navigate('FlatList') }} ></Button>

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