import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet ,Pressable} from 'react-native';

const Stopwatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);
 
    useEffect(() => {
        let interval = null;
 
        if (isActive && isPaused === false) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused]);
 
    const start = () => {
        setIsActive(true);
        setIsPaused(false);
    };
 
    const stop= () => {
        setIsPaused(true);
        setIsActive(false);
    };
 
    const reset = () => {
        setIsActive(false);
        setTime(0);
    };
 
    

  return (

    <View style={styles.container}>
      <Text style={styles.time}>{time}sec</Text>
      <View style={styles.buttonContainer}>

        <Pressable onPress={start} style={styles.btn}>
        <Text style={styles.btntext}>start</Text>
        </Pressable>

        <Pressable onPress={stop} style={styles.btn}>
        <Text style={styles.btntext}>stop</Text>
        </Pressable>

        <Pressable onPress={reset} style={styles.btn}>
        <Text style={styles.btntext}>reset</Text>
        </Pressable>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    width: '100%',

  },
  btn:{
    width:100,
    height:30,
    backgroundColor:"red",
    alignItems:"center",
    

  },
  btntext:{
    color:"white",
    padding:1,
    fontSize:20,
    textTransform:"uppercase",
    
  }
});

export default Stopwatch;
