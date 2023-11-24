import {StyleSheet, Text, View, TouchableOpacity, ScrollView,Pressable,Modal} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Inputcomponent from '../components/inputcomponent';
import Eyeopen from '../image/eye.svg';
// import Eyeclosed from '../image/crossed-eye.svg';
import Circle from '../image/circle.svg';
import Checkcircle from '../image/check-circle.svg';

const Createpasswordscr = ({ route }) => {
  console.log(route.params,"hhhhhhhhh");
  const {input}=route.params;
  const [type, setType] = useState('password');

  // =========================
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const[password,setpassword]=useState("");
  const[passworderror,setpassworderror]=useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const lower = new RegExp('(?=.*[a-z])');
  const upper = new RegExp('(?=.*[A-Z])');
  const number = new RegExp('(?=.*[0-9])');
  const special = new RegExp('(?=.*[!@#$%^&*])');
  const length = new RegExp('(?=.{8,})');

  const handleChange = value => {
    setLowerValidated(lower.test(value));
    setUpperValidated(upper.test(value));
    setNumberValidated(number.test(value));
    setSpecialValidated(special.test(value));
    setLengthValidated(length.test(value));
    setpassword(value);
    
  };
  const Checkpassword=(cofirmationpassword)=>{
    
    if(password===cofirmationpassword)
    {
      // console.log("match");
      setpassworderror(null);
    }
    else{
      // console.log("error");
      setpassworderror("Password do not Match");
    }
  }
  

  // =========================validation fun ========
  const ValidationItem = ({validated, label}) => (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {validated ? (
        <Checkcircle width={13} height={13} fill="green" />
          
      ) : (
        <Circle width={13} height={13} fill="gray" />
      )}

      <Text
        style={{
          fontSize: 12,
          marginLeft: wp('1%'),
          marginBottom: wp('1%'),
          color: validated ? 'green' : null,
        }}>
        {label}
      </Text>
    </View>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
         
      <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.model}>
              <View style={styles.modelcontainer}>
                <View style={styles.inputmodelcontainer}>
                  <Text style={styles.modeltext}>
                    username: {input?.Username}
                  </Text>
                  <Text style={styles.modeltext}>
                    Firstname: {input?.firstname}
                  </Text>
                  <Text style={styles.modeltext}>
                    lastname: {input?.lastname}
                  </Text>
                  <Text style={styles.modeltext}>sex: {input?.sex}</Text>
                  {/* <Text style={style.modeltext}>Dob: {input?.dob}</Text> */}
                  <Text style={styles.modeltext}>Email: {input?.email}</Text>
                  <Text style={styles.modeltext}>Mobile: {input?.mobile}</Text>
                </View>

                <Pressable
                  style={styles.closebtn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.closemodeltext}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        <View style={styles.textcontainer}>
          {/* <View style={styles.textstyle}> */}
          <Text style={[styles.text1, {marginBottom: 8}]}>
            Great! Now let’s create a password
          </Text>
          {/* </View> */}

          {/* <View style={styles.textstyle}> */}
          <Text style={styles.text2}>
            Create a memorable password. This will help you recover your
            account.
          </Text>
          {/* </View> */}
        </View>
        <View style={styles.textcontainer}>
          <View>
            <Inputcomponent
              label={'Password (Optional)'}
              textinputplaceholder={'enter password'}
              secureTextEntry={type == 'password'}
              onChangetext={value => handleChange(value)}
              // error={password?"Given Format is Required":null}
            />
            <TouchableOpacity
              onPress={() => setType(type === 'password' ? 'text' : 'password')}
              style={{
                position: 'absolute',
                marginLeft: wp('77%'),
                marginTop: wp('11.3%'),
              }}>
              <Eyeopen
                name={type === 'password' ? 'visibility-off' : 'visibility'}
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginLeft: wp('2%'),
              marginTop: wp('-1%'),
            }}>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: wp('51%')}}>
                <ValidationItem
                  validated={lowerValidated}
                  label="1 lowercase letter"
                />
              </View>
              <ValidationItem
                validated={specialValidated}
                label="1 special character"
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: wp('51%')}}>
                <ValidationItem
                  validated={upperValidated}
                  label="1 uppercase letter"
                />
              </View>

              <ValidationItem
                validated={lengthValidated}
                label="8 characters minimum"
              />
            </View>

            <View>
              <ValidationItem validated={numberValidated} label="1 number" />
            </View>
          </View>

          <View style={{marginTop: wp('8.8%')}}>
            <Inputcomponent
              label={'Confirm Password'}
              textinputplaceholder={'enter password'}
              secureTextEntry={type == 'password'}
              onChangetext={text => Checkpassword(text)}
              error={passworderror}
            />
            <TouchableOpacity
              onPress={() => setType(type === 'password' ? 'text' : 'password')}
              style={{
                position: 'absolute',
                marginLeft: wp('77%'),
                marginTop: wp('11.3%'),
              }}>
              <Eyeopen
                name={type === 'password' ? 'visibility-off' : 'visibility'}
                width={20}
                height={20}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
          onPress={() => setModalVisible(true)
          }disabled={passworderror ? true:false}
          style={styles.btncontainer}>
          <Text style={[styles.btn, {color: '#fff'}]}>Create Password</Text>
        </TouchableOpacity>
          {/* <View style={styles.btncontainer}>
            <Button
            onPress={() => setModalVisible(true)}
              title="Create Password"
              disabled={passworderror ? true : false}
              color="rgba(126, 0, 149, 1)"></Button>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default Createpasswordscr;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 24,
    gap: 18,
  },
  textcontainer: {
    gap: 8,
    // backgroundColor:"red",
  },
  btncontainer: {
    
    backgroundColor: 'rgba(126, 0, 149, 1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:wp("4.5%")
  },
  btn: {
    fontFamily: 'barlow',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 16,
    // letterSpacing:0.32,
    color: '#fff',
  },
  textstyle: {
    width: wp('90%'),
    height: hp('8.2%'),
    // backgroundColor:'red',
    marginBottom: 8,
  },
  text1: {
    fontSize: 24,
    fontWeight: '600',
    color: '#473B4A',
    // backgroundColor:"blue"
    // fontFamily:"Barlow-Regular",
    // fontStyle:'normal'
  },
  text2: {
    fontSize: 18,
    fontWeight: '400',
    color: '#473B4A',
    // backgroundColor:'green'
  },
  //======================================== model
  modelcontainer: {
    width: 300,
    height: 400,
    backgroundColor: 'rgba(126, 0, 149, 1)',
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  model: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closemodeltext: {
    color: 'white',

    fontSize: 20,
  },
  closebtn: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
  },
  inputmodelcontainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    width: 200,
    marginBottom: 20,
  },
  modeltext: {
    color: 'white',
    fontSize: 15,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
});
