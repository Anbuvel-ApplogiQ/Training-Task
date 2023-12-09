import React from 'react';
import {View, TextInput, Button, Text, ScrollView} from 'react-native';
import {Formik} from 'formik';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Basic = ({navigation}) => (
  <ScrollView>
    <View style={{marginHorizontal: 10, marginVertical: 10}}>
      <View style={{alignItems: 'center'}}>
        {/* <Text style={{color:"green",fontSize:30,textTransform:"uppercase",marginBottom:10}}>Formik</Text> */}
      </View>

      <Formik
        initialValues={{
          UserName: '',
          FirstName: '',
          lastName: '',
          email: '',
          password: '',
          MobileNumber: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.UserName) {
            errors.UserName = 'Required UserName';
          } else if (!/^[a-zA-Z0-9_]{4,}$/i.test(values.UserName)) {
            errors.UserName = 'Invalid UserName';
          }
          if (!values.FirstName) {
            errors.FirstName = 'Required FirstName';
          } else if (!/^[a-zA-Z]+$/i.test(values.FirstName)) {
            errors.FirstName = 'Invalid FirstName';
          }
          if (!values.lastName) {
            errors.lastName = 'Required lastName';
          } else if (!/^[a-zA-Z]+$/i.test(values.lastName)) {
            errors.lastName = 'Invalid lastName';
          }
          if (!values.email) {
            errors.email = 'Required Email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid Email address';
          }
          if (!values.password) {
            errors.password = 'Required Password';
          }
          if (!values.MobileNumber) {
            errors.MobileNumber = 'Required MobileNumber';
          } else if (!/^\d{10}$/i.test(values.MobileNumber)) {
            errors.MobileNumber = 'Invalid MobileNumber';
          }
          

          return errors;
         
        }}
        onSubmit={(values, {setSubmitting,errors}) => {

          setTimeout(() => {
            // const ErrorCheck = Object.values(errors).length > 0;
            // if(!ErrorCheck){
            //  navigation.navigate('page2');
 
            // }
            // else{
            //  console.log(Object.values(errors),"error")
            // }
            const length = Object.keys(values).length;
            if(length>0)
            {
              navigation.navigate('page2',{UserValue:values});
            }
           
          
         
          setSubmitting(false);
         
          }, 400);
        }}>
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
          <View
            style={{
              backgroundColor: 'lightgray',
              padding: 20,
              gap: 10,
              borderRadius: 20,
            }}>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginBottom: 10,
                  marginLeft: 5,
                }}>
                UserName
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter UserName"
                onChangeText={handleChange('UserName')}
                onBlur={handleBlur('UserName')}
                value={values.UserName}
              />
              {errors.UserName && touched.UserName && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.UserName}
                </Text>
              )}
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginBottom: 10,
                  marginLeft: 5,
                }}>
                FirstName
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter FirstName"
                onChangeText={handleChange('FirstName')}
                onBlur={handleBlur('FirstName')}
                value={values.FirstName}
              />
              {errors.FirstName && touched.FirstName && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.FirstName}
                </Text>
              )}
            </View>
            <View>
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  marginBottom: 10,
                  marginLeft: 5,
                }}>
                LastName
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter lastName"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
              />
              {errors.lastName && touched.lastName && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.lastName}
                </Text>
              )}
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Email
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.email}
                </Text>
              )}
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                Password
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View>
              <Text style={{color: 'black', fontSize: 20, marginBottom: 10}}>
                MobileNumber
              </Text>
              <TextInput
                style={{
                  width: wp('85%'),
                  backgroundColor: 'white',
                  borderRadius: 10,
                }}
                placeholder=" Enter MobileNumber"
                onChangeText={handleChange('MobileNumber')}
                onBlur={handleBlur('MobileNumber')}
                value={values.MobileNumber}
                secureTextEntry
              />
              {errors.MobileNumber && touched.MobileNumber && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.MobileNumber}
                </Text>
              )}
            </View>
            <View>
              <Button
                onPress={handleSubmit}
                title="Submit"
                color="rgba(126, 0, 149, 1)"
                // disabled={isSubmitting}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  </ScrollView>
);

export default Basic;
