import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {JsonData} from '../../common/data/data';
import Checked from '../../image/checkbox/checkicon.svg';
import DropIcon from '../../image/checkbox/drop.svg';
import Circle from '../../image/checkbox/notcheck.svg';
import Switchoff from '../../image/switch/switchoff.svg';
import SwitchOn from '../../image/switch/switchon.svg';

const AttributesScr = ({navigation}) => {
  const Data = JsonData;
  const [notes, setNotes] = useState(Data);
  const [check, setCheck] = useState(false);
  const [selectitem, setSelectitem] = useState({});
  const [drop, setDrop] = useState(false);
  const [selectedtoggle, setSelectedtoggle] = useState({});
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});
  const [selectdropdownValues, setSelectdropdownvalue] = useState({});
  useEffect(() => {
    storeData();
    loadNotes();
  }, []);
console.log(selectedCheckboxes);
  // ========================================================
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('notes', JSON.stringify(notes));
    } catch (error) {}
  };

  // =====================load Data===========
  const loadNotes = async () => {
    try {
      const storedNotes = await AsyncStorage.getItem('notes');
      if (storedNotes) {
        setNotes(JSON.parse(storedNotes));
      }
    } catch (error) {}
  };
  // const Pick = (id, select) => {
  //   setCheck(prev => ({...prev, [id]: select}));
  //   console.log(id);
  // };
  // const key = 'id';
  // console.log(switchtoggle[key],"key");
 

  const handleCheckboxpress = (attributeId, valueId) => {
    setSelectedCheckboxes(prevSelecttion => {
      const updatedselected = {...prevSelecttion};
      if (!updatedselected[attributeId]) {
        updatedselected[attributeId] = [];
      }
      const index = updatedselected[attributeId].indexOf(valueId);
      if (index !== -1) {
        updatedselected[attributeId].splice(index, 1);
      } else {
        updatedselected[attributeId].push(valueId);
      }
      console.log(selectedCheckboxes, 'selctyfgyhfv');
      return updatedselected;
    });
  };

  const handleDropdownpress = (attributeId, valueId) => {
    setSelectdropdownvalue(prevSelecttion => {
      const updatedselected = {...prevSelecttion};
      if (!updatedselected[attributeId]) {
        updatedselected[attributeId] = [];
      }
      const index = updatedselected[attributeId].indexOf(valueId);
      if (index !== -1) {
        updatedselected[attributeId].splice(index, 1);
      } else {
        updatedselected[attributeId].push(valueId);
      }
      console.log(selectdropdownValues, 'selectdropdownvalues');
      return updatedselected;
    });
  };
  const handleTogglepress = (attributeId, Id) => {
    setSelectedtoggle((prevSelection) => {
      const updatedSelection = { ...prevSelection };
      const checkboxKey = attributeId;
  
      if (!updatedSelection[checkboxKey]) {
        updatedSelection[checkboxKey] = [];
      }
  
      if (updatedSelection[checkboxKey].includes(Id)) {
        // If the checkbox is selected, remove it
        updatedSelection[checkboxKey] = updatedSelection[checkboxKey].filter(
          (item) => item !== Id
        );
      } else {
        // If the checkbox is not selected, add it
        updatedSelection[checkboxKey].push(Id);
      }
       console.log(updatedSelection);
       const filteredObject = Object.fromEntries(
        Object.entries(updatedSelection).filter(([key, value]) => value.length > 0)
      );
      console.log(filteredObject, "jjjjjjjjjjjjj");
      return updatedSelection;
    });
  
    
  };
  
  
  const buttonselcted = () => {
    const checkboxValuesSelected = Object.values(selectedCheckboxes).some(
      values => values && values.length > 0,
    );
    const dropdownValuesSelected = Object.values(selectdropdownValues).some(
      values => values && values.length > 0,
    );
    return (
      checkboxValuesSelected || dropdownValuesSelected 
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#ffff', padding: 24}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.TitleContainer}>
            <Text style={styles.TitleText}>Attributes</Text>
          </View>
          <View style={{gap: 8}}>
            <View style={styles.textcontainer}>
              <Text style={styles.textValue}>foods</Text>
            </View>
            <Pressable
              style={styles.dropdownstylecontainer}
              onPress={() => {
                setDrop(!drop);
              }}>
              <Text>Search+Check</Text>
              <DropIcon width={20} height={20} />
            </Pressable>
          </View>
          {drop ? (
            <View>
              {notes
                .filter(item => item.type === 'Predefined Values')
                .map(item => (
                  <View style={{gap: 8}}>
                    <View style={styles.DropdownContainer}>
                      <ScrollView>
                        {item.attribute_values.map(data => (
                          <View style={styles.checkcontainer} key={data.id}>
                            <TouchableOpacity
                              style={styles.checkinnercontainer}
                              onPress={() =>
                                handleDropdownpress(
                                  item.business_attribute,
                                  data.value,
                                )
                              }>
                              {selectdropdownValues[item.business_attribute] &&
                              selectdropdownValues[
                                item.business_attribute
                              ].includes(data.value) ? (
                                <Checked width={20} height={20} />
                              ) : (
                                <Circle width={20} height={20} />
                              )}
                              <Text
                                style={{
                                  ...styles.checkText,
                                  color:
                                    selectdropdownValues[
                                      item.business_attribute
                                    ] &&
                                    selectdropdownValues[
                                      item.business_attribute
                                    ].includes(data.value)
                                      ? '#7E0095'
                                      : '#473B4A',
                                }}>
                                {data.value}
                              </Text>
                            </TouchableOpacity>
                          </View>
                        ))}
                      </ScrollView>
                    </View>
                  </View>
                ))}
            </View>
          ) : null}
          {notes
            .filter(item => item.type === 'Check Box Values')
            .map(item => (
              <View style={{gap: 8}}>
                <View
                  style={styles.textcontainer}
                  key={item.business_attribute}>
                  <Text style={styles.textValue}>
                    {item.business_attribute}
                  </Text>
                </View>
                {item.attribute_values.map(data => (
                  <View style={styles.ckeckboxcontainer} key={data.id}>
                    <TouchableOpacity
                      style={styles.checkinnercontainer}
                      onPress={() =>
                        handleCheckboxpress(item.business_attribute, data.value)
                      }>
                      {selectedCheckboxes[item.business_attribute] &&
                      selectedCheckboxes[item.business_attribute].includes(
                        data.value,
                      ) ? (
                        <Checked width={20} height={20} />
                      ) : (
                        <Circle width={20} height={20} />
                      )}
                      <Text
                        style={{
                          ...styles.checkText,
                          color:
                            selectedCheckboxes[item.business_attribute] &&
                            selectedCheckboxes[
                              item.business_attribute
                            ].includes(data.value)
                              ? '#7E0095'
                              : '#473B4A',
                        }}>
                        {data.value}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>
            ))}
          <View>
            {notes
              .filter(item => item.type === 'Yes/No')
              .map(item => (
                <View style={styles.yesornocontainer}>
                  <View style={styles.toggletextcontainer}>
                    <Text
                      style={{
                      ...styles.toggletext,
                      color:selectedtoggle && selectedtoggle[item.business_attribute] && selectedtoggle[item.business_attribute].length > 0 ? '#7E0095' :'#473B4A'
                      }}>
                      {item.business_attribute}
                    </Text>
                  </View>
                  <Pressable onPress={() => handleTogglepress(item.business_attribute, item.id)}>
                  {selectedtoggle && selectedtoggle[item.business_attribute] && selectedtoggle[item.business_attribute].length > 0 ? 
                   (
                      <SwitchOn width={45} height={45} />
                    ) : (
                      
                      <Switchoff width={45} height={45} />
                    )}
                  </Pressable>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          ...styles.btncontainer,
          backgroundColor: buttonselcted() ? '#7E0095' : '#E2E0E2',
        }}
        disabled={!buttonselcted()}
        onPress={() =>
          navigation.navigate('AttributedetailScr', {
            selectedCheckboxes: selectedCheckboxes,
            selectdropdownValues: selectdropdownValues,
            selectedtoggle: selectedtoggle, 
           
          })
        }>
        <Text
          style={{
            ...styles.btntext,
            color: buttonselcted() ? '#ffff' : '#B6B1B7',
          }}>
          continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AttributesScr;

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 24,
    // marginVertical: 24,
    gap: 24,
  },
  TitleContainer: {
    width: wp('88%'),
    height: hp('4.4%'),
    // backgroundColor:"red",
  },
  TitleText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#473B4A',
    fontFamily: 'Barlow-SemiBold',
  },
  textcontainer: {
    width: wp('88%'),
    height: hp('2.9%'),
  },
  textValue: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '700',
    fontFamily: 'Barlow-Bold',
    color: '#473B4A',
  },
  inputtext: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  DropdownContainer: {
    width: wp('88%'),
    height: hp('28.2%'),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#7E0095',
    overflow: 'scroll',
  },
  checkcontainer: {
    paddingVertical: 16,
    paddingLeft: 16,
    paddingRight: 4,
    gap: 8,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    // backgroundColor:"red"
  },
  checkText: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Barlow-Regular',
  },
  checkinnercontainer: {
    height: hp('2.9%'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownstylecontainer: {
    width: wp('88%'),
    height: hp('8%'),
    borderWidth: 1,
    borderRadius: 16,
    borderColor: '#473B4A',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ckeckboxcontainer: {
    paddingVertical: 8,
    paddingLeft: 4,
    paddingRight: 4,
    gap: 8,
    alignItems: 'flex-start',
    alignSelf: 'stretch',
  },
  yesornocontainer: {
    width: wp('88%'),
    height: hp('7.7%'),
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  toggletext: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Barlow-Bold',
    textTransform: 'capitalize',
    // color:selectedtoggle.value === item.business_attribute ? '#473B4A' : '#7E0095',

    // backgroundColor:"red"
  },
  toggletextcontainer: {
    width: wp('76%'),
    height: hp('2.9%'),
  },
  btncontainer: {
    // width: wp('88%'),
    height: hp('6.7%'),
    backgroundColor: '#7E0095',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    // fontFamily:""
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Barlow-Bold',
    color: '#FFFFFF',
  },
});
