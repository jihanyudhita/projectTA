import React from 'react';
import {Actions} from 'react-native-router-flux';
import { StyleSheet,  View, TextInput, SafeAreaView, Image, 
         ImageBackground, Text, KeyboardAvoidingView, TouchableOpacity,
         ToastAndroid } from 'react-native';
import { Button, Header, Left, Body, Right, Icon} from 'native-base'
import {connect} from 'react-redux';
import action from '../actions';


 class Login extends React.Component {
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

  componentDidMount(){
    console.log('awal', this.props)
    // this.props.dispatch({ type: 'RESET_LOGIN' });
  } // komponen yang akan dijalankan pertama kali


  login=()=>{
    const params = {
      email: this.state.username,
      password: this.state.password
    };
    this.props.dispatch(action.auth.Login(params))
  }

  componentWillReceiveProps(props){
    console.log('next',props)
    if(props.data.response.status == 1){
      ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
      Actions.home()
    } else {
      ToastAndroid.show('Login failed, please try again', ToastAndroid.SHORT);
    }
  } // komponen yang akan berjalan saat menerima props baru

  render() {
    console.log('aa',this.props)
    return (
      <SafeAreaView style={{flex:1}}>
      <ImageBackground source={require('../assets/mountain.jpg')} style={{width: '100%', height: '100%', resizeMode: 'containt'}}> 
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <Image style={{marginTop: 20, width: "60%", height: undefined, aspectRatio: 698/368, alignSelf: 'center'}} source={require('../assets/logo.png')}/>
      <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
        <View style={{marginLeft: 40}}>
          <Icon name='user-circle-o' type='FontAwesome' style={{color: 'white'}}/>
        </View>
        <TextInput style={{width: '80%', borderBottomColor: 'white', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2, 98, 148)' }}
          placeholder= 'Username' placeholderTextColor={'white'} placeholderStyle={{ marginHorizontal: 20}}
          onChangeText={(val)=> this.setState({ username: val})}
        >
        </TextInput>
      </View>
      <View style={{marginTop: 20, flexDirection: "row", marginHorizontal: 20, alignItems:'center', justifyContent: 'center'}}>
        <Icon name='lock' type='FontAwesome' style={{marginLeft: 40, color: 'white'}}/>
        <TextInput style={{width: '80%', borderBottomColor: 'white', borderBottomWidth: 1, backgroundColor: 'transparent', marginLeft: 10, marginRight: 10, height: 50, color: 'rgb(2, 98, 148)'}}
          secureTextEntry={true}
          placeholder= 'Password' placeholderTextColor={'white'}
          onChangeText={(val)=> this.setState({ password: val})}
        >
        </TextInput>
      </View>
      <Button onPress={()=> this.login()} style={{width: '60%', height: 50, borderRadius: 50, justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: 20, backgroundColor: 'rgb(2, 98, 148)'}}>
        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Log In</Text>
      </Button>
      <Text onPress={()=>Actions.register()} style={{marginTop: 20, fontSize: 15, color:'white', alignSelf:'center'}}>Create Account</Text>
      </KeyboardAvoidingView>
      </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  text: {
    alignSelf: 'center',
    color: 'pink',
    fontSize: 30
  } 
});

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  data: state.data
})

export default connect(mapStateToProps)(Login);