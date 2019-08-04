import React from 'react';
import {Actions} from 'react-native-router-flux';
import ImageSlider from 'react-native-image-slider';
import { StyleSheet, Dimensions, View, TextInput, SafeAreaView, Image, Text, ImageBackground, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
// import { Button, Header, Left, Body, Right, Icon} from 'native-base'

export default class ListPengelola extends React.Component {
  render() {
    return (
    // <View style={{width: '100%', height:'100%'}}>
    //     <ScrollView style={{flex: 1}}>
            <ImageBackground source={require('../assets/bg.jpg')} style={{flex:1, resizeMode: 'containt'}}>
                <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
                    <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
                        Srikandi
                    </Text>
                </View>
                <TouchableOpacity onPress={()=>Actions.daftaranak()}>
                <Image style={{marginTop: 20, width: "60%", height: undefined, aspectRatio: 600/591, alignSelf: 'center'}}
                    source={require('../assets/anak.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>Actions.formpengelola()}>
                <Image style={{marginTop: 20, width: "60%", height: undefined, aspectRatio: 600/571, alignSelf: 'center'}} source={require('../assets/kos.png')}/>
                </TouchableOpacity>
            </ImageBackground>
    )
  }
};
