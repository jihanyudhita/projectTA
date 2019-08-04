import React from 'react';
import { StyleSheet,  View, TextInput, SafeAreaView, Image, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Button, Header, Left, Body, Right, Icon} from 'native-base'


export default class SecondScreen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username: '',
      password: '',
      showpassword: true
    }
  }

  static navigationOptions = {
    header : null
  } // untuk menghilangkan header


  login=()=>{
    const user = this.state.username
    const pass = this.state.password
    if (user==='admin'&&pass==='12345'){
      this.props.navigation.navigate('ThirdScreen',{username: user})
    } else {
      alert('Opps.. You got some problem here!')
    }
  }

  render() {
    console.log('aa',this.props)
    return (
      <SafeAreaView style={{flex:1}}>
      <Header>
        <Left style={{backgroundColor: 'red'}}></Left>
        <Body style={{backgroundColor: 'blue'}}></Body>
        <Right style={{backgroundColor: 'green'}}></Right>
      </Header>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      {/* <View style={{flex:0.3}}>
        <Image style={{marginTop: 20, width: "60%", height: undefined, aspectRatio: 698/368, alignSelf: 'center'}} source={require('../assets/logo.png')}/>
      </View> */}
      <Image style={{marginTop: 20, width: "60%", height: undefined, aspectRatio: 698/368, alignSelf: 'center'}} source={require('../assets/logo.png')}/>
      <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
        <Icon name='user' type='FontAwesome' style={{color: 'rgb(255,51,102)'}}/>
        <TextInput style={{width: '80%', borderRadius: 35, backgroundColor: 'rgb(30,28,39)', marginLeft: 10, marginRight: 10, height: 50, color: 'white'}}
          placeholder= 'Username' placeholderStyle={{ marginHorizontal: 20 }}
          onChangeText={(val)=> this.setState({ username: val})}
        >
        </TextInput>
      </View>
      <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
        <Icon name='lock' type='FontAwesome' style={{color: 'rgb(255,51,102)'}}/>
        <TextInput style={{width: '80%', borderRadius: 35, backgroundColor: 'rgb(30,28,39)', marginLeft: 10, marginRight: 10, height: 50, color: 'white'}}
          placeholder= 'Password'
          onChangeText={(val)=> this.setState({ password: val})}
        >
        </TextInput>
      </View>
      <Button onPress={()=> this.login()} style={{width: '60%', height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(255,51,102)'}}>
        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Log In</Text>
      </Button>
      <Text style={{marginTop: 20, fontSize: 15, color:'white', alignSelf:'center'}}>Sign Up</Text>
      </KeyboardAvoidingView>
                   
      {/* <View style={styles.container}>
        <TextInput
        placeholder='username'
        style={{
          width: 200,
          height: 40, 
          borderColor: 'gray', 
          borderWidth: 1}}
        onChangeText={(username) => this.setState({username})}
      />

      <TextInput
      placeholder='password'
      secureTextEntry={this.state.showpassword}
        style={{
          width: 200,
          height: 40, 
          borderColor: 'gray', 
          marginTop: 15,
          borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
      />
        <Button
        style={{
          width: 75,
          height: 30,
          backgroundColor: '#E91E63',
          marginTop: 15,
          alignSelf: "center"
        }}
          onPress={()=>this.login()}
          
        > 
          <Text
          style={{
            alignSelf: "center"
          }}>Move</Text>
        </Button>

      </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(36,32,69)',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text: {
    alignSelf: 'center',
    color: 'pink',
    fontSize: 30
  } 
});
