// import React, {useState} from 'react';
// import {View, Text} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


// const Anbu =()=> {
//     const [open, setOpen] = useState(false);
//     const [value, setValue] = useState(null);
//     const [items, setItems] = useState([
//         {label: 'Apple', value: 'apple'},
//         {label: 'Banana', value: 'banana'},
//         {label: 'Pear', value: 'pear'},
//     ]);

//     return (
//       <View style={{flex: 1}}>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//             paddingHorizontal: 15,
//           }}>
//           <DropDownPicker
//             open={open}
//             value={value}
//             items={items}
//             setOpen={setOpen}
//             setValue={setValue}
//             setItems={setItems}
//             placeholder={'Choose a fruit.'}
          
//             dropDownContainerStyle={{borderWidth:1,borderColor:'rgba(126, 0, 149, 1)'}}
//             modalContentContainerStyle={{backgroundColor:"red"}}
//             selectedItemContainerStyle={{backgroundColor:'rgba(126, 0, 149, 1)'}}
//             selectedItemLabelStyle={{color:"white"}}

//             hideSelectedItemIcon={true}
//             // CloseIconComponent={true}
//             placeholderStyle={{color:"red"}}
//             // listParentContainerStyle={{backgroundColor:"red"}}
            

            

//             // searchInputStyle="green"
//             // dropdownOverlayColor="tarnsparent"
//             // selectedRowStyle={{backgroundColor: 'rgba(126, 0, 149, 1)'}}
//             // selectedRowTextStyle={{color: '#fff'}}
//             // dropdownStyle={{
//             //   backgroundColor: 'white',
//             //   borderRadius: 16,
//             //   borderWidth: 1,
//             //   borderColor: 'rgba(126, 0, 149, 1)',
//             // }}
//             // rowStyle={{width: wp('90%'), backgroundColor: 'white'}}
//             // buttonStyle={{
//             //   backgroundColor: 'white',
//             //   borderWidth: 1,
//             //   borderColor: '#rgba(238, 237, 238, 1)',
//             //   borderRadius: 16,
//             //   width: wp('90%'),
//             // }}
//             // buttonTextStyle={{fontSize: 16, alignItems: 'flex-start'}}
//           />
//         </View>

//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'center',
//           }}>
//           <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
//         </View>
//       </View>
//     );
// }
// export default Anbu;


import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
// import Anbu from './dropdowncomponent';

const Anbu = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Text>e;lkojgi</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Anbu;