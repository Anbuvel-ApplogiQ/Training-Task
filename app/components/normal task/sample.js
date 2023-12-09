import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SApp = () => {
  const [storedValue, setStoredValue] = useState('');

  const myKey = {
    name: "anbu",
    age: 21,
    base:"21",
    value:'wait'
  };

  const myMerge = {
    group: "A+"
  };

 
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('myKey', JSON.stringify(myKey));
      console.log('Data stored successfully:', myKey);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

 
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('myKey');
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
        setStoredValue(value);
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error getting data:', error);
    }
  };
  const remove = async () => {
    try {
      const storedData = await AsyncStorage.getItem('myKey');
      if (storedData) {
        const parsedData = JSON.parse(storedData);
        delete parsedData.age;
  
      
        await AsyncStorage.setItem('myKey', JSON.stringify(parsedData));
        console.log('Age removed successfully');
        setStoredValue(JSON.stringify(parsedData)); 
      } else {
        console.log('No data found');
      }
    } catch (error) {
      console.error('Error removing age:', error);
    }
  };
  
  
  

  const merge = async () => {
    try {
    
      await storeData();

     
      await AsyncStorage.mergeItem('myKey', JSON.stringify(myMerge));
      console.log('Merge successful');
      await getData(); 
    } catch (error) {
      console.error('Error merging data:', error);
    }
  };

  const clear = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage cleared successfully');
      setStoredValue('');
    } catch (error) {
      console.error('Error clearing AsyncStorage:', error);
    }
  };

 
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ padding: 20, gap: 10 }}>
      <Text>Stored Value: {storedValue}</Text>
      <Button title="Store Data" onPress={storeData} />
      <Button title="Get Data" onPress={getData} />
      <Button title="Merge Data" onPress={merge} />
      <Button title="Clear AsyncStorage" onPress={clear} />
      <Button title="remove" onPress={remove} />
    </View>
  );
};

export default SApp;
