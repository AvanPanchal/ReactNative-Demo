import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
//import WeekdayItem from './WeekdayItem'

class ListScreen extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const days = [
            {
                name: 'Sunday',
                color: '#f00'
            },
            {
                name: 'Monday',
                color: 'green'
            },
            {
                name: 'Tuesday',
                color: 'blue'
            },
            {
                name: 'Wednesday',
                color: 'yellow'
            },
            {
                name: 'Thursday',
                color: 'pink'
            },
            {
                name: 'Friday',
                color: 'grey'
            },
            {
                name: 'Saturday',
                color: 'cyan'
            },

        ];
        return (
            <View>
                <FlatList
                    data={days}
                    //numColumns={3}
                    //renderItem={({item})=> <WeekdayItem {...item}/>}
                    renderItem={({ item }) =>
                        <TouchableHighlight onPress={() => alert(`'${item.name}' Pressed`)}>
                            <Text style={{
                                backgroundColor: 'red', padding: 10, borderBottomColor: '#ccc',
                                borderBottomWidth: 2, flexDirection: 'row', textAlign: 'center', color: '#fff'
                            }}>{item.name}</Text>
                        </TouchableHighlight>
                    }
                />
                
                    <TouchableOpacity style={{marginTop: 70,alignItems:'center',backgroundColor:'yellow',
                    padding:25,borderRadius:25, marginHorizontal:30}} onPress={() => this.props.navigation.goBack()}>
                        <Text>{'Go To HomeScreen'}</Text>
                    </TouchableOpacity>
                
            </View>
        );
    }

}
export default ListScreen;