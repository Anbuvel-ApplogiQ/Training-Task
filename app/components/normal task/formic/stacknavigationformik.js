// import {View, Text,Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import Basic from './formik';
import Userdate from './page2';
import BacicinfoScr from '../../../screen/Bacicinfo';

const Stacknavigationformik = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
    <Stack.Screen name="page1" component={Basic} options={{headerShown:false}}/>
    <Stack.Screen name="page2" component={Userdate} options={{headerShown:false}}/>
    
    </Stack.Navigator>
  )
}

export default Stacknavigationformik