import { StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Validation = () => {
    const[name,setname]=useState("");
    // useEffect(()=>{
        
    // })
    // const validation =()=>
    // {

    // }
  return (
    <View style={styles.container}>

      <View style={styles.Titlecontainer}>
        <Text style={styles.validationtitle}>
          Validation and Error Handling
        </Text>
      </View>

      <View style={styles.lablecontainer}>
        <Text style={styles.labeltext}>Username</Text>
      </View>

      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Enter Username"
          autoCapitalize={'characters'}
          maxLength={10}
          keyboardType="default"
          autoCorrect={false}
          value={name}
          onChange={setname}
          style={styles.inputbox}
        />
      </View>

      <TouchableOpacity 
      style={styles.btncontainer}
      > 
      <Text style={styles.btntext}>Click</Text>
      </TouchableOpacity>
       
      
    </View>
  );
};

export default Validation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  validationtitle: {
    fontSize: 25,
    fontWeight: '700',
    color: 'red',
  },
  inputbox: {
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 10,
  },
  inputcontainer: {
    width: '75%',
    height: '10%',
    justifyContent: 'center',
    marginHorizontal: 50,
    //    backgroundColor:"green",
  },
  Titlecontainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  lablecontainer: {
    // backgroundColor:"red",
    marginLeft: 50,
    width: '75%',
    height: '5%',
    alignItems: 'flex-start',
  },
  labeltext: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  btncontainer:{
    marginTop:10,
    marginHorizontal:130,
    backgroundColor:"green",
    width:"30%",
    height:"5%",
    borderRadius:10,
    justifyContent:"center"
    // borderWidth:2,
    // borderColor:"green"
  },
  btntext:{
    color:"white",
    textAlign:"center",
    fontSize:20,
    fontWeight:"700"

  }
});
