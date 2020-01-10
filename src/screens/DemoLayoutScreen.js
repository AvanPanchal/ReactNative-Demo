import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, Alert, TextInput, TouchableHighlight, TouchableOpacity }
    from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class DemoLayoutScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView vertical={true} style={{paddingHorizontal: 30}}>
                    <View style={styles.containerone}>
                        <Text style={styles.headerstyle}>Online Doctor Specialities</Text>
                    </View>
                    <View style={styles.containertwo}>
                        <View style={styles.containerthree}>
                            <TextInput placeholder={'Search'} style={styles.inputstyle} placeholderTextColor={'white'}>
                            </TextInput>
                        </View>
                        <View style={styles.editstyleone}>
                            <TouchableHighlight onPress={() => alert('Edit Touched.')}
                            >
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <View>
                                        <Text style={styles.editstyle}>Edit</Text>
                                    </View>
                                    <View >
                                        <Image source={require('../images/arrow-down-sign-to-navigate.png')}
                                            style={{ height: 18, width: 18, marginLeft: 10 }}></Image>
                                    </View>
                                </View>

                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={styles.imagetextstyle}>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 25 }}
                                source={require('../images/tooth-logo-template-for-dentistry-or-dental-vector-13450850.jpg')}
                            />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: '#fcb502', fontSize: 15, textAlign: 'center' }}>Stomatology</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>Loren Ipsum dolor sit amet,</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>vis no erroribus hendrerit,</Text>
                            <View>
                                <TouchableHighlight onPress={() => alert('Edit Touched.')} underlayColor='none'
                                    style={styles.button}>
                                    <Text style={{ color: '#fff' }}>
                                        View
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>


                    <View style={styles.imagetextstyletwo}>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 25 }}
                                source={require('../images/ophthalmology.png')}
                            />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: '#ff5a01', fontSize: 15, textAlign: 'center' }}>Opthamology</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>Loren Ipsum dolor sit amet,</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>vis no erroribus hendrerit,</Text>
                            <View>
                                <TouchableHighlight onPress={() => alert('Edit Touched.')} underlayColor='none'
                                    style={styles.buttonone}>
                                    <Text style={{ color: '#fff' }}>
                                        View
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>





                    <View style={styles.imagetextstylethree}>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 25 }}
                                source={require('../images/neurology.jpg')}
                            />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: '#fe352a', fontSize: 15, textAlign: 'center' }}>Neurology</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>Loren Ipsum dolor sit amet,</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>vis no erroribus hendrerit,</Text>
                            <View>
                                <TouchableHighlight onPress={() => alert('Edit Touched.')} underlayColor='none'
                                    style={styles.buttonthree}>
                                    <Text style={{ color: '#fff' }}>
                                        View
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                    <View style={styles.imagetextstylefour}>
                        <View style={{ marginTop: 20 }}>
                            <Image
                                style={{ width: 100, height: 100, borderRadius: 25 }}
                                source={require('../images/surgery.png')}
                            />
                        </View>
                        <View style={{ marginTop: 25 }}>
                            <Text style={{ color: '#0b51d2', fontSize: 15, textAlign: 'center' }}>Surgery</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>Loren Ipsum dolor sit amet,</Text>
                            <Text style={{ color: '#0b51d2', fontSize: 15 }}>vis no erroribus hendrerit,</Text>
                            <View>
                                <TouchableHighlight onPress={() => alert('Edit Touched.')} underlayColor='none'
                                    style={styles.buttonfour}>
                                    <Text style={{ color: '#fff' }} >
                                        View
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={{
                            alignItems: 'center', backgroundColor: 'yellow',
                            padding: 25, borderRadius: 25, marginHorizontal: 30,marginTop:25
                        }} onPress={() => this.props.navigation.goBack()}>
                            <Text>{'Go To HomeScreen'}</Text>
                    </TouchableOpacity>

            
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    containerone: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containertwo: {
        flexDirection: 'row',
        marginVertical: 20
    },
    headerstyle: {
        fontSize: 25,
        color: '#0b51d2',
    },
    containerthree: {
        flex: 3,
        paddingHorizontal: 5
    },
    inputstyle: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#0b51d2',
        paddingHorizontal: 25,
        backgroundColor: '#0b51d2',
        shadowColor: '#0b51d2',
        shadowRadius: 10,
        shadowOpacity: 0.5,
        elevation: 20,
        shadowOffset: {
            height: 5,
            width: 1
        },
    },
    editstyle: {
        color: '#fcb502',
        textAlign: 'right',
        fontSize: 15,
        marginLeft: 15,
    },
    editstyleone: {
        alignItems: 'flex-start',
        flex: 1,
        justifyContent: 'center',
    },
    button: {
        borderWidth: 0,
        padding: 8,
        backgroundColor: '#fcb502',
        borderRadius: 10,
        color: 'white',
        //paddingHorizontal: 40,
        marginHorizontal: 45,
        marginTop: 10,
        alignItems: 'center'
    },
    imagetextstyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imagetextstyletwo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonone: {
        borderWidth: 0,
        padding: 8,
        backgroundColor: '#ff5a01',
        borderRadius: 10,
        color: 'white',
        //paddingHorizontal: 40,
        marginHorizontal: 45,
        marginTop: 10,
        alignItems: 'center'
    },
    imagetextstylethree: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonthree: {
        borderWidth: 0,
        padding: 8,
        backgroundColor: '#fe352a',
        borderRadius: 10,
        color: 'white',
        //paddingHorizontal: 40,
        marginHorizontal: 45,
        marginTop: 10,
        alignItems: 'center'

    },
    imagetextstylefour: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonfour: {
        borderWidth: 0,
        padding: 8,
        backgroundColor: '#0b51d2',
        borderRadius: 10,
        //paddingHorizontal: 40,
        marginHorizontal: 45,
        marginTop: 10,
        alignItems: 'center'
    },
});
export default DemoLayoutScreen;