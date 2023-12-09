import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownComponent = ({placeholder,
value,
items,
setItems,
open,
setOpen,
setValue,
onChangetext,error
}) => {
  return (
    <View>
        <DropDownPicker
        style={[styles.dropdownconatiner,error&&styles.errordropdowncontainer]}
          open={open}
          value={value}
          setValue={setValue}
          items={items}
          setOpen={setOpen}
          setItems={setItems}
          placeholder={placeholder}
        
          dropDownContainerStyle={{ 
            borderWidth: 2,
            borderColor: '#fff',
          }}
          onSelectItem={onChangetext}
          selectedItemContainerStyle={{backgroundColor:'rgba(126, 0, 149, 1)'}}
          selectedItemLabelStyle={{color:"white"}}
          hideSelectedItemIcon={true}
          placeholderStyle={{color: "#473B4A"}}
        />
        {error && (
        <Text style={{marginTop: 7,marginLeft:20, color: "red", fontSize: 15}}>
          {error}
        </Text>
      )}
        </View>
  )
}

export default DropdownComponent;

const styles = StyleSheet.create({

    dropdownconatiner:{
        borderWidth:0,
        borderRadius:16
      },
      errordropdowncontainer:{
        borderWidth:1,
        borderColor:'red',
        borderRadius:16
      }
})