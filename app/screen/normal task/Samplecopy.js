import {
    StyleSheet,
    Text,
    View,
    Pressable,
    Button,
    ScrollView,
    Switch,
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import {JsonData} from '../../common/data/data';
  
  const SampleAttributesScr = () => {
    const Data = JsonData;
    const [notes, setNotes] = useState(Data);
    const [isEnabled, setIsEnabled] = useState(false);
    const [click, setclick] = useState({});
    const [value, Setvalue] = useState('');
    const [common, Setcommon] = useState();
    const [id, setId] = useState([]);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    useEffect(() => {
      storeData();
      loadNotes();
    }, []);
  
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
    const Clicked = (ids, click) => {
      
      setclick(!click)
      setclick(prev => ({...prev, [ids]: click}));
      console.log(click,"oivufibvuigvbutbtgu");
    };
    console.log(click,"44444444444");
    
    return (
      <ScrollView>
        <Switch
          trackColor={{false: 'red', true: 'blue'}}
          thumbColor={isEnabled ? 'red' : 'blue'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
  
        {isEnabled ? (
          <View>
            <Text>Sample</Text>
            
          <ScrollView>
            <View style={styles.container}>
              {notes?.map(item => (
                <View key={item.id} style={styles.btncontainer}>
                  <Pressable
                    style={{}}
                    onPress={() =>
                      Clicked(item.id, click[item.id] ? !click[item.id] : true)
                    }>
                    <Text style={styles.btn}>{item.business_attribute}</Text>
                  </Pressable>
                  {click[item.id] ? (
                    <View>
                      {item?.attribute_values.map(value => (
                        <View key={value.id}>
                          <Text>{value.value}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
            </ScrollView>
          </View>
        ) : null}
      </ScrollView>
    );
  };
  
  export default SampleAttributesScr;
  
  const styles = StyleSheet.create({
    btncontainer: {
      width: '60%',
      height: '10%',
      backgroundColor: 'blue',
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: 'red',
    },
  });
  