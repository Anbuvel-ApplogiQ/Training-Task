import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useRef} from 'react';
import Camera from '../image/Icon.svg/';
import Select from '../image/picture.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Inputcomponent from '../components/inputcomponent';
import DropdownComponent from '../components/dropdown';
import {useState} from 'react';
import Imageback from '../image/.base—Uploading image.svg';
import ImagePicker from 'react-native-image-crop-picker';
import RadiosingleComponents from '../components/radiosigcomponents';
import Radiomulcomponents from '../components/radiomulcomponents';
import WordCounter from '../components/wordcounter';

const BacicinfoScr = ({navigation}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  const [Items1, setItems1] = useState([
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Kerala', value: 'Kerala'},
  ]);
  const [Items2, setItems2] = useState([
    {label: 'Tamil Nadu', value: 'Tamil Nadu'},
    {label: 'Kerala', value: 'Kerala'},
  ]);
  const [Items3, setItems3] = useState([
    {label: 'tiruppur', value: 'tiruppur'},
    {label: 'Erode', value: 'Erode'},
  ]);

  // tags==============================================
  const [inputText, setInputText] = useState('');
  const [tags, setTags] = useState([]);
  const [imageSource, setImageSource] = useState('');

  const handleInputChange = text => {
    setInputText(text);
  };

  const handleInputSubmit = () => {
    if (inputText.trim() !== '') {
      setTags([...tags, inputText.trim()]);
      setInputText('');
    }
  };

  const removeTag = tag => {
    const updatedTags = tags.filter(t => t !== tag);
    setTags(updatedTags);
  };
  // ===================model==========
  const [modalVisible, setModalVisible] = useState(false);
  // ====================store a data in formik=====
  const [userData, setUserData] = useState(null);
  // upload image==============================================
  const refRBSheet = useRef();
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

  // const editImage = () => {
  //   try {
  //     ImagePicker.openCropper({
  //       path: imageSource,
  //       width: 80,
  //       height: 80,
  //       cropperCircleOverlay: true,
  //     }).then(image => {
  //       setImageSource(image?.path);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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

  //====================================radio btn
  const [selectedOptions1, setSelectedOptions1] = React.useState([]);
  const [selectedOptions2, setSelectedOptions2] = React.useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');

  const options1 = [
    {label: 'USD', value: '$'},
    {label: 'LBP', value: 'LBP'},
  ];

  const options2 = [
    {label: 'Couples ', value: 'Couples '},
    {label: 'Family ', value: 'Family '},
    {label: 'Friends ', value: 'Friends '},
    {label: 'Co-workers ', value: 'Co-workers '},
    {label: 'Kids ', value: 'Kids '},
  ];

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        {userData &&
          (imageSource || tags || selectedOptions1 || selectedOptions2) && (
            <View style={styles.model}>
              <View style={styles.modelcontainer}>
                <View style={styles.inputmodelcontainer}>
                  <Text style={styles.modeltext}>Name : {userData.Name}</Text>
                  <Text style={styles.modeltext}>
                    Short Description : {userData.Shortdescription}
                  </Text>
                  <Text style={styles.modeltext}>Categogy :</Text>
                  <Text style={styles.modeltext}>Sub-Category :</Text>
                  {/* <Text style={style.modeltext}>Dob: {input?.dob}</Text> */}
                  <Text style={styles.modeltext}>Tags : {tags}</Text>
                  <Text style={styles.modeltext}>Categogy : </Text>
                  <Text style={styles.modeltext}>
                    Currency : {selectedOptions1}
                  </Text>
                  <Text style={styles.modeltext}>
                    Minvalue : {userData.minvalue}
                  </Text>
                  <Text style={styles.modeltext}>
                    maxvalue : {userData.maxvalue}
                  </Text>

                  <Text style={styles.modeltext}>
                    Suitable : {selectedOptions2}
                  </Text>
                  <Text style={styles.modeltext}>
                    Email Address : {userData.email}
                  </Text>
                  <Text style={styles.modeltext}>
                    Phone/Mobile Number : {userData.mobilenumber}
                  </Text>
                  <Image
                    source={imageSource ? {uri: imageSource} : null}
                    style={{height: 100, width: 100, borderRadius: 50}}
                  />
                </View>

                <Pressable
                  style={styles.closebtn}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.closemodeltext}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          )}
      </Modal>
      <Formik
        initialValues={{
          Name: '',
          Shortdescription: '',
          // Category: '',
          // SubCategory: '',
          email: '',
          // placecategory: '',
          mobilenumber: '',
          minvalue: '',
          maxvalue: '',
          // uploadeimage: '',
        }}
        validate={values => {
          const errors = {};
          if (!values.Name) {
            errors.Name = 'Required Name';
          } else if (!/^[a-zA-Z]+$/i.test(values.Name)) {
            errors.Name = 'Invalid Name';
          }
          if (!values.Shortdescription) {
            errors.Shortdescription = 'Required Shortdescription';
          }
          // if (!values.Category) {
          //   errors.Category = 'Required Category';
          // }
          // if (!values.SubCategory) {
          //   errors.SubCategory = 'Required SubCategory';
          // }
          if (!values.mobilenumber) {
            errors.mobilenumber = 'Required MobileNumber';
          } else if (!/^\d{10}$/i.test(values.mobilenumber)) {
            errors.mobilenumber = 'Invalid MobileNumber';
          }
          // if (!values.placecategory) {
          //   errors.placecategory = 'Required PlaceCategory';
          // }

          if (!values.email) {
            errors.email = 'Required Email';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid Email address';
          }

          if (!values.minvalue) {
            errors.minvalue = 'Required Minimum Price';
          } else if (!/^\d+$/i.test(values.minvalue)) {
            errors.minvalue = 'Enter Valid Format';
          } else if (values.minvalue < 50) {
            errors.minvalue = 'minimum Price is 50';
          }

          if (!values.maxvalue) {
            errors.maxvalue = 'Required Maximum Price';
          } else if (!/^\d+$/i.test(values.maxvalue)) {
            errors.maxvalue = 'Enter valid Format';
          } else if (values.maxvalue < values.minvalue) {
            errors.maxvalue = 'maximum price is greater than minimum price';
          }

          return errors;
        }}
        onSubmit={(values, {setSubmitting, errors}) => {
          setTimeout(() => {
            const errorObject = errors ?? {};
            const length = Object.keys(errorObject).length;
            if (length === 0) {
              // setModalVisible(true);
             navigation.navigate("Attributescr");
              setUserData(values);
            }

            setSubmitting(false);
          }, 400);
        }}>
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
        }) => (
          <View style={styles.container}>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>Basic info</Text>
            </View>
            <View>
              <Inputcomponent
                label="Name"
                textinputplaceholder="Enter your place name"
                value={values.Name}
                onChangetext={handleChange('Name')}
                error={errors.Name}
              />
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Short description</Text>
              </View>

              <View
                style={
                  errors.Shortdescription
                    ? styles.Errorinputcontainer
                    : styles.inputcontainer
                }>
                <TextInput
                  placeholder="Place description"
                  value={values.Shortdescription}
                  multiline
                  numberOfLines={5}
                  onChangeText={handleChange('Shortdescription')}
                />
              </View>
              {errors.Shortdescription && touched.Shortdescription && (
                <Text style={{color: 'red', marginLeft: 10}}>
                  {errors.Shortdescription}
                </Text>
              )}

              <View style={{height: hp('2.9%'), width: wp('88%')}}>
                <WordCounter paragraph={values.Shortdescription} count />
              </View>
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Category</Text>
              </View>
              <DropdownComponent
                placeholder={'Select your place category'}
                open={open1}
                setItems={setItems1}
                items={Items1}
                setValue={value => handleChange('Category')(value)}
                value={values.Category}
                setOpen={setOpen1}
                error={errors.Category}
              />
            </View>

            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Sub-Category</Text>
              </View>
              <DropdownComponent
                placeholder={'Select your place Sub-category'}
                open={open2}
                setItems={setItems2}
                items={Items2}
                setValue={value => handleChange('SubCategory')(value)}
                value={values.SubCategory}
                setOpen={setOpen2}
                error={errors.SubCategory}
              />
            </View>

            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Tags</Text>
              </View>
              <View
                style={{
                  width: wp('88%'),
                  height: 'auto',
                  borderWidth: 1,
                  borderColor: '#rgba(238, 237, 238, 1)',
                  borderRadius: 16,
                  overflow: 'hidden',
                }}>
                {tags.length === 5 ? null : (
                  <TextInput
                    placeholder="Tags are a great way to add more filters to your place. Use comma between tags to add multiple ones."
                    value={inputText}
                    onChangeText={handleInputChange}
                    onSubmitEditing={handleInputSubmit}
                    numberOfLines={1}
                    style={{
                      paddingLeft: 10,
                      paddingBottom: 3,
                      paddingTop: 5,
                      height: hp('11%'),
                      margin: 10,
                      width: wp('80%'),
                    }}
                  />
                )}
                <View style={styles.tagsContainer}>
                  {tags.map((tag, index) => (
                    <View style={styles.tag} key={index}>
                      <Text style={styles.tagText}>{tag}</Text>
                      <TouchableOpacity onPress={() => removeTag(tag)}>
                        <Text style={styles.closeIcon}>x</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              </View>

              <View style={{height: hp('2.9%'), width: wp('88%')}}>
                <Text>{tags.length ? tags.length : 0}/5 Tags</Text>
              </View>
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Category</Text>
              </View>
              <DropdownComponent
                placeholder={'Select Place Capacity..'}
                open={open3}
                setItems={setItems3}
                items={Items3}
                setValue={value => handleChange('placecategory')(value)}
                value={values.placecategory}
                setOpen={setOpen3}
                error={errors.placecategory}
              />
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Currency</Text>
              </View>

              <RadiosingleComponents
                options={options1}
                selectedOption={selectedOptions1}
                onSelect={value => {
                  setSelectedOptions1(value);
                  setSelectedCurrency(value);
                }}
                style={styles.rowContainer}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{marginRight: 8}}>
                <View style={{marginBottom: 8}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '700', color: '#473B4A'}}>
                    Min price
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    borderWidth: 1,
                    borderColor: errors.minvalue ? "red":'#rgba(238, 237, 238, 1)',
                    borderRadius: 16,
                    paddingHorizontal: 16,
                    paddingVertical: 16,
                    width: wp('42%'),
                    height: hp('8%'),
                  }}>
                  <Text>{selectedCurrency}</Text>
                  <TextInput
                    placeholder="50"
                    keyboardType="decimal-pad"
                    placeholderTextColor="black"
                    value={values.minvalue}
                    // onChangetext={handleChange('minvalue')}
                    onChangeText={handleChange("minvalue")}
                    
                    style={{
                      width: 100,
                      height: 20,
                      marginLeft: 5,
                      color: 'black',
                      padding: 0,
                    }}
                  />
                </View>
                {errors.minvalue?<Text style={{color:"red",marginLeft:5}}>{errors.minvalue}</Text>
                :null
                }
              </View>
              <View>
                <View>
                  <View></View>
                  <View>
                    <View style={{marginBottom: 8}}>
                      <Text
                        style={{
                          fontSize: 16,
                          fontWeight: '700',
                          color: '#473B4A',
                        }}>
                        Max price
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: errors.maxvalue ? "red":'#rgba(238, 237, 238, 1)',
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        paddingVertical: 16,
                        width: wp('42%'),
                        height: hp('8%'),
                      }}>
                      <Text>{selectedCurrency}</Text>
                      <View>
                        <TextInput
                          placeholder="50"
                          keyboardType="decimal-pad"
                          placeholderTextColor="black"
                          value={values.maxvalue}
                          onChangeText={handleChange("maxvalue")}
                          style={{
                            width: 100,
                            height: 20,
                            marginLeft: 5,
                            color: 'black',
                            padding: 0,
                          }}
                        />
                      </View>
                    </View>
                    {errors.maxvalue?<View style={{width:wp("42%")}}><Text style={{color:"red",marginLeft:5,}}>{errors.maxvalue}</Text></View>
                :null
                }
                  </View>
                </View>
              </View>
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Suitable for</Text>
              </View>
              <Radiomulcomponents
                options={options2}
                selectedOptions={selectedOptions2}
                onSelect={setSelectedOptions2}
              />
            </View>

            <View style={styles.textcontainer}>
              <Text style={styles.text}>Contact info</Text>
            </View>

            <View>
              <Inputcomponent
                label="Email address"
                textinputplaceholder="Enter your place Email address"
                onChangetext={handleChange('email')}
                value={values.email}
                error={errors.email}
              />
            </View>
            <View>
              <Inputcomponent
                label={'Phone/mobile number'}
                mobilenumber
                keyboardtype={'numeric'}
                onChangetext={handleChange('mobilenumber')}
                value={values.mobilenumber}
                error={errors.mobilenumber}
              />
            </View>
            <View style={{gap: 8}}>
              <View style={styles.textscontainer}>
                <Text style={styles.texts}>Upload your menu (Optional)</Text>
              </View>
              <Pressable
                onPress={() => refRBSheet.current.open()}
                style={{marginTop: -40}}>
                {imageSource ? (
                  <Image
                    source={{uri: imageSource}}
                    style={{height: 200, width: 345}}
                  />
                ) : (
                  <Imageback height={200} width={345} />
                )}
              </Pressable>

              <View style={{marginTop: 0}}>
                <Text>Images must be .jpg or .png format</Text>
              </View>
            </View>
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
              <View style={styles.totalbtmsheetcontainer}>
                <View style={styles.btmsheetcontainer}>
                  <Pressable onPress={() => upload()}>
                    <View style={styles.butshticon1}>
                      <Select height={40} width={40} fill="white" />
                    </View>

                    <Text style={styles.btnshttext}>Gallery</Text>
                  </Pressable>
                </View>

                <View style={styles.btmsheetcontainer}>
                  <Pressable onPress={() => cameraopen()}>
                    <View style={styles.butshticon}>
                      <Camera height={50} width={50} />
                    </View>

                    <Text style={styles.btnshttext}>Camera</Text>
                  </Pressable>
                </View>
              </View>
            </RBSheet>
            {/* <View style={{paddingBottom:40,paddingLeft:24,paddingRight:24,paddingTop:16,backgroundColor:"white"}}>
        <Pressable style={styles.btncontainer}>
          <Text style={styles.btn}>Continue</Text>
        </Pressable>
        
      </View> */}

            <View style={{backgroundColor: 'white'}}>
              <Pressable
                style={styles.btncontainer}
                onPress={handleSubmit}
                disabled={isSubmitting}>
                <Text style={styles.btn}>Continue</Text>
              </Pressable>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default BacicinfoScr;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingBottom: 40,
    paddingRight: 24,
    paddingTop: 24,
    backgroundColor: '#fff',
    gap: 24,
  },
  textcontainer: {
    width: wp('88%'),
    height: hp('4.4%'),
  },
  text: {
    fontSize: 24,
    fontFamily: 'Barlow-SemiBold',
    fontWeight: '600',
    color: '#473B4A',
  },
  inputcontainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#rgba(238, 237, 238, 1)',
    borderRadius: 16,
    paddingLeft: 10,
    width: wp('88%'),
    height: hp('15.4%'),
  },
  Errorinputcontainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 16,
    paddingLeft: 10,
    width: wp('88%'),
    height: hp('15.4%'),
  },
  textscontainer: {
    width: wp('88%'),
    height: hp('2.9%'),
  },
  texts: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Barlow-Bold',
    color: '#473B4A',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  tag: {
    backgroundColor: '#7E0095',
    borderRadius: 10,

    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
    flexDirection: 'row',
  },
  tagText: {
    color: '#fff',
    marginRight: 5,
    textTransform: 'capitalize',
  },
  closeIcon: {
    color: '#fff',
  },
  btncontainer: {
    width: wp('88%'),
    backgroundColor: 'rgba(126, 0, 149, 1)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    height: hp('6.7%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  rowContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    // marginVertical: 8,
  },

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
  // ===============model======
  modelcontainer: {
    width: 380,
    height: 600,
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
    marginBottom: 5,
  },
  inputmodelcontainer: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: 'white',
    width: 300,
    marginBottom: 20,
  },
  modeltext: {
    color: 'white',
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});
