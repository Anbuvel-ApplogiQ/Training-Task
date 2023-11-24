import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import SelectDropdown from 'react-native-select-dropdown';
// import Camera from '../image/Icon.svg/';
import Smalldown from '../image/angle-small-down.svg';
import DropDownPicker from 'react-native-dropdown-picker';
// import Select from '../image/picture.svg';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {useState, useRef} from 'react';

const Inputcomponent = ({
  label,
  textinputplaceholder,
  keyboardtype,
  onChangetext,
  value,
  error,
  onFocus = () => {},
  mobilenumber,
  selectdropdown,
  dropdown,
  lefticon,
  secureTextEntry
 
}) => {
  const[IsFocused,setIsFocused]=useState(false);
  const [isvalue, setisValue] = useState('');
  const phoneInput = useRef(null); // Use useRef instead of a string ref
  const sex = ['Male', 'Female', 'other'];
  const [open, setOpen] = useState(false);

  const [items, setItems] = useState([
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'other', value: 'Other'},
  ]);
  

  return (
    <View style={style.container}>
      {label ? (
        <View style={style.labelcontainer}>
          <Text style={style.labletext}>{label}</Text>
        </View>
      ) : null}

      {textinputplaceholder ? (
        <View>
        <View style={[style.inputtextcontainer,error&&style.errorinputtextcontainer]}>

          <TextInput
            style={style.inputtext}
            placeholder={textinputplaceholder}
            keyboardType={keyboardtype}
            onChangeText={onChangetext}
            secureTextEntry={secureTextEntry}
            value={value}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            
            
            
          />
        </View>
         {error && (
          <Text style={{marginTop: 7,marginLeft:20, color:"red", fontSize: 15}}>
            {error}
          </Text>
        )}
        </View>

      ) : null}

      {mobilenumber ? (
        <View>
          <>
        <PhoneInput
          ref={phoneInput}
          defaultValue={isvalue}
          defaultCode="IN"
          layout="first"
          onChangeText={onChangetext}
          
          // onFocus={() => {
          //   onFocus();
          //   setIsFocused(true);
          // }}
          // onChangeText={text => {
          //   setisValue(text);
          // }}
          //   onChangeFormattedText={text => {
          //     // setFormattedValue(text);
          //     // setCountryCode(phoneInput.current?.getCountryCode() || '');
          //   }}
          countryPickerProps={{withAlphaFilter: true}}
          containerStyle={{width: wp('87.4%'), borderRadius: 16,borderWidth:1,borderColor:error?"red":"white"}}
          textContainerStyle={{
            borderRadius: 16,
            backgroundColor: 'white',
            height: hp('8%'),
          }}
          textInputStyle={{padding: 0}}
          // disabled={disabled}
          placeholder="Phonenumber"
          // 
          
          // withDarkTheme
          withShadow
          autoFocus
        />
        </>
         {error && (
        <Text style={{marginTop: 7,marginLeft:20, color: "red", fontSize: 15}}>
          {error}
        </Text>
      )}
        </View>
      ) : null}

      {selectdropdown ? (
        <SelectDropdown
          data={sex}
          onSelect={onChangetext}
          iconsty
          searchInputStyle="green"
          dropdownOverlayColor="tarnsparent"
          selectedRowStyle={{backgroundColor: 'rgba(126, 0, 149, 1)'}}
          selectedRowTextStyle={{color: '#fff'}}
          dropdownStyle={{
            backgroundColor: 'white',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: 'rgba(126, 0, 149, 1)',
          }}
          rowStyle={{width: wp('90%'), backgroundColor: 'white'}}
          buttonStyle={{
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: '#rgba(238, 237, 238, 1)',
            borderRadius: 16,
            width: wp('90%'),
          }}
          buttonTextStyle={{fontSize: 16, alignItems: 'flex-start'}}
          renderDropdownIcon={() => (
            // <Select height={20} width={20}  />
            <Smalldown height={20} width={20} />
          )}
          // dropdownIconPosition='left'
        />
      ) : null}
      {dropdown ? (
        <View>
        <DropDownPicker
        style={[style.dropdownconatiner,error&&style.errordropdowncontainer]}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          placeholder={'Select your gender'}
          dropDownContainerStyle={{ 
            borderWidth: 2,
            borderColor: '#fff',
          }}
          onSelectItem={onChangetext}
          selectedItemContainerStyle={{backgroundColor:'rgba(126, 0, 149, 1)'}}
          // modalContentContainerStyle={{backgroundColor:"red"}}
          // selectedItemContainerStyle={{backgroundColor:'rgba(126, 0, 149, 1)'}}
          // selectedItemContainerStyle={{backgroundColor:"red"}}
          selectedItemLabelStyle={{color:"white"}}

          hideSelectedItemIcon={true}

          // CloseIconComponent={true}
          placeholderStyle={{color: "#473B4A"}}
        />
        {error && (
        <Text style={{marginTop: 7,marginLeft:20, color: "red", fontSize: 15}}>
          {error}
        </Text>
      )}
        </View>
      ) : null}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    width: wp('87.4%'),
    marginBottom: 8,
  },
  errorinputtextcontainer:{
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 16,
    paddingLeft:10
  },
  inputtextcontainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#rgba(238, 237, 238, 1)',
    borderRadius: 16,
    paddingLeft:10
  },
  inputtext: {
    width: wp('100%'),
    // height: '88px',
    height: hp('12.9%'),
   
    // backgroundColor:"red",
    // paddingLeft:5
  },
  labelcontainer: {
    // width: '100%',
    // height: '24px',
    height: hp('2.9%'), // 70% of height device screen
    width: wp('100%'),
    marginBottom: 8,
  },
  labletext: {
    fontSize: 16,
    fontWeight: '700',
    fontStyle: 'normal',
    fontFamily: 'Barlow-Regular',
    color: 'rgba(71, 59, 74, 1)',
  },
  inputtext: {
    width: wp('100%'),
  },
  dropdownconatiner:{
    borderWidth:0,
    borderRadius:16
  },
  errordropdowncontainer:{
    borderWidth:1,
    borderColor:'red',
    borderRadius:16
  }
});
export default Inputcomponent;
