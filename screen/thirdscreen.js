import React from 'react';
import { StyleSheet,  Button, View, TextInput, SafeAreaView, Image, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
// import { Button, Header, Left, Body, Right, Icon} from 'native-base'

export default class ThirdScreen extends React.Component {
   render() {
    console.log('gg',this.props)
    return (
      <View style={styles.container}>
        <Button
        title='List Menu'
          onPress={()=>this.props.navigation.navigate('Login')}
        > 
          
        </Button>
        <Text style={styles.text}>{this.props.navigation.state.params.username}</Text>
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
  text: {
    alignSelf: 'center',
    color: 'pink',
    fontSize: 30
  } 
});
