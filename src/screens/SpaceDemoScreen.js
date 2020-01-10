import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from 'react-native';
 class SpaceDemoScreen extends Component {
    constructor(props){
        super(props)
    }


  render() {

    return (
      <View style={styles.container}>
       <ScrollView style={styles.ScrollView}>
        <View style={styles.viewone}>
          <View style={{ backgroundColor: 'red', width: 70, height: 100 }}>
            <Text style={styles.textnumber}>1</Text>
          </View>
          <View style={{ backgroundColor: 'green', width: 70, height: 100 }}>
            <Text style={styles.textnumber}>2</Text>
          </View>
          <View style={{ backgroundColor: 'blue', width: 70, height: 100 }}>
            <Text style={styles.textnumber}>3</Text>
          </View>
        </View>
        <View style={styles.viewtwo}>
          <View style={{ backgroundColor: '#ccc', flex: 1, height: 100 }}>
          </View>
        </View>
        <View style={styles.viewthree}>
          <View style={{ backgroundColor: 'pink', flex: 1, height: 100 }}>
          <Text style={styles.textnumber}>4</Text>
          </View>
        </View>
        <View style={styles.viewfour}>
          <View style={{ backgroundColor: '#ccc', flex: 1, height: 100 }}>
          </View>
        </View>
        <View style={styles.viewfive}>
          <View style={{ backgroundColor: 'blue', width: 70, height: 100 }}>
            <Text style={styles.textnumber}>5</Text>
          </View>
          <View style={{ backgroundColor: 'green', width: 70, height: 100  }}>
            <Text style={styles.textnumber}>6</Text>
          </View>
          <View style={{ backgroundColor: 'red', width: 70, height: 100 }}>
            <Text style={styles.textnumber}>7</Text>
          </View>
        </View>
        
        <View style={styles.viewsix}>
          <View style={{ backgroundColor: 'blue',flex:1, height: 100 }}>
            <Text style={styles.textnumber}>5</Text>
          </View>
          <View style={{ backgroundColor: 'green',flex:1, height: 100  }}>
            <Text style={styles.textnumber}>6</Text>
          </View>
          <View style={{ backgroundColor: 'red', flex:1, height: 100 }}>
            <Text style={styles.textnumber}>7</Text>
          </View>
        </View>

        <View style={styles.viewseven}>
          <View style={{ backgroundColor: 'blue',flex:1, height: 100 }}>
            <Text style={styles.textnumber}>5</Text>
          </View>
          <View style={{ backgroundColor: 'green',flex:1, height: 100  }}>
            <Text style={styles.textnumber}>6</Text>
          </View>
          <View style={{ backgroundColor: 'red', flex:1, height: 100 }}>
            <Text style={styles.textnumber}>7</Text>
          </View>
        </View>
        <TouchableOpacity style={{
                    alignItems: 'center', backgroundColor: 'yellow',
                    padding: 25, borderRadius: 25, marginHorizontal: 30, marginTop: 25
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
    marginTop: 5,
    flex: 1,
    backgroundColor: '#ccc',
  },
  viewone: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  viewtwo: {
    flexDirection: 'row',
  },
  viewthree: {
    flexDirection: 'row',
  },
  viewfour:{
    flexDirection:'row'
  },
  viewfive:{
    flexDirection:'row',
    justifyContent:'space-around'
  },
  viewsix:{
    flex:1
  },
  viewseven:{
    flex:1
  },
  textnumber: {
    fontSize: 25,
    color:'white',
    textAlign: 'center',
    marginTop:28
  }
});
export default SpaceDemoScreen;