import React, { Component } from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Image,
    TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback
} from 'react-native';

// export default function App() {
class ImageTouchableScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerone}>
                    <TouchableHighlight underlayColor='#ccc' style={{ width: 160, backgroundColor: 'pink' }}
                        onPress={() => alert('Hey you pressed on text')}>
                        <Image
                            style={styles.imagestyle}
                            source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819__340.jpg' }}
                        >
                        </Image>
                    </TouchableHighlight>

                    <Text style={styles.textstyle}
                        onPress={() => alert('You Pressed Here.')}>Press here</Text>
                </View>

                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <TouchableOpacity style={{
                         backgroundColor: 'yellow',
                        padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
                    }} onPress={() => this.props.navigation.goBack()}>
                        <Text>{'Go To HomeScreen'}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',

    },
    imagestyle: {
        height: 150,
        width: 150,
        borderWidth: 1,
        borderRadius: 75,

    },
    textstyle: {
        fontSize: 25,
        color: '#000',
        marginTop: 15
    },
    containerone: {
        backgroundColor: 'yellow'
    }
});
export default ImageTouchableScreen;