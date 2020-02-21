import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet, TouchableOpacity, TextInput, Alert, FlatList, ActivityIndicator, Image
} from "react-native";
import { connect } from 'react-redux';
import { incremntCounter, decremntCounter, addCounter, subCounter, } from './src/actions';
import { assignvalue } from './src/actions/textinputaction';
import withCounter from "./src/hoc/withCounter";
import withAsync from './src/hoc/withAsync';
import withloader from './src/hoc/withloader';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
      //valueone: '',
    }
  }
  async operations() {
    console.log('operation')
    this.props.getTodos()
  }

  render() {
    const { data1, todoData: { todos }, loaderindicator, loaderindicatorfalse,
      counterIncrementAction, counterDecrementAction, getTodos, loadValue } = this.props;
    console.log('loader', loadValue)

    return (

      <View style={styles.container}>

        {/*       
        <Text style={{ fontWeight: 'bold', fontSize: 25 }}>Counter</Text>
        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <View>
            <TouchableOpacity
              style={{
                height: 60, width: 70, backgroundColor: '#34FF7F', borderRadius: 5
              }}
              onPress={() => this.props.incremntCounter()}>
              <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
            <Text>{this.props.counter}</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                height: 60, width: 70, backgroundColor: '#34FF7F', borderRadius: 5,
              }}
              onPress={() => this.props.decremntCounter()}>
              <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View >
          <TextInput style={{ borderBottomColor: '#4dd', borderBottomWidth: 1, }} placeholder='cal'
            onChangeText={(text) => {
              this.setState({
                val: Number(text)
                //valueone: text
              })
            }}>
          </TextInput>
          <View style={{ flexDirection: 'row', marginTop: 25 }}>
            <View>
              <TouchableOpacity
                style={{
                  height: 60, width: 70, backgroundColor: '#34FF7F', borderRadius: 5
                }}
                onPress={() => counterIncrementAction(this.state.val)}>
                <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>++</Text>
              </TouchableOpacity>
            </View>


            <View style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>
              <Text>{data1}</Text>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  height: 60, width: 70, backgroundColor: '#34FF7F', borderRadius: 5,
                }}
                onPress={() => counterDecrementAction(this.state.val)}>
                <Text style={{ fontSize: 40, color: 'white', textAlign: 'center' }}>--</Text>
              </TouchableOpacity>
            </View>



            <Text>{(todos.length > 0) ? todos[3].title : 'testing'}</Text>

          </View>
        </View>
*/}


        <View style={{ marginBottom: 40 }}>
          <TouchableOpacity
            style={{
              padding: 5, backgroundColor: '#34FF7F', borderRadius: 5
            }}
            onPress={() => this.props.loaderAction()}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>true</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5, backgroundColor: '#34FF7F', borderRadius: 5
            }}
            onPress={() => this.props.loaderfalseAction()}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>false</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 5, backgroundColor: '#34FF7F', borderRadius: 5
            }}
            onPress={() => this.operations()}>
            <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>press me</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: '#34FF7F', borderRadius: 5
            }}
            onPress={() => this.operations()}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
              {loadValue && <ActivityIndicator size='small' color="#0000ff" />}
              {/* {loadValue && <ActivityIndicator size='small' color="#0000ff" />} */}
              {/* <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                Fetch API Data</Text> */}
              {!loadValue ?
                <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                  Fetch API Data</Text>
                : <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Loading...Please Wait!!</Text>}
            </View>

          </TouchableOpacity>
        </View>

        <View>
          <Text>{(todos.length > 0) ? todos[2].title : 'testing'}</Text>
        </View>
        <View>

          <FlatList
            onEndReachedThreshold={0.8}
            onEndReached={() => {
              { loadValue && <ActivityIndicator size='large' color="red" /> }
            }}
            data={todos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.apistyle}>
                <Text style={styles.apidatastyle}>{"ID : " + item.id}</Text>
                <Text style={styles.apidatastyle}>{"UserID : " + item.url}</Text>
                <Text style={styles.apidatastyle}>{"Title : " + item.title}</Text>
                <Image
                  source={{
                    uri: item.thumbnailUrl,
                  }}
                  style={{ width: 350, height: 50 }} />
              </View>
            )}
          />
        </View>

      </View>
    );
  }
}

// maptoreducer = (data) => {
//   return { counter: data };
// }
// maptoreducer1 = (data1) => {
//   console.log('data1 value' + data1);
//   return { cal: data1 }

// }

// maptoreduceinput = (dataone) => {
//   console.log('dataone value' + dataone);
//   return { val1: dataone }
// }

// export default connect(
//   maptoreducer1, {
//   incremntCounter,
//   decremntCounter,
//   addCounter,
//   subCounter,
// })(App);


// export default connect(
//   maptoreduceinput, {
//   assignvalue
// })(App);


export default withloader(withCounter(withAsync(App)));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  apistyle: {
    backgroundColor: '#4dd',
    borderRadius: 5,
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  apidatastyle: {
    fontSize: 20,
    color: '#fff'
  }
});