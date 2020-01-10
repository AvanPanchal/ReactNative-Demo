import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput, Button, Alert ,TouchableOpacity} from 'react-native';

class ValidationDemoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            name: '',
            email: '',
            password: '',
            dataVisible: false
        }
    }


    onWriteName(text) {
        // console.log("text",text)
        this.setState({ name: text })
    }
    onWriteEmail(text) {
        this.setState({ email: text })
    }
    onWritePassword(text) {
        this.setState({ password: text })
    }

    setData = () => {
        this.setState({ valueone: this.state.name })
        this.setState({ valuetwo: this.state.email })
        this.setState({ valuethree: this.state.password })
    }
    onPresssubmitbtn = () => {
        if (this.state.name === '') {
            Alert.alert('Please enter Name')
        }
        else if (this.state.email === '') {
            Alert.alert('please enter email')
        }
        else if (this.state.password === '') {
            Alert.alert('please enter password')
        }
        else {
            this.setData();
            this.setState({ dataVisible: true })
        }
    }

    onPressbackbtn = () => {
        this.setState({ dataVisible: false })
    }

    render() {

        return (


            <View>
                {
                    !this.state.dataVisible ?
                        <View style={styels.container}>
                            <View>
                                <Text style={{
                                    marginRight: 20,
                                    marginLeft: 20, marginBottom: 5
                                }}>Name:</Text>
                                <TextInput style={styels.textInputStyle}
                                    placeholder={'Enter Name'}
                                    value={this.state.name}
                                    onChangeText={text => this.onWriteName(text)}
                                />
                            </View>
                            <View style={styels.containerone}>
                                <Text style={{
                                    marginRight: 20,
                                    marginLeft: 20, marginBottom: 5
                                }}>Email:</Text>
                                <TextInput style={styels.textInputStyle}
                                    placeholder={'Enter Email'}
                                    value={this.state.email}
                                    onChangeText={text => this.onWriteEmail(text)}
                                />
                            </View>
                            <View style={styels.containertwo}>
                                <Text style={{
                                    marginRight: 20,
                                    marginLeft: 20, marginBottom: 5
                                }}>Password:</Text>
                                <TextInput style={styels.textInputStyle}
                                    placeholder={'Enter Password'}
                                    secureTextEntry={true}
                                    value={this.state.password}
                                    onChangeText={text => this.onWritePassword(text)}
                                />
                            </View>
                            <View style={styels.buttonstyle}>
                                <Button title={'Submit'} onPress={this.onPresssubmitbtn} />
                            </View>


                            {/* <Image
                style={{ width: '98%', height: '50%'}}
                source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
              /> */}

                            <TouchableOpacity style={{
                                alignItems: 'center', backgroundColor: 'yellow',
                                padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
                            }} onPress={() => this.props.navigation.goBack()}>
                                <Text>{'Go To HomeScreen'}</Text>
                            </TouchableOpacity>
                        </View>

                        :
                        <View style={styels.secondcontainer}>
                            <View style={styels.secondcontainerone}>
                                <Text>Name : {this.state.valueone}</Text>
                            </View>
                            <View style={styels.secondcontainertwo}>
                                <Text>Email : {this.state.valuetwo}</Text>
                            </View>
                            <View style={styels.secondcontainerthree}>
                                <Text>Password : {this.state.valuethree}</Text>
                            </View>
                            <View style={styels.secondcontainerbtn}>
                                <Button title={'Back'} onPress={this.onPressbackbtn} />
                            </View>

                            <TouchableOpacity style={{
                                alignItems: 'center', backgroundColor: 'yellow',
                                padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
                            }} onPress={() => this.props.navigation.goBack()}>
                                <Text>{'Go To HomeScreen'}</Text>
                            </TouchableOpacity>
                        </View>

                }
            </View>
        );
    }
}

const styels = StyleSheet.create({

    container: {
        marginTop: 75
    },
    containerone: {
        marginTop: 20,
    },
    containertwo: {
        marginTop: 20
    },
    buttonstyle: {
        marginTop: 0,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 30
    },
    textInputStyle: {
        borderWidth: 1,
        paddingTop: 10,
        borderRadius: 15,
        marginRight: 20,
        marginLeft: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        //borderBottomWidth:3,
        height: 55
    },
    secondcontainer: {
        marginTop: 50
    },
    secondcontainerone: {
        marginTop: 10
    },
    secondcontainerthree: {
        paddingBottom: 20
    },
    secondcontainerbtn: {
        marginTop: 10,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff',
        marginLeft: 50,
        marginRight: 50,
        paddingTop: 30
    }
});
export default ValidationDemoScreen;