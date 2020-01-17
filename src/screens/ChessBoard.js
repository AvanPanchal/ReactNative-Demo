import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, } from 'react-native';

const { width, height } = Dimensions.get('window')
const CHESSBOARD = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0]
]
export default class ChessBoard extends Component {
    onChessBoard() {
        let rows = []
        for (let i = 1; i <= 8; i++) {
            let mColor = i % 2 != 0 ? 0 : 1
            let columns = [];
            for (let j = 1; j <= 8; j++) {
                if (j > 1) {
                    mColor = Math.abs(mColor-1)
                }
                columns.push(<View style={[styles.boxStyle, { backgroundColor: mColor ? 'white' : 'black' }]}></View>)

            }
            rows.push(columns)
        }
        return rows

    }

    render() {
        return (

            <View style={styles.mainContainer}>
                {this.onChessBoard()} 
                {/* {CHESSBOARD.map((item) => {
                    return <View style={{ flexDirection: 'row' }}>
                        {item.map((subItem) => <View style={[styles.boxStyle, { backgroundColor: subItem ? 'white' : 'black' }]} />)}
                    </View>
                })} */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'red'
    },

    boxStyle: {
        height: width / 8,
        width: width / 8,
    }
})