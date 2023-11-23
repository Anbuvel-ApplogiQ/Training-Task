import { StyleSheet, Text, View,Pressable } from 'react-native'
import React, { useState } from 'react';
import Smalldown from '../image/angle-small-down.svg';
import DatePicker from 'react-native-date-picker';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Datepicker = ({error}) => {

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  let month = date.toISOString().split('T')[0];
//   console.log(month);
  let day = month.split('-');
  // console.log(day);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleConfirm = selectedDate => {
    setOpen(false);
    setDate(selectedDate);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <View>
      {/* {Dob ? ( */}
        <View style={styles.container}>
          <Pressable onPress={handleOpen} style={[styles.inputcontainer,error&&styles.errorinputcontainer]}>
            <Text style={styles.text}>{day[2]}</Text>
            <Smalldown height={20} width={20} />
          </Pressable>

          <Pressable  onPress={handleOpen} style={[styles.inputcontainer,error&&styles.errorinputcontainer]}>
            <Text  style={styles.text}>{day[1]}</Text>
            <Smalldown height={20} width={20} />
          </Pressable>

          <Pressable  onPress={handleOpen} style={[styles.inputcontainer,error&&styles.errorinputcontainer]}>
            <Text  style={styles.text}>{day[0]}</Text>
            <Smalldown height={20} width={20} />
          </Pressable>

          
        </View>
        {error && (
        <Text style={{marginTop: 7,marginLeft:20, color: "red", fontSize: 15}}>
          {error}
        </Text>
      )}
      {/* ) : null} */}
      {/* {open && (
            <> */}
              <DatePicker
                mode="date"
                modal
                open={open}
                date={date}
                
                maximumDate={new Date()}
                onDateChange={setDate}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
                
                

                
              />
            
              {/* <Pressable onPress={handleCancel} style={styles.confirmbtn}>
              <Text style={styles.confirmtext}>comfirm</Text>
              </Pressable>
              
            </>
          )} */}
    </View>
  );
};

export default Datepicker;

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        // width:"80%",
        // height:56,
        height: hp('8%'),
        width: wp('90%'),
        // backgroundColor:"blue",

        marginTop:-25



    },
    inputcontainer:{
        // width:"40%",
        width: wp('28.7%'),
        
        backgroundColor:"white",
        marginRight:8,
        flexDirection:"row",
        justifyContent:"space-around",
        padding:16,
        borderRadius:16,
        borderWidth:1,
        borderColor:"#EEEDEE"
        // borderColor:"red"
    },
    errorinputcontainer:{
        // width:"40%",
        width: wp('28.7%'),
        
        backgroundColor:"white",
        marginRight:8,
        flexDirection:"row",
        justifyContent:"space-around",
        padding:16,
        borderRadius:16,
        borderWidth:1,
        borderColor:"#EEEDEE"
        // borderColor:"red"

    },
    text:{
        fontSize:14,
        color:'#473B4A',
        fontWeight:"400"
    },
    confirmbtn:{
        marginTop:10,
        marginLeft:"60%",
        borderRadius:16,
        borderWidth:1,
        // width:"25%",
        width: wp('25%'),
        alignItems:"center",
        borderColor:"#EEEDEE",
        backgroundColor:"white"

    },
    confirmtext:{
        fontSize:16,
        color:"rgba(126, 0, 149, 1)"
    }

})