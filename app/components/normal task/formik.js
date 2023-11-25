import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { Formik } from 'formik';

const Basic = () => (
  <View>
    <View style={{alignItems:"center"}}>
    <Text style={{color:"green",fontSize:30,textTransform:"uppercase"}}>Login</Text>

    </View>
    
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <View>
          <TextInput
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && <Text style={{color:"red"}}>{errors.email}</Text>}
          <TextInput
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            secureTextEntry
          />
          {errors.password && touched.password && <Text style={{color:"red"}}>{errors.password}</Text>}
          <Button onPress={handleSubmit} title="Submit" color='rgba(126, 0, 149, 1)' disabled={isSubmitting} />
        </View>
      )}
    </Formik>
  </View>
);

export default Basic;
