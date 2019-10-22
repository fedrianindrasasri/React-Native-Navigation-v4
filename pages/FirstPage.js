import React, { Component } from 'react';
import { StyleSheet, View, Button} from 'react-native';

export default class FirstPage extends Component {
  static navigationOptions = {
    title: 'First Page',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
 
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button title='Go next'
        onPress={() =>navigate('SecondPage')}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});