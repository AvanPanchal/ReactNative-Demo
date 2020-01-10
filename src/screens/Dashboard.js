import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


class Dashboard extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: 'green', alignItems: 'center', 
            justifyContent: 'center'}}>
               <TouchableOpacity style={{
                    alignItems: 'center', backgroundColor: 'yellow',
                    padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
                }} onPress={() => this.props.navigation.goBack()}>
                    <Text>{'Go To HomeScreen'}</Text>
                </TouchableOpacity>
                <Text style={{marginTop: 70,color:'#fff'}}>{'Dashboard Screen'}</Text>
            </View>
        )
    }
}

export default Dashboard;