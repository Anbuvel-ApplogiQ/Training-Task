import { Button, Pressable, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Background from '../backgroundimg/backgroundimage';


const RegisterScreen = () => {
    return (
        <Background>
            <StatusBar
            backgroundColor="green"
            hidden={true}/>
           

            <View style={styles.titlecontainer}>
                <Text style={styles.titletext1}>Green</Text>
                <Text style={styles.titletext2}>Tech</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.registercontainer}>
                    <View style={styles.registerheading}>
                        <Text style={styles.registerheadingtext}>register form</Text>
                    </View>

                    <TextInput
                    placeholder='FirstName'
                    style={styles.Inputtext}
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"

                    
                    />
                     <TextInput
                    style={styles.Inputtext}
                    placeholder='LastName'
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                     <TextInput
                     style={styles.Inputtext}
                    placeholder='Email Id'
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                     <TextInput
                     style={styles.Inputtext}
                    placeholder='Mobile No'
                    maxLength={10}
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                    <TextInput
                    style={styles.Inputtext}
                    placeholder='UserName'
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                     <TextInput
                     style={styles.Inputtext}
                    placeholder='Create Password'
                    secureTextEntry={true}
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                    <TextInput
                    style={styles.Inputtext}
                    placeholder='Confirm Password'
                    placeholderTextColor="#18392b"
                    // underlineColorAndroid="black"
                    
                    />
                    <View style={styles.Button}>
                        <Button
                        title='Register'
                        color="green"
                        />
                    </View>
                    <View style={styles.logincontainer}>
                    <Text style={styles.logintext}>Already got an Account?</Text>
                    <Pressable style={styles.loginbtn}>
                        <Text style={styles.loginbtntext}>Log in </Text>
                    </Pressable>
                    </View>
                </View>
            </View>


        </Background>
    )
}

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        marginTop: 20,
        width: "115%",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,

    },
    titlecontainer: {
        display: "flex",
        flexDirection: "row",
        width: "115%",
        justifyContent: "center",
        marginTop:20
    },
    titletext1: {
        fontSize: 50,
        color: "white",
        fontWeight:"900"


    },
    titletext2: {
        fontSize: 50,
        color: "white"

    },
    registercontainer: {
        

    },
    registerheading: {
        marginTop:20,
        marginLeft:65

    },
    registerheadingtext: {
        color:"green",
        fontSize:35,
        textTransform:"uppercase"

    },
    Button:{
        width:300,
        marginLeft:45,
        marginTop:20,
        marginBottom:20
        
        
    },
    Inputtext:{
        marginTop:10,
        width:300,
        marginLeft:45,
        fontSize:20,
        paddingHorizontal:10,
        backgroundColor:"#72cc50",
        borderRadius:10
        // borderWidth:2,
        // borderColor:"green",
        // borderRadius:10
    },
    logincontainer:{
        flexDirection:"row",
        marginLeft:50

    },
    loginbtn:{
        marginLeft:5,
        marginBottom:40
    },
    logintext:{
        fontSize:20,

    },
    loginbtntext:{
        color:"green",
        fontSize:20,
        fontWeight:"600",
       


    }



})