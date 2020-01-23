import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            phone: '',
            confirmpassword: '',
        }

    }
    storeData = async () => {
        let info = {
            username: this.state.username,
            email: this.state.email,
            phone1: this.state.phone,
            password1: this.state.password,
            confirmpassword1: this.state.confirmpassword,

        }
        await AsyncStorage.setItem("userData", JSON.stringify(info));
        let userdata = await AsyncStorage.getItem("userData");
        // let data = JSON.parse(userData);
        console.log("userdata-->", userdata);


    }
    onPresscreatebtn = () => {
        if (this.state.username === '') {
            Alert.alert('Please enter Username')
        }
        else if (this.state.email === '') {
            Alert.alert('please enter email')
        }
        else if (this.state.phone === '') {
            Alert.alert('please enter phone')
        }
        else if (this.state.password === '') {
            Alert.alert('please enter password')
        }
        else if (this.state.confirmpassword === '') {
            Alert.alert('Please enter Confirm Password')
        }
        else {
            this.storeData();
        }

    }
    onWriteUsername(text) {
        this.setState({ username: text })
    }
    onWriteEmail(text) {
        this.setState({ email: text })
    }
    onWritePassword(text) {
        this.setState({ password: text })
    }
    onWritePhone(text) {
        this.setState({ phone: text })
    }
    onWriteConfirmPassword(text) {
        this.setState({ confirmpassword: text })
    }





    // async getData() {
    //     try {
    //         let userData = await AsyncStorage.getItem("userData");
    //         let data = JSON.parse(userData);
    //         console.log("userdata-->", data);
    //     } catch (error) {
    //         console.log("Something went wrong", error);
    //     }

    // }




    render() {
        return (
            <View>
                <TouchableHighlight onPress={() => this.props.navigation.navigate('LoginForm')}>
                    <Image source={require('../images/left_arrow.png')}
                        style={styles.iconarrowstyle} ></Image>
                </TouchableHighlight>

                <View style={[styles.maincontainer, { marginTop: 50 }]}>
                    <Text style={styles.welcometextstyle}>Let's Get Started!</Text>
                </View>
                <View style={[styles.maincontainer, { marginBottom: 30 }]}>
                    <Text style={styles.alluretextstyle}>Create an account to Q Allure to get all features</Text>
                </View>
                <View>
                    <View style={styles.inputonestyle}>
                        <Image source={require('../images/icon.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Username'}
                            value={this.state.username}
                            onChangeText={text => this.onWriteUsername(text)}
                        ></TextInput>
                    </View>
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <View style={styles.inputtwostyle}>
                        <Image source={require('../images/envelope.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Email'} value={this.state.email}
                            onChangeText={text => this.onWriteEmail(text)}
                        ></TextInput>
                    </View>
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <View style={styles.inputtwostyle}>
                        <Image source={require('../images/phone.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Phone'} value={this.state.phone}
                            onChangeText={text => this.onWritePhone(text)}></TextInput>
                    </View>
                </View>

                <View style={{ justifyContent: 'center' }}>
                    <View style={styles.inputtwostyle}>
                        <Image source={require('../images/password.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Password'} value={this.state.password} secureTextEntry={true}
                            onChangeText={text => this.onWritePassword(text)} ></TextInput>
                    </View>
                </View>

                <View style={{ justifyContent: 'center', marginBottom: 15 }}>
                    <View style={styles.inputtwostyle}>
                        <Image source={require('../images/password.png')}
                            style={styles.icononestyle} ></Image>
                        <TextInput placeholder={'Confirm Password'}
                            value={this.state.confirmpassword} secureTextEntry={true}
                            onChangeText={text => this.onWriteConfirmPassword(text)}></TextInput>
                    </View>
                </View>

                <View style={styles.btnviewstyle}>
                    <TouchableHighlight underlayColor='none'
                        style={styles.btnstyle}
                        onPress={() => { this.onPresscreatebtn() }} >
                        <Text style={{ color: '#fff', fontWeight: 'bold' }} >
                            CREATE
                        </Text>
                    </TouchableHighlight>
                </View>


                <View style={styles.signupstyle}>
                    <Text>Already have an account?</Text>
                    <Text style={{ color: '#0b51d2', fontWeight: 'bold', marginLeft: 5 }}
                        onPress={() => this.props.navigation.navigate('LoginForm')}  >Login here</Text>
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
        alignItems: 'center',
    },
    icononestyle: {
        height: 15,
        width: 15,
        marginTop: 17
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
        marginTop: 10,
        alignItems: 'center'
    },
    iconarrowstyle: {
        height: 25,
        width: 25,
        marginTop: 20,
        marginLeft: 15
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