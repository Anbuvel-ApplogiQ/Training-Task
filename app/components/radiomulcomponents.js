import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Checkcircle from '../image/check-circle.svg';
const Radiomulcomponents = ({ options, selectedOptions, onSelect }) => {
    const toggleOption = (value) => {
      if (selectedOptions.includes(value)) {
        // If the option is already selected, deselect it
        onSelect(selectedOptions.filter((selectedValue) => selectedValue !== value));
      } else {
        // If the option is not selected, select it
        onSelect([...selectedOptions, value]);
      }
    };
  
    return (
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={styles.radioButton}
            onPress={() => toggleOption(option.value)}
          >
            <View style={styles.radioCircle}>
              {selectedOptions.includes(option.value) && <Checkcircle width={18} height={18} fill="rgba(126, 0, 149, 1)" />}
            </View>
            <Text style={styles.radiotext}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };
  const styles = StyleSheet.create({
    radioButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 8,
    },
    radioCircle: {
      height: 24,
      width: 24,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 8,
    },
    selectedRadioCircle: {
      height: 14,
      width: 14,
      borderRadius: 7,
      backgroundColor: 'rgba(126, 0, 149, 1)',
    },
    radiotext:{
      fontSize:16,
      fontWeight:"400",
      color:'#473B4A',
      fontFamily:"Barlow-Regular"
    }
  });
  
  export default Radiomulcomponents;