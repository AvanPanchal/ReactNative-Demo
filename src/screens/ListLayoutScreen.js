import React, { Component } from 'react';
import {
    View, FlatList, Text, TouchableOpacity,
    StyleSheet, TouchableHighlight, Alert, TextInput, Image
} from 'react-native';
//import WeekdayItem from './WeekdayItem'

class ListLayoutScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const DATA = [
            {
                id: 1,
                name: 'Stomatology',
                color: '#fcb502',
                desc: 'Loren Ipsum dolor sit amet,',
                descone: 'vis  no  erroribus hendrerit,',
                icon: require('../images/tooth_logo.jpg'),
            },
            {
                id: 2,
                name: 'Opthamology',
                color: '#ff5a01',
                desc: 'Loren Ipsum dolor sit amet,',
                descone: 'vis  no  erroribus  hendrerit,',
                icon: require('../images/ophthalmology.png'),
            },
            {
                id: 3,
                name: 'Neurology',
                color: '#fe352a',
                desc: 'Loren Ipsum dolor sit amet,',
                descone: 'vis  no  erroribus hendrerit,',
                icon: require('../images/neurology.jpg'),
            },
            {
                id: 4,
                name: 'Surgery',
                color: '#0b51d2',
                desc: 'Loren Ipsum dolor sit amet,',
                descone: 'vis  no  erroribus hendrerit,',
                icon: require('../images/surgery.png'),
            },
        ];
        return (
            <View style={styles.container}>
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
                                    <Image source={require('../images/arrow_down.png')}
                                        style={{ height: 18, width: 18, marginLeft: 10 }}></Image>
                                </View>
                            </View>

                        </TouchableHighlight>
                    </View>
                </View>
                <View >

                    <FlatList
                        data={DATA}
                        numColumns={1}
                        renderItem={({ item }) =>
                            <View style={{
                                flex: 1, flexDirection: 'row', paddingVertical: 15,
                                marginHorizontal: 29
                            }}>
                                <Image source={item.icon} style={styles.imagesstyle}></Image>
                                <View style={{ flex: 1, alignItems: 'center', paddingLeft: 35 }}>
                                    <Text style={{ color: item.color, fontSize: 20, fontWeight: 'bold' }}>
                                        {item.name}</Text>
                                    <Text style={{ color: '#0b51d2', fontWeight: 'bold' }}>{item.desc}</Text>
                                    <Text style={{ color: '#0b51d2', fontWeight: 'bold' }}>{item.descone}</Text>
                                    <View>
                                        <TouchableHighlight onPress={() => alert('View Touched.')}
                                            underlayColor='none'
                                            style={[styles.buttonone, { backgroundColor: item.color }]}
                                        >
                                            <Text style={{ color: '#fff' }}>
                                                View
                                            </Text>
                                        </TouchableHighlight>
                                    </View>
                                </View>

                            </View>
                        }

                    />
                    {/* <TouchableOpacity style={{
                    marginTop: 70, alignItems: 'center', backgroundColor: 'yellow',
                    padding: 25, borderRadius: 25, marginHorizontal: 30
                }} onPress={() => this.props.navigation.goBack()}>
                    <Text>{'Go To HomeScreen'}</Text>
                </TouchableOpacity> */}

                </View>
            </View >
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
    },
    imagetextstyle: {
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'space-around'
    },
    imagesstyle: {
        width: 100,
        height: 100,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#000'
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
        flex: 2,
        paddingHorizontal: 25
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
    buttonone: {
        borderWidth: 0,
        padding: 8,
        //backgroundColor: '#ff5a01',
        //backgroundColor: item.color,
        borderRadius: 10,
        color: 'white',
        paddingHorizontal: 30,
        marginHorizontal: 25,
        marginTop: 10,
        alignItems: 'center'
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

});
export default ListLayoutScreen;