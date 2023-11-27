import {View, Text,Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Registerscr from '../../screen/registerscr';
import Createpasswordscr from '../../screen/createpassword';
import { useNavigation } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Back from '../../image/angle-left.svg';

const Stacknavigation = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation(); 
  return (
    <Stack.Navigator>
      <Stack.Screen name="registerscr" component={Registerscr} options={{headerShown:false}}/>
      <Stack.Screen name="Createpasswordscr" component={Createpasswordscr}options={{
        headerShown:true,
        headerStyle:{
          backgroundColor:"white"

          
          
        },
        headerTitle:()=>{
          const Navigatefun =()=>{
            navigation.navigate('registerscr');

          }
          return(
            <View style={{flexDirection:"row"}}>
              
             <Pressable style={{justifyContent:"center"}} onPress={()=>Navigatefun()}>
             <Back height={20} width={20}/>

             </Pressable>
             
            
             
              
            <View style={{width:wp("75%"),height:hp("3.9%"),alignItems:"center", justifyContent:"center"}}> 
              <Text style={{color:"#473B4A",fontSize:16,fontWeight:"600",fontFamily:"Barlow-SemiBold"}}>Create Password</Text>
            </View>
            </View>

          );
        },
        headerBackVisible:false
        
      }} />
    </Stack.Navigator>
  );
};

export default Stacknavigation;
