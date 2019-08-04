import React from 'react';
import {Actions} from 'react-native-router-flux';
import ModalDropdown from 'react-native-modal-dropdown';
import { StyleSheet, Alert, View, TextInput, SafeAreaView, Image, Text, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import action from '../actions';

class ListAnak extends React.Component {
  constructor(props){
    super(props);
    this.state={
        picked: 1,
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        total_price:''
    }
  }

  componentDidMount(){
    console.log('vv', this.props)
    if(this.props.data.response){
      this.setState({
        total_price: this.props.data.response.biaya_kos
      })
    }
  }

  componentWillReceiveProps(props){
    console.log('bayar', props)
    if(props.status == 1) {
      Alert.alert(
        '',
        'Pembayaran berhasil !',
        [
          {text: 'OK', onPress: () => Actions.pop()},
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        '',
        'Pembayaran untuk bulan ini sudah selesai !',
        [
          {text: 'OK', onPress: () => Actions.pop()},
        ],
        {cancelable: false},
      );
    }
  }

  render() {
    return (
      <View style={{flex:1}}>
      {/* <ScrollView style={{flex: 1}}> */}
        <View style={{width: '100%', height: 40, justifyContent: 'center', backgroundColor: 'white'}}>
          <Text style={{alignSelf: 'center', fontSize: 20, color: 'black', fontWeight: 'bold'}}>
            Srikandi
          </Text>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <View style={{marginTop: 8, width: 50, height: 10, backgroundColor: 'blue'}}/>
          <Text style={{width: 200, fontStyle: 'italic', fontWeight: 'bold', fontSize: 25, color: 'black', marginLeft: 20}}>
            Payment Form
          </Text>
        </View>
        <View style={{marginTop:'10%', borderColor:'#000', borderWidth:1, padding:10, width:'80%', alignSelf:'center', flexDirection:'column'}}>
          <View style={{ width:'100%', flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>Nama : </Text>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>{this.props.data.response.nama}</Text>
          </View>
          <View style={{ width:'100%', marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>Asal Kos : </Text>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>{this.props.data.response.nama_kos}</Text>
          </View>
          <View style={{ width:'100%', marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>Biaya Per Bulan: </Text>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>{this.props.data.response.biaya_kos}</Text>
          </View>
          <View style={{ width:'100%', marginTop:10, flexDirection:'row', justifyContent:'center'}}>
            <Text style={{ fontSize: 16, fontWeight:'400', alignSelf: 'center'}}>Pembayaran Bulan Ke: </Text>
            <ModalDropdown style={{marginLeft: 10, width: 100, height: 35, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'#e0e0e0'}}
              animated
              dropdownStyle={{width:'30%', alignSelf:'center'}}
                  options={this.state.data}
                  onSelect={(idx, value) => this._totalBayar(value)}/>
            {/* <Text style={{marginLeft: 20, alignSelf:'center', fontSize:15}}>
              bulan
            </Text> */}
          </View>
          <View style={{ width:'100%', marginTop:10, flexDirection:'row', justifyContent:'space-between'}}>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>Total Biaya : </Text>
            <Text style={{ fontSize: 16, fontWeight:'400'}}>{this.state.total_price}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={()=> this._bayar()} style={{marginTop: 25, marginBottom:10, width: '60%', height: 50, alignSelf: 'center', backgroundColor: 'blue', justifyContent: 'center'}}>
          <Text style={{color: 'white', alignSelf: 'center', fontSize: 20}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  _totalBayar = (value) => {
    this.setState({
      picked: value,
      // total_price: value * parseInt(this.props.data.response.biaya_kos)
    })
  }

  _bayar = () => {
    const params = {
      id_user: this.props.data.response.id_user,
      bulan : this.state.picked,
      tahun: '2019'
    }
    this.props.dispatch(action.payment.anakBayar(params))
  }
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.isLoggedIn,
  data: state.data,
  anak_bayar: state.anak_bayar
})

export default connect(mapStateToProps)(ListAnak);
