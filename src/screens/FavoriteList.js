import React, { Component } from 'react'
import {
    View,
    StyleSheet,
    FlatList,
    Text
} from 'react-native';
// import AppImages from '../image'
//import FavoriteItemFun from '../components/FavoriteItemFun';
import FavoriteItemClass from '../components/FavoriteItemClass';


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
    {
        id: 5,
        name: 'Stomatology',
        color: '#fcb502',
        desc: 'Loren Ipsum dolor sit amet,',
        descone: 'vis  no  erroribus hendrerit,',
        icon: require('../images/tooth_logo.jpg'),
    },
    {
        id: 6,
        name: 'Opthamology',
        color: '#ff5a01',
        desc: 'Loren Ipsum dolor sit amet,',
        descone: 'vis  no  erroribus  hendrerit,',
        icon: require('../images/ophthalmology.png'),
    },
    {
        id: 7,
        name: 'Neurology',
        color: '#fe352a',
        desc: 'Loren Ipsum dolor sit amet,',
        descone: 'vis  no  erroribus hendrerit,',
        icon: require('../images/neurology.jpg'),
    },
    {
        id: 8,
        name: 'Surgery',
        color: '#0b51d2',
        desc: 'Loren Ipsum dolor sit amet,',
        descone: 'vis  no  erroribus hendrerit,',
        icon: require('../images/surgery.png'),
    },

]
export default class FavoriteList extends Component {
    constructor(props) {
        super(props);
        this.state = { data: DATA }
    }
    renderClassItem = ({ item }) => <FavoriteItemClass item={item} data={this.state.data} onUpdateList={(data) => this.setState({ data })} />
    renderFuncItem = ({ item }) => <FavoriteItemFun {...item} onDelete={() => this.onDelete(item)} />
    onDelete = ({ id }) => {
        let { data } = this.state;
        data = data.filter(({ id: itemId }) => itemId != id)
        this.setState({ data })
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this.renderClassItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#044' }
})