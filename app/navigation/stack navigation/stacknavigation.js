import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Registerscr from '../../screen/registerscr';
import Createpasswordscr from '../../screen/createpassword';

const Stacknavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="registerscr" component={Registerscr} options={{headerShown:false}}/>
      <Stack.Screen name="Createpasswordscr" component={Createpasswordscr} />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
