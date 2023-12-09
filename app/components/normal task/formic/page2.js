import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Userdate = ({route}) => {
    const {UserName,FirstName,lastName,email,password,MobileNumber}= route.params?.UserValue;
  return (
    <View style={{flex:1,marginHorizontal:10,marginVertical:10,justifyContent:"center"}}>
      <View style={{alignItems:"center"}}>
      <Text style={styles.title}>USER ENTER VALUE</Text>
      <View style={{marginLeft:50,marginTop:20}}>
      <Text style={styles.usertext}>🎯 UserName : {UserName}</Text>
      <Text style={styles.usertext}>🎯 FirstName : {FirstName}</Text>
      <Text style={styles.usertext}>🎯 LastName : {lastName}</Text>
      <Text style={styles.usertext}>🎯 Email : {email}</Text>
      <Text style={styles.usertext}>🎯 Password : {password}</Text>
      <Text style={styles.usertext}>🎯 MobileNumber : {MobileNumber}</Text>
      </View>
    
      </View>

      
    
    </View>
  )
}

export default Userdate;

const styles = StyleSheet.create({
  title:{
   color:"red",
   fontSize:30,
   fontWeight:"700",

  },
  usertext:{
    fontSize:20,
    color:"blue",
    fontWeight:"400",
    textTransform:'capitalize'
  }
})