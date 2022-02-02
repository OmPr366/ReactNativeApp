import React,{useState} from 'react';
import {View, StyleSheet ,Button ,Text } from 'react-native';

const MyUseState = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>{count}</Text>
            <Button title='Click' onPress={()=> setCount(count+1) } />
        </View>
    );
}

const styles = StyleSheet.create({})

export default MyUseState;
