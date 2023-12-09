import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioButton from './radiomulcomponents';
import RadiosingleComponents from './radiosigcomponents';
import Radiomulcomponents from './radiomulcomponents';
const RadioButtonExample = () => {
  const [selectedOptions1, setSelectedOptions1] = React.useState([]);

  const options1 = [
    { label: 'First option', value: 'first' },
    { label: 'Second option', value: 'second' },
    { label: 'Third option', value: 'third' },
    
  ];
  const [selectedOptions2, setSelectedOptions2] = React.useState([]);

  const options2 = [
    { label: 'First option', value: 'first' },
    { label: 'Second option', value: 'second' },
    { label: 'Third option', value: 'third' },
    
  ];

  return (
    <View>
      <Text>Choose options:</Text>
      {/* <RadioButton options={options} selectedOptions={selectedOptions} onSelect={setSelectedOptions} /> */}
      <RadiosingleComponents options={options1} selectedOption={selectedOptions1} onSelect={setSelectedOptions1}/>
      <Text>multiple</Text>
      <Radiomulcomponents  options={options2} selectedOptions={selectedOptions2} onSelect={setSelectedOptions2}/>
      <Text>Selected Options: {JSON.stringify(selectedOptions1)}</Text>
      <Text>Selected Options: {JSON.stringify(selectedOptions2)}</Text>
    </View>
  );
};
export default RadioButtonExample;
