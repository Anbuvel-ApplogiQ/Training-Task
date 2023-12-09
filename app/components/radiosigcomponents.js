import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadiosingleComponents = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onSelect(option.value)}
        >
            
          <View style={styles.radioCircle}>
            {selectedOption === option.value && <View style={styles.selectedRadioCircle} />}
          </View>
          <Text style={styles.radiotext}>{option.label}</Text>
         
        </TouchableOpacity>
      ))}
    </View>
  );
};

// const RadiosingleComponents = () => {
//   const [selectedOption, setSelectedOption] = useState('first');

//   const options = [
//     { label: 'First option', value: 'first' },
//     { label: 'Second option', value: 'second' },
//   ];

//   return (
//     <View>
//       <Text>Choose an option:</Text>
//       <RadioButton options={options} selectedOption={selectedOption} onSelect={setSelectedOption} />
//     </View>
//   );
// };

const styles = StyleSheet.create({
  radioButton: {
    
    flexDirection: "row",
    
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

export default RadiosingleComponents;
