import React from 'react';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import { ImageBackground, StyleSheet,  Button, View, TextInput, SafeAreaView, Image, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

export default class Welcome extends React.Component {
  render(){
    return (
      <Swiper showsButtons={false}>
        <View style={{flex: 1}}>
          <ImageBackground source={require('../assets/semarang.jpg')} style={{width: '100%', height: '100%', resizeMode: 'containt'}}>
          <Text onPress={()=>Actions.login()}
            style={{
              marginTop: 20,
              fontSize: 15,
              color:'white',
              alignSelf:'center'}}>
            skip</Text>
          </ImageBackground>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground source={require('../assets/jakarta.jpg')} style={{width: '100%', height: '100%', resizeMode: 'containt'}}>
          <Text onPress={()=>Actions.login()}
            style={{
              marginTop: 20,
              fontSize: 15,
              color:'white',
              alignSelf:'center'}}>
            skip</Text>
          </ImageBackground>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground source={require('../assets/jogja.jpg')} style={{width: '100%', height: '100%', resizeMode: 'containt'}}>
          <Text onPress={()=>Actions.login()}
            style={{
              marginTop: 20,
              fontSize: 15,
              color:'white',
              alignSelf:'center'}}>
            skip</Text>
          </ImageBackground>
        </View>
        <View style={{flex: 1}}>
          <ImageBackground source={require('../assets/depok.jpg')} style={{width: '100%', height: '100%', resizeMode: 'containt'}}>
          <Text onPress={()=>Actions.login()}
            style={{
              marginTop: 20,
              fontSize: 15,
              color:'white',
              alignSelf:'center'}}>
            skip</Text>
          </ImageBackground>
        </View>
      </Swiper>
    );
  }
}