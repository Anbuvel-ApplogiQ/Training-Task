import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {useRef} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Inputcomponent from '../components/inputcomponent';
import Camera from '../image/Icon.svg/';
import Delete from '../image/trash.svg';
import Select from '../image/picture.svg';
import Edit from '../image/user-pen (1).svg';
import Datepicker from '../components/datepickercomponent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Registerscr = ({navigation}) => {
  const Defaultime = require('../image/ProfileAvatar.png');
  // -----------------------------------------------use state start
  const [imageSource, setImageSource] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [input, Setinput] = useState({
    firstname: '',
    Username: '',
    lastname: '',
    sex: '',
    dob: '',
    email: '',
    mobile: '',
  });
  const [errors, seterrors] = useState({});

  // sheet========================
  const refRBSheet = useRef();
  // ----------------------------------------------use state end
  const upload = () => {
    ImagePicker.openPicker({
      // path:imageSource.uri,
      width: 80,
      height: 80,
      cropping: true,
      cropperCircleOverlay: true,
    })
      .then(image => {
        // console.log(image);
        setImageSource(image.path);
      })
      .catch(err => console.log(err));
  };
  // console.log(imageSource);

  // ===========================================

  const editImage = () => {
    try {
      ImagePicker.openCropper({
        path: imageSource,
        width: 80,
        height: 80,
        cropperCircleOverlay: true,
      }).then(image => {
        setImageSource(image?.path);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ===========================================
  const cameraopen = () => {
    ImagePicker.openCamera({
      width: 80,
      height: 80,
      cropping: true,
      cropperCircleOverlay: true,
    }).then(image => {
      setImageSource(image?.path);
      // console.log(image);
    });
  };
  // ===========================validate fun

  const validate = () => {
    let error = {};
    if (!input.Username) {
      error.Username = 'Username is required.';
    } else if (!input.Username.match(/^[a-zA-Z0-9_]{4,}$/)) {
      error.Username = 'Enter Valid Username';
    }
    if (!input.firstname) {
      error.firstname = 'Firstname Required.';
    } else if (!input.firstname.match(/^[a-zA-Z]+$/)) {
      error.firstname = ' FirstName should be Alphabetic characters only.';
    }

    if (!input.lastname) {
      error.lastname = 'Lastname Required.';
    } else if (!input.lastname.match(/^[a-zA-Z]+$/)) {
      error.lastname = ' FirstName should be Alphabetic characters only.';
    }

    if (!input.email) {
      error.email = 'Email Required.';
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      error.email = 'Enter Valid Email.';
    }

    if (!input.sex) {
      error.sex = ' Select any One.';
    }

    if (!input.mobile) {
      error.mobile = 'Mobile Number Required.';
    } else if (!input.mobile.match(/^\d{10}$/)) {
      error.mobile = ' Enter a Valid 10-digit Mobile NUmber.';
    }
    seterrors(error);

    if (Object.values(error).length === 0) {
      navigation.navigate('Createpasswordscr', {input: input});
    } else {
      console.log('fail', error);
    }
  };
  // ------------------------------handchange func

  const handlechange = (text, key) => {
    Setinput(prev => ({
      ...prev,
      [key]: text,
    }));
   
  };

  const handleError = (error, key) => {
    seterrors(prev => ({
      ...prev,
      [key]: error,
    }));
  };
// ==============================================

  return (
    <ScrollView>
      <View style={style.totalcontainer}>
        <View style={style.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={style.model}>
              <View style={style.modelcontainer}>
                <View style={style.inputmodelcontainer}>
                  <Text style={style.modeltext}>
                    username: {input?.Username}
                  </Text>
                  <Text style={style.modeltext}>
                    Firstname: {input?.firstname}
                  </Text>
                  <Text style={style.modeltext}>
                    lastname: {input?.lastname}
                  </Text>
                  <Text style={style.modeltext}>sex: {input?.sex}</Text>
                 
                  <Text style={style.modeltext}>Email: {input?.email}</Text>
                  <Text style={style.modeltext}>Mobile: {input?.mobile}</Text>
                </View>

                <Pressable
                  style={style.closebtn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={style.closemodeltext}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          <View style={style.photocontainer}>
           
            <Pressable style={style.imagecontainer}>
              <Image
                source={imageSource ? {uri: imageSource} : Defaultime}
                style={{height: 100, width: 100, borderRadius: 50}}
              />
            </Pressable>
            <View style={{alignItems: 'flex-start', position: 'absolute'}}>
              <Pressable
                style={style.svgbackground}
                onPress={() => editImage()}>
                <Edit height={15} width={15} fill="white" />
              </Pressable>

              <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={180}
                customStyles={{
                  wrapper: {
                    backgroundColor: 'tarnsparent',
                  },
                  draggableIcon: {
                    backgroundColor: 'rgba(126, 0, 149, 1)',
                  },
                }}>
                <View style={style.totalbtmsheetcontainer}>
                  <View style={style.btmsheetcontainer}>
                    <Pressable onPress={upload}>
                      <View style={style.butshticon1}>
                        <Select height={40} width={40} fill="white" />
                      </View>

                      <Text style={style.btnshttext}>Gallery</Text>
                    </Pressable>
                  </View>

                  <View style={style.btmsheetcontainer}>
                    <Pressable onPress={() => cameraopen()}>
                      <View style={style.butshticon}>
                        <Camera height={50} width={50} />
                      </View>

                      <Text style={style.btnshttext}>Camera</Text>
                    </Pressable>
                  </View>
                  

                  
                </View>
              </RBSheet>

             
              <View
                style={{
                  flexDirection: 'row',
                  height: 100,
                  width: 100,
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  position: 'absolute',
                }}>
                <Pressable
                  style={style.svgbackground}
                  onPress={() => refRBSheet.current.open()}>
                  <Camera height={20} width={20} />
                </Pressable>
                <Pressable
                  style={style.svgbackground}
                  onPress={() => setImageSource('')}>
                  <Delete width={15} height={15} fill="white" />
                </Pressable>
              </View>
            </View>
          </View>
        </View>

        <View style={style.container}>
          <View style={style.profilecontainer}>
            <Text style={style.profiletext}>Personal info</Text>
          </View>
          <Inputcomponent
            label={'Username'}
            textinputplaceholder={' @mr.miyagi'}
            onChangetext={text => handlechange(text, 'Username')}
            onFocus={() => handleError(null, 'Username')}
            
            error={errors.Username}
          />
          <Inputcomponent
            label={'First name'}
            onChangetext={text => handlechange(text, 'firstname')}
            onFocus={() => handleError(null, 'firstname')}
            error={errors.firstname}
            textinputplaceholder={' John'}
            keyboardtype={'default'}
          />

          <Inputcomponent
            label={'Last name'}
            textinputplaceholder={' Doe'}
            keyboardtype={'default'}
            onChangetext={text => handlechange(text, 'lastname')}
            onFocus={() => handleError(null, 'lastname')}
            error={errors.lastname}
          />

          <Inputcomponent
            label={'Sex'}
            value={input.sex}
            dropdown
            onChangetext={val => {
              handlechange(val.value, 'sex');
              handleError(null, 'sex');
            }}
            error={errors.sex}
          />

          <Inputcomponent label={'Date of birth'} />

          <Datepicker
      />
        </View>

        <View style={style.container}>
          <View style={style.profilecontainer}>
            <Text style={style.profiletext}>Contact info</Text>
          </View>

          <Inputcomponent
            label={'Email address'}
            textinputplaceholder={'john.doe@gmail.com'}
            keyboardtype={'email-address'}
            onChangetext={text => handlechange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            error={errors.email}
          />
          <Inputcomponent
            label={'Mobile number'}
            mobilenumber
            keyboardtype={'numeric'}
            onChangetext={text => {
              handlechange(text, 'mobile');
              handleError(null, 'mobile');
            }}
            error={errors.mobile}
          />

        </View>
        <Pressable
          onPress={() => validate()}
          style={style.btncontainer}>
          <Text style={[style.btn, {color: '#fff'}]}>Save</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  photocontainer: {
    alignSelf: 'center',
  },
  imagecontainer: {
    alignItems: 'center',
  },
  svgbackground: {
    backgroundColor: 'rgba(126, 0, 149, 1)',
    // width: 24,
    // height: 24,
    width: wp('6%'),
    height: hp('2.9%'),
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    // width: '80px',
    // height: '80px',
    height: hp('11.2%'),
    width: wp('20.5%'),
    display: 'flex',
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: 'black',
  },
  totalcontainer: {
    marginHorizontal: 24,
    marginVertical: 24,
    gap: 32,
    // width:"50%"
    // width: wp('20%'),
  },
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 24,
    // width: wp('80%'),
  },
  profilecontainer: {
    // width: '100%',
    // height: '32px',
    height: hp('4.4%'),
    width: wp('100%'),
  },
  profiletext: {
    fontSize: 24,
    fontFamily: 'Barlow-Regular',
    fontWeight: '700',
    color: '#473B4A',
  },
  btncontainer: {
    backgroundColor: 'rgba(126, 0, 149, 1)',
    display: 'flex',
    // width: '100%',
    // height: 48,
    height: hp('6.7%'),
    width: wp('87.4%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  btn: {
    fontFamily: 'barlow',
    fontSize: 16,
    fontWeight: '600',
    // letterSpacing:0.32,
    color: '#fff',
  },

  // btmsheet

  totalbtmsheetcontainer: {
    flexDirection: 'row',
    gap: 15,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btmsheetcontainer: {
    padding: 20,
  },
  btnshttext: {
    marginTop: 10,
    fontSize: 16,
    color: 'rgba(126, 0, 149, 1)',
    fontFamily: 'Barlow-Regular',
    fontWeight: '900',
    textAlign: 'center',
  },
  butshticon: {
    backgroundColor: 'rgba(126, 0, 149, 1)',
    padding: 10,

    borderRadius: 10,
  },
  butshticon1: {
    backgroundColor: 'rgba(126, 0, 149, 1)',
    padding: 15,

    borderRadius: 10,
  },
  dateconatiner: {
    marginTop: -1,
  },

  // model
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

export default Registerscr;
