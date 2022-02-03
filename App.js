import * as React from 'react';
import { Button, View , Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Customdash from './src/screens/Dash/CustomDash';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
      drawerContent={props => <Customdash {...props} /> }
      screenOptions={{ 
        drawerActiveBackgroundColor:'#aa18ea',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#333' ,
        drawerLabelStyle:{marginLeft:-20  ,fontSize:15 } }} >
      

        <Drawer.Screen name="Home" component={HomeScreen} 
        options={{
          drawerIcon:({color})=>(
            <IonIcon name="person-outline" size={22} color={color} />
  )
        }}
         />
        <Drawer.Screen name="All Cases" options={{
          drawerIcon:({color})=>(
            <IonIcon name="person-outline" size={22} color={color} />
  )
        }} component={NotificationsScreen} />
        <Drawer.Screen name="Pending Cases" options={{
          drawerIcon:({color})=>(
            <IonIcon name="person-outline" size={22} color={color} />
  )
        }} component={NotificationsScreen} />
        <Drawer.Screen name="Submit Cases" options={{
          drawerIcon:({color})=>(
            <IonIcon name="person-outline" size={22} color={color} />
  )
        }} component={NotificationsScreen} />


      </Drawer.Navigator>
    </NavigationContainer>
  );
}