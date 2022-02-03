import React from 'react';
import {View, StyleSheet ,  Text,ImageBackground , Image ,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer'
import IonIcon from 'react-native-vector-icons/Ionicons';


const Customdash = (props) => {
    return (
        <View style={{flex:1}} >

            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: "#8200d6" }} >
                <ImageBackground source={require('../Assests/back.jpg')} style={{padding:20}}  >
                    <Image source={ require('../Assests/profile.jpg') } style={{height:80 , width:80, borderRadius:40, marginBottom:10,
                    marginTop:5
                    }}  />
                    <Text style={{color:'#fff',fontSize:18}} >Om Prakash</Text>

                </ImageBackground>
                <View style={{flex:1, backgroundColor:"#fff" ,paddingTop:10 }} >
                <DrawerItemList {...props}  />

                </View>
            </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:1, borderTopColor:'#ccc' }} >
                {/* Share  */}
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}  >
                    <View style={{flexDirection:'row' , alignItems:'center',justifyContent:'flex-start' }} >
                        <IonIcon name="share-social-outline" size={22} />
                        <Text style={{
                            fontSize:15,
                            marginLeft:15
                            
                        }} >Tell A Friend</Text>
                    </View>

                </TouchableOpacity>

                {/* Logout */}
                <TouchableOpacity onPress={()=>{}} style={{paddingVertical:15}}  >
                    <View style={{flexDirection:'row', alignItems:'center' ,justifyContent:'flex-start'  }} >
                        <IonIcon name="exit-outline" size={22} />
                        <Text style={{
                            fontSize:15,
                            marginLeft:15
                            
                        }} >Log Out</Text>
                    </View>

                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Customdash;
