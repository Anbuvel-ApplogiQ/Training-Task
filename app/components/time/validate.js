import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

const ValidationExample = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleValidation = () => {
    let errors = {};

    if (!formData.username) {
      errors.username = 'Username is required.';
    }

    if (!formData.password) {
      errors.password = 'Password is required.';
    }

    if (!formData.email) {
      errors.email = 'Email is required.';
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log('Success: Validation passed.');
    } else {
      console.log('Failed: Validation failed.', errors);
    }
  };

  return (
    <View>
      <Text>Username:</Text>
      <TextInput
        value={formData.username}
        onChangeText={text => setFormData(prev => ({ ...prev, username: text }))}
        placeholder="Enter username"
      />
      <Text style={{ color: 'red' }}>{formErrors.username}</Text>

      <Text>Password:</Text>
      <TextInput
        value={formData.password}
        onChangeText={text => setFormData(prev => ({ ...prev, password: text }))}
        placeholder="Enter password"
        secureTextEntry
      />
      <Text style={{ color: 'red' }}>{formErrors.password}</Text>

      <Text>Email:</Text>
      <TextInput
        value={formData.email}
        onChangeText={text => setFormData(prev => ({ ...prev, email: text }))}
        placeholder="Enter email"
        keyboardType="email-address"
      />
      <Text style={{ color: 'red' }}>{formErrors.email}</Text>

      <Pressable onPress={handleValidation}>
        <Text>Check Validation</Text>
      </Pressable>
    </View>
  );
};

export default ValidationExample;
