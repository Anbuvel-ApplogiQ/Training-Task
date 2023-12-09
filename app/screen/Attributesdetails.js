import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Attributeicon from '../image/switch/attributes.svg';

const AttributedetailScr = ({route}) => {
  const {selectedCheckboxes, selectdropdownValues, selectedtoggle} =
    route.params;
  console.log(selectdropdownValues, '!!!!!!!!!!!!!!');
  console.log(selectedCheckboxes, '!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log(selectedtoggle, '!!!!!!!!!!!!!!!!!!!!!!!!!');
  console.log('gcvghchgchggh');
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titlecontainer}>
          <Text style={styles.titletext}>Attributes</Text>
        </View>
        <View style={{gap: 24}}>
          <View>
            {Object.entries(selectdropdownValues).map(([key, value]) => (
              <View key={key} style={{gap: 16}}>
                <View style={styles.Keycontainer}>
                  <Text style={styles.keytext}>{key}</Text>
                </View>
                {Object.entries(value).map(([innerKey, innerValue]) => (
                  <View style={styles.textwrapcontainer}>
                    <View style={styles.valuescontainer}>
                      <Attributeicon width={20} height={20} />
                      <View style={styles.valuetextconatiner}>
                        <Text key={innerKey} style={styles.Attributestext}>
                          {innerValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View>
            {Object.entries(selectedCheckboxes).map(([key, value]) => (
              <View key={key} style={{gap: 16}}>
                <View style={styles.Keycontainer}>
                  <Text style={styles.keytext}>{key}</Text>
                </View>
                {Object.entries(value).map(([innerKey, innerValue]) => (
                  <View style={styles.textwrapcontainer}>
                    <View style={styles.valuescontainer}>
                      <Attributeicon width={20} height={20} />
                      <View style={styles.valuetextconatiner}>
                        <Text key={innerKey} style={styles.Attributestext}>
                          {innerValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View>
            <View style={{gap: 16}}>
              <View style={styles.Keycontainer}>
                <Text style={styles.keytext}>Yes or no</Text>
              </View>

              
              {Object.entries(selectedtoggle)
                          .filter(([_, toggleValue]) => toggleValue.length > 0)
                          .map(([toggleKey, toggleValue]) => (
                            <View style={styles.textwrapcontainer}>
                <View style={styles.valuescontainer}>
                  <Attributeicon width={20} height={20} />
                  <View style={styles.valuetextconatiner}>
                    <View style={styles.valuetextconatiner}>
                      <View style={styles.valuetextconatiner}>
                        
                            <Text key={toggleKey} style={styles.Attributestext}>
                              {toggleKey}
                            </Text>
                          
                         
                      </View>
                    </View>
                  </View>
                </View>
                </View>
                 ))}
             
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default AttributedetailScr;

const styles = StyleSheet.create({
  titletext: {
    fontSize: 24,
    fontWeight: '600',
    color: '#473B4A',
    fontFamily: 'Barlow-SemiBold',
  },
  titlecontainer: {
    width: wp('88%'),
    height: hp('4.4%'),
  },
  container: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 8,
  },
  Keycontainer: {
    width: wp('88%'),
    height: hp('2.9%'),
  },
  Attributestext: {
    marginLeft: 4,
    fontFamily: 'Barlow-Regular',
    fontSize: 16,
    fontWeight: '400',
    textTransform: 'capitalize',
    color: '#473B4A',
  },
  valuescontainer: {
    flexDirection: 'row',
    // backgroundColor:"blue",
    width: wp('44%'),
  },
  keytext: {
    color: '#7E0095',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Barlow-SemiBold',
    textTransform: 'capitalize',
  },
  valuetextconatiner: {
    // backgroundColor:"red",
    width: wp('38%'),
    height: hp('2.9%'),
  },
  textwrapcontainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
