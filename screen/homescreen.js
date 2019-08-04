import React from 'react';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
import {connect} from 'react-redux';
import action from '../actions'
import ImageSlider from 'react-native-image-slider';
import { StyleSheet, Dimensions,  Button, View, TextInput, SafeAreaView, 
         Image, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modalbox';
// import { Button, Header, Left, Body, Right, Icon} from 'native-base'

class HomeScreen extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      modal: false,
      infokos: ''
    }
  }  

  componentWillMount(){
    this.props.dispatch({ type: 'RESET' });
    this.props.dispatch({type:'RESET_DATA_ANAK'})
  }

  componentDidMount(){    
    this.props.dispatch(action.home.getBanner())  
  }

  componentWillReceiveProps(props){
    console.log('home', props)
    if(props.baner.response){
      this.setState({ 
        data: props.baner.response
      })
    }
  }

  render() {
    console.log('state', this.state)
    let dimensions = Dimensions.get("window");
    let ImageHeight = Math.round((dimensions.width * 9) / 16);
    let ImageWidth = dimensions.width;
    return (
      <View style={{ flex:1 }}>
        <Modal backButtonClose={true} isOpen={this.state.modal} onClosed={()=>this.setState({modal:false})} position='center' 
                    style={{width: '80%', height: 300, justifyContent: 'center'}}>
          <View style={{marginTop: 15, width: '80%', alignSelf: 'center', justifyContent:'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight:"bold", marginBottom: 20, alignSelf: 'center'}}>{this.state.infokos ? this.state.infokos.nama : ''}</Text>
            <Text style={{fontSize: 15, textAlign: 'center'}}>{this.state.infokos ? this.state.infokos.alamat : ''}</Text>
            <Text style={{fontSize: 15, alignSelf: 'center'}}>HP. {this.state.infokos ? this.state.infokos.kontak : ''}</Text>
            <Text style={{fontSize: 15, alignSelf: 'center'}}>Biaya {this.state.infokos ? this.state.infokos.biaya : ''}/bulan</Text>
            <Text style={{fontSize: 15, alignSelf: 'center', marginTop: 20, fontWeight:'bold'}}>Fasilitas:</Text>
            <Text style={{fontSize: 15, alignSelf: 'center'}}>Kamar Mandi Luar, Kasur, Lemari, Wifi</Text>
          </View>
          {/* <View style={{marginTop: 15, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 15}}>Alamat</Text>
            <Text style={{fontSize: 15}}>: Pasar Minggu Jakarta</Text>
          </View>
          <View style={{marginTop: 15, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 15}}>Kontak</Text>
            <Text style={{fontSize: 15}}>: 087890065645</Text>
          </View>
          <View style={{marginTop: 15, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 15}}>Biaya Sewa</Text>
            <Text style={{fontSize: 15}}>: Rp 600.000</Text>
          </View>
          <View style={{marginTop: 15, width: '80%', alignSelf: 'center', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={{fontSize: 15}}>Fasilitas</Text>
            <Text style={{fontSize: 15}}>: Kamar Mandi Luar, Kasur, Lemari, Wifi</Text>
          </View> */}
        </Modal>
        <ScrollView>
          <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
            <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              Srikandi
            </Text>
          </View>
          <View style={{width:'100%', height:200}}>
            <Swiper autoplay loop showsButtons={false}>
              {
                this.state.data.map((item)=> {
                  return(
                    <Image
                      style={{height: 200, width: '100%', resizeMode:'cover'}}
                      source={{uri: item.banner_url}}
                    />
                  )
                })
              }              
            </Swiper>
          </View>
          <View style={{marginTop: 20, flexDirection: 'row'}}>
            <View style={{marginTop: 8, width: 50, height: 10, backgroundColor: 'blue'}}/>
            <Text style={{width: 200, fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, color: 'black', marginLeft: 20, marginBottom: 10}}>
              Our Family
            </Text>
          </View>
          <ScrollView horizontal={true} style={{backgroundColor: 'rgb(2,98,148)'}}>
            <TouchableOpacity onPress={()=>this.setState({
              modal:true,
              infokos: {
                nama: 'Kost Srikandi 1',
                alamat: 'Jl xyz no.02 RT 5/6 Pasar Minggu, Jakarta Selatan',
                kontak: '087866588900',
                biaya: 'Rp 600.000',
                fasilitas: 'Kamar Mandi Luar, Kasur, Lemari, Wi-Fi'
              }
            })} 
              style={{ borderRadius:5, width:250, height:300, marginHorizontal:10}}>
              <Image
                style={{width:'100%', height:300, resizeMode:'contain'}}
                source={require('../assets/srikandi1.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({
              modal:true,
              infokos: {
                nama: 'Kost Srikandi 2',
                alamat: 'Perum. Gadingsari II no.02 Banyuraden, Gamping Sleman Yogyakarta',
                kontak: '087866588901',
                biaya: 'Rp 450.000',
                fasilitas: 'Kamar Mandi Luar, Kasur, Lemari, Wi-Fi'
              }
            })}
            style={{ borderRadius:5, width:250, height:300, marginHorizontal:10}}>
              <Image
                style={{width:'100%', height:300, resizeMode:'contain'}}
                source={require('../assets/srikandi2.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({
              modal:true,
              infokos: {
                nama: 'Kost Srikandi 3',
                alamat: 'Jl Demangan Baru RT 2/1 Demangan, Depok Sleman Yogyakarta',
                kontak: '087866588903',
                biaya: 'Rp 450.000',
                fasilitas: 'Kamar Mandi Luar, Kasur, Lemari, Wi-Fi'
              }
            })}
            style={{ borderRadius:5, width:250, height:300, marginHorizontal:10}}>
              <Image
                style={{width:'100%', height:300, resizeMode:'contain'}}
                source={require('../assets/srikandi3.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({
              modal:true,
              infokos: {
                nama: 'Kost Srikandi 4',
                alamat: 'Jl abc no 5 Tembalang, Semarang',
                kontak: '087866588567',
                biaya: 'Rp 600.000',
                fasilitas: 'Kamar Mandi Luar, Kasur, Lemari, Wi-Fi'
              }
            })}
            style={{ borderRadius:5, width:250, height:300, marginHorizontal:10}}>
              <Image
                style={{width:'100%', height:300, resizeMode:'contain'}}
                source={require('../assets/srikandi4.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.setState({
              modal:true,
              infokos: {
                nama: 'Kost Srikandi 5',
                alamat: 'Jl kura kura no 4 Depok, Jawa Barat',
                kontak: '0878665784900',
                biaya: 'Rp 600.000',
                fasilitas: 'Kamar Mandi Luar, Kasur, Lemari, Wi-Fi'
              }
            })}
            style={{ borderRadius:5, width:250, height:300, marginHorizontal:10}}>
              <Image
                style={{width:'100%', height:300, resizeMode:'contain'}}
                source={require('../assets/srikandi5.png')}
              />
            </TouchableOpacity>
          </ScrollView>
        </ScrollView>
      </View>
    )
  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  data: state.data,
  baner: state.baner
})

export default connect(mapStateToProps)(HomeScreen);
