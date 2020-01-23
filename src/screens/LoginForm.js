import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }
    }
    checkdata = async () => {
        let user = await AsyncStorage.getItem("userData");
        let userinfo = JSON.parse(user);
        if (this.state.email != userinfo.email) {
            Alert.alert("you have entered wrong email ")
        }
        else if (this.state.password != userinfo.password1) {
            Alert.alert("you have entererd wrong password")
        }
        else {
            Alert.alert("Sucesss!!")
        }
        //console.log("DATA", userinfo);
    }
    onPressSubmitbtn = () => {

        if (this.state.email === '') {
            Alert.alert('Please enter email')
        }
        else if (this.state.password === '') {
            Alert.alert('please enter password')
        }
        else {
            this.checkdata();
        }
    }

    onWriteEmail(text) {
        this.setState({ email: text })
    }
    onWritePassword(text) {
        this.setState({ password: text })
    }
    render() {
        return (
            <View>
                <View style={styles.maincontainer}>
                    <Image source={require('../images/login.png')}
                        style={styles.Imagestyle}></Image>

                </View>
                <View style={styles.maincontainer}>
                    <Text style={styles.welcometextstyle}>Welcome back!</Text>
                </View>
                <View style={[styles.maincontainer, { marginBottom: 15 }]}>
                    <Text style={styles.alluretextstyle}>Log in to your existant account of Q Allure</Text>
                </View>
                <View>
                    <View style={styles.inputonestyle}>
                        <Image source={require('../images/icon.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Username'} value={this.state.email}
                            onChangeText={text => this.onWriteEmail(text)}></TextInput>
                    </View>
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <View style={styles.inputtwostyle}>
                        <Image source={require('../images/password.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Password'} value={this.state.password} secureTextEntry={true}
                            onChangeText={text => this.onWritePassword(text)}></TextInput>
                    </View>
                </View>
                <View style={styles.forgotstyle}>
                    <Text>Forgot Password?</Text>
                </View>
                <View style={styles.btnviewstyle}>
                    <TouchableHighlight underlayColor='none'
                        style={styles.btnstyle} onPress={() => { this.onPressSubmitbtn() }}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }} >
                            LOG IN
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.connectstyle}>
                    <Text style={{ color: '#ccc', fontSize: 15 }}>Or connect using</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingHorizontal: 30, justifyContent: 'space-around' }}>
                    <View>
                        <TouchableHighlight underlayColor='none'
                            style={styles.btnfbstyle}>
                            <Text style={{ color: '#fff' }} >
                                Facebook
                        </Text>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <TouchableHighlight underlayColor='none'
                            style={styles.btngooglestyle}>
                            <Text style={{ color: '#fff' }} >
                                Google
                        </Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={styles.signupstyle}>
                    <Text>Don't have an account?</Text>
                    <Text style={{ color: '#0b51d2', fontWeight: 'bold', marginLeft: 5 }}
                        onPress={() => this.props.navigation.navigate('SignupForm')}  >Sign Up</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    maincontainer: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icononestyle: {
        height: 16,
        width: 16,
        marginTop: 16
    },
    signupstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,
    },
    btnfbstyle: {
        borderWidth: 0,
        padding: 14,
        backgroundColor: '#0b51d2',
        borderRadius: 10,
        width: 145,
        marginTop: 15,
        alignItems: 'center'
    },
    btngooglestyle: {
        borderWidth: 0,
        padding: 14,
        width: 145,
        backgroundColor: 'red',
        borderRadius: 10,
        marginTop: 15,
        alignItems: 'center'
    },
    connectstyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35,

    },
    btnstyle: {
        borderWidth: 0,
        padding: 14,
        backgroundColor: '#0b51d2',
        borderRadius: 35,
        marginHorizontal: 110,
        marginTop: 15,
        alignItems: 'center'
    },
    forgotstyle: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 25
    },
    Imagestyle: {
        height: 180,
        width: 180,
        marginTop: 50
    },
    welcometextstyle: {
        fontWeight: 'bold',
        fontSize: 32
    },
    alluretextstyle: {
        color: '#ccc',
    },
    inputonestyle: {
        borderWidth: 1,
        borderRadius: 35,
        borderColor: '#0b51d2',
        paddingHorizontal: 25,
        marginVertical: 10,
        padding: 5,
        marginHorizontal: 18,
        flexDirection: 'row'
    },
    inputtwostyle: {
        borderWidth: 1,
        borderRadius: 35,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        paddingHorizontal: 25,
        marginVertical: 10,
        padding: 5,
        marginHorizontal: 18,
        flexDirection: 'row',
    },

})
export default LoginForm;