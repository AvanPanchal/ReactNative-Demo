import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
class SpaceScreen extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <View style={styles.container}>
                <View style={styles.viewone}>
                    <View style={{ backgroundColor: 'red', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>1</Text>
                    </View>
                    <View style={{ backgroundColor: 'green', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>2</Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>3</Text>
                    </View>
                </View>
                <View style={styles.viewtwo}>
                    <View style={{ backgroundColor: 'yellow', height: 100, flex: 1 }}>
                        <Text style={styles.textnumber}>4</Text>
                    </View>
                    <View style={{ backgroundColor: 'green', height: 100, flex: 1 }}>
                        <Text style={styles.textnumber}>5</Text>
                    </View>
                </View>
                <View style={styles.viewthree}>
                    <View style={{ backgroundColor: 'pink', height: 100, flex: 1 }}>
                        <Text style={styles.textnumber}>6</Text>
                    </View>
                </View>
                <View style={styles.viewfour}>
                    <View style={{ backgroundColor: 'red', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>7</Text>
                    </View>
                    <View style={{ backgroundColor: 'green', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>8</Text>
                    </View>
                    <View style={{ backgroundColor: 'blue', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>9</Text>
                    </View>
                    <View style={{ backgroundColor: 'yellow', flex: 1, height: 100 }}>
                        <Text style={styles.textnumber}>10</Text>
                    </View>
                </View>
                <View style={styles.viewfive}>
                    <View style={{ backgroundColor: 'pink', height: 100, flex: 1 }}>
                        <Text style={styles.textnumber}>11</Text>
                    </View>
                </View>

                <TouchableOpacity style={{
                    alignItems: 'center', backgroundColor: 'yellow',
                    padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
                }} onPress={() => this.props.navigation.goBack()}>
                    <Text>{'Go To HomeScreen'}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 150,
        flex: 1,
        backgroundColor: 'white',
    },
    viewone: {
        flexDirection: 'row'
    },
    viewtwo: {
        flexDirection: 'row'
    },
    viewthree: {
        flexDirection: 'row'
    },
    viewfour: {
        flexDirection: 'row'
    },
    viewfive: {
        flexDirection: 'row'
    },
    textnumber: {
        fontSize: 25,
        flex: 1,
        textAlign: 'center',
        marginTop: 25
    }
});
export default SpaceScreen;