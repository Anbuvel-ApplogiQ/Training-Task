import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Apps = () => {
  const [type, setType] = useState('password');

  // validated states
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);

  const handleChange = (value) => {
    const lower = new RegExp('(?=.*[a-z])');
    const upper = new RegExp('(?=.*[A-Z])');
    const number = new RegExp('(?=.*[0-9])');
    const special = new RegExp('(?=.*[!@#\$%\^&\*])');
    const length = new RegExp('(?=.{8,})');

    setLowerValidated(lower.test(value));
    setUpperValidated(upper.test(value));
    setNumberValidated(number.test(value));
    setSpecialValidated(special.test(value));
    setLengthValidated(length.test(value));
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      {/* input */}
      <Text style={{ marginBottom: 8 }}>Enter Password</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TextInput
          style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 8, paddingHorizontal: 10 }}
          secureTextEntry={type === 'password'}
          onChangeText={(value) => handleChange(value)}
        />
        <TouchableOpacity onPress={() => setType(type === 'password' ? 'text' : 'password')}>
          <Icon name={type === 'password' ? 'visibility-off' : 'visibility'} size={50} color="black" />
        </TouchableOpacity>
      </View>

      {/* validation tracker */}
      <View style={{ marginTop: 16 }}>
        <ValidationItem validated={lowerValidated} label="At least one lowercase letter" />
        <ValidationItem validated={upperValidated} label="At least one uppercase letter" />
        <ValidationItem validated={numberValidated} label="At least one number" />
        <ValidationItem validated={specialValidated} label="At least one special character" />
        <ValidationItem validated={lengthValidated} label="At least 8 characters" />
      </View>
    </View>
  );
};

const ValidationItem = ({ validated, label }) => (
  <View style={{flexDirection: "row", alignItems: 'center', marginBottom: 8 }}>
    {validated ? (
      <Icon name="check-circle" size={16} color="green" style={{ marginRight: 8 }} />
    ) : (
      <Icon name="exclamation-circle" size={16} color="red" style={{ marginRight: 8 }} />
    )}
    <Text>{label}</Text>
  </View>
);

export default Apps;
