import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }
    onPressAsync = async () => {
        let data = {
            name: 'abc',
            city: 'xyz'
        }
        await AsyncStorage.setItem('MyKey', JSON.stringify(data));
        let asyncData = await AsyncStorage.getItem('MyKey');
        console.log('Data', asyncData);
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={styles.dashboardstyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Dashboard')}>
                        <Text style={{ color: '#fff' }}>{'Go To Dashboard'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.listscreenstyle}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ListScreen')}>
                        <Text style={{ color: '#fff' }}>{'Go To ListScreen'}</Text>
                    </TouchableOpacity>



                    {/* <Text style={{ marginTop: 70 }}>{'Home Screen'}</Text> */}
                </View>
                <View style={styles.imagetouchablescreenstyle}>
                    <TouchableOpacity style={styles.imagestyle}
                        onPress={() => this.props.navigation.navigate('ImageTouchableScreen')}>
                        <Text>{'Go To ImageTouchableScreen'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spacedemoscreenstyle}>
                    <TouchableOpacity style={styles.spacedescreenstyle}
                        onPress={() => this.props.navigation.navigate('SpaceDemoScreen')}>
                        <Text style={{ color: '#fff' }}>{'Go To SpaceDemoScreen'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.spacescreenstyle}>
                    <TouchableOpacity style={styles.spcreenstyle}
                        onPress={() => this.props.navigation.navigate('SpaceScreen')}>
                        <Text>{'Go To SpaceScreen'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.validationdemoscreenstyle}>
                    <TouchableOpacity style={styles.spcreenstyle}
                        onPress={() => this.props.navigation.navigate('ValidationDemoScreen')}>
                        <Text>{'Go To ValidationDemoScreen'}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.demolayoutscreenstyle}>
                    <TouchableOpacity style={styles.spcreenstyle}
                        onPress={() => this.props.navigation.navigate('DemoLayoutScreen')}>
                        <Text style={{ color: '#fff' }}>{'Go To DemoLayoutScreen'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.dashboardstyle} onPress={() =>
                        this.props.navigation.navigate('PanResponder')}>
                        <Text style={styles.textStyle}>{'PanResponder'}</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.listscreenstyle} onPress={() =>
                        this.onPressAsync()}>
                        <Text style={styles.textStyle}>{'AsyncStorageDemo'}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.imagetouchablescreenstyle} onPress={() =>
                        this.props.navigation.navigate('ListLayoutScreen')}>
                        <Text style={{color:'#000'}}>{'ListLayoutScreen'}</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity style={styles.spacedemoscreenstyle} onPress={() =>
                        this.props.navigation.navigate('ChessBoard')}>
                        <Text style={styles.textStyle}>{'ChessBoard'}</Text>
                    </TouchableOpacity>
                </View>

                {/* <View>
                    <TouchableOpacity style={styles.dashboardstyle} onPress={() =>
                        this.props.navigation.navigate('ChessBoard')}>
                        <Text style={styles.textStyle}>{'ChessBoard'}</Text>
                    </TouchableOpacity>
                </View> */}
               

                </ScrollView>
            </View>


        )
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ccc',
        flex: 1,
    },
    textStyle:{
        color:'#fff',
    },
    dashboardstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    listscreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    imagetouchablescreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    spacedemoscreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    spacescreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'skyblue',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    validationdemoscreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: 'pink',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    },
    demolayoutscreenstyle: {
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#FF5733',
        padding: 15,
        borderRadius: 25,
        marginHorizontal: 30
    }

});